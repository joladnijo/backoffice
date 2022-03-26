export interface BackendAssset {

  /**
   * UUID
   */
  id?: string;

  /**
   * Asset neve
   */
  name: string;

  /**
   * Leírás?
   */
  description?: string;

  /**
   * Tartozik-e valahova (parent UUID)?
   */
  parent_id?: string
}

export interface Asset extends BackendAssset {
  children?: Asset[]
}

const gyerekAssets = [
  'babajáték ami elfér a tenyerében',
  'gyerek higiénia, törlőkendő',
  'pelenka',
  'gyerek ruházat',
  'babakocsi',
  'bébiétel (kanállal',
  'pelenkázó alátét, popsitörlő, posikrém',
  'babaruha (2 éves korig',
  'tápszer, tejpép, gabonapép',
  'Cumi, cumisüveg'
]
const elelmiszerAssets = [
  'tartós (fél)készétel',
  'tartós alapanyag',
  'szendvics',
  '3 in 1 kávék, tea filterek, forrócsoki por',
  'Dörmi,  műzliszelet, belvita,',
  'gyümölcs',
  'ásványvíz 0,5l dobozos üdítő 0,2l',
  'speciális diétás élelmiszerek',
  'tasakos gyümölcspüré',
  'banán',
  'különböző mentes scnack-ek (pl tejmentes, cukormentes, húsmentes, stb)'
];

const higeniaAssets = [
  'fogkefe, fogkrém',
  'eldobható női és férfi borotva (védőfejes), borotvahab',
  'kis kiszerelésű kézfertőtlenítő',
  'betétek (tampont ne)',
  'dezodor',
  'kéz-, arc- és egyéb krémek',
  'törülköző',
  'wc papír'
];

const szallasAssets = [
  'ágy',
  'ágymatrac',
  'polifoam, laticel, izolír, derékalj',
  'hálózsák',
  'takaró, pléd',
  'ágynemű',
  '(törülköző)',
  'kispárna',
  'felfújható nyakpárna',
  'bútor',
  'háztartásigépek'
];

const egeszegugyAssets = [
  'maszk',
  'gumikesztyű',
  'kötszer',
  'sebfertőtlenítő / fertőtlenítő',
  'vény nélküli kapható gyógyszerek gyerekeknek',
  'vény nélkül kapható gyógyszer felnőtteknek',
  'vitaminok'
];

const onkentesAssets = [
  'önkéntes',
  'egészségügyis',
  'tolmács',
  'adomány fuvarozó',
  'személy fuvarozó',
  'éjszakais',
  'fizikai munkás',
  'rendszeres önkéntes',
  'fizetett munkatárs'
];

const logisztikaAssets = [
  'eldobható tányérok és evőeszközök',
  'eldobható poharak',
  'keverő pálcikák',
  'karton dobozok',
  'szendvics zacskók',
  'zsákok'
]


const egyebAssets = [
  'állateledel',
  'egyéb'
];

function mapStringsToAssetList(names: string[], parent_id: string): Asset[] {
  return names.map(nameString => ({
    id: "UUID_" + nameString,
    parent_id: parent_id,
    name: nameString,
    description: "Leírás:  " + nameString
  }));
}

function mapToPrimitiveAssetTree(names: string[], parent_name: string): Asset {
  const id = "UUID_" + parent_name;
  return {
    // ez UUID lenne
    id: id,
    name: parent_name,
    children: mapStringsToAssetList(names, id)
  }
}

const assetLists = [
  {name: "Gyerek", list: gyerekAssets},
  {name: "Élelmiszer", list: elelmiszerAssets},
  {name: "Higiénia", list: higeniaAssets},
  {name: "Szállás", list: szallasAssets},
  {name: "Egészégügy", list: egeszegugyAssets},
  {name: "Önkentes", list: onkentesAssets},
  {name: "Logisztika", list: logisztikaAssets},
  {name: "Egyéb", list: egyebAssets}
];

export const assets: Asset[] = assetLists.map(item => mapToPrimitiveAssetTree(item.list, item.name))

