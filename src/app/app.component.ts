import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { DbProvider } from '../providers/db/db';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';

  constructor(
    public db: DbProvider,
    platform: Platform,
    splashScreen: SplashScreen,
    private auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.auth.Session.subscribe(session=>{
        if(session){
          this.rootPage = 'MyTabsPage';
        }
        else{
          this.rootPage = 'HomePage';
        }
      });
      splashScreen.hide();
      this.db.openDb()
      .then(() => this.db.createTables())
    });
  }
}