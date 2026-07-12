import { StyleSheet, View } from 'react-native';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type PrayerProgressProps = {
  value: number;
};

export function PrayerProgress({ value }: PrayerProgressProps) {
  const theme = useSacredTheme();

  return (
    <View style={[styles.track, { backgroundColor: theme.colors.rule }]}>
      <View
        style={[
          styles.bar,
          {
            backgroundColor: theme.colors.gold,
            width: `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 2,
    marginHorizontal: 22,
  },
  bar: {
    height: '100%',
  },
});
