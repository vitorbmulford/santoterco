import { Image } from 'expo-image';
import type { ImageSourcePropType } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type MysteryImageProps = {
  source?: ImageSourcePropType;
  focus?: { x: number; y: number };
  size?: 'large' | 'home' | 'small';
};

export function MysteryImage({ source, focus, size = 'large' }: MysteryImageProps) {
  const theme = useSacredTheme();
  const large = size === 'large';
  const home = size === 'home';

  return (
    <View
      style={[
        styles.frame,
        {
          width: large ? 190 : home ? 156 : 52,
          height: large ? 226 : home ? 188 : 62,
          backgroundColor: theme.colors.surface,
          shadowColor: theme.colors.shadow,
        },
      ]}>
      {source ? (
        <Image
          source={source}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          contentPosition={{
            left: `${focus?.x ?? 50}%`,
            top: `${focus?.y ?? 35}%`,
          }}
          transition={180}
        />
      ) : (
        <Text style={[styles.cross, { color: theme.colors.gold, fontFamily: theme.fonts.display }]}>†</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignItems: 'center',
    borderRadius: 8,
    borderTopLeftRadius: 116,
    borderTopRightRadius: 116,
    elevation: 4,
    justifyContent: 'center',
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  cross: {
    fontSize: 46,
  },
});
