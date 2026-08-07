"use client";

import { useLang } from "@/components/providers";
import { Chip, SectionHeader, StatBar } from "@/components/ui";

const TRAIT_COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#fb923c"];

export function Stats() {
  const { t } = useLang();

  return (
    <section id="skills" className="scroll-mt-20 border-t-4 border-ink bg-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          kicker={t.stats.kicker}
          title={t.stats.title}
          subtitle={t.stats.subtitle}
          icon="🛠️"
          color="green"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* EQUIPMENT LOG */}
          <div className="border-4 border-ink bg-surface shadow-pixel">
            <div className="flex items-center justify-between border-b-4 border-ink bg-pblue px-4 py-3">
              <h3 className="font-pixel text-[11px]">
                🧰 {t.stats.equipmentTitle}
              </h3>
              <span className="font-pixel text-[8px] text-ink/70">[LOG]</span>
            </div>
            <div className="space-y-5 p-4 sm:p-5">
              {t.stats.categories.map((cat) => (
                <div key={cat.name}>
                  <p className="mb-2 font-pixel text-[9px] text-muted">▸ {cat.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CHARACTER TRAITS */}
          <div className="border-4 border-ink bg-surface shadow-pixel">
            <div className="flex items-center justify-between border-b-4 border-ink bg-pgreen px-4 py-3">
              <h3 className="font-pixel text-[11px]">💪 {t.stats.traitsTitle}</h3>
              <span className="font-pixel text-[8px] text-ink/70">{t.stats.traitsSub}</span>
            </div>
            <div className="divide-y-2 divide-dashed divide-ink p-4 sm:p-5">
              {t.stats.traits.map((trait, i) => (
                <div key={trait.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-silk text-sm font-bold sm:text-base">{trait.name}</p>
                    <p className="font-pixel text-[9px] text-muted">{trait.stat}%</p>
                  </div>
                  <p className="mt-0.5 text-xs text-muted sm:text-sm">{trait.desc}</p>
                  <div className="mt-2">
                    <StatBar value={trait.stat} color={TRAIT_COLORS[i % TRAIT_COLORS.length]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACTIVE BUFFS strip */}
        <div className="mt-6 flex flex-col gap-3 border-4 border-ink bg-pyellow px-4 py-3 shadow-pixel sm:flex-row sm:items-center sm:justify-between">
          <p className="font-pixel text-[10px]">{t.stats.buffsTitle}</p>
          <ul className="flex flex-wrap gap-2">
            {t.stats.buffs.map((buff) => (
              <li
                key={buff}
                className="border-2 border-ink bg-bg px-2 py-1 font-silk text-xs font-bold shadow-pixel-sm"
              >
                ✦ {buff}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
