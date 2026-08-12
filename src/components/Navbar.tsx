"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang, useTheme } from "@/components/providers";
import { cn } from "@/lib/cn";

const SECTION_IDS = ["home", "skills", "experience", "projects", "contact"];

export function Navbar() {
  const { t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathname = usePathname();
  const links = t.nav.links;
  const sectionActive = pathname === "/" ? active : "";

  const hrefFor = (id: string) =>
    id === "home" ? "/" : id === "resume" ? "/resume" : `/#${id}`;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b-4 border-ink bg-bg transition-shadow",
        scrolled && "shadow-pixel"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8"
        aria-label={t.nav.menu}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group font-pixel text-xs tracking-wide transition-colors hover:text-pblue sm:text-sm"
        >
          {t.nav.brand}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive =
              link.id === "resume"
                ? pathname === "/resume"
                : sectionActive === link.id;
            return (
              <li key={link.id}>
                <a
                  href={hrefFor(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "px-3 py-2 font-silk text-sm font-bold uppercase transition-colors",
                    isActive ? "bg-ink text-bg" : "text-ink hover:bg-pyellow"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.nav.toggleTheme}
            className="grid h-9 w-9 place-items-center border-2 border-ink bg-surface text-base shadow-pixel-sm transition-all hover:-translate-y-0.5 active:translate-y-0.5"
          >
            <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
          </button>

          <div
            className="flex border-2 border-ink bg-surface shadow-pixel-sm"
            role="group"
            aria-label={t.nav.language}
          >
            <LangBtn code="id" />
            <LangBtn code="en" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center border-2 border-ink bg-surface shadow-pixel-sm md:hidden"
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-4 border-ink bg-bg shadow-pixel md:hidden">
          <ul className="px-4 py-3">
            {links.map((link, i) => (
              <li key={link.id} className="border-b-2 border-dashed border-ink last:border-0">
                <a
                  href={hrefFor(link.id)}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3 font-silk text-base font-bold uppercase"
                >
                  <span className="font-pixel text-[10px] text-muted">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function LangBtn({ code }: { code: "id" | "en" }) {
  const { lang, setLang } = useLang();
  const isActive = lang === code;
  return (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={isActive}
      className={cn(
        "px-2.5 py-1.5 font-pixel text-[9px] transition-colors",
        isActive ? "bg-pblue text-ink" : "text-muted hover:bg-bg"
      )}
    >
      {code.toUpperCase()}
    </button>
  );
}
