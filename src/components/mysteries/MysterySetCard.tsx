import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type MysterySetCardProps = {
  roman: string;
  title: string;
  subtitle: string;
  daysLabel: string;
  today?: boolean;
  onPress: () => void;
};

export function MysterySetCard({
  roman,
  title,
  subtitle,
  daysLabel,
  today = false,
  onPress,
}: MysterySetCardProps) {
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
      <Text style={[styles.roman, { color: theme.colors.gold, fontFamily: theme.fonts.display }]}>
        {roman}
      </Text>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
          {subtitle} · {daysLabel}
        </Text>
      </View>
      {today ? (
        <View style={[styles.badge, { backgroundColor: theme.colors.wine }]}>
          <Text style={[styles.badgeText, { color: theme.colors.buttonText }]}>hoje</Text>
        </View>
      ) : null}
      <Text style={[styles.chevron, { color: theme.colors.muted, fontFamily: theme.fonts.display }]}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: 16,
    minHeight: 82,
    paddingVertical: 14,
  },
  pressed: {
    opacity: 0.72,
  },
  roman: {
    fontSize: 22,
    textAlign: 'center',
    width: 34,
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
    marginTop: 2,
  },
  badge: {
    borderRadius: 2,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  chevron: {
    fontSize: 22,
  },
});
