"use client";

import Link from "next/link";
import { useLang } from "@/components/providers";
import { PixelButton } from "@/components/ui";

export function ResumeView() {
  const { t } = useLang();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-20">
      <p className="font-pixel text-[10px] text-muted">{t.resume.kicker}</p>
      <h1 className="mt-3 inline-block border-4 border-ink bg-pyellow px-4 py-2 font-pixel text-lg leading-relaxed shadow-pixel sm:text-2xl">
        {t.resume.title}
      </h1>
      <p className="mt-4 font-body text-base font-bold text-muted sm:text-lg">
        {t.resume.subtitle}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <PixelButton href="/cv.pdf" variant="green" target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">👁</span> {t.resume.viewOnline}
        </PixelButton>
        <PixelButton href="/cv.pdf" variant="yellow" download>
          <span aria-hidden="true">📥</span> {t.resume.download}
        </PixelButton>
      </div>

      <div className="mt-8 border-4 border-ink bg-surface p-3 shadow-pixel sm:p-5">
        <div className="mb-3 flex items-center justify-between border-b-4 border-ink pb-2">
          <h2 className="font-pixel text-[11px]">📜 {t.resume.previewLabel}</h2>
          <span className="font-pixel text-[8px] text-muted">[{t.resume.pdfHint}]</span>
        </div>
        <iframe
          src="/cv.pdf"
          title={t.resume.previewLabel}
          className="h-[70vh] w-full border-4 border-ink bg-white sm:h-[78vh]"
          loading="lazy"
        />
        <p className="mt-3 font-body text-sm leading-relaxed text-muted">{t.resume.previewFallback}</p>
      </div>

      <Link
        href="/"
        className="mt-8 inline-block font-body text-sm font-bold underline decoration-4 underline-offset-4 transition-colors hover:text-pblue"
      >
        ← {t.resume.backLabel}
      </Link>
    </div>
  );
}
