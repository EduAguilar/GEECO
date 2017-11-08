import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNuevoIngresoPage } from './modal-nuevo-ingreso';

@NgModule({
  declarations: [
    ModalNuevoIngresoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNuevoIngresoPage),
  ],
})
export class ModalNuevoIngresoPageModule {}
