import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-gastos',
  templateUrl: 'gastos.html',
})
export class GastosPage {
  gasto: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db : DbProvider,
    public authCtrl : AuthProvider,
    public modalCtrl : ModalController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GastosPage');
  }

  ionViewDidEnter(){
    this.db.getGasto().then((res)=>{
      this.gasto = [];
      for(var i = 0; i < res.rows.length; i++){
        this.gasto.push({
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

  nuevoGasto(){
      // aquí vamos a abrir el modal para añadir nuestro sitio.
      let mimodal = this.modalCtrl.create( 'ModalNuevoGastoPage');
      mimodal.present();
  }
}