import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type SacredScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
};

export function SacredScreen({ children, scroll = true, padded = true }: SacredScreenProps) {
  const theme = useSacredTheme();
  const insets = useSafeAreaInsets();
  const contentStyle = [
    scroll
      ? [styles.scrollContent, { paddingBottom: Math.max(insets.bottom, 12) }]
      : styles.fixedContent,
    padded && { paddingHorizontal: theme.spacing.screen },
  ];

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.root, { backgroundColor: theme.colors.background }]}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={contentStyle}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={contentStyle}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  fixedContent: {
    flex: 1,
    position: 'relative',
  },
});
