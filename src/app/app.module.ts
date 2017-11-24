import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.modules';

import { Ng2Echarts } from 'ng2-echarts';

import { AppComponent } from './app.component';
import { DoComponent } from './do/do.component';
import { YouComponent } from './you/you.component';
import { MissComponent } from './miss/miss.component';
import { MeComponent } from './me/me.component';
import { ReneeComponent } from './renee/renee.component';
import { LonginComponent } from './longin/longin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    DoComponent,
    YouComponent,
    MissComponent,
    MeComponent,
    ReneeComponent,
    LonginComponent,
    SignupComponent,
    Ng2Echarts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
