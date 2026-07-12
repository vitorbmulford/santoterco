import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type PrayerNavigationProps = {
  canGoPrevious: boolean;
  hint: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
};

export function PrayerNavigation({
  canGoPrevious,
  hint,
  nextLabel,
  onPrevious,
  onNext,
}: PrayerNavigationProps) {
  const theme = useSacredTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        {
          borderTopColor: theme.colors.rule,
          paddingBottom: Math.max(insets.bottom, 12),
        },
      ]}>
      <View style={styles.row}>
        <Pressable
          accessibilityRole="button"
          disabled={!canGoPrevious}
          onPress={onPrevious}
          hitSlop={12}
          style={[styles.side, !canGoPrevious && styles.hidden]}>
          <Text style={[styles.navText, { color: theme.colors.muted, fontFamily: theme.fonts.display }]}>
            ‹ Anterior
          </Text>
        </Pressable>
        <Text style={[styles.hint, { color: theme.colors.hint, fontFamily: theme.fonts.body }]}>
          {hint}
        </Text>
        <Pressable accessibilityRole="button" onPress={onNext} hitSlop={12} style={[styles.side, styles.next]}>
          <Text style={[styles.navText, { color: theme.colors.wine, fontFamily: theme.fonts.display }]}>
            {nextLabel} ›
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderTopWidth: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  side: {
    minWidth: 82,
  },
  next: {
    alignItems: 'flex-end',
  },
  hidden: {
    opacity: 0,
  },
  navText: {
    fontSize: 15,
    letterSpacing: 1,
  },
  hint: {
    flex: 1,
    fontSize: 12.5,
    fontStyle: 'italic',
    letterSpacing: 0.6,
    textAlign: 'center',
  },
});
