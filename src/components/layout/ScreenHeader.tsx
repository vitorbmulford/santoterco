import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type ScreenHeaderProps = {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
};

export function HeaderAction({ label, onPress }: { label: string; onPress: () => void }) {
  const theme = useSacredTheme();

  return (
    <Pressable accessibilityRole="button" onPress={onPress} hitSlop={12} style={styles.action}>
      <Text style={[styles.actionText, { color: theme.colors.muted, fontFamily: theme.fonts.display }]}>
        {label}
      </Text>
    </Pressable>
  );
}

export function ScreenHeader({ title, left, right }: ScreenHeaderProps) {
  const theme = useSacredTheme();

  return (
    <View style={styles.root}>
      <View style={styles.side}>{left}</View>
      <Text style={[styles.title, { color: theme.colors.wine, fontFamily: theme.fonts.body }]}>
        {title}
      </Text>
      <View style={[styles.side, styles.right]}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    justifyContent: 'space-between',
  },
  side: {
    alignItems: 'flex-start',
    minWidth: 42,
  },
  right: {
    alignItems: 'flex-end',
  },
  title: {
    flex: 1,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  action: {
    minHeight: 36,
    minWidth: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 24,
    lineHeight: 28,
  },
});
