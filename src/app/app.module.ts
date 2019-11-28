import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ElectronicsComponent } from './components/electronics/electronics/electronics.component';
import { BabycareComponent } from './components/babyCare/babycare/babycare.component';
import { BeautycareComponent } from './components/beautyCare/beautycare/beautycare.component';
import { MobilesComponent } from './components/electronics/mobiles/mobiles.component';
import { TabletsComponent } from './components/electronics/tablets/tablets.component';
import { WashingMachinesComponent } from './components/electronics/washing-machines/washing-machines.component';
import { DiapersComponent } from './components/babyCare/diapers/diapers.component';
import { BabyClothesComponent } from './components/babyCare/baby-clothes/baby-clothes.component';
import { LipCareComponent } from './components/beautyCare/lip-care/lip-care.component';
import { CreamsLotionsComponent } from './components/beautyCare/creams-lotions/creams-lotions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElectronicsComponent,
    BabycareComponent,
    BeautycareComponent,
    MobilesComponent,
    TabletsComponent,
    WashingMachinesComponent,
    DiapersComponent,
    BabyClothesComponent,
    LipCareComponent,
    CreamsLotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
