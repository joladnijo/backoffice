# Hozzájárulás

Ha elkészültél valamivel, egy ESLint-et, unit teszteket (Jasmine) futtass rajta, hibátlan futtatás a PR elfogadásának
előfeltétele.

### Általános irányok

- Mivel az alkalmazást nem kizárt, hogy terepen fogják használni (értsd: a felhasználók olyan emberek akik fáradtak,
  nyűgösek, egész nap pakoltak, talpon voltak, nem látnak jól, figyelmetlenek, megharapták a kutyát) így a könnyen
  használhatóság nagyon fontos. Értsd: orral is végig tudd csinálni a rendszeresen használt folyamatok nagy részét
  mobilon és desktopon is.
- Belső state-kezeléshez ngrx/component és feature state is használható
- Egyszerű komponenseket és modulokat, libeket szeretjük, az összekapcsolást és üzleti logikát a libben, azon kívüli,
  azokat összefogó dolgokat az App-ban implementáljuk
- Feature-libekben gondolkodj, azok csak UI-libet használhatnak, más feature-libek részeit nem
- Formok esetén apróbb részegységeknél használj `ControlValueAccessor`-t és azzal kösd össze a nagyobb form-részeket
- Amelyik libhez, modulhoz, komponenshez nincs legalább egy "üres" unit teszt írva ami lefut (DI betölt helyesen), nem
  fogjuk elfogadni, MVP 2 után minden végleges feature-nél jelentős teszt-lefedettség szükséges (TDD előnyben, ha
  megoldható!).

### Kezdő Angular fejlesztőként

Sitebuild, scss, css simogatás az ui lib-en belül nagyon hasznos része tud lenni a folyamatoknak és nem szükséges hozzá
fekete öves Ngrx és egyéb ismeret. Láttál a terveken egy komponenst, formot ami még nincs kész? Ne fogd vissza magad, ha
a vázát, kinézetét úgy gondolod össze tudod rakni, az is rengeteget segít.

### Gyakorlott Angular fejlesztőként

Nézz körül, ugorj neki valaminek :)

# Tech Stack

- [Angular](https://angular.io) 13+
- [Nx](https://nx.dev)
- [NgRX](https://ngrx.io)
- [Auth0](https://auth0.com) Authentikáció és authorizáció alapokhoz
- [Angular Material](https://material.angular.io)
- [Angular Flex layout](https://github.com/angular/flex-layout)
- Apróbb utility-libek (ngneat/until-destroy)

A backend kommunikáció NgRX/Data-n keresztül lesz megvalósítva, egy Backend által adott OpenAPI json-ből generált
modellek segítségével. Auth0 -t fogunk használni (angular-oauth2-oidc modullal), jelenleg nincs integrálva az
alkalmazásba.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@joladnijo-backoffice/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use
the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
