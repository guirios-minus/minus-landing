import { useTranslations } from 'next-intl';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.minuspm.com';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t-[3px] border-[#0a0a0a] py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#667eea] border-[3px] border-[#fafafa] flex items-center justify-center">
                <span className="text-white font-space font-black text-sm">M</span>
              </div>
              <span className="font-space font-black text-xl text-[#fafafa]">
                minus<span className="text-[#667eea]">pm</span>
              </span>
            </div>
            <p className="font-inter text-sm text-[#666] leading-relaxed max-w-[200px]">
              {t('tagline')}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-space font-black text-sm uppercase tracking-widest text-[#888] mb-4">
              {t('col_product')}
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: t('link_features'), href: '#features' },
                { label: t('link_pricing'), href: '#pricing' },
                { label: t('link_login'), href: `${APP_URL}/login` },
                { label: t('link_register'), href: `${APP_URL}/register` },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-[#666] hover:text-[#667eea] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-space font-black text-sm uppercase tracking-widest text-[#888] mb-4">
              {t('col_legal')}
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: t('link_privacy'), href: '/privacy' },
                { label: t('link_terms'), href: '/terms' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-[#666] hover:text-[#667eea] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-[2px] border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-[#555]">
            © {year} Minus PM. {t('rights')}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-inter text-xs text-[#555]">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
