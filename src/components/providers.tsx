"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { content, type Content, type Lang } from "@/lib/content";

type Theme = "light" | "dark";

interface StoredStore<T extends string> {
  subscribe: (cb: () => void) => () => void;
  getSnapshot: () => T;
  getServerSnapshot: () => T;
  set: (next: T) => void;
}

/**
 * Tiny external store backed by localStorage. Values are primitives so
 * getSnapshot is stable between writes. The inline script in layout.tsx
 * applies the persisted theme/lang before hydration; `detect()` reads those
 * document-level attributes when nothing is stored yet.
 */
function createStoredStore<T extends string>(
  key: string,
  serverFallback: T,
  detect: () => T,
  isValid: (value: string) => value is T
): StoredStore<T> {
  function read(): T {
    if (typeof window === "undefined") return serverFallback;
    const raw = localStorage.getItem(key);
    if (raw !== null && isValid(raw)) return raw;
    return detect();
  }

  return {
    subscribe(cb: () => void) {
      window.addEventListener("storage", cb);
      return () => window.removeEventListener("storage", cb);
    },
    getSnapshot: read,
    getServerSnapshot: () => serverFallback,
    set(next: T) {
      if (typeof window === "undefined") return;
      localStorage.setItem(key, next);
      window.dispatchEvent(new Event("storage"));
    },
  };
}

const themeStore = createStoredStore<Theme>(
  "theme",
  "light",
  () =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
  (value): value is Theme => value === "light" || value === "dark"
);

const langStore = createStoredStore<Lang>(
  "lang",
  "id",
  () =>
    typeof document !== "undefined" && document.documentElement.lang === "en" ? "en" : "id",
  (value): value is Lang => value === "id" || value === "en"
);

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void; t: Content }>({
  lang: "id",
  setLang: () => {},
  t: content.id,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useLang() {
  return useContext(LangContext);
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    themeStore.set(next);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    langStore.subscribe,
    langStore.getSnapshot,
    langStore.getServerSnapshot
  );

  const setLang = (next: Lang) => {
    document.documentElement.lang = next;
    langStore.set(next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}
