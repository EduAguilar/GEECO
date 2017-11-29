import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DbProvider } from '../../providers/db/db';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-modal-detalles',
  templateUrl: 'modal-detalles.html',
})
export class ModalDetallesPage {
  dato: any;
  edit : boolean = false;
  ingreso: any;
  gasto: any;
  importe: any = '';
  tipo: string = ''; 
  categoria: string = '';
  nota: any = '';
  foto: any = '';
 
  myDateFecha= moment().format('YYYY MMMM Do ');//para poder tener la fecha y hora correcta del momento y uso horario local
  myDateHora = moment().format('h:mm A');//para poder tener la fecha y hora correcta del momento y uso horario local

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private viewCtrl: ViewController,
    private camera: Camera, 
    private db: DbProvider  
  ) 
  {
    this.dato = this.navParams.data;
    //this.ingreso = this.navParams.data;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetallesPage');
  }

  cerrarModal(){ 
    this.viewCtrl.dismiss();
  }
  
  editar(dato){ 
    this.edit = true;
    this.dato= dato
  }


  sacarFoto(){
    let cameraOptions : CameraOptions = {
      quality: 50,
      encodingType: this.camera.EncodingType.JPEG, 
      targetWidth: 800,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }
    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
      this.dato.foto = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  guardarCambios(){ 


    this.db.modificarGastos(this.dato).then((res)=>{
      this.edit = false;
  },(err)=>{  /* alert('error al meter en la bd'+err) */ })   
 

    this.db.modificarIngresos(this.dato).then((res)=>{
        this.edit = false;
    },(err)=>{  /* alert('error al meter en la bd'+err) */ })   

  this.cerrarModal();
  }
  

}
