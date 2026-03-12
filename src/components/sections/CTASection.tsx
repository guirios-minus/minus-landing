import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.minuspm.com';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="py-24 px-5 bg-[#667eea] border-y-[3px] border-[#0a0a0a] relative overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-space font-black text-4xl md:text-6xl text-white leading-tight mb-6">
          {t('title')}
        </h2>
        <p className="font-inter text-lg text-white/80 mb-10 max-w-xl mx-auto">
          {t('subtitle')}
        </p>

        <a
          href={`${APP_URL}/register`}
          className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white brutal-border border-[#0a0a0a] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all font-space font-black text-xl px-10 py-5"
        >
          {t('button')}
          <ArrowRight size={20} />
        </a>

        <p className="mt-6 font-inter text-sm text-white/60">{t('note')}</p>
      </div>
    </section>
  );
}
