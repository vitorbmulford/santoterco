import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderAction, ScreenHeader } from '@/src/components/layout/ScreenHeader';
import { SacredScreen } from '@/src/components/layout/SacredScreen';
import { MysteryPreviewItem } from '@/src/components/mysteries/MysteryPreviewItem';
import { SacredButton } from '@/src/components/ui/SacredButton';
import { fullRosaryMeta, mysterySetById, mysterySets } from '@/src/data/rosary/mysterySets';
import { buildRosarySequence } from '@/src/domain/rosary/buildRosarySequence';
import { isRosaryTargetId } from '@/src/domain/rosary/targets';
import type { Mystery, RosaryTargetId } from '@/src/domain/rosary/types';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

const ordinals = [
  'Primeiro Mistério',
  'Segundo Mistério',
  'Terceiro Mistério',
  'Quarto Mistério',
  'Quinto Mistério',
];

export default function MysteryOverviewScreen() {
  const theme = useSacredTheme();
  const params = useLocalSearchParams<{ setId?: string }>();
  const rawSetId = typeof params.setId === 'string' ? params.setId : '';
  const targetId: RosaryTargetId = isRosaryTargetId(rawSetId) ? rawSetId : 'joyful';
  const fullRosary = targetId === 'rosary';
  const sequence = buildRosarySequence(targetId);
  const sets = fullRosary ? mysterySets : [mysterySetById[targetId]];
  const title = fullRosary ? fullRosaryMeta.title.pt : sets[0].title.pt;
  const subtitle = fullRosary ? fullRosaryMeta.subtitle.pt : sets[0].subtitle.pt;

  const openPrayer = (mystery?: Mystery) => {
    const stepIndex = mystery
      ? sequence.steps.findIndex((step) => step.type === 'mysteryIntro' && step.mystery?.id === mystery.id)
      : 0;

    router.push({
      pathname: '/prayer/[setId]',
      params: { setId: targetId, step: String(Math.max(0, stepIndex)) },
    } as any);
  };

  return (
    <SacredScreen>
      <ScreenHeader
        title={fullRosary ? 'Vinte Mistérios' : 'Cinco Mistérios'}
        left={<HeaderAction label="‹" onPress={() => router.back()} />}
        right={<View style={styles.headerSpacer} />}
      />

      <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
        {subtitle}
      </Text>

      <View style={styles.buttonWrap}>
        <SacredButton onPress={() => openPrayer()}>
          {fullRosary ? 'Rezar o Rosário' : 'Rezar o Terço completo'}
        </SacredButton>
      </View>

      <Text style={[styles.orText, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
        — ou entrar num mistério —
      </Text>

      <View>
        {sets.map((set) => (
          <View key={set.id} style={styles.sectionBlock}>
            {fullRosary ? (
              <View style={styles.sectionHeader}>
                <View style={[styles.sectionRule, { backgroundColor: theme.colors.rule }]} />
                <Text
                  style={[
                    styles.sectionTitle,
                    { color: theme.colors.wine, fontFamily: theme.fonts.body },
                  ]}>
                  {set.title.pt}
                </Text>
                <Text
                  style={[
                    styles.sectionSubtitle,
                    { color: theme.colors.muted, fontFamily: theme.fonts.body },
                  ]}>
                  {set.subtitle.pt}
                </Text>
              </View>
            ) : null}

            {set.mysteries.map((mystery) => (
              <MysteryPreviewItem
                key={mystery.id}
                mystery={mystery}
                label={ordinals[mystery.order - 1]}
                onPress={() => openPrayer(mystery)}
              />
            ))}
          </View>
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
    fontSize: 32,
    fontWeight: '600',
    marginTop: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14.5,
    fontStyle: 'italic',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonWrap: {
    alignSelf: 'center',
    marginBottom: 8,
    minWidth: 240,
  },
  orText: {
    fontSize: 12,
    letterSpacing: 2,
    marginVertical: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  sectionBlock: {
    marginTop: 4,
  },
  sectionHeader: {
    marginBottom: 6,
    paddingTop: 8,
  },
  sectionRule: {
    height: 1,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2.8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  sectionSubtitle: {
    fontSize: 13.5,
    fontStyle: 'italic',
    marginTop: 4,
    textAlign: 'center',
  },
});
