import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type SacredScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
};

export function SacredScreen({ children, scroll = true, padded = true }: SacredScreenProps) {
  const theme = useSacredTheme();
  const contentStyle = [
    scroll ? styles.scrollContent : styles.fixedContent,
    padded && { paddingHorizontal: theme.spacing.screen },
  ];

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.colors.background }]}>
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
    paddingBottom: 28,
  },
  fixedContent: {
    flex: 1,
    paddingBottom: 28,
  },
});
