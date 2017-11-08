import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  ingreso: any;
  gasto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db : DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
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
}
