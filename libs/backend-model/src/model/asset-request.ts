export interface AssetRequest {

  /**
   *  azonosító
   *  @TJS-type integer
   */
  id: number;

  /**
   *  hogy melyik gyűjtőponthoz tartozik ez a konkrét szükség
   *  @TJS-type integer
   */
  aidCenterId: number;

  /**
   *  többféle típus lehet - tárgyi adomány, emberi erőforrás keresése/ajánlása, szállás típusú adomány, stb.
   *  @TJS-type  enu
   */
  category: number;

  /**
   *  jó sokféle dolog lehet ez: asztal, ágy, cipő, ruha, stb.
   *  @TJS-type enum
   */
  type: number;

  /**
   *  a hozzátartozó ikon elérhetősége (ha a type-nak nem volt ikonja, akkor a categoriból szerzi)
   *  @TJS-type string
   */
  icon: string;

  /**
   *  amire tényleg szükség van (egyesszám)
   *  @TJS-type string
   */
  name: string;

  /**
   *  a részletes leírás, ami már nem kereshető. pl: "kifejezetten narancsosat keresünk és jó sokat"
   *  @TJS-type string
   */
  note: string;

  /**
   *  ha fontos, kiemelt, sürgős akkor kipipálható. MVP után: Ennek változása azonnali üzenetet eredményez felirakozónak / fb-ra / stb.
   *  @TJS-type  boole
   */
  urgent: boolean;
}
