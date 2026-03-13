'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
}

const EMPTY: FormData = { name: '', company: '', phone: '', email: '' };

export default function ContactSection() {
  const t = useTranslations('contact');
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? t('error'));
        setStatus('error');
      } else {
        setStatus('success');
        setForm(EMPTY);
      }
    } catch {
      setErrorMsg(t('error'));
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-5 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — text */}
          <div>
            <div className="inline-block bg-[#667eea] brutal-border brutal-shadow-sm px-4 py-1.5 mb-4">
              <span className="font-space font-bold text-sm text-white uppercase tracking-widest">
                {t('badge')}
              </span>
            </div>
            <h2 className="font-space font-black text-4xl md:text-5xl text-[#0a0a0a] leading-tight mb-4">
              {t('title')}
            </h2>
            <p className="font-inter text-[#555] text-lg leading-relaxed mb-8">
              {t('subtitle')}
            </p>

            {/* Value bullets */}
            <ul className="flex flex-col gap-4">
              {(['bullet1', 'bullet2', 'bullet3'] as const).map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="w-5 h-5 mt-0.5 bg-[#667eea] brutal-border flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-xs font-black">✓</span>
                  </span>
                  <span className="font-inter text-sm text-[#444] leading-snug">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form card */}
          <div className="bg-white brutal-border brutal-shadow">

            {/* Card header */}
            <div className="bg-[#0a0a0a] p-5 border-b-[3px] border-[#0a0a0a]">
              <p className="font-space font-black text-white text-base">
                {t('form_title')}
              </p>
              <p className="font-inter text-[#888] text-xs mt-0.5">
                {t('required_note')}
              </p>
            </div>

            {/* Success state */}
            {status === 'success' ? (
              <div className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-[#10b981] brutal-border brutal-shadow flex items-center justify-center">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <h3 className="font-space font-black text-xl text-[#0a0a0a]">
                  {t('success_title')}
                </h3>
                <p className="font-inter text-[#555] text-sm">{t('success_desc')}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 font-space font-bold text-sm text-[#667eea] hover:underline"
                >
                  {t('send_another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-5">

                {/* Name */}
                <div>
                  <label className="block font-space font-bold text-xs text-[#0a0a0a] uppercase tracking-wider mb-1.5">
                    {t('name_label')}
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    placeholder={t('name_placeholder')}
                    required
                    className="w-full brutal-border px-3 py-2.5 font-inter text-sm text-[#0a0a0a] bg-white placeholder:text-[#bbb] focus:outline-none focus:shadow-[0_0_0_3px_#667eea]"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block font-space font-bold text-xs text-[#0a0a0a] uppercase tracking-wider mb-1.5">
                    {t('company_label')}
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={set('company')}
                    placeholder={t('company_placeholder')}
                    className="w-full brutal-border px-3 py-2.5 font-inter text-sm text-[#0a0a0a] bg-white placeholder:text-[#bbb] focus:outline-none focus:shadow-[0_0_0_3px_#667eea]"
                  />
                </div>

                {/* Phone + Email side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-space font-bold text-xs text-[#0a0a0a] uppercase tracking-wider mb-1.5">
                      {t('phone_label')}
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder={t('phone_placeholder')}
                      className="w-full brutal-border px-3 py-2.5 font-inter text-sm text-[#0a0a0a] bg-white placeholder:text-[#bbb] focus:outline-none focus:shadow-[0_0_0_3px_#667eea]"
                    />
                  </div>
                  <div>
                    <label className="block font-space font-bold text-xs text-[#0a0a0a] uppercase tracking-wider mb-1.5">
                      {t('email_label')}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder={t('email_placeholder')}
                      required
                      className="w-full brutal-border px-3 py-2.5 font-inter text-sm text-[#0a0a0a] bg-white placeholder:text-[#bbb] focus:outline-none focus:shadow-[0_0_0_3px_#667eea]"
                    />
                  </div>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-start gap-2 bg-red-50 brutal-border border-red-400 p-3">
                    <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="font-inter text-sm text-red-600">{errorMsg || t('error')}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-[#667eea] text-white font-space font-black text-sm py-3.5 brutal-border brutal-shadow brutal-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  {status === 'loading' ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {status === 'loading' ? t('submitting') : t('submit')}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
