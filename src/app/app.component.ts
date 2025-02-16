import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { NumberHeaderComponent } from './number-header/number-header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NumberHeaderComponent,
    NumberParentComponent,
    TableComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  direction: 'rtl' | 'ltr' = 'rtl';
  constructor() {
    console.log('AppComponent initialized');
  }
}
