"use client";

import { useLang } from "@/components/providers";
import { Chip, SectionHeader, colorCls } from "@/components/ui";
import { cn } from "@/lib/cn";

export function Quests() {
  const { t } = useLang();
  const { main, side } = t.quests;

  return (
    <section id="projects" className="scroll-mt-20 border-t-4 border-ink bg-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          kicker={t.quests.kicker}
          title={t.quests.title}
          subtitle={t.quests.subtitle}
          icon="📜"
          color="red"
        />

        {/* MAIN QUEST */}
        <article className="relative border-4 border-ink bg-surface p-5 shadow-pixel-lg sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="border-2 border-ink bg-pgreen px-2 py-1 font-pixel text-[9px] shadow-pixel-sm">
              ★ {t.quests.mainTag}
            </span>
            <span className="font-pixel text-[9px] text-muted">[{t.quests.active}]</span>
          </div>

          <div className="mt-4 flex flex-col gap-5 sm:flex-row">
            <div className="grid h-20 w-20 shrink-0 place-items-center border-4 border-ink bg-pblue text-4xl shadow-pixel-sm">
              💬
            </div>
            <div>
              <h3 className="font-pixel text-sm sm:text-lg">{main.title}</h3>
              <p className="mt-1 font-silk text-sm font-bold text-pblue">{main.role}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                {main.desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {main.tech.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 border-t-2 border-dashed border-ink pt-3 font-pixel text-[9px] text-muted">
            🏆 {main.reward}
          </p>
        </article>

        {/* SIDE QUESTS */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {side.map((quest) => (
            <article
              key={quest.title}
              className="flex flex-col border-4 border-ink bg-surface p-5 shadow-pixel transition-all hover:-translate-y-1 hover:shadow-pixel-lg"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "border-2 border-ink px-2 py-1 font-pixel text-[9px] shadow-pixel-sm",
                    colorCls(quest.color)
                  )}
                >
                  {t.quests.sideTag}
                </span>
                <span className="font-pixel text-[9px] text-muted">[{t.quests.completed}]</span>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <span
                  className={cn(
                    "grid h-14 w-14 shrink-0 place-items-center border-2 border-ink text-2xl",
                    colorCls(quest.color)
                  )}
                  aria-hidden="true"
                >
                  {quest.emoji}
                </span>
                <div>
                  <h3 className="font-silk text-base font-bold leading-snug">{quest.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{quest.desc}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {quest.tech.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
