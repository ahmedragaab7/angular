import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NumberHeaderComponent } from './number-header/number-header.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NumberHeaderComponent,
    NumberParentComponent,
    TableComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
