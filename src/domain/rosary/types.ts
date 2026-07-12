import type { ImageSourcePropType } from 'react-native';

export type Locale = 'la' | 'pt';

export type BilingualText = Record<Locale, string>;

export type MysterySetId = 'joyful' | 'luminous' | 'sorrowful' | 'glorious';

export type RosaryTargetId = MysterySetId | 'rosary';

export type Artwork = {
  image: ImageSourcePropType;
  imageFocus?: { x: number; y: number };
};

export type PrayerKey =
  | 'signOfCross'
  | 'offering'
  | 'creed'
  | 'ourFather'
  | 'hailMary'
  | 'gloryBe'
  | 'fatima'
  | 'thanksgiving'
  | 'hailHolyQueen'
  | 'underYourProtection';

export type Mystery = {
  id: string;
  setId: MysterySetId;
  setTitle: string;
  order: number;
  title: BilingualText;
  introduction: BilingualText;
  biblicalReference: string;
  scripture: BilingualText;
  meditation: BilingualText;
  image: ImageSourcePropType;
  imageFocus?: { x: number; y: number };
};

export type MysterySet = {
  id: MysterySetId;
  roman: string;
  title: BilingualText;
  subtitle: BilingualText;
  daysLabel: string;
  weekdayIndexes: number[];
  mysteries: Mystery[];
};

export type MysteryContext = Pick<
  Mystery,
  | 'id'
  | 'setId'
  | 'setTitle'
  | 'order'
  | 'title'
  | 'image'
  | 'imageFocus'
  | 'biblicalReference'
>;

type BasePrayerStep = {
  id: string;
  sectionId: string;
  sectionTitle: string;
  label: string;
  kicker: string;
  title: BilingualText;
  mystery?: MysteryContext;
  artwork?: Artwork;
};

export type SimplePrayerStep = BasePrayerStep & {
  type: 'prayer';
  text: BilingualText;
};

export type ReflectionStep = BasePrayerStep & {
  type: 'reflection';
  text: BilingualText;
};

export type RepeatedPrayerStep = BasePrayerStep & {
  type: 'repeatedPrayer';
  text: BilingualText;
  repetitionCount: number;
};

export type MysteryIntroStep = BasePrayerStep & {
  type: 'mysteryIntro';
  introduction: BilingualText;
  scripture: BilingualText;
  biblicalReference: string;
  meditation: BilingualText;
};

export type LitanyStep = BasePrayerStep & {
  type: 'litany';
  response: BilingualText;
  invocations: BilingualText[];
};

export type PrayerStep =
  | SimplePrayerStep
  | ReflectionStep
  | RepeatedPrayerStep
  | MysteryIntroStep
  | LitanyStep;

export type RosarySequence = {
  targetId: RosaryTargetId;
  title: BilingualText;
  subtitle: BilingualText;
  steps: PrayerStep[];
};

export type PrayerProgress = {
  stepIndex: number;
  repeatIndex: number;
};
