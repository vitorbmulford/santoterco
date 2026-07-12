import { useEffect } from 'react';
import { Platform } from 'react-native';
import * as SystemUI from 'expo-system-ui';

import { useSacredThemeController } from '@/src/hooks/useSacredTheme';

export function ThemeEnvironmentSync() {
  const { mode, theme } = useSacredThemeController();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.colors.background).catch(() => {});
  }, [theme.colors.background]);

  useEffect(() => {
    if (Platform.OS !== 'web') {
      return;
    }

    const backgroundColor = theme.colors.background;
    const root = document.documentElement;
    const body = document.body;
    const appRoot = document.getElementById('root');

    root.style.setProperty('--app-background', backgroundColor);
    root.style.backgroundColor = backgroundColor;
    root.style.colorScheme = mode;

    body.style.backgroundColor = backgroundColor;
    body.style.colorScheme = mode;

    if (appRoot) {
      appRoot.style.backgroundColor = backgroundColor;
      appRoot.style.minHeight = '100%';
    }

    document
      .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute('content', backgroundColor));
  }, [mode, theme.colors.background]);

  return null;
}
