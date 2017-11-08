import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ViewController, Platform} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cuentas',
  templateUrl: 'cuentas.html',
})
export class CuentasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentasPage');
  }

  saldoModal() {
    let modal = this.modalCtrl.create(ModalCuentasPages );
    modal.present();
  }
}

@Component({
  template:`
<ion-header (click)=dismiss()>
  <ion-navbar>
    <ion-title icon>Registro de Saldos</ion-title>

    <ion-buttons end>
    <button ion-button icon-only>
      <ion-icon name='md-backspace'></ion-icon>
    </button>
    </ion-buttons>
    
  </ion-navbar>
</ion-header>


 <ion-content (click)=dismiss()>
  <ion-item >
  <ion-item>
    <ion-icon name="md-add-circle" color="secondary" item-start></ion-icon>
    Ingresos
    <ion-badge item-end color="secondary">$8500</ion-badge>
  </ion-item>
  <ion-item>
    <ion-icon name="md-remove-circle" color="danger" item-start></ion-icon>
    Gastos
    <ion-badge item-end color="danger">$5500</ion-badge>
  </ion-item> 
</ion-item>
</ion-content>
`
})
export class ModalCuentasPages {
  
  constructor(
    public modalCtrl: ModalController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) { }

    dismiss() {
      this.viewCtrl.dismiss();
    }
}
