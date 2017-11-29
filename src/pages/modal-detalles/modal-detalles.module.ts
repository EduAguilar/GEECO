import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetallesPage } from './modal-detalles';

@NgModule({
  declarations: [
    ModalDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetallesPage),
  ],
})
export class ModalDetallesPageModule {}
