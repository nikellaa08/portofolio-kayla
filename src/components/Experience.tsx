"use client";

import { useLang } from "@/components/providers";
import { SectionHeader, colorCls } from "@/components/ui";
import { cn } from "@/lib/cn";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="scroll-mt-20 border-t-4 border-ink bg-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          kicker={t.experience.kicker}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
          icon="⚔️"
          color="blue"
        />

        <div className="border-4 border-ink bg-surface p-5 shadow-pixel sm:p-8">
          <ol className="relative space-y-8">
            {/* vertical line */}
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-[3px] top-2 w-1 bg-ink"
            />

            {t.experience.entries.map((entry) => (
              <li key={entry.title} className="relative pl-8 sm:pl-10">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-4 left-0 h-4 w-4 border-[3px] border-ink",
                    colorCls(entry.color)
                  )}
                />

                <article className="border-4 border-ink bg-bg p-4 shadow-pixel-sm sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-pixel text-xs sm:text-sm">{entry.title}</h3>
                    <span
                      className={cn(
                        "border-2 border-ink px-2 py-1 font-pixel text-[8px] shadow-pixel-sm",
                        colorCls(entry.color)
                      )}
                    >
                      {entry.tag}
                    </span>
                  </div>

                  {entry.desc ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {entry.desc}
                    </p>
                  ) : null}

                  {/* sub-cards (projects & organizational activities) */}
                  {"subs" in entry && entry.subs ? (
                    <div className="mt-4 space-y-3">
                      {entry.subs.map((sub) => (
                        <div
                          key={sub.name}
                          className="border-2 border-ink bg-surface p-3 transition-transform hover:-translate-y-0.5"
                        >
                          <p className="font-body text-sm font-bold sm:text-base">▸ {sub.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* schools */}
                  {"schools" in entry && entry.schools ? (
                    <div className="mt-4 space-y-3">
                      {entry.schools.map((school) => (
                        <div
                          key={school.name}
                          className="flex flex-col gap-1 border-2 border-ink bg-surface p-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <p className="font-body text-sm font-bold sm:text-base">
                              🎓 {school.name}
                            </p>
                            {school.detail ? (
                              <p className="mt-0.5 text-sm text-muted">{school.detail}</p>
                            ) : null}
                          </div>
                          <span className="font-pixel text-[9px] text-muted">{school.period}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
