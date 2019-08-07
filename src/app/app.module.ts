import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThermalPrintModule } from 'ng-thermal-print'; //add this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ThermalPrintModule //add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
