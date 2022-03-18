import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Action } from '@ngrx/store';

/**
 * Menü elem
 */
export interface MenuItem {
  displayedText: string;
  // angular routerlink string
  routerLink?: string;
  // külső link
  href?: string;
  // milyen action-nek kell eldispatchelni ha rákattint
  actionOnClick?: Action,
  htmlId?: string;
  toolTip?: string;
  icon?: IconDefinition;
}

/**
 * Fa szerkezetű menüelem
 */
export interface ParentMenuItem {
  // almenü elemek
  items?: MenuItem[];
}
