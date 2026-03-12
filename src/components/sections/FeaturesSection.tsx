import { useTranslations } from 'next-intl';
import { Sparkles, Kanban, Users, Zap, BarChart2, Briefcase } from 'lucide-react';

const ICONS = [Sparkles, Kanban, Users, Zap, BarChart2, Briefcase];
const ACCENT_COLORS = ['#667eea', '#764ba2', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
const ITEM_KEYS = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'] as const;

export default function FeaturesSection() {
  const t = useTranslations('features');

  return (
    <section id="features" className="py-24 px-5 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-[#667eea] brutal-border brutal-shadow-sm px-4 py-1.5 mb-4">
            <span className="font-space font-bold text-sm text-white uppercase tracking-widest">{t('badge')}</span>
          </div>
          <h2 className="font-space font-black text-4xl md:text-6xl text-[#0a0a0a] leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="font-inter text-lg text-[#555] max-w-xl">{t('subtitle')}</p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-[3px] border-[#0a0a0a]">
          {ITEM_KEYS.map((key, idx) => {
            const Icon = ICONS[idx];
            const accent = ACCENT_COLORS[idx];
            const isLast = idx === ITEM_KEYS.length - 1;
            const isSecondLast = idx === ITEM_KEYS.length - 2;

            return (
              <div
                key={key}
                className={`p-7 border-[#0a0a0a] hover:bg-[#f5f6ff] transition-colors group ${
                  // Right border for all except last in row
                  idx % 3 !== 2 ? 'md:border-r-[3px]' : ''
                } ${
                  // Bottom border for first row
                  idx < 3 ? 'border-b-[3px]' : ''
                }`}
              >
                <div
                  className="w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: accent + '20', borderColor: accent }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <h3 className="font-space font-black text-xl text-[#0a0a0a] mb-3 leading-tight">
                  {t(`${key}_title`)}
                </h3>
                <p className="font-inter text-[#666] leading-relaxed text-sm">
                  {t(`${key}_desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
