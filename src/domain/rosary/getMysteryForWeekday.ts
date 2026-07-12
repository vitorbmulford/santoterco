import { mysterySetById } from '@/src/data/rosary/mysterySets';
import type { MysterySet, MysterySetId } from '@/src/domain/rosary/types';

const weekdayToSet: MysterySetId[] = [
  'glorious',
  'joyful',
  'sorrowful',
  'glorious',
  'luminous',
  'sorrowful',
  'joyful',
];

const weekdayNames = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export const getMysteryForWeekday = (date = new Date()): { dayName: string; set: MysterySet } => {
  const weekday = date.getDay();
  return {
    dayName: weekdayNames[weekday],
    set: mysterySetById[weekdayToSet[weekday]],
  };
};
