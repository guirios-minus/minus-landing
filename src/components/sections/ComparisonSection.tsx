import { useTranslations } from 'next-intl';

const ROW_KEYS = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6'] as const;

// minus=yes, comp1 (ClickUp/Opção C), comp2 (Asana/Opção A), comp3 (Monday/Opção M)
const TABLE_DATA: Array<{
  minus: 'yes';
  comp1: 'yes' | 'no' | 'paid';
  comp2: 'yes' | 'no' | 'paid';
  comp3: 'yes' | 'no' | 'paid';
}> = [
  { minus: 'yes', comp1: 'no',   comp2: 'no',  comp3: 'no'  },
  { minus: 'yes', comp1: 'paid', comp2: 'no',  comp3: 'no'  },
  { minus: 'yes', comp1: 'no',   comp2: 'no',  comp3: 'no'  },
  { minus: 'yes', comp1: 'yes',  comp2: 'yes', comp3: 'yes' },
  { minus: 'yes', comp1: 'no',   comp2: 'no',  comp3: 'no'  },
  { minus: 'yes', comp1: 'no',   comp2: 'yes', comp3: 'no'  },
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
      <span className="inline-flex items-center justify-center w-8 h-8 bg-[#f0f0f0] brutal-border brutal-shadow-sm text-[#bbb] font-black text-sm">
        ✗
      </span>
    );
  }
  return (
    <span className="font-space font-bold text-xs text-[#667eea] border-[2px] border-[#667eea] px-2 py-1 whitespace-nowrap">
      {t('paid')}
    </span>
  );
}

export default function ComparisonSection() {
  const t = useTranslations('comparison');

  return (
    <section className="py-24 px-5 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#667eea] brutal-border brutal-shadow-sm px-4 py-1.5 mb-4">
            <span className="font-space font-bold text-sm text-white uppercase tracking-widest">{t('badge')}</span>
          </div>
          <h2 className="font-space font-black text-4xl md:text-6xl text-[#0a0a0a] leading-tight mb-2">
            {t('title')}
          </h2>
          <h2 className="font-space font-black text-4xl md:text-6xl text-[#667eea] leading-tight mb-6">
            {t('title2')}
          </h2>
          <p className="font-inter text-[#555] text-lg max-w-xl">{t('subtitle')}</p>
        </div>

        {/* Table */}
        <div className="border-[3px] border-[#0a0a0a] overflow-x-auto">
          {/* Header row */}
          <div className="grid grid-cols-5 border-b-[3px] border-[#0a0a0a] min-w-[640px]">
            <div className="p-4 border-r-[3px] border-[#0a0a0a]">
              <span className="font-space font-bold text-xs text-[#888] uppercase tracking-widest">
                {t('col_feature')}
              </span>
            </div>
            <div className="p-4 border-r-[3px] border-[#0a0a0a] bg-[#667eea] text-center">
              <span className="font-space font-black text-white text-sm">{t('col_minus')}</span>
            </div>
            <div className="p-4 border-r-[3px] border-[#0a0a0a] text-center bg-[#f5f5f5]">
              <span className="font-space font-bold text-[#888] text-xs leading-tight">{t('col_comp1')}</span>
            </div>
            <div className="p-4 border-r-[3px] border-[#0a0a0a] text-center bg-[#f5f5f5]">
              <span className="font-space font-bold text-[#888] text-xs leading-tight">{t('col_comp2')}</span>
            </div>
            <div className="p-4 text-center bg-[#f5f5f5]">
              <span className="font-space font-bold text-[#888] text-xs leading-tight">{t('col_comp3')}</span>
            </div>
          </div>

          {/* Data rows */}
          {ROW_KEYS.map((key, idx) => {
            const row = TABLE_DATA[idx];
            const isLast = idx === ROW_KEYS.length - 1;
            return (
              <div
                key={key}
                className={`grid grid-cols-5 min-w-[640px] ${!isLast ? 'border-b-[3px] border-[#e5e5e5]' : ''} hover:bg-[#f0f0ff] transition-colors`}
              >
                <div className="p-4 border-r-[3px] border-[#e5e5e5]">
                  <span className="font-space font-semibold text-sm text-[#333]">{t(key)}</span>
                </div>
                <div className="p-4 border-r-[3px] border-[#e5e5e5] bg-[#667eea]/10 flex items-center justify-center">
                  <Cell value={row.minus} t={t} />
                </div>
                <div className="p-4 border-r-[3px] border-[#e5e5e5] flex items-center justify-center">
                  <Cell value={row.comp1} t={t} />
                </div>
                <div className="p-4 border-r-[3px] border-[#e5e5e5] flex items-center justify-center">
                  <Cell value={row.comp2} t={t} />
                </div>
                <div className="p-4 flex items-center justify-center">
                  <Cell value={row.comp3} t={t} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
