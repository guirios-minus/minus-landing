import { useTranslations } from 'next-intl';
import { ArrowRight, Zap } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.minuspm.com';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="pt-28 pb-20 px-5 bg-[#fafafa] relative overflow-hidden noise-bg">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-[-80px] w-64 h-64 rounded-full bg-[#667eea] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-60px] w-48 h-48 rounded-full bg-[#FFD60A] opacity-20 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFD60A] brutal-border brutal-shadow-sm px-4 py-2 mb-8">
          <Zap size={14} className="text-[#0a0a0a]" />
          <span className="font-space font-bold text-sm text-[#0a0a0a]">{t('badge')}</span>
        </div>

        {/* Headline */}
        <h1 className="font-space font-black leading-[1.05] tracking-tight text-[#0a0a0a] mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl">{t('title1')}</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-[#667eea] relative">
            {t('title2')}
            {/* Underline scribble */}
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 9C60 3 140 1 220 5C300 9 360 3 398 6" stroke="#FFD60A" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl">{t('title3')}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-lg md:text-xl text-[#444] max-w-2xl leading-relaxed mb-10">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center justify-center gap-2 bg-[#FFD60A] brutal-border brutal-shadow brutal-hover font-space font-black text-lg px-8 py-4 text-[#0a0a0a]"
          >
            {t('cta_primary')}
            <ArrowRight size={18} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-white brutal-border brutal-shadow brutal-hover font-space font-bold text-lg px-8 py-4 text-[#0a0a0a]"
          >
            {t('cta_secondary')}
          </a>
        </div>

        {/* Note */}
        <p className="font-inter text-sm text-[#888]">{t('note')}</p>

        {/* Hero visual — fake app screenshot card */}
        <div className="mt-16 brutal-border brutal-shadow-lg bg-white overflow-hidden">
          {/* Fake browser bar */}
          <div className="bg-[#0a0a0a] px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-4 bg-[#1a1a1a] rounded px-3 py-1 flex-1 max-w-xs">
              <span className="text-[#666] text-xs font-inter">app.minuspm.com/projects</span>
            </div>
          </div>
          {/* Fake Kanban preview */}
          <div className="p-4 md:p-8 bg-gradient-to-br from-[#f5f6ff] to-[#fafafa] min-h-[260px] flex gap-4 overflow-hidden">
            {[
              { label: 'A Fazer', color: '#667eea', count: 3 },
              { label: 'Em Progresso', color: '#f59e0b', count: 2 },
              { label: 'Concluído', color: '#10b981', count: 5 },
            ].map((col) => (
              <div key={col.label} className="flex-1 min-w-0">
                <div
                  className="text-xs font-space font-black uppercase tracking-widest mb-3 px-2 py-1 brutal-border brutal-shadow-sm inline-block"
                  style={{ backgroundColor: col.color + '20', borderColor: col.color, color: col.color }}
                >
                  {col.label} · {col.count}
                </div>
                <div className="flex flex-col gap-2">
                  {Array.from({ length: col.count }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white brutal-border brutal-shadow-sm p-2.5 rounded-none"
                    >
                      <div className="h-2.5 bg-[#e0e0e0] rounded-full mb-1.5" style={{ width: `${60 + (i * 17 % 35)}%` }} />
                      <div className="h-2 bg-[#f0f0f0] rounded-full" style={{ width: `${40 + (i * 13 % 40)}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
