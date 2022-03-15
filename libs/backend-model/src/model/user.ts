import { Organization } from './organization';
import { UserScreenLevel } from './user-screen-level';

export interface User {
  /**
   * Felhasználó azonosítója (UUID / egyéb azonosító?)
   * @TJS-type string
   */
  id: string;

  /**
   * Felhasználónév
   *
   * @TJS-type string
   */
  username: string;

  /**
   *  Hivatalos név
   *  @TJS-type string
   */
  name: string;

  /**
   *  telefonszám. legyen kötelező.
   *  @TJS-type string
   */
  phone: string;

  /**
   *  E-mail cím
   *  @TJS-type string
   */
  email: string;

  /**
   *  A Felhasználók csatlakozhatnak egy-egy intézményhez. Az intézmény oldaláról van definiálva?)
   *  @TJS-type Organization
   */
  organizations: Organization

  /**
   *  azonosítva van-e a felhasználó? 0 = nem; 1 = email alapján (regisztrációkor); 2 = fel is hívtuk kézzel telefonon
   *  @TJS-type UserScreenLevel
   */
  validated: UserScreenLevel;
}
