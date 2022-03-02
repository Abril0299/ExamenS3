import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { PaisesPageRoutingModule } from './paises-routing.module';

import { PaisesPage } from './paises.page';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PaisesPageRoutingModule
  ],
  declarations: [PaisesPage]
})
export class PaisesPageModule {}
