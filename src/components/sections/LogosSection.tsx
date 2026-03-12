import Image from 'next/image';
import { useTranslations } from 'next-intl';
import logos from '@/data/logos';

export default function LogosSection() {
  const t = useTranslations('logos');

  return (
    <section className="py-14 bg-[#0a0a0a] border-y-[3px] border-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-5">
        <p className="font-space font-bold text-sm text-[#888] text-center uppercase tracking-widest mb-8">
          {t('title')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((c) =>
            c.imagePath ? (
              <Image
                key={c.name}
                src={c.imagePath}
                alt={c.alt ?? c.name}
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-200 grayscale"
              />
            ) : (
              <span
                key={c.name}
                className={`${c.font ?? 'font-space font-bold'} text-xl md:text-2xl text-[#444] hover:text-[#fafafa] transition-colors duration-200 cursor-default select-none`}
                style={c.style}
              >
                {c.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
