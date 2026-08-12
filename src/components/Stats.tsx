"use client";

import type { IconType } from "react-icons";
import {
  SiAdobeillustrator,
  SiCanva,
  SiDart,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGoogle,
  SiGooglesheets,
  SiJavascript,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaCut } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";
import { useLang } from "@/components/providers";
import { Chip, SectionHeader, StatBar } from "@/components/ui";

const TRAIT_COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#fb923c"];

/**
 * Simple Icons logo per tool. `SiCapcut` and `SiGooglegemini` were never
 * shipped in react-icons, so CapCut falls back to a scissors icon and Gemini
 * to the Material "auto awesome" sparkle (Gemini's actual logo shape).
 * Freebuf / Qwen / Codex have no brand icon, so they render text-only chips.
 */
const TOOL_ICONS: Record<string, IconType> = {
  "Microsoft Word": SiMicrosoftword,
  "Microsoft Excel": SiMicrosoftexcel,
  "Google Spreadsheet": SiGooglesheets,
  "Adobe Illustrator": SiAdobeillustrator,
  Canva: SiCanva,
  CapCut: FaCut,
  Flutter: SiFlutter,
  Dart: SiDart,
  PHP: SiPhp,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  MySQL: SiMysql,
  "Visual Studio Code": SiVisualstudiocode,
  Git: SiGit,
  GitHub: SiGithub,
  OpenAI: SiOpenai,
  Gemini: MdAutoAwesome,
  "Google Stitch": SiGoogle,
};

const FALLBACK_ICON = (
  <span className="text-[10px] leading-none text-muted" aria-hidden="true">
    ✦
  </span>
);

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
              <span className="font-pixel text-[8px] text-ink/70">[{t.stats.equipmentTag}]</span>
            </div>
            <div className="space-y-5 p-4 sm:p-5">
              {t.stats.categories.map((cat) => (
                <div key={cat.name}>
                  <p className="mb-2.5 font-body text-sm font-bold text-ink sm:text-base">
                    ▸ {cat.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => {
                      const Icon = TOOL_ICONS[item];
                      return (
                        <Chip key={item} icon={Icon ? <Icon /> : FALLBACK_ICON}>
                          {item}
                        </Chip>
                      );
                    })}
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
                    <p className="font-body text-base font-bold sm:text-lg">{trait.name}</p>
                    <p className="font-pixel text-[9px] text-muted">{trait.stat}%</p>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">{trait.desc}</p>
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
