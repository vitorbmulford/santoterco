import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { GalleryArtworkCard } from '@/src/components/gallery/GalleryArtworkCard';
import { HeaderAction, ScreenHeader } from '@/src/components/layout/ScreenHeader';
import { SacredScreen } from '@/src/components/layout/SacredScreen';
import { galleryCategories, galleryItemsByCategory, isGalleryCategoryId } from '@/src/data/gallery';
import type { GalleryCategoryId } from '@/src/data/gallery';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

export default function GalleryCategoryScreen() {
  const theme = useSacredTheme();
  const params = useLocalSearchParams<{ categoryId?: string }>();
  const rawCategoryId = typeof params.categoryId === 'string' ? params.categoryId : '';
  const categoryId: GalleryCategoryId = isGalleryCategoryId(rawCategoryId) ? rawCategoryId : 'joyful';
  const category = galleryCategories.find((item) => item.id === categoryId) ?? galleryCategories[0];
  const artworks = galleryItemsByCategory[categoryId];

  return (
    <SacredScreen>
      <ScreenHeader
        title="Galeria"
        left={<HeaderAction label="‹" onPress={() => router.back()} />}
        right={<View style={styles.headerSpacer} />}
      />

      <Text
        adjustsFontSizeToFit
        minimumFontScale={0.84}
        numberOfLines={2}
        style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
        {category.title}
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
        {category.subtitle}
      </Text>

      <View style={styles.list}>
        {artworks.map((artwork) => (
          <GalleryArtworkCard
            key={artwork.id}
            artwork={artwork}
            onPress={() =>
              router.push({
                pathname: '/gallery/artwork/[artworkId]',
                params: { artworkId: artwork.id, categoryId },
              } as any)
            }
          />
        ))}
      </View>
    </SacredScreen>
  );
}

const styles = StyleSheet.create({
  headerSpacer: {
    width: 36,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 38,
    maxWidth: '94%',
    marginTop: 12,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14.5,
    lineHeight: 21,
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 24,
  },
});
