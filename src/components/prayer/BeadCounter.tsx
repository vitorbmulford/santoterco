import { StyleSheet, View } from 'react-native';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type BeadCounterProps = {
  count: number;
  current: number;
};

export function BeadCounter({ count, current }: BeadCounterProps) {
  const theme = useSacredTheme();

  return (
    <View style={styles.root}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.bead,
            {
              borderColor: theme.colors.gold,
              backgroundColor: index <= current ? theme.colors.gold : 'transparent',
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
    justifyContent: 'center',
    marginBottom: 12,
    minHeight: 9,
  },
  bead: {
    borderRadius: 4,
    borderWidth: 1,
    height: 8,
    width: 8,
  },
});
