import { mysteryImages } from '@/src/data/rosary/images';
import type { Mystery, MysterySet, MysterySetId } from '@/src/domain/rosary/types';

const setTitles: Record<MysterySetId, { title: string; latin: string }> = {
  joyful: { title: 'Mistérios Gozosos', latin: 'Mysteria Gaudiosa' },
  luminous: { title: 'Mistérios Luminosos', latin: 'Mysteria Luminosa' },
  sorrowful: { title: 'Mistérios Dolorosos', latin: 'Mysteria Dolorosa' },
  glorious: { title: 'Mistérios Gloriosos', latin: 'Mysteria Gloriosa' },
};

const makeMystery = (
  setId: MysterySetId,
  order: number,
  data: Omit<Mystery, 'id' | 'setId' | 'setTitle' | 'order' | 'image'>,
): Mystery => ({
  id: `${setId}-${order}`,
  setId,
  setTitle: setTitles[setId].title,
  order,
  image: mysteryImages[setId][order - 1],
  ...data,
});

const joyfulMysteries = [
  makeMystery('joyful', 1, {
    title: { la: 'Annuntiatio Domini', pt: 'A Anunciação' },
    introduction: {
      la: 'In primo mysterio gaudioso contemplamur Annuntiationem Domini.',
      pt: 'No primeiro mistério gozoso contemplamos a Anunciação do Senhor.',
    },
    biblicalReference: 'Lc 1, 30-31',
    scripture: {
      la: 'Et ait angelus ei: Ne timeas, Maria, invenisti enim gratiam apud Deum. Ecce concipies in utero, et paries filium, et vocabis nomen eius Iesum.',
      pt: 'E o anjo lhe disse: Não temas, Maria, pois achaste graça diante de Deus. Eis que conceberás e darás à luz um filho, e lhe porás o nome de Jesus.',
    },
    meditation: {
      la: 'In silentio Nazareth Verbum caro fit in purissimo Virginis sinu. Contemplemur humilitatem et fiat Mariae, petamusque gratiam voluntatem Dei corde libero suscipiendi.',
      pt: 'No silêncio de Nazaré, o Verbo se faz carne no seio puríssimo da Virgem. Contemplemos a humildade e o sim de Maria, e peçamos a graça de acolher a vontade de Deus.',
    },
    imageFocus: { x: 50, y: 28 },
  }),
  makeMystery('joyful', 2, {
    title: { la: 'Visitatio Mariae', pt: 'A Visitação' },
    introduction: {
      la: 'In secundo mysterio gaudioso contemplamur Visitationem Beatae Mariae Virginis.',
      pt: 'No segundo mistério gozoso contemplamos a Visitação de Nossa Senhora.',
    },
    biblicalReference: 'Lc 1, 41-42',
    scripture: {
      la: 'Ut audivit Elisabeth salutationem Mariae, exsultavit infans in utero eius; et repleta est Spiritu Sancto Elisabeth, et exclamavit: Benedicta tu inter mulieres, et benedictus fructus ventris tui.',
      pt: 'Ao ouvir Isabel a saudação de Maria, o menino saltou em seu ventre; Isabel ficou cheia do Espírito Santo e exclamou: Bendita és tu entre as mulheres, e bendito é o fruto do teu ventre.',
    },
    meditation: {
      la: 'Maria festinat ad serviendum, Christum in corde et in utero portans. Contemplemur caritatem promptam, quae se dona facit antequam petatur.',
      pt: 'Maria se apressa a servir, levando consigo o Salvador. Contemplemos a caridade pronta, que se oferece antes mesmo de ser chamada.',
    },
    imageFocus: { x: 50, y: 22 },
  }),
  makeMystery('joyful', 3, {
    title: { la: 'Nativitas Domini', pt: 'O Nascimento de Jesus' },
    introduction: {
      la: 'In tertio mysterio gaudioso contemplamur Nativitatem Domini nostri Iesu Christi.',
      pt: 'No terceiro mistério gozoso contemplamos o Nascimento de Nosso Senhor Jesus Cristo.',
    },
    biblicalReference: 'Lc 2, 6-7',
    scripture: {
      la: 'Factum est autem, cum essent ibi, impleti sunt dies ut pareret. Et peperit filium suum primogenitum, et pannis eum involvit, et reclinavit eum in praesepio.',
      pt: 'Enquanto ali estavam, completaram-se os dias, e Maria deu à luz o seu filho primogênito, envolveu-o em panos e o deitou numa manjedoura.',
    },
    meditation: {
      la: 'Rex regum in paupertate praesepii nascitur. Adoremus Deum parvulum, et petamus simplicitatem cordis ac libertatem ab omni vana gloria.',
      pt: 'O Rei dos reis nasce na pobreza do presépio. Adoremos Deus feito menino e peçamos simplicidade de coração e desapego de toda vanglória.',
    },
    imageFocus: { x: 50, y: 42 },
  }),
  makeMystery('joyful', 4, {
    title: { la: 'Praesentatio Domini', pt: 'A Apresentação no Templo' },
    introduction: {
      la: 'In quarto mysterio gaudioso contemplamur Praesentationem Domini in templo.',
      pt: 'No quarto mistério gozoso contemplamos a Apresentação do Senhor no Templo.',
    },
    biblicalReference: 'Lc 2, 22',
    scripture: {
      la: 'Et postquam impleti sunt dies purgationis eorum secundum legem Moysi, tulerunt illum in Ierusalem, ut sisterent eum Domino.',
      pt: 'Cumpridos os dias da purificação, segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor.',
    },
    meditation: {
      la: 'Maria et Ioseph Filium Patri offerunt. Discamus obedientiam fidei, ut tota vita nostra fiat oblatio placens Deo.',
      pt: 'Maria e José oferecem o Menino ao Pai. Aprendamos a obediência da fé, para que toda a nossa vida se torne oferta agradável a Deus.',
    },
    imageFocus: { x: 50, y: 30 },
  }),
  makeMystery('joyful', 5, {
    title: { la: 'Inventio Iesu in Templo', pt: 'O Encontro no Templo' },
    introduction: {
      la: 'In quinto mysterio gaudioso contemplamur inventionem Iesu in templo.',
      pt: 'No quinto mistério gozoso contemplamos o Encontro do Menino Jesus no Templo.',
    },
    biblicalReference: 'Lc 2, 46',
    scripture: {
      la: 'Et factum est, post triduum invenerunt illum in templo sedentem in medio doctorum, audientem illos et interrogantem eos.',
      pt: 'Depois de três dias, encontraram-no no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os.',
    },
    meditation: {
      la: 'Maria et Ioseph Iesum quaerunt donec inveniant. Petamus perseverantiam quaerendi Dominum, etiam cum eius praesentia nobis abscondita videtur.',
      pt: 'Maria e José buscam Jesus até encontrá-lo. Peçamos perseverança para procurar o Senhor, mesmo quando sua presença parece escondida.',
    },
    imageFocus: { x: 50, y: 30 },
  }),
];

const luminousMysteries = [
  makeMystery('luminous', 1, {
    title: { la: 'Baptisma Iesu in Iordane', pt: 'O Batismo de Jesus no Jordão' },
    introduction: { la: 'In primo mysterio luminoso contemplamur Baptisma Domini in Iordane.', pt: 'No primeiro mistério luminoso contemplamos o Batismo do Senhor no Jordão.' },
    biblicalReference: 'Mt 3, 16-17',
    scripture: { la: 'Baptizatus autem Iesus confestim ascendit de aqua; et ecce aperti sunt ei caeli, et vidit Spiritum Dei descendentem sicut columbam. Et vox de caelis dixit: Hic est Filius meus dilectus.', pt: 'Jesus, depois de batizado, saiu logo da água; e eis que se abriram os céus, e viu o Espírito de Deus descer. E uma voz dos céus dizia: Este é o meu Filho amado.' },
    meditation: { la: 'In Iordane Filius manifestatur, Spiritus descendit, Pater loquitur. Renovemus gratiam baptismi nostri et dignitatem filiorum Dei.', pt: 'No Jordão, o Filho é manifestado, o Espírito desce e o Pai fala. Renovemos a graça do nosso batismo e a dignidade de filhos de Deus.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('luminous', 2, {
    title: { la: 'Nuptiae Canae', pt: 'As Bodas de Caná' },
    introduction: { la: 'In secundo mysterio luminoso contemplamur primum signum Iesu in Cana Galilaeae.', pt: 'No segundo mistério luminoso contemplamos o primeiro sinal de Jesus nas Bodas de Caná.' },
    biblicalReference: 'Io 2, 5',
    scripture: { la: 'Dicit mater eius ministris: Quodcumque dixerit vobis, facite.', pt: 'Disse sua mãe aos serventes: Fazei tudo o que ele vos disser.' },
    meditation: { la: 'Maria necessitatem videt et ad Filium ducit. Discamus eius consilium: facere quidquid Christus iubet.', pt: 'Maria vê a necessidade e conduz todos ao Filho. Aprendamos seu conselho: fazer tudo o que Cristo mandar.' },
    imageFocus: { x: 50, y: 30 },
  }),
  makeMystery('luminous', 3, {
    title: { la: 'Praedicatio Regni Dei', pt: 'O Anúncio do Reino' },
    introduction: { la: 'In tertio mysterio luminoso contemplamur praedicationem Regni Dei et invitationem ad conversionem.', pt: 'No terceiro mistério luminoso contemplamos o anúncio do Reino de Deus e o convite à conversão.' },
    biblicalReference: 'Mc 1, 15',
    scripture: { la: 'Impletum est tempus, et appropinquavit regnum Dei; paenitemini et credite Evangelio.', pt: 'Completou-se o tempo, e o Reino de Deus está próximo; convertei-vos e crede no Evangelho.' },
    meditation: { la: 'Vox Christi cor penetrat et vitam novam aperit. Petamus conversionem sinceram, quae Evangelium in opera mutat.', pt: 'A voz de Cristo penetra o coração e abre vida nova. Peçamos conversão sincera, que transforma o Evangelho em obras.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('luminous', 4, {
    title: { la: 'Transfiguratio Domini', pt: 'A Transfiguração' },
    introduction: { la: 'In quarto mysterio luminoso contemplamur Transfigurationem Domini in monte.', pt: 'No quarto mistério luminoso contemplamos a Transfiguração do Senhor no monte.' },
    biblicalReference: 'Mt 17, 2',
    scripture: { la: 'Et transfiguratus est ante eos; et resplenduit facies eius sicut sol, vestimenta autem eius facta sunt alba sicut lux.', pt: 'E transfigurou-se diante deles; seu rosto brilhou como o sol, e suas vestes tornaram-se brancas como a luz.' },
    meditation: { la: 'Gloria Christi discipulos confortat ante passionem. Contemplemur lucem Domini, ut per crucem ad resurrectionem ambulemus.', pt: 'A glória de Cristo fortalece os discípulos antes da paixão. Contemplemos sua luz, para caminhar pela cruz rumo à ressurreição.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('luminous', 5, {
    title: { la: 'Institutio Eucharistiae', pt: 'A Instituição da Eucaristia' },
    introduction: { la: 'In quinto mysterio luminoso contemplamur institutionem Sanctissimae Eucharistiae.', pt: 'No quinto mistério luminoso contemplamos a instituição da Santíssima Eucaristia.' },
    biblicalReference: 'Lc 22, 19',
    scripture: { la: 'Et accepto pane, gratias egit, et fregit, et dedit eis dicens: Hoc est corpus meum, quod pro vobis datur; hoc facite in meam commemorationem.', pt: 'Tomando o pão, deu graças, partiu-o e deu-o a eles, dizendo: Isto é o meu corpo, que é dado por vós; fazei isto em memória de mim.' },
    meditation: { la: 'Christus se ipsum in cibum vitae tradit. Adoremus mysterium altaris et petamus cor eucharisticum, humile et gratum.', pt: 'Cristo entrega a si mesmo como alimento de vida. Adoremos o mistério do altar e peçamos um coração eucarístico, humilde e grato.' },
    imageFocus: { x: 50, y: 35 },
  }),
];

const sorrowfulMysteries = [
  makeMystery('sorrowful', 1, {
    title: { la: 'Agonia in Horto', pt: 'A Agonia no Horto' },
    introduction: { la: 'In primo mysterio doloroso contemplamur agoniam Iesu in horto Gethsemani.', pt: 'No primeiro mistério doloroso contemplamos a agonia de Jesus no Horto das Oliveiras.' },
    biblicalReference: 'Lc 22, 42',
    scripture: { la: 'Pater, si vis, transfer calicem istum a me; verumtamen non mea voluntas, sed tua fiat.', pt: 'Pai, se queres, afasta de mim este cálice; contudo, não se faça a minha vontade, mas a tua.' },
    meditation: { la: 'In nocte doloris Filius voluntati Patris se tradit. Petamus fiduciam quae etiam in angustiis dicit: fiat voluntas tua.', pt: 'Na noite da dor, o Filho se entrega à vontade do Pai. Peçamos confiança para dizer também nas angústias: seja feita a vossa vontade.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('sorrowful', 2, {
    title: { la: 'Flagellatio Domini', pt: 'A Flagelação' },
    introduction: { la: 'In secundo mysterio doloroso contemplamur flagellationem Domini nostri Iesu Christi.', pt: 'No segundo mistério doloroso contemplamos a flagelação de Nosso Senhor Jesus Cristo.' },
    biblicalReference: 'Io 19, 1',
    scripture: { la: 'Tunc ergo apprehendit Pilatus Iesum et flagellavit.', pt: 'Então Pilatos tomou Jesus e mandou flagelá-lo.' },
    meditation: { la: 'Corpus immaculatum Christi vulneratur pro peccatis nostris. Petamus puritatem cordis et paenitentiam veram.', pt: 'O corpo imaculado de Cristo é ferido por nossos pecados. Peçamos pureza de coração e verdadeira penitência.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('sorrowful', 3, {
    title: { la: 'Coronatio Spinis', pt: 'A Coroação de Espinhos' },
    introduction: { la: 'In tertio mysterio doloroso contemplamur coronationem spinis Domini.', pt: 'No terceiro mistério doloroso contemplamos a coroação de espinhos do Senhor.' },
    biblicalReference: 'Mt 27, 29',
    scripture: { la: 'Et plectentes coronam de spinis, posuerunt super caput eius, et arundinem in dextera eius.', pt: 'Tecendo uma coroa de espinhos, puseram-na sobre sua cabeça, e uma cana em sua mão direita.' },
    meditation: { la: 'Rex humilis irrisionem patitur et tacet. Petamus mansuetudinem, para que todo orgulho seja vencido pelo amor crucificado.', pt: 'O Rei humilde sofre a zombaria e permanece manso. Peçamos mansidão, para que todo orgulho seja vencido pelo amor crucificado.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('sorrowful', 4, {
    title: { la: 'Baiulatio Crucis', pt: 'O Caminho do Calvário' },
    introduction: { la: 'In quarto mysterio doloroso contemplamur Iesum crucem baiulantem ad Calvarium.', pt: 'No quarto mistério doloroso contemplamos Jesus carregando a cruz até o Calvário.' },
    biblicalReference: 'Io 19, 17',
    scripture: { la: 'Et baiulans sibi crucem, exivit in eum qui dicitur Calvariae locum, hebraice autem Golgotha.', pt: 'Carregando ele mesmo a cruz, saiu para o lugar chamado Calvário, em hebraico Gólgota.' },
    meditation: { la: 'Dominus sub pondere crucis ambulat et nos sequi docet. Petamus fortitudinem ferendi crucem cotidianam cum Maria.', pt: 'O Senhor caminha sob o peso da cruz e nos ensina a segui-lo. Peçamos força para levar a cruz cotidiana com Maria.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('sorrowful', 5, {
    title: { la: 'Crucifixio et Mors Domini', pt: 'A Crucificação e Morte' },
    introduction: { la: 'In quinto mysterio doloroso contemplamur crucifixionem et mortem Domini nostri Iesu Christi.', pt: 'No quinto mistério doloroso contemplamos a crucificação e morte de Nosso Senhor Jesus Cristo.' },
    biblicalReference: 'Lc 23, 46',
    scripture: { la: 'Et clamans voce magna Iesus ait: Pater, in manus tuas commendo spiritum meum. Et haec dicens exspiravit.', pt: 'Jesus deu um forte grito: Pai, em tuas mãos entrego o meu espírito. E, dizendo isso, expirou.' },
    meditation: { la: 'In cruce amor usque in finem revelatur. Stemus cum Maria iuxta Crucem, adorantes pretium salutis nostrae.', pt: 'Na cruz, o amor até o fim se revela. Permaneçamos com Maria junto à Cruz, adorando o preço da nossa salvação.' },
    imageFocus: { x: 50, y: 35 },
  }),
];

const gloriousMysteries = [
  makeMystery('glorious', 1, {
    title: { la: 'Resurrectio Domini', pt: 'A Ressurreição' },
    introduction: { la: 'In primo mysterio glorioso contemplamur resurrectionem Domini nostri Iesu Christi.', pt: 'No primeiro mistério glorioso contemplamos a ressurreição de Nosso Senhor Jesus Cristo.' },
    biblicalReference: 'Mt 28, 6',
    scripture: { la: 'Non est hic; surrexit enim, sicut dixit. Venite et videte locum ubi positus erat Dominus.', pt: 'Ele não está aqui; ressuscitou, como havia dito. Vinde ver o lugar onde o Senhor fora posto.' },
    meditation: { la: 'Christus resurgens mortem vincit et spem nostram renovat. Vivamus como filhos da luz, firmes na promessa da vida eterna.', pt: 'Cristo ressuscitado vence a morte e renova a nossa esperança. Vivamos como filhos da luz, firmes na promessa da vida eterna.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('glorious', 2, {
    title: { la: 'Ascensio Domini', pt: 'A Ascensão' },
    introduction: { la: 'In secundo mysterio glorioso contemplamur ascensionem Domini in caelum.', pt: 'No segundo mistério glorioso contemplamos a ascensão do Senhor aos céus.' },
    biblicalReference: 'Act 1, 9',
    scripture: { la: 'Et cum haec dixisset, videntibus illis, elevatus est, et nubes suscepit eum ab oculis eorum.', pt: 'Depois de dizer isso, foi elevado à vista deles, e uma nuvem o ocultou aos seus olhos.' },
    meditation: { la: 'Dominus ascendit, non ut nos deserat, sed ut nobis viam ad Patrem aperiat. Erigamus corda ad caelestia.', pt: 'O Senhor sobe aos céus, não para nos abandonar, mas para abrir-nos o caminho ao Pai. Elevemos o coração às coisas do alto.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('glorious', 3, {
    title: { la: 'Descensus Spiritus Sancti', pt: 'A Vinda do Espírito Santo' },
    introduction: { la: 'In tertio mysterio glorioso contemplamur descensum Spiritus Sancti super Apostolos et Mariam.', pt: 'No terceiro mistério glorioso contemplamos a vinda do Espírito Santo sobre os Apóstolos e Maria.' },
    biblicalReference: 'Act 2, 4',
    scripture: { la: 'Et repleti sunt omnes Spiritu Sancto, et coeperunt loqui variis linguis, prout Spiritus Sanctus dabat eloqui illis.', pt: 'Todos ficaram cheios do Espírito Santo e começaram a falar em outras línguas, conforme o Espírito lhes concedia expressar-se.' },
    meditation: { la: 'Spiritus Sanctus Ecclesiam accendit. Petamus dona eius, ut fides nostra fiat corajosa, ardens et missionaria.', pt: 'O Espírito Santo inflama a Igreja. Peçamos seus dons, para que nossa fé seja corajosa, ardente e missionária.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('glorious', 4, {
    title: { la: 'Assumptio Mariae', pt: 'A Assunção de Maria' },
    introduction: { la: 'In quarto mysterio glorioso contemplamur assumptionem Beatae Mariae Virginis in caelum.', pt: 'No quarto mistério glorioso contemplamos a assunção da Bem-Aventurada Virgem Maria ao céu.' },
    biblicalReference: 'Ap 12, 1',
    scripture: { la: 'Signum magnum apparuit in caelo: mulier amicta sole, et luna sub pedibus eius, et in capite eius corona stellarum duodecim.', pt: 'Apareceu no céu um grande sinal: uma mulher vestida de sol, tendo a lua debaixo dos pés e sobre a cabeça uma coroa de doze estrelas.' },
    meditation: { la: 'Maria, tota pulchra, assumitur ad gloriam. In ea videmus vocação final da Igreja e esperança do nosso corpo redimido.', pt: 'Maria, toda bela, é elevada à glória. Nela vemos a vocação final da Igreja e a esperança do nosso corpo redimido.' },
    imageFocus: { x: 50, y: 35 },
  }),
  makeMystery('glorious', 5, {
    title: { la: 'Coronatio Mariae', pt: 'A Coroação de Maria' },
    introduction: { la: 'In quinto mysterio glorioso contemplamur coronationem Mariae Reginae caeli et terrae.', pt: 'No quinto mistério glorioso contemplamos a coroação de Maria como Rainha do céu e da terra.' },
    biblicalReference: 'Ap 12, 1',
    scripture: { la: 'Et in capite eius corona stellarum duodecim.', pt: 'E sobre sua cabeça havia uma coroa de doze estrelas.' },
    meditation: { la: 'Mater Regis in gloria coronatur et pro nobis intercedit. Confidamus nos eius regali patrocinio et ducatui materno.', pt: 'A Mãe do Rei é coroada na glória e intercede por nós. Confiemo-nos ao seu patrocínio real e à sua condução materna.' },
    imageFocus: { x: 50, y: 35 },
  }),
];

export const mysterySets: MysterySet[] = [
  {
    id: 'joyful',
    roman: 'I',
    title: { la: setTitles.joyful.latin, pt: setTitles.joyful.title },
    subtitle: { la: 'Gaudium Incarnationis', pt: 'A alegria da Encarnação' },
    daysLabel: 'Segunda e Sábado',
    weekdayIndexes: [1, 6],
    mysteries: joyfulMysteries,
  },
  {
    id: 'luminous',
    roman: 'II',
    title: { la: setTitles.luminous.latin, pt: setTitles.luminous.title },
    subtitle: { la: 'Lux vitae publicae Christi', pt: 'A luz da vida pública de Cristo' },
    daysLabel: 'Quinta-feira',
    weekdayIndexes: [4],
    mysteries: luminousMysteries,
  },
  {
    id: 'sorrowful',
    roman: 'III',
    title: { la: setTitles.sorrowful.latin, pt: setTitles.sorrowful.title },
    subtitle: { la: 'Passio Domini', pt: 'A Paixão do Senhor' },
    daysLabel: 'Terça e Sexta',
    weekdayIndexes: [2, 5],
    mysteries: sorrowfulMysteries,
  },
  {
    id: 'glorious',
    roman: 'IV',
    title: { la: setTitles.glorious.latin, pt: setTitles.glorious.title },
    subtitle: { la: 'Gloria Resurrectionis', pt: 'A glória da Ressurreição' },
    daysLabel: 'Quarta e Domingo',
    weekdayIndexes: [0, 3],
    mysteries: gloriousMysteries,
  },
];

export const mysterySetById = Object.fromEntries(
  mysterySets.map((set) => [set.id, set]),
) as Record<MysterySetId, MysterySet>;

export const fullRosaryMeta = {
  id: 'rosary' as const,
  roman: '†',
  title: { la: 'Rosarium Integrum', pt: 'Rosário Completo' },
  subtitle: { la: 'Viginti mysteria', pt: 'Os vinte mistérios' },
  daysLabel: 'Os vinte mistérios',
};
