import { StyleSheet, Text, View } from 'react-native';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

export function DividerCross() {
  const theme = useSacredTheme();

  return (
    <View style={styles.root}>
      <View style={[styles.rule, { backgroundColor: theme.colors.rule }]} />
      <Text style={[styles.cross, { color: theme.colors.gold, fontFamily: theme.fonts.display }]}>†</Text>
      <View style={[styles.rule, { backgroundColor: theme.colors.rule }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginVertical: 16,
  },
  rule: {
    flex: 1,
    height: 1,
  },
  cross: {
    fontSize: 17,
  },
});
