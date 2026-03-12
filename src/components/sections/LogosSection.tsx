import { useTranslations } from 'next-intl';

const COMPANIES = [
  { name: 'Nexo Digital', font: 'font-space font-black', style: { letterSpacing: '-0.04em' } },
  { name: 'Vettor Studio', font: 'font-inter font-light', style: { letterSpacing: '0.12em', textTransform: 'uppercase' as const } },
  { name: 'DataBridge', font: 'font-space font-bold', style: { letterSpacing: '0.01em' } },
  { name: 'Compasso', font: 'font-inter font-black italic', style: {} },
  { name: 'Forma Agency', font: 'font-space font-semibold', style: { letterSpacing: '0.06em' } },
  { name: 'Pixels & Co', font: 'font-inter font-bold', style: { letterSpacing: '-0.02em' } },
];

export default function LogosSection() {
  const t = useTranslations('logos');

  return (
    <section className="py-14 bg-[#0a0a0a] border-y-[3px] border-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-5">
        <p className="font-space font-bold text-sm text-[#888] text-center uppercase tracking-widest mb-8">
          {t('title')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {COMPANIES.map((c) => (
            <span
              key={c.name}
              className={`${c.font} text-xl md:text-2xl text-[#444] hover:text-[#fafafa] transition-colors duration-200 cursor-default select-none`}
              style={c.style}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
