import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderAction, ScreenHeader } from '@/src/components/layout/ScreenHeader';
import { SacredScreen } from '@/src/components/layout/SacredScreen';
import { MysterySetCard } from '@/src/components/mysteries/MysterySetCard';
import { getMysteryForWeekday } from '@/src/domain/rosary/getMysteryForWeekday';
import { rosaryTargets } from '@/src/domain/rosary/targets';
import { useSacredTheme } from '@/src/hooks/useSacredTheme';

export default function MysterySelectionScreen() {
  const theme = useSacredTheme();
  const today = getMysteryForWeekday();

  return (
    <SacredScreen>
      <ScreenHeader
        title="Mistérios"
        left={<HeaderAction label="‹" onPress={() => router.back()} />}
        right={<View style={styles.headerSpacer} />}
      />

      <Text style={[styles.title, { color: theme.colors.ink, fontFamily: theme.fonts.display }]}>
        Escolher o Terço
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.muted, fontFamily: theme.fonts.body }]}>
        Selecione os mistérios ou reze o Rosário completo.
      </Text>

      <View style={styles.list}>
        {rosaryTargets.map((target) => (
          <MysterySetCard
            key={target.id}
            roman={target.roman}
            title={target.title.pt}
            subtitle={target.subtitle.pt}
            daysLabel={target.daysLabel}
            today={target.id === today.set.id}
            onPress={() =>
              router.push({
                pathname: '/mysteries/[setId]',
                params: { setId: target.id },
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
