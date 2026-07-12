import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { SacredScreen } from '@/src/components/layout/SacredScreen';
import { DividerCross } from '@/src/components/ui/DividerCross';
import { SacredButton } from '@/src/components/ui/SacredButton';
import { MysteryImage } from '@/src/components/prayer/MysteryImage';
import { getMysteryForWeekday } from '@/src/domain/rosary/getMysteryForWeekday';
import { useSacredThemeController } from '@/src/hooks/useSacredTheme';

export default function HomeScreen() {
  const { mode, theme, toggleTheme } = useSacredThemeController();
  const today = getMysteryForWeekday();
  const firstMystery = today.set.mysteries[0];

  return (
    <SacredScreen>
      <View style={styles.root}>
        <View style={styles.topBar}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={mode === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            onPress={toggleTheme}
            style={({ pressed }) => [
              styles.themeButton,
              { borderColor: theme.colors.rule },
              pressed && styles.pressed,
            ]}>
            <Text
              maxFontSizeMultiplier={1}
              style={[styles.themeGlyph, { color: theme.colors.muted, fontFamily: theme.fonts.display }]}>
              {mode === 'dark' ? '☼' : '☾'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.hero}>
          <Text
            maxFontSizeMultiplier={1}
            style={[styles.motto, { color: theme.colors.wine, fontFamily: theme.fonts.body }]}>
            Ad Iesum per Mariam
          </Text>
          <Text
            maxFontSizeMultiplier={1}
            style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
            Rosarium
          </Text>
          <Text
            maxFontSizeMultiplier={1}
            style={[styles.subtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
            O Santo Terço · Latim & Português
          </Text>
        </View>

        <DividerCross />

        <Text
          maxFontSizeMultiplier={1}
          style={[styles.today, { color: theme.colors.wine, fontFamily: theme.fonts.body }]}>
          Mistério de hoje · {today.dayName}
        </Text>

        <View style={styles.imageWrap}>
          <MysteryImage source={firstMystery.image} focus={firstMystery.imageFocus} size="home" />
        </View>

        <View style={styles.copy}>
          <Text
            maxFontSizeMultiplier={1}
            style={[styles.setName, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
            {today.set.title.pt}
          </Text>
          <Text
            maxFontSizeMultiplier={1}
            style={[styles.setSubtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
            {today.set.subtitle.pt}
          </Text>
        </View>

        <View style={styles.actions}>
          <SacredButton
            onPress={() =>
              router.push({
                pathname: '/prayer/[setId]',
                params: { setId: today.set.id },
              } as any)
            }>
            Rezar o Terço
          </SacredButton>
          <SacredButton variant="plain" onPress={() => router.push('/gallery' as any)}>
            Galeria de Arte Sacra
          </SacredButton>
          <SacredButton variant="plain" onPress={() => router.push('/mysteries' as any)}>
            Escolher mistério
          </SacredButton>
        </View>
      </View>
    </SacredScreen>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 2,
  },
  topBar: {
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    height: 34,
    justifyContent: 'center',
  },
  themeButton: {
    alignItems: 'center',
    borderRadius: 17,
    borderWidth: 1,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  themeGlyph: {
    fontSize: 16,
    lineHeight: 18,
  },
  pressed: {
    opacity: 0.72,
  },
  hero: {
    alignItems: 'center',
  },
  motto: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 42,
    fontWeight: '600',
    lineHeight: 46,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 13,
    letterSpacing: 0.8,
    textAlign: 'center',
  },
  today: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.4,
    marginBottom: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  imageWrap: {
    alignItems: 'center',
  },
  copy: {
    alignItems: 'center',
    marginTop: 16,
  },
  setName: {
    fontSize: 27,
    fontWeight: '600',
    lineHeight: 31,
    textAlign: 'center',
  },
  setSubtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 3,
    textAlign: 'center',
  },
  actions: {
    gap: 10,
    marginTop: 18,
    width: '100%',
  },
});
