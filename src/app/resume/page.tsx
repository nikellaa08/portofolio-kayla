import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ResumeView } from "@/components/Resume";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resume — Kayla",
  description:
    "CV & dokumen resmi — Ratu Balqis Kayla Lutfian Habilah, Software Engineering & IT.",
};

export default function ResumePage() {
  return (
    <>
      <a
        href="#resume-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[80] focus:border-4 focus:border-ink focus:bg-pyellow focus:px-3 focus:py-2 focus:font-pixel focus:text-[11px]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="resume-main" className="flex-1">
        <ResumeView />
      </main>
      <Footer />
    </>
  );
}
