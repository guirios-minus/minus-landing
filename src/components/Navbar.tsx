'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.minuspm.com';

const LOCALES = [
  { code: 'pt-BR', label: 'PT-BR' },
  { code: 'pt-PT', label: 'PT-PT' },
  { code: 'en',    label: 'EN' },
  { code: 'es',    label: 'ES' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa] border-b-[3px] border-[#0a0a0a]">
      <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#667eea] brutal-border brutal-shadow-sm flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <span className="text-white font-space font-black text-sm leading-none">M</span>
          </div>
          <span className="font-space font-black text-xl tracking-tight text-[#0a0a0a]">
            minus<span className="text-[#667eea]">pm</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-space font-semibold text-sm text-[#0a0a0a] hover:text-[#667eea] transition-colors">
            {t('features')}
          </a>
          <a href="#pricing" className="font-space font-semibold text-sm text-[#0a0a0a] hover:text-[#667eea] transition-colors">
            {t('pricing')}
          </a>
          <a href="#contact" className="font-space font-semibold text-sm text-[#0a0a0a] hover:text-[#667eea] transition-colors">
            {t('contact')}
          </a>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="font-space font-semibold text-sm text-[#0a0a0a] brutal-border brutal-shadow-sm px-3 py-1.5 brutal-hover bg-white"
            >
              {LOCALES.find(l => l.code === locale)?.label ?? locale} ▾
            </button>
            {langOpen && (
              <div className="absolute top-full mt-1 right-0 bg-white brutal-border brutal-shadow z-50 min-w-[80px]">
                {LOCALES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => switchLocale(l.code)}
                    className={`w-full text-left px-3 py-2 text-sm font-space font-semibold hover:bg-[#667eea] hover:text-white transition-colors ${
                      l.code === locale ? 'bg-[#667eea] text-white' : ''
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={`${APP_URL}/login`}
            className="font-space font-semibold text-sm text-[#0a0a0a] hover:text-[#667eea] transition-colors"
          >
            {t('login')}
          </a>

          <a
            href={`${APP_URL}/register`}
            className="bg-[#667eea] brutal-border brutal-shadow brutal-hover font-space font-black text-sm px-5 py-2.5 text-white inline-block"
          >
            {t('cta')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden brutal-border p-2 brutal-shadow-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t-[3px] border-[#0a0a0a] bg-[#fafafa] px-5 py-4 flex flex-col gap-4">
          <a href="#features" className="font-space font-semibold text-[#0a0a0a]" onClick={() => setMenuOpen(false)}>
            {t('features')}
          </a>
          <a href="#pricing" className="font-space font-semibold text-[#0a0a0a]" onClick={() => setMenuOpen(false)}>
            {t('pricing')}
          </a>
          <a href="#contact" className="font-space font-semibold text-[#0a0a0a]" onClick={() => setMenuOpen(false)}>
            {t('contact')}
          </a>
          <a href={`${APP_URL}/login`} className="font-space font-semibold text-[#0a0a0a]">
            {t('login')}
          </a>
          <a
            href={`${APP_URL}/register`}
            className="bg-[#667eea] brutal-border brutal-shadow font-space font-black text-center px-5 py-3 text-white"
          >
            {t('cta')}
          </a>
          <div className="flex gap-2 flex-wrap">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => { switchLocale(l.code); setMenuOpen(false); }}
                className={`font-space font-semibold text-sm px-3 py-1 brutal-border ${l.code === locale ? 'bg-[#667eea] text-white' : 'bg-white text-[#0a0a0a]'}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
