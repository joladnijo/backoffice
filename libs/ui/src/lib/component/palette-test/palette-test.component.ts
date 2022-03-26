import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'jb-ui-palette-test',
  template: `

    <div>
      <button mat-button>Gomb sima</button>
      <button *ngFor="let accent of accents" mat-button [color]="accent">Gomb {{accent}}</button>
      <button mat-button disabled>Disabled</button>
    </div>
    <div>
      <button mat-flat-button>Gomb sima</button>
      <button *ngFor="let accent of accents" mat-flat-button [color]="accent">Gomb {{accent}}</button>
      <button mat-flat-button disabled>Disabled</button>
    </div>
    <div>
      <button mat-stroked-button>Gomb sima</button>
      <button *ngFor="let accent of accents" mat-stroked-button [color]="accent">Gomb {{accent}}</button>
      <button mat-stroked-button disabled>Disabled</button>
    </div>
    <div>
      <button mat-raised-button>Gomb sima</button>
      <button *ngFor="let accent of accents" mat-raised-button [color]="accent">Gomb {{accent}}</button>
      <button mat-raised-button disabled>Disabled</button>
    </div>


  `,
  styleUrls: ['./palette-test.component.scss']
})
export class PaletteTestComponent {
  accents: ThemePalette[] = ['primary', 'warn', 'accent']
}
