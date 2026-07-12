import { fullRosaryMeta, mysterySets } from '@/src/data/rosary/mysterySets';
import type { RosaryTargetId } from '@/src/domain/rosary/types';

export const rosaryTargets = [
  ...mysterySets.map((set) => ({
    id: set.id,
    roman: set.roman,
    title: set.title,
    subtitle: set.subtitle,
    daysLabel: set.daysLabel,
    mysteryCount: set.mysteries.length,
  })),
  {
    id: fullRosaryMeta.id,
    roman: fullRosaryMeta.roman,
    title: fullRosaryMeta.title,
    subtitle: fullRosaryMeta.subtitle,
    daysLabel: fullRosaryMeta.daysLabel,
    mysteryCount: 20,
  },
] as const;

export const isRosaryTargetId = (value: string): value is RosaryTargetId =>
  rosaryTargets.some((target) => target.id === value);
