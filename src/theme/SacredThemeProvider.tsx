import type { ReactNode } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme, type SacredTheme } from '@/src/theme/sacredTheme';

type SacredThemeMode = 'light' | 'dark';

type SacredThemeContextValue = {
  mode: SacredThemeMode;
  theme: SacredTheme;
  toggleTheme: () => void;
};

const SacredThemeContext = createContext<SacredThemeContextValue | null>(null);

export function SacredThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme();
  const [manualMode, setManualMode] = useState<SacredThemeMode | null>(null);
  const mode: SacredThemeMode = manualMode ?? (systemScheme === 'dark' ? 'dark' : 'light');

  const value = useMemo<SacredThemeContextValue>(
    () => ({
      mode,
      theme: mode === 'dark' ? darkTheme : lightTheme,
      toggleTheme: () => setManualMode((current) => (current ?? mode) === 'dark' ? 'light' : 'dark'),
    }),
    [mode],
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
