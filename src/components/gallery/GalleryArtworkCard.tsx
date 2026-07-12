import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { GalleryArtwork } from '@/src/data/gallery';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type GalleryArtworkCardProps = {
  artwork: GalleryArtwork;
  onPress: () => void;
};

export function GalleryArtworkCard({ artwork, onPress }: GalleryArtworkCardProps) {
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
      <Image source={artwork.image} style={styles.image} contentFit="cover" transition={180} />
      <View style={styles.body}>
        <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
          {artwork.title}
        </Text>
        <Text style={[styles.meta, { color: theme.colors.wine, fontFamily: theme.fonts.body }]}>
          {artwork.author}
        </Text>
        <Text style={[styles.meta, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
          {artwork.location}
        </Text>
        <Text style={[styles.about, { color: theme.colors.ink, fontFamily: theme.fonts.body }]}>
          {artwork.about}
        </Text>
        <Text style={[styles.usageLabel, { color: theme.colors.gold, fontFamily: theme.fonts.body }]}>
          Uso no app
        </Text>
        <Text style={[styles.usage, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
          {artwork.usage}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    paddingBottom: 18,
    paddingTop: 18,
  },
  pressed: {
    opacity: 0.8,
  },
  image: {
    aspectRatio: 1.1,
    borderRadius: 8,
    width: '100%',
  },
  body: {
    marginTop: 14,
  },
  title: {
    fontSize: 24,
    lineHeight: 29,
  },
  meta: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
  about: {
    fontSize: 15,
    lineHeight: 24,
    marginTop: 10,
  },
  usageLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 14,
    textTransform: 'uppercase',
  },
  usage: {
    fontSize: 13.5,
    lineHeight: 20,
    marginTop: 4,
  },
});
