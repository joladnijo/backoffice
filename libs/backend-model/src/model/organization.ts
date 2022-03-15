export interface Organization {

  /**
   *  azonosító
   *
   *  @TJS-type integer
   */
  id: number;

  /**
   *  név
   *
   *  @TJS-type string
   */
  name: string;

  /**
   *  Url a logójához)
   *
   *  @TJS-type *
   * @param MVP
   */
  logo?: string;

  /**
   * Telefonszám, vagy telefonszámok (pontosvesszővel elválasztva)
   *
   *  @TJS-type string
   */
  phone: string;

  /**
   *  Email cím
   *
   *  @TJS-type string
   */
  email: string;

  /**
   *  Facebook teljes vagy uri elérhetőség
   *
   *  @TJS-type string
   */
  facebook?: string;

  /**
   *  Nyilvános kapcsolattartó neve. (nekünk van általában egy felhasználónk is)
   *
   *  @TJS-type  string
   */
  contactName: string;

  /**
   *  a kapcsolati móddal való kapcsolathoz kiegészítő infó.
   *
   *  @TJS-type  string
   */
  contactNote?: string;

  /**
   *  a hellyel való kapcsolathoz kiegészítő infó. / bármilyen további leírás. pl ősi szervezet vagy mi.
   *
   *  @TJS-type string
   */
  note?: string;

  /**
   *  Ő maga nagy szervezet-e annyira, hogy a nationalOrganizations be belekerülhessen
   *
   *  @TJS-type boolean
   */
  isNational: boolean;

  /**
   *  Melyek azok az országos szervezetek akikkel együttműködnek vannak (pl. Málta, Ökumenikus, stb.))
   *
   *  @TJS-type Organization[]
   */
  nationalOrganizations?: Organization[]
}
