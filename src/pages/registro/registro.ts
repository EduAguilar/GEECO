import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  ingreso: any;
  gasto: any;
  mydato: any;
  gastototal: any;
  //edit : boolean = false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public db : DbProvider,
     public alertCtrl: AlertController,
     public modalCtrl : ModalController    
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  ionViewDidEnter(){

    this.gastototal=this.db.sumarGastos
    
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

  sumargastos(){
    this.db.sumarGastos().then((res)=>{
      this.gastototal = [];
    
    },(err)=>{ /* alert('error al sacar de la bd'+err) */ })  
   }

  muestraDetalle(dato){
    let modalDetalle = this.modalCtrl.create( 'ModalDetallesPage', dato );
    modalDetalle.present();
    this.obtenerdato(dato);
  }

  obtenerdato(dato){
    this.mydato=dato
  }





  borrarIngreso(id){
    
        let alert = this.alertCtrl.create({
          title: 'Confirmar borrado',
          message: '¿Estás seguro de que deseas eliminar este Ingreso?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
                // Ha respondido que no así que no hacemos nada
              }
            },
            {
              text: 'Si',
              handler: () => {
                this.db.borrarIngreso(id).then((res)=>{
                  // Una vez borrado el sitio recargamos el listado
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
      
                  },(err)=>{ /* alert('error al borrar de la bd'+err) */ });  
                   // AquÍ borramos el sitio en la base de datos
     
               }
            }
          ]
        });
        
        alert.present();
    
     }



     borrarGasto(id){
      
          let alert = this.alertCtrl.create({
            title: 'Confirmar borrado',
            message: '¿Estás seguro de que deseas eliminar este Gasto?',
            buttons: [
              {
                text: 'No',
                role: 'cancel',
                handler: () => {
                  // Ha respondido que no así que no hacemos nada
                }
              },
              {
                text: 'Si',
                handler: () => {
                  this.db.borrarGasto(id).then((res)=>{
                    // Una vez borrado el sitio recargamos el listado
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
        
                    },(err)=>{ /* alert('error al borrar de la bd'+err) */ });  
                     // AquÍ borramos el sitio en la base de datos
       
                 }
              }
            ]
          });
          
          alert.present();
      
       }
     
}
