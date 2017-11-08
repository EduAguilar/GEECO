import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNuevoGastoPage } from './modal-nuevo-gasto';

@NgModule({
  declarations: [
    ModalNuevoGastoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNuevoGastoPage),
  ],
})
export class ModalNuevoGastoPageModule {}
