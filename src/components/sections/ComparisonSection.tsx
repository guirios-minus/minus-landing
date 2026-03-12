import { useTranslations } from 'next-intl';

const ROW_KEYS = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6'] as const;

// minus=yes, clickup, asana (yes/no/paid)
const TABLE_DATA: Array<{ minus: 'yes'; clickup: 'yes' | 'no' | 'paid'; asana: 'yes' | 'no' | 'paid' }> = [
  { minus: 'yes', clickup: 'no',   asana: 'no' },
  { minus: 'yes', clickup: 'paid', asana: 'no' },
  { minus: 'yes', clickup: 'no',   asana: 'no' },
  { minus: 'yes', clickup: 'yes',  asana: 'yes' },
  { minus: 'yes', clickup: 'no',   asana: 'no' },
  { minus: 'yes', clickup: 'no',   asana: 'yes' },
];

function Cell({ value, t }: { value: 'yes' | 'no' | 'paid'; t: ReturnType<typeof useTranslations<'comparison'>> }) {
  if (value === 'yes') {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 bg-[#10b981] brutal-border brutal-shadow-sm text-white font-black text-sm">
        ✓
      </span>
    );
  }
  if (value === 'no') {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 bg-[#fee2e2] brutal-border brutal-shadow-sm text-[#dc2626] font-black text-sm">
        ✗
      </span>
    );
  }
  return (
    <span className="font-space font-bold text-xs text-[#f59e0b] border-[2px] border-[#f59e0b] px-2 py-1 whitespace-nowrap">
      {t('paid')}
    </span>
  );
}

export default function ComparisonSection() {
  const t = useTranslations('comparison');

  return (
    <section className="py-24 px-5 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#FFD60A] brutal-border brutal-shadow-sm px-4 py-1.5 mb-4">
            <span className="font-space font-bold text-sm text-[#0a0a0a] uppercase tracking-widest">{t('badge')}</span>
          </div>
          <h2 className="font-space font-black text-4xl md:text-6xl text-[#fafafa] leading-tight mb-2">
            {t('title')}
          </h2>
          <h2 className="font-space font-black text-4xl md:text-6xl text-[#FFD60A] leading-tight mb-6">
            {t('title2')}
          </h2>
          <p className="font-inter text-[#888] text-lg max-w-xl">{t('subtitle')}</p>
        </div>

        {/* Table */}
        <div className="border-[3px] border-[#fafafa] overflow-x-auto">
          {/* Header row */}
          <div className="grid grid-cols-4 border-b-[3px] border-[#fafafa]">
            <div className="p-4 border-r-[3px] border-[#fafafa]">
              <span className="font-space font-bold text-xs text-[#666] uppercase tracking-widest">
                {t('col_feature')}
              </span>
            </div>
            <div className="p-4 border-r-[3px] border-[#fafafa] bg-[#667eea] text-center">
              <span className="font-space font-black text-white text-sm">{t('col_minus')}</span>
            </div>
            <div className="p-4 border-r-[3px] border-[#fafafa] text-center">
              <span className="font-space font-bold text-[#666] text-sm">{t('col_clickup')}</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-space font-bold text-[#666] text-sm">{t('col_asana')}</span>
            </div>
          </div>

          {/* Data rows */}
          {ROW_KEYS.map((key, idx) => {
            const row = TABLE_DATA[idx];
            const isLast = idx === ROW_KEYS.length - 1;
            return (
              <div
                key={key}
                className={`grid grid-cols-4 ${!isLast ? 'border-b-[3px] border-[#1a1a1a]' : ''} hover:bg-[#111] transition-colors`}
              >
                <div className="p-4 border-r-[3px] border-[#1a1a1a]">
                  <span className="font-space font-semibold text-sm text-[#ccc]">{t(key)}</span>
                </div>
                <div className="p-4 border-r-[3px] border-[#1a1a1a] bg-[#667eea]/10 flex items-center justify-center">
                  <Cell value={row.minus} t={t} />
                </div>
                <div className="p-4 border-r-[3px] border-[#1a1a1a] flex items-center justify-center">
                  <Cell value={row.clickup} t={t} />
                </div>
                <div className="p-4 flex items-center justify-center">
                  <Cell value={row.asana} t={t} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
