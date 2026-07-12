import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderAction, ScreenHeader } from '@/src/components/layout/ScreenHeader';
import { SacredScreen } from '@/src/components/layout/SacredScreen';
import { BeadCounter } from '@/src/components/prayer/BeadCounter';
import { MysteryImage } from '@/src/components/prayer/MysteryImage';
import { PrayerNavigation } from '@/src/components/prayer/PrayerNavigation';
import { PrayerProgress } from '@/src/components/prayer/PrayerProgress';
import { PrayerStepView } from '@/src/components/prayer/PrayerStepView';
import { isRosaryTargetId } from '@/src/domain/rosary/targets';
import type { RosaryTargetId } from '@/src/domain/rosary/types';
import { usePrayerSession } from '@/src/hooks/usePrayerSession';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

const readNumber = (value: string | string[] | undefined, fallback: number) => {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export default function PrayerScreen() {
  const theme = useSacredTheme();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ setId?: string; step?: string; repeat?: string }>();
  const rawSetId = typeof params.setId === 'string' ? params.setId : '';
  const targetId: RosaryTargetId = isRosaryTargetId(rawSetId) ? rawSetId : 'joyful';
  const [showIndex, setShowIndex] = useState(false);
  const [navigationHeight, setNavigationHeight] = useState(0);
  const session = usePrayerSession(targetId, {
    stepIndex: Math.max(0, readNumber(params.step, 0)),
    repeatIndex: Math.max(0, readNumber(params.repeat, 0)),
  });

  const { currentStep, progress } = session;
  const repeated = currentStep.type === 'repeatedPrayer';
  const hint = repeated
    ? `${currentStep.title.pt} ${progress.repeatIndex + 1} / ${currentStep.repetitionCount}`
    : session.atEnd
      ? targetId === 'rosary'
        ? 'fim do Rosário'
        : 'fim do Terço'
      : 'toque para continuar';

  const finish = () => {
    router.replace({
      pathname: '/mysteries/[setId]',
      params: { setId: targetId },
    } as any);
  };

  const next = () => {
    if (session.atEnd) {
      finish();
      return;
    }

    session.goNext();
  };

  return (
    <SacredScreen scroll={false} padded={false}>
      <ScreenHeader
        title={showIndex ? 'Índice do Terço' : currentStep.sectionTitle}
        left={<HeaderAction label={showIndex ? '‹' : '×'} onPress={() => (showIndex ? setShowIndex(false) : router.back())} />}
        right={<HeaderAction label={showIndex ? ' ' : '☰'} onPress={() => setShowIndex(true)} />}
      />

      {!showIndex ? <PrayerProgress value={session.ratio} /> : null}

      {showIndex ? (
        <ScrollView
          style={styles.fill}
          contentContainerStyle={[styles.indexContent, { paddingBottom: Math.max(insets.bottom, 12) }]}
          showsVerticalScrollIndicator={false}>
          <Text style={[styles.indexHelp, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
            Toque em qualquer etapa para ir diretamente a ela.
          </Text>
          {session.index.map((section) => (
            <View key={section.id} style={styles.indexSection}>
              <View style={styles.indexTitleRow}>
                {section.artwork ? (
                  <MysteryImage
                    source={section.artwork.image}
                    focus={section.artwork.imageFocus}
                    size="small"
                  />
                ) : null}
                <Text style={[styles.indexSectionTitle, { color: theme.colors.wine, fontFamily: theme.fonts.body }]}>
                  {section.title}
                </Text>
                <View style={[styles.indexRule, { backgroundColor: theme.colors.rule }]} />
              </View>
              {section.items.map((item) => (
                <Pressable
                  key={`${section.id}-${item.stepIndex}`}
                  accessibilityRole="button"
                  onPress={() => {
                    session.jumpTo(item.stepIndex);
                    setShowIndex(false);
                  }}
                  style={[
                    styles.indexItem,
                    item.current && { backgroundColor: theme.colors.veil },
                  ]}>
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: item.current ? theme.colors.gold : theme.colors.rule },
                    ]}
                  />
                  <Text style={[styles.indexItemText, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
                    {item.label}
                  </Text>
                  {item.current ? (
                    <Text style={[styles.now, { color: theme.colors.gold, fontFamily: theme.fonts.body }]}>
                      agora
                    </Text>
                  ) : null}
                </Pressable>
              ))}
            </View>
          ))}
        </ScrollView>
      ) : (
        <>
          <ScrollView
            style={styles.fill}
            contentContainerStyle={[styles.prayerContent, { paddingBottom: navigationHeight }]}
            showsVerticalScrollIndicator={false}>
            <PrayerStepView step={currentStep} progress={progress} onAdvance={next} />
          </ScrollView>
          {repeated ? (
            <View style={styles.beadWrap}>
              <BeadCounter count={currentStep.repetitionCount} current={progress.repeatIndex} />
            </View>
          ) : null}
          <PrayerNavigation
            canGoPrevious={!session.atBeginning}
            hint={hint}
            nextLabel={session.atEnd ? 'Concluir' : 'Seguinte'}
            onPrevious={session.goPrevious}
            onNext={next}
            onLayout={({ nativeEvent }) => setNavigationHeight(nativeEvent.layout.height)}
          />
        </>
      )}
    </SacredScreen>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    minHeight: 0,
  },
  prayerContent: {
    flexGrow: 1,
  },
  beadWrap: {
    paddingHorizontal: 24,
  },
  indexContent: {
    paddingHorizontal: 26,
  },
  indexHelp: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 6,
    marginBottom: 14,
    textAlign: 'center',
  },
  indexSection: {
    marginBottom: 14,
  },
  indexTitleRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 11,
    marginBottom: 4,
  },
  indexSectionTitle: {
    flexShrink: 1,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
    lineHeight: 16,
    minWidth: 0,
    textTransform: 'uppercase',
  },
  indexRule: {
    flex: 1,
    height: 1,
    marginTop: 8,
    minWidth: 18,
  },
  indexItem: {
    alignItems: 'center',
    borderRadius: 3,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  dot: {
    borderRadius: 2.5,
    height: 5,
    width: 5,
  },
  indexItemText: {
    flex: 1,
    fontSize: 18,
  },
  now: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
