import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams, AlertController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user= { email : '', password : ''};
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authCtrl: AuthProvider,
    public alertCtrl : AlertController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  signin(){
    this.authCtrl.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

  login() 
  {
      this.authCtrl.loginUser(this.user.email,this.user.password ).then((user) => {
        }
      )
       .catch(err=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
    }



}
