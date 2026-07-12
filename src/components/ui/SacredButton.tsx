import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type SacredButtonProps = {
  children: ReactNode;
  onPress: () => void;
  variant?: 'primary' | 'plain';
  disabled?: boolean;
};

export function SacredButton({
  children,
  onPress,
  variant = 'primary',
  disabled = false,
}: SacredButtonProps) {
  const theme = useSacredTheme();
  const primary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        primary
          ? { backgroundColor: theme.colors.wine }
          : { backgroundColor: 'transparent', borderColor: theme.colors.rule, borderWidth: 1 },
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}>
      <Text
        maxFontSizeMultiplier={1.1}
        style={[
          styles.text,
          {
            color: primary ? theme.colors.buttonText : theme.colors.blue,
            fontFamily: theme.fonts.body,
          },
        ]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  pressed: {
    opacity: 0.78,
  },
  disabled: {
    opacity: 0.45,
  },
});
