import type { ImageSourcePropType } from 'react-native';

import { complementaryImages, mysteryImages } from '@/src/data/rosary/images';

export type GalleryCategoryId =
  | 'joyful'
  | 'luminous'
  | 'sorrowful'
  | 'glorious'
  | 'complementary';

export type GalleryArtwork = {
  id: string;
  categoryId: GalleryCategoryId;
  title: string;
  author: string;
  location: string;
  about: string;
  usage: string;
  image: ImageSourcePropType;
};

export type GalleryCategory = {
  id: GalleryCategoryId;
  title: string;
  subtitle: string;
  itemCount: number;
};

export const galleryItems: GalleryArtwork[] = [
  {
    id: 'joyful-1',
    categoryId: 'joyful',
    title: 'Anunciacao',
    author: 'Fra Angelico, c. 1433-1434',
    location: 'Museu Diocesano de Cortona, Italia',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima, Overview e Home do dia.',
    about:
      'Obra-prima do inicio do Renascimento italiano. O jardim com a expulsao de Adao e Eva contrasta com o sim de Maria, apresentando visualmente a redencao inaugurada pela nova Eva.',
    image: mysteryImages.joyful[0],
  },
  {
    id: 'joyful-2',
    categoryId: 'joyful',
    title: 'Visitacao',
    author: 'Domenico Ghirlandaio, 1491',
    location: 'Museu do Louvre, Paris, Franca',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'A troca de olhares e o gesto das maos destacam a alegria do encontro entre Maria e Isabel, com elegancia florentina e forte senso de presenca divina.',
    image: mysteryImages.joyful[1],
  },
  {
    id: 'joyful-3',
    categoryId: 'joyful',
    title: 'Triptico da Natividade',
    author: 'Hans Memling, c. 1470-1475',
    location: 'Museu Nacional de Arte Antiga, Lisboa, Portugal',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'A arte flamenga detalhista convida a uma meditacao intima sobre a pobreza da manjedoura e a realeza divina de Cristo.',
    image: mysteryImages.joyful[2],
  },
  {
    id: 'joyful-4',
    categoryId: 'joyful',
    title: 'Apresentacao de Jesus no Templo',
    author: 'Andrea Mantegna, c. 1465-1466',
    location: 'Gemaeldegalerie, Berlim, Alemanha',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Com composicao quase escultorica, a obra medita a obediencia a Lei e a profecia da paixao, com o Menino envolto em faixas que aludem ao seu futuro sepultamento.',
    image: mysteryImages.joyful[3],
  },
  {
    id: 'joyful-5',
    categoryId: 'joyful',
    title: 'Jesus entre os Doutores',
    author: 'William Holman Hunt, 1854-1860',
    location: 'Birmingham Museum and Art Gallery, Inglaterra',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'O realismo pre-rafaelita e a precisao historica reforcam o contraste entre a sabedoria divina do Menino Jesus e a perplexidade dos doutores.',
    image: mysteryImages.joyful[4],
  },
  {
    id: 'luminous-1',
    categoryId: 'luminous',
    title: 'Batismo de Cristo',
    author: 'Andrea del Verrocchio e Leonardo da Vinci, c. 1475',
    location: 'Galeria Uffizi, Florenca, Italia',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Famosa pela participacao do jovem Leonardo, a obra medita a manifestacao da Santissima Trindade com suavidade atmosferica e solenidade renascentista.',
    image: mysteryImages.luminous[0],
  },
  {
    id: 'luminous-2',
    categoryId: 'luminous',
    title: 'As Bodas de Cana',
    author: 'Paolo Veronese, 1563',
    location: 'Museu do Louvre, Paris, Franca',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Veronese transforma o milagre em um grandioso banquete veneziano, celebrando a alegria e o vinho novo do Reino de Deus.',
    image: mysteryImages.luminous[1],
  },
  {
    id: 'luminous-3',
    categoryId: 'luminous',
    title: 'O Sermao da Montanha',
    author: 'Carl Bloch, 1890',
    location: 'Museu Frederiksborg, Dinamarca',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'A composicao simples e didatica ressalta a autoridade do Mestre e a orientacao do Reino para o ceu e para a santidade.',
    image: mysteryImages.luminous[2],
  },
  {
    id: 'luminous-4',
    categoryId: 'luminous',
    title: 'A Transfiguracao',
    author: 'Rafael Sanzio, 1516-1520',
    location: 'Pinacoteca Vaticana, Vaticano',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Rafael une gloria celeste e sofrimento humano em dois niveis narrativos, fazendo desta imagem uma metafora visual poderosa da revelacao divina.',
    image: mysteryImages.luminous[3],
  },
  {
    id: 'luminous-5',
    categoryId: 'luminous',
    title: 'A Ultima Ceia',
    author: 'Leonardo da Vinci, 1495-1498',
    location: 'Igreja de Santa Maria delle Grazie, Milao, Italia',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'A perspectiva e a geometria convergem para Cristo no centro, tornando a obra um ponto alto da meditacao eucaristica.',
    image: mysteryImages.luminous[4],
  },
  {
    id: 'sorrowful-1',
    categoryId: 'sorrowful',
    title: 'Agonia no Getsemani',
    author: 'Andrea Mantegna, c. 1460',
    location: 'National Gallery, Londres, Inglaterra',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'A paisagem arida e o sono dos discipulos sublinham a profunda solidao humana de Cristo diante da paixao iminente.',
    image: mysteryImages.sorrowful[0],
  },
  {
    id: 'sorrowful-2',
    categoryId: 'sorrowful',
    title: 'Flagelacao de Cristo',
    author: 'Caravaggio, 1607',
    location: 'Musee des Beaux-Arts, Rouen, Franca',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'O tenebrismo radical de Caravaggio remove distrações e obriga o olhar a encarar o sofrimento fisico de Cristo.',
    image: mysteryImages.sorrowful[1],
  },
  {
    id: 'sorrowful-3',
    categoryId: 'sorrowful',
    title: 'Coroacao de Espinhos',
    author: 'Ticiano Vecellio, c. 1570-1576',
    location: 'Alte Pinakothek, Munique, Alemanha',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'A violencia palpavel da cena contrasta o poder humano passageiro com a realeza divina de Jesus coroado na humilhacao.',
    image: mysteryImages.sorrowful[2],
  },
  {
    id: 'sorrowful-4',
    categoryId: 'sorrowful',
    title: 'Cristo Carregando a Cruz',
    author: 'Hieronymus Bosch, c. 1510-1535',
    location: 'Museu de Belas Artes, Gante, Belgica',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Bosch povoa a tela de rostos grotescos e um caos moral que faz sobressair a serenidade de Cristo no caminho do Calvario.',
    image: mysteryImages.sorrowful[3],
  },
  {
    id: 'sorrowful-5',
    categoryId: 'sorrowful',
    title: 'Cristo Crucificado',
    author: 'Diego Velazquez, 1632',
    location: 'Museu do Prado, Madrid, Espanha',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'A composicao minimalista intensifica a solidao e o sacrificio total, com o Crucificado isolado contra um fundo negro absoluto.',
    image: mysteryImages.sorrowful[4],
  },
  {
    id: 'glorious-1',
    categoryId: 'glorious',
    title: 'Ressurreicao',
    author: 'Piero della Francesca, c. 1463-1465',
    location: 'Museu Civico de Sansepolcro, Italia',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Cristo se ergue como atleta divino sobre soldados adormecidos, em uma imagem monumental da vitoria sobre a morte.',
    image: mysteryImages.glorious[0],
  },
  {
    id: 'glorious-2',
    categoryId: 'glorious',
    title: 'Ascensao de Jesus',
    author: 'Giotto di Bondone, 1305',
    location: 'Capela Scrovegni, Padua, Italia',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Giotto une humanidade e comunidade em uma cena onde Maria e os apostolos contemplam a subida de Cristo aos ceus.',
    image: mysteryImages.glorious[1],
  },
  {
    id: 'glorious-3',
    categoryId: 'glorious',
    title: 'Pentecostes',
    author: 'El Greco, c. 1600',
    location: 'Museu do Prado, Madrid, Espanha',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Figuras alongadas, ceus inquietos e linguas de fogo traduzem visualmente a forca avassaladora do Espirito Santo.',
    image: mysteryImages.glorious[2],
  },
  {
    id: 'glorious-4',
    categoryId: 'glorious',
    title: 'Assuncao da Virgem',
    author: 'Bartolome Esteban Murillo, c. 1670',
    location: 'Museu Hermitage, Sao Petersburgo, Russia',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Maria sobe aos ceus cercada de anjos em um barroco doce e luminoso, numa expressao de alegria e triunfo.',
    image: mysteryImages.glorious[3],
  },
  {
    id: 'glorious-5',
    categoryId: 'glorious',
    title: 'Coroacao da Virgem',
    author: 'Diego Velazquez, c. 1641-1644',
    location: 'Museu do Prado, Madrid, Espanha',
    usage: 'Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.',
    about:
      'Uma rara pintura religiosa de Velazquez em que a Santissima Trindade coroa Maria com suavidade luminosa e senso de majestade.',
    image: mysteryImages.glorious[4],
  },
  {
    id: 'complementary-1',
    categoryId: 'complementary',
    title: 'Cristo Pantocrator',
    author: 'Mosaico Bizantino, seculo XII',
    location: 'Catedral de Monreale, Palermo, Italia',
    usage: 'Abertura, Pai-Nosso inicial, icone, splash screen e favicon.',
    about:
      'Representa Cristo como Senhor do Universo e define o tom de solenidade, fe e tradicao logo no primeiro contato com o app.',
    image: complementaryImages.opening,
  },
  {
    id: 'complementary-2',
    categoryId: 'complementary',
    title: 'Cristo Crucificado',
    author: 'Diego Velazquez, 1632',
    location: 'Museu do Prado, Madrid, Espanha',
    usage: 'Sinal da Cruz.',
    about:
      'A repeticao desta obra no Sinal da Cruz reforca que cada sinal feito pelo usuario e uma profissao de fe no sacrificio redentor de Cristo.',
    image: complementaryImages.signOfCross,
  },
  {
    id: 'complementary-3',
    categoryId: 'complementary',
    title: 'Cristo no Getsemani',
    author: 'Heinrich Hofmann, 1890',
    location: 'Museu Riverside, Nova Iorque, EUA',
    usage: 'Oferecimento do Terco.',
    about:
      'Mostra Jesus se entregando a vontade do Pai, tornando-se uma imagem apropriada para o oferecimento das oracoes do usuario.',
    image: complementaryImages.offering,
  },
  {
    id: 'complementary-4',
    categoryId: 'complementary',
    title: 'A Disputa do Santissimo Sacramento',
    author: 'Rafael Sanzio, 1509-1510',
    location: 'Museus Vaticanos, Vaticano',
    usage: 'Oracao do Credo.',
    about:
      'A articulacao entre o plano celeste e o terreno traduz visualmente a unidade da Igreja militante e triunfante professada no Credo.',
    image: complementaryImages.creed,
  },
  {
    id: 'complementary-6',
    categoryId: 'complementary',
    title: 'Anunciacao',
    author: 'Fra Angelico, c. 1438-1445',
    location: 'Convento de San Marco, Florenca, Italia',
    usage: '3 Ave-Marias iniciais.',
    about:
      'A simplicidade contemplativa da pintura feita para o convento dominicano combina com a invocacao inicial da Virgem Maria.',
    image: complementaryImages.openingHailMarys,
  },
  {
    id: 'complementary-7',
    categoryId: 'complementary',
    title: 'Santissima Trindade',
    author: 'Masaccio, c. 1426-1428',
    location: 'Igreja de Santa Maria Novella, Florenca, Italia',
    usage: 'Gloria ao Pai inicial.',
    about:
      'A obra retrata explicitamente as tres Pessoas da Trindade, com perspectiva inovadora e forte densidade teologica.',
    image: complementaryImages.openingGlory,
  },
  {
    id: 'complementary-8',
    categoryId: 'complementary',
    title: 'Ceia em Emaus',
    author: 'Caravaggio, 1601',
    location: 'National Gallery, Londres, Inglaterra',
    usage: 'Reserva estetica; atualmente nao utilizada em nenhum passo da UI.',
    about:
      'Caravaggio captura o instante do reconhecimento de Cristo ao partir o pao, com natureza-morta exuberante e grande tensao dramatica.',
    image: complementaryImages.final,
  },
  {
    id: 'complementary-9',
    categoryId: 'complementary',
    title: 'Ceia em Emaus',
    author: 'Rembrandt van Rijn, 1648',
    location: 'Museu do Louvre, Paris, Franca',
    usage: 'Oracao de Agradecimento.',
    about:
      'A penumbra intimista e a luz emanando do rosto de Cristo transformam a cena em uma meditacao sobre gratidao e reconhecimento da presenca divina.',
    image: complementaryImages.thanksgiving,
  },
  {
    id: 'complementary-10',
    categoryId: 'complementary',
    title: 'Coroacao da Virgem',
    author: 'Fra Angelico, c. 1434',
    location: 'Galeria Uffizi, Florenca, Italia',
    usage: 'Salve-Rainha.',
    about:
      'O grande painel dourado exalta a majestade celeste da Mae de Deus e traduz visualmente a linguagem da Salve-Rainha.',
    image: complementaryImages.hailHolyQueen,
  },
  {
    id: 'complementary-11',
    categoryId: 'complementary',
    title: 'Madona da Misericordia',
    author: 'Piero della Francesca, c. 1445-1462',
    location: 'Museu Civico de Sansepolcro, Italia',
    usage: 'Ladainha de Nossa Senhora.',
    about:
      'Maria abriga os fieis sob o manto, visualizando de forma direta os titulos de Refugio dos Pecadores e Auxilio dos Cristaos.',
    image: complementaryImages.litany,
  },
  {
    id: 'complementary-12',
    categoryId: 'complementary',
    title: 'Nossa Senhora do Perpetuo Socorro',
    author: 'Icone Bizantino, seculo XIII/XIV',
    location: 'Igreja de Santo Afonso, Roma, Italia',
    usage: 'Oracoes finais e Sub tuum praesidium.',
    about:
      'O icone concentra a confianca da Igreja na intercessao materna de Maria, perfeita para encerrar o fluxo do terco.',
    image: complementaryImages.underYourProtection,
  },
];

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'joyful',
    title: 'Mistérios Gozosos',
    subtitle: 'Obras do ciclo da infância de Cristo',
    itemCount: galleryItems.filter((item) => item.categoryId === 'joyful').length,
  },
  {
    id: 'luminous',
    title: 'Mistérios Luminosos',
    subtitle: 'Obras da vida pública de Cristo',
    itemCount: galleryItems.filter((item) => item.categoryId === 'luminous').length,
  },
  {
    id: 'sorrowful',
    title: 'Mistérios Dolorosos',
    subtitle: 'Obras da Paixão do Senhor',
    itemCount: galleryItems.filter((item) => item.categoryId === 'sorrowful').length,
  },
  {
    id: 'glorious',
    title: 'Mistérios Gloriosos',
    subtitle: 'Obras do triunfo pascal e mariano',
    itemCount: galleryItems.filter((item) => item.categoryId === 'glorious').length,
  },
  {
    id: 'complementary',
    title: 'Complementares',
    subtitle: 'Abertura, conclusão e identidade visual',
    itemCount: galleryItems.filter((item) => item.categoryId === 'complementary').length,
  },
];

export const galleryItemsByCategory = Object.fromEntries(
  galleryCategories.map((category) => [
    category.id,
    galleryItems.filter((item) => item.categoryId === category.id),
  ]),
) as Record<GalleryCategoryId, GalleryArtwork[]>;

export const isGalleryCategoryId = (value: string): value is GalleryCategoryId =>
  galleryCategories.some((category) => category.id === value);

export const getGalleryArtworkById = (artworkId: string) =>
  galleryItems.find((artwork) => artwork.id === artworkId);
