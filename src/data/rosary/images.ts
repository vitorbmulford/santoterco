import type { ImageSourcePropType } from 'react-native';

import type { MysterySetId } from '@/src/domain/rosary/types';

type MysteryImageMap = Record<MysterySetId, ImageSourcePropType[]>;

export const mysteryImages: MysteryImageMap = {
  joyful: [
    require('../../../assets/images/01_misterios_gozosos/01_anunciacao.jpg'),
    require('../../../assets/images/01_misterios_gozosos/02_visitacao.jpg'),
    require('../../../assets/images/01_misterios_gozosos/03_nascimento.jpg'),
    require('../../../assets/images/01_misterios_gozosos/04_apresentacao_no_templo.jpg'),
    require('../../../assets/images/01_misterios_gozosos/05_encontro_no_templo.jpg'),
  ],
  luminous: [
    require('../../../assets/images/02_misterios_luminosos/01_batismo_de_jesus.jpg'),
    require('../../../assets/images/02_misterios_luminosos/02_bodas_de_cana.jpg'),
    require('../../../assets/images/02_misterios_luminosos/03_proclamacao_do_reino.jpg'),
    require('../../../assets/images/02_misterios_luminosos/04_transfiguracao.jpg'),
    require('../../../assets/images/02_misterios_luminosos/05_instituicao_da_eucaristia.jpg'),
  ],
  sorrowful: [
    require('../../../assets/images/03_misterios_dolorosos/01_agonia_no_horto.jpg'),
    require('../../../assets/images/03_misterios_dolorosos/02_flagelacao.jpg'),
    require('../../../assets/images/03_misterios_dolorosos/03_coroacao_de_espinhos.jpg'),
    require('../../../assets/images/03_misterios_dolorosos/04_caminho_do_calvario.jpg'),
    require('../../../assets/images/03_misterios_dolorosos/05_crucificacao.jpg'),
  ],
  glorious: [
    require('../../../assets/images/04_misterios_gloriosos/01_ressurreicao.jpg'),
    require('../../../assets/images/04_misterios_gloriosos/02_ascensao.jpg'),
    require('../../../assets/images/04_misterios_gloriosos/03_pentecostes.jpg'),
    require('../../../assets/images/04_misterios_gloriosos/04_assuncao_de_maria.jpg'),
    require('../../../assets/images/04_misterios_gloriosos/05_coroacao_de_maria.jpg'),
  ],
};

export const complementaryImages = {
  opening: require('../../../assets/images/complementares/01-abertura-cristo-pantocrator.jpg'),
  signOfCross: require('../../../assets/images/complementares/02-sinal-da-cruz-cristo-crucificado.jpg'),
  offering: require('../../../assets/images/complementares/03-oferecimento-cristo-no-getsemani.jpg'),
  creed: require('../../../assets/images/complementares/04-credo-disputa-do-santissimo-sacramento-rafael.jpg'),
  openingHailMarys: require('../../../assets/images/complementares/06-tres-ave-marias-anunciacao-fra-angelico.jpg'),
  openingGlory: require('../../../assets/images/complementares/07-gloria-santissima-trindade-masaccio.jpg'),
  final: require('../../../assets/images/complementares/08-conclusao-caravaggio-ceia-em-emaus.jpg'),
  thanksgiving: require('../../../assets/images/complementares/09-agradecimento-ceia-em-emaus-rembrandt.jpg'),
  hailHolyQueen: require('../../../assets/images/complementares/10-salve-rainha-coroacao-da-virgem-fra-angelico.jpg'),
  litany: require('../../../assets/images/complementares/11-ladainha-madonna-della-misericordia.jpg'),
  underYourProtection: require('../../../assets/images/complementares/12-sub-tuum-praesidium-nossa-senhora-do-perpetuo-socorro.jpg'),
} satisfies Record<string, ImageSourcePropType>;
