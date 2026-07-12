import type { ImageSourcePropType } from "react-native";

import { complementaryImages, mysteryImages } from "@/src/data/rosary/images";

export type GalleryCategoryId =
  | "joyful"
  | "luminous"
  | "sorrowful"
  | "glorious"
  | "complementary";

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
    id: "joyful-1",
    categoryId: "joyful",
    title: "Anunciacao",
    author: "Fra Angelico, c. 1433-1434",
    location: "Museu Diocesano de Cortona, Italia",
    usage:
      "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima, Overview e Home do dia.",
    about:
      "Pintada por Fra Angelico no início do Renascimento italiano, esta Anunciação une delicadeza, silêncio e profundidade teológica. Ao fundo, a expulsão de Adão e Eva contrasta com o consentimento de Maria, apresentando-a como a nova Eva por meio de quem começa a redenção. A obra foi escolhida porque torna visível o centro deste mistério: a humildade de Maria, seu 'sim' à vontade de Deus e o instante em que o Verbo entra na história humana.",
    image: mysteryImages.joyful[0],
  },
  {
    id: "joyful-2",
    categoryId: "joyful",
    title: "Visitacao",
    author: "Domenico Ghirlandaio, 1491",
    location: "Museu do Louvre, Paris, Franca",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Ghirlandaio representa o encontro entre Maria e Isabel com solenidade, ternura e forte presença humana. O gesto de Isabel, que se inclina diante de Maria, reconhece nela a Mãe do Senhor, enquanto a troca de olhares traduz a alegria das duas mulheres. A obra foi escolhida porque expressa com clareza a caridade de Maria, que leva Cristo à casa de sua prima, e a alegria espiritual que nasce desse encontro.",
    image: mysteryImages.joyful[1],
  },
  {
    id: "joyful-3",
    categoryId: "joyful",
    title: "Triptico da Natividade",
    author: "Hans Memling, c. 1470-1475",
    location: "Museu Nacional de Arte Antiga, Lisboa, Portugal",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Neste tríptico, Hans Memling combina o detalhismo da pintura flamenga com uma atmosfera íntima e silenciosa. A pobreza do espaço, a delicadeza das figuras e a atenção aos pequenos elementos conduzem o olhar ao Menino Jesus. A obra foi escolhida porque apresenta ao mesmo tempo a humildade da manjedoura e a realeza escondida de Cristo, favorecendo uma contemplação calma do mistério da Encarnação.",
    image: mysteryImages.joyful[2],
  },
  {
    id: "joyful-4",
    categoryId: "joyful",
    title: "Apresentacao de Jesus no Templo",
    author: "Andrea Mantegna, c. 1465-1466",
    location: "Gemaeldegalerie, Berlim, Alemanha",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Mantegna aproxima as figuras do observador e dá à cena uma força quase escultórica. Maria entrega o Menino a Simeão, mas o gesto conserva uma tensão materna que antecipa a profecia da dor e o futuro sacrifício de Cristo. A obra foi escolhida porque representa com grande intensidade a obediência de Maria e José à Lei, ao mesmo tempo em que anuncia que aquele Menino será oferecido pela redenção do mundo.",
    image: mysteryImages.joyful[3],
  },
  {
    id: "joyful-5",
    categoryId: "joyful",
    title: "Jesus entre os Doutores",
    author: "William Holman Hunt, 1854-1860",
    location: "Birmingham Museum and Art Gallery, Inglaterra",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "William Holman Hunt reconstrói o ambiente do Templo com o realismo e a minúcia próprios dos pré-rafaelitas. Jesus aparece entre os doutores com serenidade e autoridade, enquanto Maria e José chegam após dias de procura. A obra foi escolhida porque evidencia o contraste entre a juventude de Cristo e sua sabedoria divina, além de traduzir a dor do reencontro e a revelação de que Ele deve ocupar-se das coisas do Pai.",
    image: mysteryImages.joyful[4],
  },
  {
    id: "luminous-1",
    categoryId: "luminous",
    title: "Batismo de Cristo",
    author: "Andrea del Verrocchio e Leonardo da Vinci, c. 1475",
    location: "Galeria Uffizi, Florenca, Italia",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Executada na oficina de Verrocchio e célebre pela participação do jovem Leonardo da Vinci, esta obra apresenta o Batismo de Cristo como uma manifestação da Santíssima Trindade. Jesus se submete humildemente ao batismo de João, enquanto o Espírito Santo desce sobre Ele. A pintura foi escolhida porque marca com clareza o início da vida pública de Cristo e torna visível a revelação de sua identidade divina.",
    image: mysteryImages.luminous[0],
  },
  {
    id: "luminous-2",
    categoryId: "luminous",
    title: "As Bodas de Cana",
    author: "Paolo Veronese, 1563",
    location: "Museu do Louvre, Paris, Franca",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Paolo Veronese transforma o episódio de Caná em um banquete monumental, repleto de personagens, arquitetura e movimento. Mesmo em meio à grandiosidade da festa, Cristo permanece no centro da composição, ao lado de Maria. A obra foi escolhida porque traduz a abundância do primeiro milagre público de Jesus e destaca o papel de Nossa Senhora, que percebe a necessidade e conduz os serventes à obediência: 'Fazei tudo o que Ele vos disser'.",
    image: mysteryImages.luminous[1],
  },
  {
    id: "luminous-3",
    categoryId: "luminous",
    title: "O Sermao da Montanha",
    author: "Carl Bloch, 1890",
    location: "Museu Frederiksborg, Dinamarca",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Carl Bloch apresenta Cristo como Mestre diante de uma multidão formada por pessoas de diferentes idades e condições. A composição concentra a atenção em sua palavra e nas reações daqueles que o escutam. A obra foi escolhida porque o Sermão da Montanha sintetiza visualmente a proclamação do Reino de Deus, mostrando Jesus não apenas como pregador, mas como aquele que chama cada pessoa à conversão e à santidade.",
    image: mysteryImages.luminous[2],
  },
  {
    id: "luminous-4",
    categoryId: "luminous",
    title: "A Transfiguracao",
    author: "Rafael Sanzio, 1516-1520",
    location: "Pinacoteca Vaticana, Vaticano",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Rafael divide a composição entre a glória do Cristo transfigurado e a fragilidade humana representada na cena inferior. No alto, Jesus aparece entre Moisés e Elias; embaixo, os discípulos enfrentam o sofrimento que ainda marca o mundo. A obra foi escolhida porque mostra que a luz do Tabor antecipa a Ressurreição, mas não elimina a Cruz, oferecendo uma síntese poderosa da glória divina revelada em Cristo.",
    image: mysteryImages.luminous[3],
  },
  {
    id: "luminous-5",
    categoryId: "luminous",
    title: "A Ultima Ceia",
    author: "Leonardo da Vinci, 1495-1498",
    location: "Igreja de Santa Maria delle Grazie, Milao, Italia",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Leonardo organiza toda a cena por meio da perspectiva e da geometria, fazendo com que as linhas do ambiente conduzam o olhar diretamente a Cristo. Os apóstolos reagem ao anúncio da traição, enquanto Jesus permanece no centro da mesa. A obra foi escolhida porque une dramaticidade e recolhimento e conduz à contemplação da instituição da Eucaristia como entrega, comunhão, sacrifício e presença de Cristo.",
    image: mysteryImages.luminous[4],
  },
  {
    id: "sorrowful-1",
    categoryId: "sorrowful",
    title: "Agonia no Getsemani",
    author: "Andrea Mantegna, c. 1460",
    location: "National Gallery, Londres, Inglaterra",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Mantegna representa Cristo em oração enquanto os discípulos dormem e Judas se aproxima com os soldados. A paisagem árida, as rochas duras e os sinais da Paixão tornam visível a tensão do momento. A obra foi escolhida porque expressa com grande força a solidão de Jesus diante do sofrimento iminente e sua entrega consciente à vontade do Pai.",
    image: mysteryImages.sorrowful[0],
  },
  {
    id: "sorrowful-2",
    categoryId: "sorrowful",
    title: "Flagelacao de Cristo",
    author: "Caravaggio, 1607",
    location: "Musee des Beaux-Arts, Rouen, Franca",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Caravaggio elimina quase todo elemento secundário e mergulha a cena em sombras profundas, fazendo com que a luz recaia sobre o corpo de Cristo. A proximidade dos algozes torna a violência imediata e difícil de ignorar. A obra foi escolhida porque obriga o observador a confrontar o sofrimento físico de Jesus, sem retirar dele a dignidade e a centralidade espiritual.",
    image: mysteryImages.sorrowful[1],
  },
  {
    id: "sorrowful-3",
    categoryId: "sorrowful",
    title: "Coroacao de Espinhos",
    author: "Ticiano Vecellio, c. 1570-1576",
    location: "Alte Pinakothek, Munique, Alemanha",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Na fase final de Ticiano, a pincelada solta e a composição turbulenta intensificam a violência da cena. Cristo é cercado por homens que impõem a coroa de espinhos como instrumento de humilhação. A obra foi escolhida porque revela o contraste entre a falsa realeza atribuída pelos soldados e a verdadeira realeza divina de Jesus, manifestada justamente em sua entrega e sofrimento.",
    image: mysteryImages.sorrowful[2],
  },
  {
    id: "sorrowful-4",
    categoryId: "sorrowful",
    title: "Cristo Carregando a Cruz",
    author: "Hieronymus Bosch, c. 1510-1535",
    location: "Museu de Belas Artes, Gante, Belgica",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Bosch comprime a cena em torno do rosto de Cristo e o cerca de feições grotescas, criando uma imagem de profundo caos moral. Em contraste com a multidão agressiva, Jesus permanece sereno e recolhido. A obra foi escolhida porque transforma o caminho do Calvário em uma meditação sobre a mansidão de Cristo diante do ódio, do pecado e da violência humana.",
    image: mysteryImages.sorrowful[3],
  },
  {
    id: "sorrowful-5",
    categoryId: "sorrowful",
    title: "Cristo Crucificado",
    author: "Diego Velazquez, 1632",
    location: "Museu do Prado, Madrid, Espanha",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Velázquez representa Cristo sozinho diante de um fundo escuro, sem multidão, paisagem ou elementos que desviem a atenção. A luz modela o corpo e a cruz, conferindo à cena silêncio e solenidade. A obra foi escolhida porque sua austeridade conduz diretamente ao centro do mistério: o sacrifício total de Cristo e sua morte redentora.",
    image: mysteryImages.sorrowful[4],
  },
  {
    id: "glorious-1",
    categoryId: "glorious",
    title: "Ressurreicao",
    author: "Piero della Francesca, c. 1463-1465",
    location: "Museu Civico de Sansepolcro, Italia",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Piero della Francesca apresenta Cristo saindo do túmulo com firmeza e majestade, enquanto os soldados permanecem adormecidos. A paisagem dividida entre árvores secas e vegetação viva simboliza a passagem da morte para a vida. A obra foi escolhida porque expressa a Ressurreição não como fuga, mas como vitória soberana de Cristo sobre o túmulo, o pecado e a morte.",
    image: mysteryImages.glorious[0],
  },
  {
    id: "glorious-2",
    categoryId: "glorious",
    title: "Ascensao de Jesus",
    author: "Giotto di Bondone, 1305",
    location: "Capela Scrovegni, Padua, Italia",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Giotto organiza a cena com clareza e humanidade: Cristo sobe aos céus enquanto Maria e os apóstolos permanecem reunidos abaixo. O movimento ascendente do Senhor contrasta com a estabilidade da comunidade que fica. A obra foi escolhida porque mostra que a Ascensão não é abandono, mas o início da missão da Igreja e a promessa da presença contínua de Cristo.",
    image: mysteryImages.glorious[1],
  },
  {
    id: "glorious-3",
    categoryId: "glorious",
    title: "Pentecostes",
    author: "El Greco, c. 1600",
    location: "Museu do Prado, Madrid, Espanha",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "El Greco utiliza figuras alongadas, luz intensa e movimento vertical para traduzir a ação invisível do Espírito Santo. Maria ocupa o centro da comunidade reunida, enquanto as línguas de fogo descem sobre os apóstolos. A obra foi escolhida porque torna quase perceptível a transformação interior provocada pelo Espírito e o nascimento missionário da Igreja.",
    image: mysteryImages.glorious[2],
  },
  {
    id: "glorious-4",
    categoryId: "glorious",
    title: "Assuncao da Virgem",
    author: "Bartolome Esteban Murillo, c. 1670",
    location: "Museu Hermitage, Sao Petersburgo, Russia",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Murillo representa Maria sendo elevada entre nuvens e anjos, envolvida por uma luz suave e por um movimento ascendente. A composição transmite leveza, paz e alegria, sem depender de teatralidade excessiva. A obra foi escolhida porque expressa visualmente a glorificação de Maria em corpo e alma e conduz à contemplação de sua união plena com Deus.",
    image: mysteryImages.glorious[3],
  },
  {
    id: "glorious-5",
    categoryId: "glorious",
    title: "Coroacao da Virgem",
    author: "Diego Velazquez, c. 1641-1644",
    location: "Museu do Prado, Madrid, Espanha",
    usage: "Introducao, Pai-Nosso, 10 Ave-Marias, Gloria, Oracao de Fatima.",
    about:
      "Velázquez apresenta Maria sendo coroada pelo Pai e pelo Filho, sob a presença do Espírito Santo. A composição trinitária deixa claro que sua realeza é recebida de Deus e está inteiramente subordinada a Ele. A obra foi escolhida porque conclui o Rosário mostrando Maria glorificada pela Santíssima Trindade, como fruto perfeito da redenção realizada por Cristo.",
    image: mysteryImages.glorious[4],
  },
  {
    id: "complementary-1",
    categoryId: "complementary",
    title: "Cristo Pantocrator",
    author: "Mosaico Bizantino, seculo XII",
    location: "Catedral de Monreale, Palermo, Italia",
    usage: "Abertura, Pai-Nosso inicial, icone, splash screen e favicon.",
    about:
      "O Cristo Pantocrator da Catedral de Monreale apresenta Jesus como Senhor do Universo, Mestre e Juiz, abençoando com uma mão e sustentando o Evangelho com a outra. A imagem foi escolhida para a abertura porque estabelece desde o primeiro contato que Cristo é o centro de toda a oração. Também acompanha o Pai-Nosso inicial porque foi o próprio Jesus quem ensinou essa oração aos discípulos, tornando sua figura de Mestre especialmente adequada a esse momento.",
    image: complementaryImages.opening,
  },
  {
    id: "complementary-2",
    categoryId: "complementary",
    title: "Cristo Crucificado",
    author: "Diego Velazquez, 1632",
    location: "Museu do Prado, Madrid, Espanha",
    usage: "Sinal da Cruz.",
    about:
      "Velázquez elimina qualquer elemento secundário e apresenta apenas Cristo crucificado diante de um fundo escuro. Essa simplicidade concentra toda a atenção no sacrifício redentor. A obra foi escolhida para o Sinal da Cruz porque cada gesto traçado pelo usuário recorda a Paixão de Cristo e professa a fé no Pai, no Filho e no Espírito Santo.",
    image: complementaryImages.signOfCross,
  },
  {
    id: "complementary-3",
    categoryId: "complementary",
    title: "Cristo no Getsemani",
    author: "Heinrich Hofmann, 1890",
    location: "Museu Riverside, Nova Iorque, EUA",
    usage: "Oferecimento do Terco.",
    about:
      "Heinrich Hofmann mostra Cristo recolhido no Getsêmani, voltado para o Pai no momento em que aceita o cálice da Paixão. A obra foi escolhida para o oferecimento do Terço porque traduz visualmente a entrega da própria vontade a Deus. Assim como Cristo se oferece ao Pai, o usuário apresenta suas intenções, sofrimentos e agradecimentos antes de iniciar a oração.",
    image: complementaryImages.offering,
  },
  {
    id: "complementary-4",
    categoryId: "complementary",
    title: "A Disputa do Santissimo Sacramento",
    author: "Rafael Sanzio, 1509-1510",
    location: "Museus Vaticanos, Vaticano",
    usage: "Oracao do Credo.",
    about:
      "Rafael reúne a Igreja celeste e a Igreja terrestre em torno de Cristo, da Santíssima Trindade e da Eucaristia. Santos, doutores e fiéis aparecem unidos numa mesma profissão de fé. A obra foi escolhida para o Credo porque funciona como uma síntese visual das verdades professadas pela Igreja e da comunhão entre aqueles que creem.",
    image: complementaryImages.creed,
  },
  {
    id: "complementary-6",
    categoryId: "complementary",
    title: "Anunciacao",
    author: "Fra Angelico, c. 1438-1445",
    location: "Convento de San Marco, Florenca, Italia",
    usage: "3 Ave-Marias iniciais.",
    about:
      "A Anunciação de Fra Angelico, criada para o Convento de San Marco, possui uma simplicidade silenciosa e profundamente contemplativa. Maria recebe a mensagem do anjo com humildade e disponibilidade. A obra foi escolhida para acompanhar as três Ave-Marias iniciais porque apresenta a Virgem no momento em que acolhe a Palavra de Deus com fé, esperança e caridade.",
    image: complementaryImages.openingHailMarys,
  },
  {
    id: "complementary-7",
    categoryId: "complementary",
    title: "Santissima Trindade",
    author: "Masaccio, c. 1426-1428",
    location: "Igreja de Santa Maria Novella, Florenca, Italia",
    usage: "Gloria ao Pai inicial.",
    about:
      "Masaccio representa explicitamente o Pai, o Filho crucificado e o Espírito Santo numa composição monumental e rigorosamente organizada. A obra foi escolhida para o Glória ao Pai porque transforma em imagem a própria estrutura da oração, dirigida às três Pessoas da Santíssima Trindade. Sua profundidade arquitetônica reforça a sensação de entrada no mistério divino.",
    image: complementaryImages.openingGlory,
  },
  {
    id: "complementary-8",
    categoryId: "complementary",
    title: "Ceia em Emaus",
    author: "Caravaggio, 1601",
    location: "National Gallery, Londres, Inglaterra",
    usage: "Reserva estetica; atualmente nao utilizada em nenhum passo da UI.",
    about:
      "Caravaggio captura o instante em que os discípulos reconhecem Cristo ao partir o pão, usando gestos intensos, luz dramática e grande proximidade com o observador. A obra foi escolhida como reserva para a conclusão porque Emaús resume a experiência espiritual de reconhecer Cristo após percorrer os mistérios de sua vida. Mesmo não estando atualmente em uma etapa da interface, permanece coerente com o encerramento contemplativo do Terço.",
    image: complementaryImages.final,
  },
  {
    id: "complementary-9",
    categoryId: "complementary",
    title: "Ceia em Emaus",
    author: "Rembrandt van Rijn, 1648",
    location: "Museu do Louvre, Paris, Franca",
    usage: "Oracao de Agradecimento.",
    about:
      "Rembrandt representa o reconhecimento de Cristo em Emaús com silêncio, penumbra e uma luz interior que parece partir da própria presença do Senhor. A obra foi escolhida para o agradecimento porque substitui o impacto dramático por recolhimento e gratidão. Ao final da oração, ela convida o usuário a reconhecer os dons recebidos e a presença de Cristo em sua caminhada.",
    image: complementaryImages.thanksgiving,
  },
  {
    id: "complementary-10",
    categoryId: "complementary",
    title: "Coroacao da Virgem",
    author: "Fra Angelico, c. 1434",
    location: "Galeria Uffizi, Florenca, Italia",
    usage: "Salve-Rainha.",
    about:
      "Fra Angelico representa Cristo coroando Maria diante de anjos e santos, em uma cena marcada pelo ouro, pela harmonia e pelo caráter litúrgico. A obra foi escolhida para a Salve-Rainha porque traduz visualmente os títulos de Rainha e Mãe de Misericórdia. Ao mesmo tempo, deixa claro que toda a honra de Maria procede de Cristo, que é quem a coroa.",
    image: complementaryImages.hailHolyQueen,
  },
  {
    id: "complementary-11",
    categoryId: "complementary",
    title: "Madona da Misericordia",
    author: "Piero della Francesca, c. 1445-1462",
    location: "Museu Civico de Sansepolcro, Italia",
    usage: "Ladainha de Nossa Senhora.",
    about:
      "Piero della Francesca mostra Maria abrindo seu manto para acolher uma comunidade de fiéis ajoelhados. A imagem foi escolhida para a Ladainha porque resume visualmente as invocações dirigidas a Nossa Senhora como refúgio, auxílio e proteção. O manto transforma em imagem a confiança da Igreja na intercessão materna de Maria.",
    image: complementaryImages.litany,
  },
  {
    id: "complementary-12",
    categoryId: "complementary",
    title: "Nossa Senhora do Perpetuo Socorro",
    author: "Icone Bizantino, seculo XIII/XIV",
    location: "Igreja de Santo Afonso, Roma, Italia",
    usage: "Oracoes finais e Sub tuum praesidium.",
    about:
      "O ícone de Nossa Senhora do Perpétuo Socorro apresenta Maria sustentando o Menino Jesus diante dos instrumentos de sua futura Paixão. Cristo busca proteção junto à Mãe, enquanto ela dirige o olhar ao fiel. A obra foi escolhida para as orações finais e para o Sub tuum praesidium porque expressa diretamente a confiança da Igreja no amparo e na intercessão materna de Maria.",
    image: complementaryImages.underYourProtection,
  },
];

export const galleryCategories: GalleryCategory[] = [
  {
    id: "joyful",
    title: "Mistérios Gozosos",
    subtitle: "Obras do ciclo da infância de Cristo",
    itemCount: galleryItems.filter((item) => item.categoryId === "joyful")
      .length,
  },
  {
    id: "luminous",
    title: "Mistérios Luminosos",
    subtitle: "Obras da vida pública de Cristo",
    itemCount: galleryItems.filter((item) => item.categoryId === "luminous")
      .length,
  },
  {
    id: "sorrowful",
    title: "Mistérios Dolorosos",
    subtitle: "Obras da Paixão do Senhor",
    itemCount: galleryItems.filter((item) => item.categoryId === "sorrowful")
      .length,
  },
  {
    id: "glorious",
    title: "Mistérios Gloriosos",
    subtitle: "Obras do triunfo pascal e mariano",
    itemCount: galleryItems.filter((item) => item.categoryId === "glorious")
      .length,
  },
  {
    id: "complementary",
    title: "Complementares",
    subtitle: "Abertura, conclusão e identidade visual",
    itemCount: galleryItems.filter(
      (item) => item.categoryId === "complementary",
    ).length,
  },
];

export const galleryItemsByCategory = Object.fromEntries(
  galleryCategories.map((category) => [
    category.id,
    galleryItems.filter((item) => item.categoryId === category.id),
  ]),
) as Record<GalleryCategoryId, GalleryArtwork[]>;

export const isGalleryCategoryId = (
  value: string,
): value is GalleryCategoryId =>
  galleryCategories.some((category) => category.id === value);

export const getGalleryArtworkById = (artworkId: string) =>
  galleryItems.find((artwork) => artwork.id === artworkId);
