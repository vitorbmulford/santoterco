import { Pressable, StyleSheet, Text, View } from 'react-native';

import { MysteryImage } from '@/src/components/prayer/MysteryImage';
import type { Mystery } from '@/src/domain/rosary/types';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type MysteryPreviewItemProps = {
  mystery: Mystery;
  label: string;
  onPress: () => void;
};

export function MysteryPreviewItem({ mystery, label, onPress }: MysteryPreviewItemProps) {
  const theme = useSacredTheme();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.root,
        { borderBottomColor: theme.colors.rule },
        pressed && styles.pressed,
      ]}>
      <MysteryImage source={mystery.image} focus={mystery.imageFocus} size="small" />
      <View style={styles.content}>
        <Text style={[styles.ordinal, { color: theme.colors.wine, fontFamily: theme.fonts.body }]}>
          {label}
        </Text>
        <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
          {mystery.title.pt}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
          {mystery.biblicalReference}
        </Text>
      </View>
      <Text style={[styles.chevron, { color: theme.colors.gold, fontFamily: theme.fonts.display }]}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 13,
  },
  pressed: {
    opacity: 0.72,
  },
  content: {
    flex: 1,
  },
  ordinal: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    lineHeight: 25,
    marginTop: 1,
  },
  subtitle: {
    fontSize: 13,
    marginTop: 1,
  },
  chevron: {
    fontSize: 20,
  },
});
