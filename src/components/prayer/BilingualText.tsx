import { StyleSheet, Text, View } from 'react-native';

import type { BilingualText as BilingualTextValue } from '@/src/domain/rosary/types';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type BilingualTextProps = {
  text: BilingualTextValue;
  latinSize?: number;
  portugueseSize?: number;
};

export function BilingualText({ text, latinSize = 22, portugueseSize = 16 }: BilingualTextProps) {
  const theme = useSacredTheme();

  return (
    <View style={styles.root}>
      <Text
        style={[
          styles.latin,
          { color: theme.colors.wine, fontFamily: theme.fonts.display, fontSize: latinSize },
        ]}>
        {text.la}
      </Text>
      <View style={[styles.divider, { backgroundColor: theme.colors.rule }]} />
      <Text
        style={[
          styles.portuguese,
          { color: theme.colors.muted, fontFamily: theme.fonts.body, fontSize: portugueseSize },
        ]}>
        {text.pt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginTop: 18,
    width: '100%',
  },
  latin: {
    fontStyle: 'italic',
    lineHeight: 33,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    marginVertical: 14,
    width: 46,
  },
  portuguese: {
    lineHeight: 25,
    textAlign: 'center',
  },
});
