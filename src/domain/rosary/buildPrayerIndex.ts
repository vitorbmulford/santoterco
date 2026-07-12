import type { PrayerProgress, PrayerStep } from '@/src/domain/rosary/types';

export type PrayerIndexSection = {
  id: string;
  title: string;
  artwork?: PrayerStep['artwork'];
  items: {
    stepIndex: number;
    label: string;
    current: boolean;
  }[];
};

export const buildPrayerIndex = (
  steps: PrayerStep[],
  progress: PrayerProgress,
): PrayerIndexSection[] => {
  const sections = new Map<string, PrayerIndexSection>();

  steps.forEach((step, stepIndex) => {
    const existing = sections.get(step.sectionId);
    const section =
      existing ??
      ({
        id: step.sectionId,
        title: step.sectionTitle,
        artwork: step.artwork ?? step.mystery,
        items: [],
      } satisfies PrayerIndexSection);

    section.items.push({
      stepIndex,
      label: step.label,
      current: stepIndex === progress.stepIndex,
    });

    sections.set(step.sectionId, section);
  });

  return Array.from(sections.values());
};
