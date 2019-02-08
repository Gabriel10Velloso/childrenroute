import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './vagas_com/main.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    MainModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
