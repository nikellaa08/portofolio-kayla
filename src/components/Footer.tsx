"use client";

import { useLang } from "@/components/providers";
import { cn } from "@/lib/cn";

const STRIP_COLORS = ["bg-pgreen", "bg-pred", "bg-pyellow", "bg-pblue"];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t-4 border-ink bg-surface">
      <div className="flex border-b-4 border-ink" aria-hidden="true">
        {STRIP_COLORS.map((color) => (
          <span key={color} className={cn("h-3 flex-1", color)} />
        ))}
      </div>
      <div className="mx-auto max-w-6xl space-y-2 px-4 py-8 text-center sm:px-8">
        <p className="font-silk text-sm font-bold">{t.footer.text}</p>
        <p className="font-pixel text-[9px] text-muted">{t.footer.madeWith}</p>
      </div>
    </footer>
  );
}
