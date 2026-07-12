import { complementaryImages } from '@/src/data/rosary/images';
import { litanyInvocations, litanyResponse } from '@/src/data/rosary/litany';
import { fullRosaryMeta, mysterySetById, mysterySets } from '@/src/data/rosary/mysterySets';
import { prayers, prayerTitles } from '@/src/data/rosary/prayers';
import type {
  Artwork,
  BilingualText,
  Mystery,
  PrayerKey,
  PrayerStep,
  RosarySequence,
  RosaryTargetId,
} from '@/src/domain/rosary/types';

const openingSection = 'Abertura';
const finalSection = 'Conclusão';
const ordinals = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto'];
const roman = ['I', 'II', 'III', 'IV', 'V'];

const mysteryContext = (mystery: Mystery) => ({
  id: mystery.id,
  setId: mystery.setId,
  setTitle: mystery.setTitle,
  order: mystery.order,
  title: mystery.title,
  image: mystery.image,
  imageFocus: mystery.imageFocus,
  biblicalReference: mystery.biblicalReference,
});

const artwork = (image: Artwork['image'], imageFocus: Artwork['imageFocus'] = { x: 50, y: 35 }) => ({
  image,
  imageFocus,
});

const simplePrayer = (
  key: PrayerKey,
  id: string,
  sectionId: string,
  sectionTitle: string,
  label: string,
  mystery?: Mystery,
): PrayerStep => ({
  id,
  type: 'prayer',
  sectionId,
  sectionTitle,
  label,
  kicker: prayerTitles[key].pt,
  title: prayerTitles[key],
  text: prayers[key],
  mystery: mystery ? mysteryContext(mystery) : undefined,
  artwork: mystery ? mysteryContext(mystery) : undefined,
});

const repeatedPrayer = (
  key: PrayerKey,
  id: string,
  sectionId: string,
  sectionTitle: string,
  label: string,
  repetitionCount: number,
  mystery?: Mystery,
): PrayerStep => ({
  id,
  type: 'repeatedPrayer',
  sectionId,
  sectionTitle,
  label,
  kicker: prayerTitles[key].pt,
  title: prayerTitles[key],
  text: prayers[key],
  repetitionCount,
  mystery: mystery ? mysteryContext(mystery) : undefined,
  artwork: mystery ? mysteryContext(mystery) : undefined,
});

const reflection = (
  key: PrayerKey,
  id: string,
  sectionId: string,
  sectionTitle: string,
  label: string,
): PrayerStep => ({
  id,
  type: 'reflection',
  sectionId,
  sectionTitle,
  label,
  kicker: prayerTitles[key].pt,
  title: prayerTitles[key],
  text: prayers[key],
});

const withArtwork = (step: PrayerStep, image: Artwork['image'], imageFocus?: Artwork['imageFocus']): PrayerStep => ({
  ...step,
  artwork: artwork(image, imageFocus),
});

const mysteryTitle = (mystery: Mystery): BilingualText => ({
  la: mystery.title.la,
  pt: mystery.title.pt,
});

const mysterySectionTitle = (mystery: Mystery, rosaryMode: boolean) => {
  const prefix = rosaryMode ? mystery.setTitle.replace('Mistérios ', '') : '';
  const localOrdinal = `${roman[mystery.order - 1]} · ${mystery.title.pt}`;
  return prefix ? `${prefix} · ${localOrdinal}` : localOrdinal;
};

const mysteryKicker = (mystery: Mystery) => {
  const family = mystery.setTitle.replace('Mistérios ', 'Mistério ');
  return `${ordinals[mystery.order - 1]} ${family}`;
};

const buildMysteryBlock = (mystery: Mystery, rosaryMode: boolean): PrayerStep[] => {
  const sectionId = mystery.id;
  const sectionTitle = mysterySectionTitle(mystery, rosaryMode);
  const base = `${mystery.id}`;

  return [
    {
      id: `${base}-intro`,
      type: 'mysteryIntro',
      sectionId,
      sectionTitle,
      label: 'Introdução',
      kicker: mysteryKicker(mystery),
      title: mysteryTitle(mystery),
      mystery: mysteryContext(mystery),
      artwork: mysteryContext(mystery),
      introduction: mystery.introduction,
      scripture: mystery.scripture,
      biblicalReference: mystery.biblicalReference,
      meditation: mystery.meditation,
    },
    simplePrayer('ourFather', `${base}-our-father`, sectionId, sectionTitle, 'Pai-Nosso', mystery),
    repeatedPrayer('hailMary', `${base}-hail-mary`, sectionId, sectionTitle, '10 Ave-Marias', 10, mystery),
    simplePrayer('gloryBe', `${base}-glory`, sectionId, sectionTitle, 'Glória ao Pai', mystery),
    simplePrayer('fatima', `${base}-fatima`, sectionId, sectionTitle, 'Oração de Fátima', mystery),
  ];
};

export const buildRosarySequence = (targetId: RosaryTargetId): RosarySequence => {
  const isFullRosary = targetId === 'rosary';
  const selectedSets = isFullRosary ? mysterySets : [mysterySetById[targetId]];
  const mysteries = selectedSets.flatMap((set) => set.mysteries);

  const steps: PrayerStep[] = [
    withArtwork(
      simplePrayer('signOfCross', 'opening-sign-cross', 'opening', openingSection, 'Sinal da Cruz'),
      complementaryImages.signOfCross,
    ),
    withArtwork(
      reflection('offering', 'opening-offering', 'opening', openingSection, 'Oferecimento'),
      complementaryImages.offering,
    ),
    withArtwork(
      simplePrayer('creed', 'opening-creed', 'opening', openingSection, 'Credo'),
      complementaryImages.creed,
    ),
    withArtwork(
      simplePrayer('ourFather', 'opening-our-father', 'opening', openingSection, 'Pai-Nosso'),
      complementaryImages.opening,
    ),
    withArtwork(
      repeatedPrayer('hailMary', 'opening-three-hail-marys', 'opening', openingSection, '3 Ave-Marias', 3),
      complementaryImages.openingHailMarys,
    ),
    withArtwork(
      simplePrayer('gloryBe', 'opening-glory', 'opening', openingSection, 'Glória ao Pai'),
      complementaryImages.openingGlory,
    ),
    ...mysteries.flatMap((mystery) => buildMysteryBlock(mystery, isFullRosary)),
    withArtwork(
      reflection('thanksgiving', 'final-thanksgiving', 'final', finalSection, 'Agradecimento'),
      complementaryImages.thanksgiving,
    ),
    withArtwork(
      simplePrayer('hailHolyQueen', 'final-hail-holy-queen', 'final', finalSection, 'Salve-Rainha'),
      complementaryImages.hailHolyQueen,
    ),
    {
      id: 'final-litany',
      type: 'litany',
      sectionId: 'final',
      sectionTitle: finalSection,
      label: 'Ladainha de Nossa Senhora',
      kicker: 'Ladainha de Nossa Senhora',
      title: { la: 'Litaniae Lauretanae', pt: 'Ladainha de Loreto' },
      artwork: artwork(complementaryImages.litany),
      response: litanyResponse,
      invocations: litanyInvocations,
    },
    withArtwork(
      simplePrayer('underYourProtection', 'final-under-protection', 'final', finalSection, 'Orações Finais'),
      complementaryImages.underYourProtection,
    ),
  ];

  const title = isFullRosary ? fullRosaryMeta.title : selectedSets[0].title;
  const subtitle = isFullRosary ? fullRosaryMeta.subtitle : selectedSets[0].subtitle;

  return { targetId, title, subtitle, steps };
};
