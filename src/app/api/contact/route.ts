import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─────────────────────────────────────────────────────────────────
// Environment variables (set in .env.local):
//   RESEND_API_KEY  — your Resend API key (required for sending)
//   CONTACT_EMAIL   — where form submissions go (default: hello@minuspm.com)
//   FROM_EMAIL      — sender address (requires verified domain in Resend)
//                     Use "onboarding@resend.dev" for testing before
//                     domain is verified. After verification: "noreply@minuspm.com"
// ─────────────────────────────────────────────────────────────────

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'hello@minuspm.com';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const { name, email, company, phone } = body as Record<string, string>;

  // Required field validation
  if (!name?.trim()) {
    return NextResponse.json({ error: 'Nome é obrigatório.' }, { status: 400 });
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 });
  }

  // If no API key yet, log and return success (useful during development)
  if (!process.env.RESEND_API_KEY) {
    console.info('[contact] No RESEND_API_KEY — skipping send. Payload:', { name, email, company, phone });
    return NextResponse.json({ ok: true });
  }

  const { error } = await resend.emails.send({
    from: `Minus PM <${FROM_EMAIL}>`,
    to: [CONTACT_EMAIL],
    replyTo: email,
    subject: `[Contato] ${name}${company ? ` — ${company}` : ''}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="border-bottom: 3px solid #667eea; padding-bottom: 8px;">
          Novo contato via landing page
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Nome</td>
              <td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">E-mail</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Empresa</td>
              <td style="padding: 8px 0;">${company || '—'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Telefone</td>
              <td style="padding: 8px 0;">${phone || '—'}</td></tr>
        </table>
        <p style="margin-top: 24px; color: #888; font-size: 12px;">
          Enviado via minuspm.com
        </p>
      </div>
    `,
  });

  if (error) {
    console.error('[contact] Resend error:', error);
    return NextResponse.json({ error: 'Erro ao enviar e-mail.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
