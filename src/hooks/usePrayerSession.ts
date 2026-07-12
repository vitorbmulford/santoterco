import { useMemo, useState } from 'react';

import { buildPrayerIndex } from '@/src/domain/rosary/buildPrayerIndex';
import { buildRosarySequence } from '@/src/domain/rosary/buildRosarySequence';
import { getStepProgress } from '@/src/domain/rosary/getStepProgress';
import type { PrayerProgress, RosaryTargetId } from '@/src/domain/rosary/types';

const initialProgress: PrayerProgress = {
  stepIndex: 0,
  repeatIndex: 0,
};

export const usePrayerSession = (targetId: RosaryTargetId, initial?: Partial<PrayerProgress>) => {
  const sequence = useMemo(() => buildRosarySequence(targetId), [targetId]);
  const [progress, setProgress] = useState<PrayerProgress>(() => ({
    stepIndex: initial?.stepIndex ?? initialProgress.stepIndex,
    repeatIndex: initial?.repeatIndex ?? initialProgress.repeatIndex,
  }));

  const currentStep = sequence.steps[progress.stepIndex] ?? sequence.steps[0];
  const ratio = getStepProgress(sequence.steps, progress);
  const index = buildPrayerIndex(sequence.steps, progress);
  const atBeginning = progress.stepIndex === 0 && progress.repeatIndex === 0;
  const atEnd =
    progress.stepIndex === sequence.steps.length - 1 &&
    (currentStep.type !== 'repeatedPrayer' ||
      progress.repeatIndex === currentStep.repetitionCount - 1);

  const goNext = () => {
    setProgress((current) => {
      const step = sequence.steps[current.stepIndex];

      if (step?.type === 'repeatedPrayer' && current.repeatIndex < step.repetitionCount - 1) {
        return { ...current, repeatIndex: current.repeatIndex + 1 };
      }

      if (current.stepIndex < sequence.steps.length - 1) {
        return { stepIndex: current.stepIndex + 1, repeatIndex: 0 };
      }

      return current;
    });
  };

  const goPrevious = () => {
    setProgress((current) => {
      if (current.repeatIndex > 0) {
        return { ...current, repeatIndex: current.repeatIndex - 1 };
      }

      if (current.stepIndex > 0) {
        const previousStep = sequence.steps[current.stepIndex - 1];
        return {
          stepIndex: current.stepIndex - 1,
          repeatIndex:
            previousStep?.type === 'repeatedPrayer' ? previousStep.repetitionCount - 1 : 0,
        };
      }

      return current;
    });
  };

  const jumpTo = (stepIndex: number) => {
    setProgress({
      stepIndex: Math.max(0, Math.min(stepIndex, sequence.steps.length - 1)),
      repeatIndex: 0,
    });
  };

  return {
    sequence,
    currentStep,
    progress,
    ratio,
    index,
    atBeginning,
    atEnd,
    goNext,
    goPrevious,
    jumpTo,
  };
};
