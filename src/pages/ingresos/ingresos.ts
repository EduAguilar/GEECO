import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html',
})
export class IngresosPage {
  ingreso: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db : DbProvider,
    public authCtrl : AuthProvider,
    public modalCtrl : ModalController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresosPage');
  }

  ionViewDidEnter(){
    this.db.getIngreso().then((res)=>{
      this.ingreso = [];
      for(var i = 0; i < res.rows.length; i++){
        this.ingreso.push({
          id: res.rows.item(i).id, 
          importe: res.rows.item(i).importe, 
          tipo: res.rows.item(i).tipo, 
          categoria: res.rows.item(i).categoria,
          fecha: res.rows.item(i).fecha,
          hora: res.rows.item(i).hora,
          nota: res.rows.item(i).nota,
          foto: res.rows.item(i).foto
        });
      }
    },(err)=>{ /* alert('error al sacar de la bd'+err) */ })
  }  

  cerrarSesion(){
      this.authCtrl.logout();
  }

  nuevoIngreso(){
      // aquí vamos a abrir el modal para añadir nuestro sitio.
      let mimodal = this.modalCtrl.create( 'ModalNuevoIngresoPage');
      mimodal.present();
  }
}