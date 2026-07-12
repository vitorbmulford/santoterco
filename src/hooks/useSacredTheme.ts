import { useSacredThemeContext } from '@/src/theme/SacredThemeProvider';

export const useSacredTheme = () => {
  return useSacredThemeContext().theme;
};

export const useSacredThemeController = useSacredThemeContext;
