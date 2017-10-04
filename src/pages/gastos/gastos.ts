import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the GastosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gastos',
  templateUrl: 'gastos.html',
})
export class GastosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authCtrl : AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GastosPage');
  }

  cerrarSesion(){
    this.authCtrl.logout();
}

}
