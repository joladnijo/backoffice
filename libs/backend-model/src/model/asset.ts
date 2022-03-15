export interface Asset {
  /**
   *  Azonosító
   *  @TJS-type integer
   */
  id: number;
  /**
   *  Jó sokféle dolog lehet ez: asztal, ágy, cipő, ruha, stb.
   *  @TJS-type string
   */
  name: string;
  /**
   *  A hozzátartozó ikon elérhetősége (ha a type-nak nem volt ikonja, akkor a categoriból szerzi)
   *  @TJS-type string
   */
  icon: string;
  /**
   *  Az asset kategóriák (pl élelmiszer) és az assetek (pl: műzli szelet) ugyan olyanok csak kiemeltek a kategóriák
   *  @TJS-type boolean
   */
  isCategory: boolean;
  /**
   *  Ha ő valami alá tartozik. általában if isCategory ? parentId = false : parentId = true
   *  @TJS-type integer
   */
  parentId?: number;
}
