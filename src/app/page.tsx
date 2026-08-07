import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Quests } from "@/components/Quests";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[80] focus:border-4 focus:border-ink focus:bg-pyellow focus:px-3 focus:py-2 focus:font-pixel focus:text-[11px]"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Quests />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
