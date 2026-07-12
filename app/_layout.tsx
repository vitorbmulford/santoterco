import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useSacredThemeController } from '@/src/hooks/useSacredTheme';
import { SacredThemeProvider } from '@/src/theme/SacredThemeProvider';

export default function RootLayout() {
  return (
    <SacredThemeProvider>
      <RootNavigator />
    </SacredThemeProvider>
  );
}

function RootNavigator() {
  const { mode, theme } = useSacredThemeController();

  return (
    <ThemeProvider
      value={{
        dark: false,
        colors: {
          primary: theme.colors.wine,
          background: theme.colors.background,
          card: theme.colors.background,
          text: theme.colors.ink,
          border: theme.colors.rule,
          notification: theme.colors.gold,
        },
        fonts: {
          regular: { fontFamily: theme.fonts.body, fontWeight: '400' },
          medium: { fontFamily: theme.fonts.body, fontWeight: '500' },
          bold: { fontFamily: theme.fonts.body, fontWeight: '700' },
          heavy: { fontFamily: theme.fonts.body, fontWeight: '700' },
        },
      }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="gallery/index" />
        <Stack.Screen name="gallery/[categoryId]" />
        <Stack.Screen name="gallery/artwork/[artworkId]" />
        <Stack.Screen name="mysteries/index" />
        <Stack.Screen name="mysteries/[setId]" />
        <Stack.Screen name="prayer/[setId]" />
      </Stack>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
