import type { ReactNode } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme, type SacredTheme } from '@/src/theme/sacredTheme';

type SacredThemeMode = 'light' | 'dark';
const THEME_STORAGE_KEY = 'sacred-theme-mode';

type SacredThemeContextValue = {
  mode: SacredThemeMode;
  theme: SacredTheme;
  toggleTheme: () => void;
};

const SacredThemeContext = createContext<SacredThemeContextValue | null>(null);

export function SacredThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme();
  const [manualMode, setManualMode] = useState<SacredThemeMode | null>(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedMode === 'light' || storedMode === 'dark' ? storedMode : null;
  });
  const mode: SacredThemeMode = manualMode ?? (systemScheme === 'dark' ? 'dark' : 'light');

  const value = useMemo<SacredThemeContextValue>(
    () => ({
      mode,
      theme: mode === 'dark' ? darkTheme : lightTheme,
      toggleTheme: () => {
        const nextMode: SacredThemeMode = (manualMode ?? mode) === 'dark' ? 'light' : 'dark';
        setManualMode(nextMode);

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(THEME_STORAGE_KEY, nextMode);
        }
      },
    }),
    [manualMode, mode],
  );

  return <SacredThemeContext.Provider value={value}>{children}</SacredThemeContext.Provider>;
}

export function useSacredThemeContext() {
  const context = useContext(SacredThemeContext);

  if (!context) {
    const fallbackMode: SacredThemeMode = 'light';
    return {
      mode: fallbackMode,
      theme: lightTheme,
      toggleTheme: () => {},
    };
  }

  return context;
}
