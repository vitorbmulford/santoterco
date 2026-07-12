import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BilingualText } from '@/src/components/prayer/BilingualText';
import { MysteryImage } from '@/src/components/prayer/MysteryImage';
import type { PrayerProgress, PrayerStep } from '@/src/domain/rosary/types';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

type PrayerStepViewProps = {
  step: PrayerStep;
  progress: PrayerProgress;
  onAdvance: () => void;
};

export function PrayerStepView({ step, progress, onAdvance }: PrayerStepViewProps) {
  const theme = useSacredTheme();

  return (
    <Pressable onPress={onAdvance} style={styles.root}>
      <MysteryImage
        source={step.artwork?.image ?? step.mystery?.image}
        focus={step.artwork?.imageFocus ?? step.mystery?.imageFocus}
      />

      <View style={styles.body}>
        <Text style={[styles.kicker, { color: theme.colors.wine, fontFamily: theme.fonts.body }]}>
          {step.kicker}
        </Text>
        <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
          {step.title.pt}
        </Text>
        <Text style={[styles.latinTitle, { color: theme.colors.gold, fontFamily: theme.fonts.display }]}>
          {step.title.la}
        </Text>

        {step.type === 'mysteryIntro' ? (
          <View style={styles.intro}>
            <Text style={[styles.sectionLabel, { color: theme.colors.blue }]}>Introdução</Text>
            <BilingualText text={step.introduction} latinSize={19} portugueseSize={15} />

            <View style={[styles.rule, { backgroundColor: theme.colors.rule }]} />
            <Text style={[styles.sectionLabel, { color: theme.colors.blue }]}>Palavra de Deus</Text>
            <BilingualText text={step.scripture} latinSize={20} portugueseSize={15} />
            <Text style={[styles.reference, { color: theme.colors.blue, fontFamily: theme.fonts.body }]}>
              {step.biblicalReference}
            </Text>

            <View style={[styles.rule, { backgroundColor: theme.colors.rule }]} />
            <Text style={[styles.sectionLabel, { color: theme.colors.wine }]}>Meditação</Text>
            <BilingualText text={step.meditation} latinSize={18} portugueseSize={15} />
          </View>
        ) : null}

        {step.type === 'prayer' || step.type === 'repeatedPrayer' ? (
          <BilingualText text={step.text} />
        ) : null}

        {step.type === 'reflection' ? <BilingualText text={step.text} latinSize={19} portugueseSize={16} /> : null}

        {step.type === 'litany' ? (
          <View style={styles.litany}>
            <Text style={[styles.response, { color: theme.colors.blue, fontFamily: theme.fonts.body }]}>
              ℞. {step.response.pt}
            </Text>
            {step.invocations.map((invocation, index) => (
              <View key={`${invocation.la}-${index}`} style={[styles.invocation, { borderBottomColor: theme.colors.rule }]}>
                <Text style={[styles.invocationLatin, { color: theme.colors.wine, fontFamily: theme.fonts.display }]}>
                  {invocation.la}
                </Text>
                <Text style={[styles.invocationPortuguese, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
                  {invocation.pt}
                </Text>
              </View>
            ))}
          </View>
        ) : null}

        {step.type === 'repeatedPrayer' ? (
          <Text style={[styles.repeatStatus, { color: theme.colors.hint, fontFamily: theme.fonts.body }]}>
            {progress.repeatIndex + 1} / {step.repetitionCount}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 12,
  },
  body: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  kicker: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 34,
    marginTop: 7,
    textAlign: 'center',
  },
  latinTitle: {
    fontSize: 17,
    fontStyle: 'italic',
    marginTop: 2,
    textAlign: 'center',
  },
  intro: {
    alignItems: 'center',
    width: '100%',
  },
  sectionLabel: {
    fontSize: 10.5,
    fontWeight: '700',
    letterSpacing: 2.5,
    marginTop: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  rule: {
    height: 1,
    marginTop: 18,
    width: '100%',
  },
  reference: {
    fontSize: 11.5,
    letterSpacing: 2,
    marginTop: 9,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  litany: {
    marginTop: 16,
    width: '100%',
  },
  response: {
    fontSize: 12,
    fontStyle: 'italic',
    letterSpacing: 1.5,
    marginBottom: 12,
    textAlign: 'center',
  },
  invocation: {
    borderBottomWidth: 1,
    paddingVertical: 7,
  },
  invocationLatin: {
    fontSize: 18,
  },
  invocationPortuguese: {
    fontSize: 14,
    marginTop: 1,
  },
  repeatStatus: {
    fontSize: 12,
    fontStyle: 'italic',
    letterSpacing: 1,
    marginTop: 16,
  },
});
