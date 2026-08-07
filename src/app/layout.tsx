import type { Metadata, Viewport } from "next";
import { Press_Start_2P, Silkscreen, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { content } from "@/lib/content";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press2p",
  display: "swap",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silk2p",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body2p",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.id.meta.title,
  description: content.id.meta.description,
};

export const viewport: Viewport = {
  themeColor: "#18181b",
};

/**
 * Applies the persisted theme & language class/attribute before React hydrates
 * to avoid a flash of the wrong theme.
 */
const INITIAL_THEME_SCRIPT = `try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.classList.add("dark")}var l=localStorage.getItem("lang")||"id";document.documentElement.lang=l}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${pressStart2P.variable} ${silkscreen.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-bg font-body text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: INITIAL_THEME_SCRIPT }} />
        <Providers>
          <div className="crt" aria-hidden="true" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
