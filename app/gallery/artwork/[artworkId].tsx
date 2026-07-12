import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HeaderAction, ScreenHeader } from '@/src/components/layout/ScreenHeader';
import { getGalleryArtworkById } from '@/src/data/gallery';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

export default function GalleryArtworkScreen() {
  const theme = useSacredTheme();
  const params = useLocalSearchParams<{ artworkId?: string }>();
  const artworkId = typeof params.artworkId === 'string' ? params.artworkId : '';
  const artwork = getGalleryArtworkById(artworkId);

  if (!artwork) {
    return (
      <SafeAreaView style={[styles.root, { backgroundColor: theme.colors.chrome }]}>
        <ScreenHeader
          title="Imagem"
          left={<HeaderAction label="‹" onPress={() => router.back()} />}
          right={<View style={styles.headerSpacer} />}
        />
        <View style={styles.emptyState}>
          <Text style={[styles.emptyTitle, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
            Obra não encontrada
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.colors.chrome }]}>
      <ScreenHeader
        title="Imagem"
        left={<HeaderAction label="‹" onPress={() => router.back()} />}
        right={<View style={styles.headerSpacer} />}
      />

      <View style={styles.imageStage}>
        <Image source={artwork.image} style={styles.image} contentFit="contain" transition={180} />
      </View>

      <View style={styles.caption}>
        <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
          {artwork.title}
        </Text>
        <Text style={[styles.meta, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
          {artwork.author}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerSpacer: {
    width: 36,
  },
  imageStage: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  image: {
    height: '100%',
    maxHeight: 620,
    width: '100%',
  },
  caption: {
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingBottom: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 24,
    lineHeight: 29,
    textAlign: 'center',
  },
  meta: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
    textAlign: 'center',
  },
  emptyState: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
  },
  emptyTitle: {
    fontSize: 26,
    textAlign: 'center',
  },
});
