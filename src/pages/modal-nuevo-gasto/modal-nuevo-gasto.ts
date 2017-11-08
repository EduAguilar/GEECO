import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as moment from 'moment';
import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-modal-nuevo-gasto',
  templateUrl: 'modal-nuevo-gasto.html',
})
export class ModalNuevoGastoPage {
  importe: any = '';
  tipo: string = ''; 
  categoria: string = '';
  nota: any = '';
  foto: any = '';
 
  myDateFecha= moment().format('YYYY MMMM Do ');//para poder tener la fecha y hora correcta del momento y uso horario local
  myDateHora = moment().format('h:mm A');//para poder tener la fecha y hora correcta del momento y uso horario local
  /*Dato informativo:
  Javascript time library does not manage time correctly.
  I recommend using moment.js.
  go to you folder application, run : npm install moment --save
  in your page.ts add: import * as moment from 'moment';
  declare your variable: myDate= moment().format(); */
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private camera:Camera,
    private db: DbProvider,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoGastoPage');
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
      this.foto = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  guardarGasto(){
    let gasto = {
      importe: this.importe,
      tipo: this.tipo, 
      categoria: this.categoria, 
      fecha: this.myDateFecha,
      hora: this.myDateHora,
      nota: this.nota,
      foto: this.foto
    }
    this.db.cargarGasto(gasto).then((res)=>{
      this.cerrarModal();     
     //alert('se ha introducido correctamente en la bd');
    },(err)=>{ /* alert('error al meter en la bd'+err) */ }) 
}

cerrarModal() {
  this.viewCtrl.dismiss();
}
}
