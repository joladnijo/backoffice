export enum UserScreenLevel {
  /**
   * Nem tudjuk érvényes-e bármilyen paramétere (valószínűleg ilyen ritka lesz)
   */
  NOT_SCREENED = 'NOT_SCREENED',

  /**
   * E-mail címe megerősítve (link kiküldve, rákattanva)
   */
  EMAIL_VALIDATED = 'EMAIL_VALIDATED',

  /**
   * Telefonszáma ellenőrízve (hívtuk / SMS-kód alapján regisztráltuk)
   */
  PHONE_VALIDATED = 'PHONE_VALIDATED'
}
