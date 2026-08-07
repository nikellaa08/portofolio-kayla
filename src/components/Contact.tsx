"use client";

import { useLang } from "@/components/providers";
import { PixelButton, SectionHeader, colorCls } from "@/components/ui";
import { cn } from "@/lib/cn";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="scroll-mt-20 border-t-4 border-ink bg-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          kicker={t.contact.kicker}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          icon="✉️"
          color="yellow"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {t.contact.items.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <a
                key={item.label}
                href={item.href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 border-4 border-ink bg-surface p-4 shadow-pixel transition-all hover:-translate-y-1 hover:shadow-pixel-lg"
              >
                <span
                  className={cn(
                    "grid h-12 w-12 shrink-0 place-items-center border-2 border-ink text-2xl",
                    colorCls(item.color)
                  )}
                  aria-hidden="true"
                >
                  {item.emoji}
                </span>
                <span className="min-w-0">
                  <span className="block font-pixel text-[9px] text-muted">{item.label}</span>
                  <span className="block truncate font-silk text-sm font-bold sm:text-base">
                    {item.value}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto font-pixel text-base group-hover:animate-bounce-x"
                >
                  ➔
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-4 border-dashed border-ink bg-surface p-5 sm:flex-row sm:justify-between">
          <div>
            <p className="font-silk text-sm font-bold sm:text-base">{t.contact.note}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <PixelButton href="/cv.pdf" variant="red" download>
              ⬇ {t.contact.cvCta} <span className="font-silk normal-case">({t.contact.cvHint})</span>
            </PixelButton>
            <a
              href="mailto:nikellaa08@gmail.com"
              className="font-silk text-sm font-bold underline decoration-4 underline-offset-4 transition-colors hover:text-pblue"
            >
              {t.contact.emailCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
