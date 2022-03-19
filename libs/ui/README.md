# ui

Minden olyan generikus vagy nagyobb képernyőkhöz (pld: dashboard-layout, wizard-layout) kapcsolódó grafikai elemek és
stílus definíciók.

# Mindenképp ide kerüljön

Minden globális stílust befolyásoló elem, mint pld:
- 

- Tipográfiai elemek
- Angular Material override-ok (később ha csinálunk saját theme-et, ne kelljen összevadászni mindenhonnan)
- Angular Material theme módosítások, amik minden nézetet érintenek
- Layout függő megvalósítások (dashboard sötét mód, menüelemek, footer elemek specifikus design-ja, mobil nézetek
  elrendezései)

# Komponens saját stílusába tedd, ne ide

- Komponens specifikus design, ami minden nézetben megjelenik, pld: komponensen belüli térközök, eszközfüggetlen
  elrendezések és méretezések
- Komponens belső elrendezése, ami layouttól függetlenül mindenütt ugyanígy fog kinézni

## Running unit tests

Run `nx test ui` to execute the unit tests.
