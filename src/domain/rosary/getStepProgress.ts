import type { PrayerProgress, PrayerStep } from '@/src/domain/rosary/types';

export const getStepProgress = (steps: PrayerStep[], progress: PrayerProgress) => {
  const totalUnits = steps.reduce(
    (sum, step) => sum + (step.type === 'repeatedPrayer' ? step.repetitionCount : 1),
    0,
  );

  const completedBeforeStep = steps
    .slice(0, progress.stepIndex)
    .reduce((sum, step) => sum + (step.type === 'repeatedPrayer' ? step.repetitionCount : 1), 0);

  const currentStep = steps[progress.stepIndex];
  const currentUnit =
    currentStep?.type === 'repeatedPrayer'
      ? Math.min(progress.repeatIndex, currentStep.repetitionCount - 1)
      : 0;

  return Math.min(1, Math.max(0, (completedBeforeStep + currentUnit) / Math.max(1, totalUnits - 1)));
};
