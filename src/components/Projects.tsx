"use client";

import { useEffect, useRef, useState } from "react";
import type { Content } from "@/lib/content";
import { useLang } from "@/components/providers";
import { Chip, PixelButton, SectionHeader } from "@/components/ui";
import { cn } from "@/lib/cn";

type ProjectItem = Content["projects"]["items"][number];

export function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState<ProjectItem | null>(null);
  const [slide, setSlide] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const total = active ? active.gallery.length : 0;

  const openGallery = (project: ProjectItem) => {
    openerRef.current = document.activeElement as HTMLElement | null;
    setActive(project);
    setSlide(0);
  };

  const closeGallery = () => {
    setActive(null);
    openerRef.current?.focus();
  };

  const goNext = () => {
    if (!active) return;
    setSlide((s) => (s + 1) % total);
  };
  const goPrev = () => {
    if (!active) return;
    setSlide((s) => (s - 1 + total) % total);
  };

  // Focus management, scroll lock, and keyboard navigation while the lightbox is open.
  useEffect(() => {
    if (!active) return;
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";
    const count = active.gallery.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        openerRef.current?.focus();
      }
      if (e.key === "ArrowRight") setSlide((s) => (s + 1) % count);
      if (e.key === "ArrowLeft") setSlide((s) => (s - 1 + count) % count);
      // Keep Tab focus inside the dialog.
      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusables = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="projects" className="scroll-mt-20 border-t-4 border-ink bg-bg">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          kicker={t.projects.kicker}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          icon="🗂️"
          color="red"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {t.projects.items.map((project, i) => (
            <article
              key={project.title}
              className="flex flex-col border-4 border-ink bg-surface shadow-[6px_6px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] md:flex-row"
            >
              {/* ---- Media column: thumbnail + action buttons ---- */}
              <div className="flex w-full flex-col border-b-4 border-ink md:w-[42%] md:shrink-0 md:border-b-0 md:border-r-4 lg:w-[38%]">
                <button
                  type="button"
                  onClick={() => openGallery(project)}
                  aria-label={`${t.projects.galleryCta} — ${project.title}`}
                  className="group relative block w-full flex-1 text-left"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- user wants plain <img> thumbnails they can replace with real screenshots */}
                  <img
                    src={project.thumb}
                    alt={project.alt}
                    width={640}
                    height={360}
                    loading="lazy"
                    className="block h-48 w-full object-cover sm:h-56 md:h-full"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 grid place-items-center bg-ink/0 font-pixel text-[9px] text-bg transition-colors group-hover:bg-ink/60"
                  >
                    🖼️ {t.projects.galleryCta}
                  </span>
                  <span className="absolute top-2 left-2 border-2 border-ink bg-pyellow px-2 py-1 font-pixel text-[8px] shadow-pixel-sm">
                    P0{i + 1}
                  </span>
                </button>

                {/* Action buttons (only the gallery button for linkless projects) */}
                <div className="flex flex-wrap items-stretch gap-2 border-t-4 border-ink bg-bg p-3">
                  <button
                    type="button"
                    onClick={() => openGallery(project)}
                    className="inline-flex min-w-40 flex-1 items-center justify-center gap-2 border-4 border-ink bg-pblue px-4 py-2.5 text-center font-pixel text-[10px] uppercase leading-relaxed tracking-wide shadow-pixel transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none md:min-w-0 md:flex-none md:w-full"
                  >
                    🖼️ {t.projects.galleryCta}
                  </button>
                  {!project.noLinks ? (
                    <>
                      <PixelButton
                        href={project.url}
                        variant="green"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-w-40 flex-1 md:min-w-0 md:flex-none md:w-full"
                      >
                        🚀 {t.projects.cta}
                      </PixelButton>
                      <PixelButton
                        href={project.repo}
                        variant="yellow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-w-40 flex-1 md:min-w-0 md:flex-none md:w-full"
                      >
                        💻 {t.projects.sourceCta}
                      </PixelButton>
                    </>
                  ) : null}
                </div>
              </div>

              {/* ---- Content column: badge, title, full description, tech stack ---- */}
              <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                {project.featured ? (
                  <span className="inline-flex w-fit items-center border-2 border-ink bg-pred px-2.5 py-1 font-pixel text-[9px] text-bg shadow-pixel-sm">
                    {t.projects.featuredLabel}
                  </span>
                ) : null}

                <h3 className="font-body text-lg font-bold leading-snug sm:text-xl">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                  {project.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((tech) => (
                    <Chip key={tech} compact>
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ---- Lightbox / gallery slider ---- */}
      {active && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={closeGallery}
        >
          <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />

          <div
            ref={dialogRef}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col border-4 border-ink bg-surface shadow-pixel-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b-4 border-ink bg-pblue px-4 py-3">
              <h3 className="min-w-0 truncate font-pixel text-[10px] sm:text-xs">{active.title}</h3>
              <div className="flex shrink-0 items-center gap-2">
                <span className="font-pixel text-[9px] text-ink/70">
                  {slide + 1} / {total}
                </span>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={closeGallery}
                  aria-label={t.projects.close}
                  className="grid h-8 w-8 place-items-center border-2 border-ink bg-pred text-sm shadow-pixel-sm transition-transform hover:scale-110"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden bg-bg">
              {/* eslint-disable-next-line @next/next/no-img-element -- user wants plain <img> gallery */}
              <img
                src={active.gallery[slide]}
                alt={`${active.title} — ${slide + 1}`}
                width={640}
                height={360}
                className="h-[45vh] w-full object-contain sm:h-[55vh]"
              />
              {total > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label={t.projects.prev}
                    className="absolute top-1/2 left-2 grid h-11 w-11 -translate-y-1/2 place-items-center border-4 border-ink bg-pyellow text-sm shadow-pixel transition-transform hover:scale-110"
                  >
                    ◀
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={t.projects.next}
                    className="absolute top-1/2 right-2 grid h-11 w-11 -translate-y-1/2 place-items-center border-4 border-ink bg-pyellow text-sm shadow-pixel transition-transform hover:scale-110"
                  >
                    ▶
                  </button>
                </>
              ) : null}
            </div>

            <div className="flex items-center justify-center gap-2 border-t-4 border-ink px-4 py-3">
              {active.gallery.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`${t.projects.galleryLabel} ${i + 1}`}
                  aria-current={i === slide ? "true" : undefined}
                  className={cn(
                    "h-4 w-4 border-2 border-ink transition-colors",
                    i === slide ? "bg-pgreen" : "bg-bg hover:bg-pyellow"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
