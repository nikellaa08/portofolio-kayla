"use client";

import { useLang } from "@/components/providers";
import { PixelAvatar } from "@/components/PixelAvatar";
import { PixelButton } from "@/components/ui";
import { Marquee } from "@/components/Marquee";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      {/* floating pixel decorations */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-24 hidden animate-float text-2xl text-pyellow opacity-70 select-none lg:block"
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-40 hidden animate-float-slow text-3xl text-pblue opacity-60 select-none lg:block"
      >
        ◆
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 left-[14%] hidden animate-float-slow text-xl text-pred opacity-60 select-none lg:block"
      >
        ★
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 right-[16%] hidden animate-float text-2xl text-pgreen opacity-60 select-none lg:block"
      >
        ✚
      </span>

      <div className="mx-auto w-full max-w-6xl px-4 pt-14 pb-16 sm:px-8 sm:pt-24 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 border-4 border-ink bg-pgreen px-3 py-2 font-pixel text-[9px] shadow-pixel-sm sm:text-[11px]">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping bg-ink opacity-40" />
                <span className="relative inline-flex h-3 w-3 bg-ink" />
              </span>
              {t.hero.badge}
            </span>

            <h1 className="mt-6 space-y-4 font-pixel">
              <span className="block text-xs text-pred sm:text-base">{t.hero.nameL1}</span>
              <span className="inline-block border-4 border-ink bg-pyellow px-3 py-2 text-[13px] leading-relaxed shadow-pixel sm:text-lg lg:text-xl">
                {t.hero.nameL2}
              </span>
            </h1>

            <p className="mt-6 font-silk text-base font-bold uppercase tracking-wide text-pblue sm:text-xl">
              {t.hero.role}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.hero.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PixelButton href="#projects" variant="green">
                {t.hero.ctaProjects} <span aria-hidden="true">➔</span>
              </PixelButton>
              <PixelButton href="/cv.pdf" variant="yellow" download>
                {t.hero.ctaCv} <span aria-hidden="true">⬇</span>
              </PixelButton>
              <PixelButton href="#contact" variant="blue">
                {t.hero.ctaContact} <span aria-hidden="true">✉</span>
              </PixelButton>
            </div>
          </div>

          {/* Character sheet card */}
          <div className="relative mx-auto w-full max-w-sm">
            <span
              aria-hidden="true"
              className="absolute -top-5 -right-2 z-10 rotate-12 border-2 border-ink bg-pred px-2 py-1 font-pixel text-[8px] shadow-pixel-sm"
            >
              PLAYER 1
            </span>
            <div className="rotate-2 border-4 border-ink bg-surface p-4 shadow-pixel-lg transition-transform duration-300 hover:rotate-0">
              <div className="flex items-center justify-between border-b-4 border-ink pb-2">
                <span className="font-pixel text-[10px]">{t.hero.avatarLabel} SHEET</span>
                <span className="font-pixel text-[8px] text-muted">{t.hero.lvl}</span>
              </div>

              <div className="relative mx-auto my-4 w-52 sm:w-60">
                <PixelAvatar className="w-full border-4 border-ink bg-bg" />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-2 border-ink bg-pyellow px-2 py-0.5 font-pixel text-[8px] shadow-pixel-sm">
                  KAYLA
                </span>
              </div>

              <div className="space-y-2 border-t-4 border-ink pt-3 font-silk text-xs font-bold sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-8 text-muted">{t.hero.hp}</span>
                  <div className="h-4 flex-1 border-2 border-ink bg-bg">
                    <div className="h-full w-full bg-pgreen" />
                  </div>
                  <span>100</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 text-muted">{t.hero.exp}</span>
                  <div className="h-4 flex-1 border-2 border-ink bg-bg">
                    <div className="h-full w-full bg-pyellow" />
                  </div>
                  <span>100%</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 border-t-2 border-dashed border-ink pt-3 font-pixel text-[8px]">
                <span className="border-2 border-ink bg-pblue px-2 py-1">{t.hero.race}</span>
                <span className="border-2 border-ink bg-pgreen px-2 py-1">{t.hero.classLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
