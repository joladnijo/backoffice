import { Coordinate } from './coordinate';
import { CallType } from './call-type';
import { AssetRequest } from './asset-request';
import { Asset } from './asset';
import { Organization } from './organization';

export interface AidCenters {
  /**
   * Azonosító
   *
   * @TJS-type integer
   */
  id: number;

  /**
   * Név
   *
   * @TJS-type string
   */
  name: string;

  /**
   * Fénykép jpg fájl relatív elérhetősége adott képek mappához képest
   *
   * @TJS-type string
   */
  photo?: string;

  /**
   *  Url kompatibilis rövid név
   *
   * @TJS-type  string
   */
  slug: string;

  /**
   *  Foreign key az Organizations táblához
   *
   * @TJS-type integer
   */
  organization: Organization;

  /**
   *  Melyek azok az országos szervezetek akikkel együttműködnek vannak (pl. Málta, Ökumenikus, stb.)
   *
   * @TJS-typ integer[]
   */
  nationalOrganizations?: number[];

  /**
   * Kétbetűs ISO kódja az országnak
   * @TJS-type string
   */
  addressCountryCode?: string;

  /**
   * Irányítószám (külföld miatt sokféle lehet)
   * @TJS-type string
   */
  addressPostalCode?: string;

  /**
   * Város neve (hely nyelven?)
   * @TJS-type string
   */
  addressCity?: string;

  /**
   * Utca, házszám, vagy ami van
   * @TJS-type string
   */
  addressAddress?: string;

  /**
   *  pl. "a Thököly út felől"
   * @TJS-type string
   */
  addressNote?: string;

  /**
   * koordináták, hogy odataláljunk
   * @TJS-type Coordinate
   */
  geoLocation?: Coordinate;

  /**
   * telefonszám, vagy telefonszámok (pontosvesszővel elválasztva)
   * @TJS-type string
   */
  phone?: string;

  /**
   * email cím
   * @TJS-type string
   */
  email?: string;

  /**
   * Facebook teljes vagy uri elérhetőség
   * @TJS-type string
   */
  facebook?: string;

  /**
   * Http-vel vagy anélkül. Ha nincs eleje, akkor feltételezzük, hogy https
   * @TJS-typ  (string)e
   */
  url?: string;

  /**
   * kapcsolattartó neve akit nyilvánosan fel lehet hívni (nekünk van egy felhasználónk is általában)
   * @TJS-type string
   */
  contactName?: string;

  /**
   * A hellyel való kapcsolathoz kiegészítő infó.
   * @TJS-type string
   */
  contactNote?: string;

  /**
   * Frissítettség időntja
   *
   * @TJS-type Date
   */
  lastUpdate?: Date;

  /**
   * Adomány szállítás előtt szeretnék-e ha felvínák őket telefonon. Mindenkép / Lehetőleg / N/A / Légyszi ne.
   *
   * @TJS-type CallType
   */
  callRequired?: CallType;

  /**
   * Az Assets táblával van összekötve. Amire szükség van.
   * @TJS-type AssetRequest[]
   */
  assetsRequested?: AssetRequest[];

  /**
   *  az Assets táblával van összekötve. Amire már nincs szükség (de azért legyen kiírva)
   * @TJS-type Asset[]
   */
  assetsFulfilled?: Asset[];

  /**
   *  az Assets táblával van összekötve. Amiből már annyi van mint a csuda. Vihetik mások is.
   * @TJS-type  (look up table, multiple)
   */
  assetsOverloaded?: Asset[];

  /**
   *  fogad-e pénzadományt
   * @TJS-type boolean
   */
  moneyAccepted?: boolean;

  /**
   *  egybe html formázva újsorokkal akár linkekkel bankszámlaszám meg amit akartok (vagy legyen több külön mező?)
   * @TJS-type string
   */
  moneyDescription?: string;

  /**
   *  bármilyen további leírás. pl hogy hánytól hányig, vagy valami egyéb
   * @TJS-type string
   */
  note?: string;

  /**
   *  Meg lehet adni, hogy a gyűjtés lejárjon magától. Vagy amikor kikapcsolják, akkor a leállítás időpőntját adja meg zárásnak és így leáll.
   * @TJS-type DateTime
   */
  campaignEnding?: Date;
}
