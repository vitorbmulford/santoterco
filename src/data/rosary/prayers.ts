import type { BilingualText, PrayerKey } from '@/src/domain/rosary/types';

export const prayers: Record<PrayerKey, BilingualText> = {
  signOfCross: {
    la: 'In nomine Patris, et Filii, et Spiritus Sancti. Amen.',
    pt: 'Em nome do Pai, e do Filho, e do Espírito Santo. Amém.',
  },
  offering: {
    la: 'Domine Iesu Christe, offerimus tibi hoc Rosarium quod recitaturi sumus, mysteria redemptionis nostrae meditantes. Concede nobis, per intercessionem Beatae Mariae Virginis, Matris Dei et Matris nostrae, virtutes quibus indigemus ut digne oremus, et gratiam illud offerendi pro intentionibus sanctae Ecclesiae.',
    pt: 'Divino Jesus, nós Vos oferecemos este Terço que vamos rezar, meditando os mistérios da nossa Redenção. Concedei-nos, pela intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes de que necessitamos para bem rezá-lo, e a graça de o oferecer pelas intenções da santa Igreja.',
  },
  creed: {
    la: 'Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus; descendit ad inferos, tertia die resurrexit a mortuis; ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, Sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.',
    pt: 'Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.',
  },
  ourFather: {
    la: 'Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.',
    pt: 'Pai nosso, que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.',
  },
  hailMary: {
    la: 'Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.',
    pt: 'Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.',
  },
  gloryBe: {
    la: 'Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.',
    pt: 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre, pelos séculos dos séculos. Amém.',
  },
  fatima: {
    la: 'O mi Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, conduc in caelum omnes animas, praesertim illas quae maxime indigent misericordia tua. Amen.',
    pt: 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas todas para o céu, principalmente as que mais precisarem da vossa misericórdia. Amém.',
  },
  thanksgiving: {
    la: 'Gratias tibi agimus, Deus, pro fructibus huius Rosarii in honorem Beatissimae Virginis recitati. Fac ut meditatio horum mysteriorum in corde nostro maneat vitamque nostram transformet, ut imitemur quod continent et consequamur quod promittunt.',
    pt: 'Nós Vos agradecemos, ó Deus, os frutos deste Terço rezado em honra da Santíssima Virgem. Que a meditação destes mistérios permaneça em nosso coração e transforme a nossa vida, para que imitemos o que eles contêm e alcancemos o que prometem.',
  },
  hailHolyQueen: {
    la: 'Salve, Regina, Mater misericordiae, vita, dulcedo et spes nostra, salve. Ad te clamamus, exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, o pia, o dulcis Virgo Maria. Amen.',
    pt: 'Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve. A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro nos mostrai Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Amém.',
  },
  underYourProtection: {
    la: 'Sub tuum praesidium confugimus, sancta Dei Genitrix. Nostras deprecationes ne despicias in necessitatibus, sed a periculis cunctis libera nos semper, Virgo gloriosa et benedicta. Amen.',
    pt: 'À vossa proteção recorremos, Santa Mãe de Deus. Não desprezeis as nossas súplicas em nossas necessidades, mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita. Amém.',
  },
};

export const prayerTitles: Record<PrayerKey, BilingualText> = {
  signOfCross: { la: 'Signum Crucis', pt: 'Sinal da Cruz' },
  offering: { la: 'Oblatio Rosarii', pt: 'Oferecimento' },
  creed: { la: 'Symbolum Apostolorum', pt: 'Credo' },
  ourFather: { la: 'Pater Noster', pt: 'Pai-Nosso' },
  hailMary: { la: 'Ave Maria', pt: 'Ave-Maria' },
  gloryBe: { la: 'Gloria Patri', pt: 'Glória ao Pai' },
  fatima: { la: 'O mi Iesu', pt: 'Oração de Fátima' },
  thanksgiving: { la: 'Gratiarum Actio', pt: 'Agradecimento' },
  hailHolyQueen: { la: 'Salve Regina', pt: 'Salve-Rainha' },
  underYourProtection: { la: 'Sub tuum praesidium', pt: 'Orações Finais' },
};
