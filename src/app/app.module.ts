import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

import {ModalCuentasPages} from '../pages/cuentas/cuentas';
import { Camera } from '@ionic-native/camera';
import { DbProvider } from '../providers/db/db';
import { SQLite } from '@ionic-native/sqlite';


export const firebaseConfig = {
  apiKey: "AIzaSyDUpnhI7SJTOXVeWuJxZdZrRYr4mdJ4fMk",
  authDomain: "geeco-2344c.firebaseapp.com",
  databaseURL: "https://geeco-2344c.firebaseio.com",
  projectId: "geeco-2344c",
  storageBucket: "geeco-2344c.appspot.com",
  messagingSenderId: "976813259350"
};


@NgModule({
  declarations: [
    MyApp,
    ModalCuentasPages
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalCuentasPages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Camera,
    DbProvider,
    SQLite
  ]
})
export class AppModule {}
