import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type GalleryCategoryCardProps = {
  title: string;
  subtitle: string;
  count: number;
  onPress: () => void;
};

export function GalleryCategoryCard({
  title,
  subtitle,
  count,
  onPress,
}: GalleryCategoryCardProps) {
  const theme = useSacredTheme();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.root,
        { borderTopColor: theme.colors.rule },
        pressed && styles.pressed,
      ]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
          {subtitle}
        </Text>
      </View>
      <View style={styles.meta}>
        <Text style={[styles.count, { color: theme.colors.gold, fontFamily: theme.fonts.display }]}>
          {count}
        </Text>
        <Text style={[styles.chevron, { color: theme.colors.muted, fontFamily: theme.fonts.display }]}>
          ›
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: 16,
    minHeight: 88,
    paddingVertical: 14,
  },
  pressed: {
    opacity: 0.72,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    lineHeight: 27,
  },
  subtitle: {
    fontSize: 13.5,
    lineHeight: 19,
    marginTop: 3,
  },
  meta: {
    alignItems: 'center',
    minWidth: 32,
  },
  count: {
    fontSize: 16,
    lineHeight: 18,
  },
  chevron: {
    fontSize: 20,
    marginTop: 6,
  },
});
