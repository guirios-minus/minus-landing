import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.minuspm.com';

type PlanKey = 'plan1' | 'plan2' | 'plan3' | 'plan4';
const PLANS: Array<{ key: PlanKey; popular: boolean; accentBg: string; accentText: string }> = [
  { key: 'plan1', popular: false, accentBg: '#f5f5f5',  accentText: '#666' },
  { key: 'plan2', popular: false, accentBg: '#f0f0ff',  accentText: '#667eea' },
  { key: 'plan3', popular: true,  accentBg: '#667eea',  accentText: '#fff' },
  { key: 'plan4', popular: false, accentBg: '#0a0a0a',  accentText: '#fafafa' },
];

const FEATURE_KEYS = ['f1', 'f2', 'f3', 'f4', 'f5'] as const;

export default function PricingSection() {
  const t = useTranslations('pricing');

  return (
    <section id="pricing" className="py-24 px-5 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#667eea] brutal-border brutal-shadow-sm px-4 py-1.5 mb-4">
            <span className="font-space font-bold text-sm text-white uppercase tracking-widest">{t('badge')}</span>
          </div>
          <h2 className="font-space font-black text-4xl md:text-6xl text-[#0a0a0a] leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="font-inter text-lg text-[#555]">{t('subtitle')}</p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-[3px] border-[#0a0a0a]">
          {PLANS.map(({ key, popular, accentBg, accentText }, idx) => {
            const name = t(`${key}_name`);
            const price = t(`${key}_price`);
            const cents = t.raw(`${key}_cents`) as string | undefined;
            const desc = t(`${key}_desc`);
            const currency = t('currency');
            const perMonth = t('per_month');
            const isEnterprise = key === 'plan4';
            const isNumericPrice = !isNaN(Number(price));

            return (
              <div
                key={key}
                className={`relative flex flex-col border-[#0a0a0a] ${idx < 3 ? 'border-r-[3px]' : ''}`}
                style={{ backgroundColor: popular ? accentBg : '#fafafa' }}
              >
                {/* Popular badge */}
                {popular && (
                  <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 -translate-y-full bg-[#667eea] brutal-border px-3 py-1">
                    <span className="font-space font-black text-xs uppercase tracking-widest text-white">{t('popular')}</span>
                  </div>
                )}

                {/* Plan header */}
                <div
                  className="p-6 border-b-[3px] border-[#0a0a0a]"
                  style={{ backgroundColor: accentBg, color: accentText }}
                >
                  <p className="font-space font-black text-sm uppercase tracking-widest mb-1" style={{ color: popular ? 'rgba(255,255,255,0.7)' : '#888' }}>
                    {name}
                  </p>
                  <div className="flex items-end gap-0.5 mb-1">
                    {isNumericPrice ? (
                      <>
                        <span className="font-space font-black text-4xl leading-none" style={{ color: accentText }}>
                          {currency}{price}
                        </span>
                        {cents && (
                          <span className="font-space font-black text-xl leading-none mb-1" style={{ color: accentText }}>
                            {cents}
                          </span>
                        )}
                        <span className="font-inter text-sm ml-1 mb-1 opacity-70" style={{ color: accentText }}>
                          {perMonth}
                        </span>
                      </>
                    ) : (
                      <span className="font-space font-black text-3xl leading-none" style={{ color: accentText }}>
                        {price}
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-sm opacity-70" style={{ color: accentText }}>
                    {desc}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6 flex flex-col flex-1 gap-3">
                  {FEATURE_KEYS.map((fk) => (
                    <div key={fk} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: popular ? '#fff' : '#667eea' }}
                      />
                      <span
                        className="font-inter text-sm leading-snug"
                        style={{ color: popular ? 'rgba(255,255,255,0.9)' : (isEnterprise ? '#ccc' : '#333') }}
                      >
                        {t(`${key}_${fk}`)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <a
                    href={isEnterprise ? 'mailto:hello@minuspm.com' : `${APP_URL}/register`}
                    className={`w-full block text-center font-space font-black text-sm py-3 brutal-border brutal-shadow brutal-hover transition-all ${
                      popular
                        ? 'bg-white text-[#667eea] border-white shadow-[4px_4px_0_0_rgba(255,255,255,0.3)]'
                        : isEnterprise
                        ? 'bg-[#667eea] text-white border-[#667eea]'
                        : 'bg-white text-[#0a0a0a]'
                    }`}
                  >
                    {isEnterprise ? t('cta_enterprise') : t('cta')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
