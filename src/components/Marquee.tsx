"use client";

import { useLang } from "@/components/providers";

export function Marquee() {
  const { t } = useLang();
  const items = t.marquee;
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-4 border-ink bg-pyellow" aria-hidden="true">
      <div className="flex w-max animate-marquee py-3">
        {track.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-pixel text-[10px]">
            <span className="px-4">{item}</span>
            <span className="text-pred">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
