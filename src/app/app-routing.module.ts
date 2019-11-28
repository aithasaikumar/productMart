import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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



const routes: Routes = [

{path :"",component:HomeComponent,pathMatch:"full"},
{path :"electronics", component:ElectronicsComponent,},
{path:"mobiles", component:MobilesComponent },
{path:"tablets",component:TabletsComponent},
{path:"washingMachines",component:WashingMachinesComponent},
{path:"diapers",component:DiapersComponent},
{path:"babyClothes",component:BabyClothesComponent},
{path:"lipcare",component:LipCareComponent},
{path:"creamsLotions",component:CreamsLotionsComponent},
{path :"babycare", component:BabycareComponent },
{path :"beautycare", component:BeautycareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
