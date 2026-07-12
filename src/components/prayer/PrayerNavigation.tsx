import { Pressable, StyleSheet, Text, View, type ViewProps } from 'react-native';

import { SafeBottomView } from '@/src/components/layout/SafeBottomView';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type PrayerNavigationProps = {
  canGoPrevious: boolean;
  hint: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
  onLayout?: ViewProps['onLayout'];
};

export function PrayerNavigation({
  canGoPrevious,
  hint,
  nextLabel,
  onPrevious,
  onNext,
  onLayout,
}: PrayerNavigationProps) {
  const theme = useSacredTheme();

  return (
    <SafeBottomView
      onLayout={onLayout}
      style={[
        styles.root,
        {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.rule,
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
    </SafeBottomView>
  );
}

const styles = StyleSheet.create({
  root: {
    bottom: 0,
    borderTopWidth: 1,
    flexGrow: 0,
    flexShrink: 0,
    left: 0,
    paddingHorizontal: 24,
    paddingBottom: 12,
    paddingTop: 12,
    position: 'absolute',
    right: 0,
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
