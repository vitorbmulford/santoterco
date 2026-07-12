import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { GalleryCategoryCard } from '@/src/components/gallery/GalleryCategoryCard';
import { HeaderAction, ScreenHeader } from '@/src/components/layout/ScreenHeader';
import { SacredScreen } from '@/src/components/layout/SacredScreen';
import { galleryCategories } from '@/src/data/gallery';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

export default function GalleryIndexScreen() {
  const theme = useSacredTheme();

  return (
    <SacredScreen>
      <ScreenHeader
        title="Galeria"
        left={<HeaderAction label="‹" onPress={() => router.back()} />}
        right={<View style={styles.headerSpacer} />}
      />

      <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
        Galeria de Arte Sacra
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
        Navegue pelas obras usadas nos mistérios e nas orações complementares.
      </Text>

      <View style={styles.list}>
        {galleryCategories.map((category) => (
          <GalleryCategoryCard
            key={category.id}
            title={category.title}
            subtitle={category.subtitle}
            count={category.itemCount}
            onPress={() =>
              router.push({
                pathname: '/gallery/[categoryId]',
                params: { categoryId: category.id },
              } as any)
            }
          />
        ))}
        <View style={[styles.endRule, { backgroundColor: theme.colors.rule }]} />
      </View>
    </SacredScreen>
  );
}

const styles = StyleSheet.create({
  headerSpacer: {
    width: 36,
  },
  title: {
    fontSize: 34,
    fontWeight: '600',
    marginTop: 14,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 24,
  },
  endRule: {
    height: 1,
  },
});
