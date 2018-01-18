import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

import { ChildrenPage } from '../pages/children/children';
import { HomePage } from '../pages/home/home';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';


declare var cordova:any;
declare var window:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  isLoggedIn:boolean;
  loader:any;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private translateService: TranslateService, private keyboard: Keyboard,public toastCtrl:ToastController
    ,public loadingCtrl: LoadingController, private storage: Storage) {

    // this.storage.clear();

    platform.ready().then(() => {

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.disableScroll(true);
      }

      this.keyboard.disableScroll(true);

      statusBar.styleDefault();
      splashScreen.hide();


      this.translateService.setDefaultLang('en');
      this.translateService.use('en');

      this.presentLoading();
      this.loadingPage();
                
    });

    this.pages = [
      { icon: 'contacts',title: 'My Children', component: ChildrenPage },
      { icon: 'notifications',title: 'Notifications', component: NotificationsPage },
      { icon: 'person',title: 'Profile', component: ProfilePage }
    ];

  }


  openPage(page) {
    this.nav.setRoot(page.component);
  }

  userLogout(){
    this.storage.get('children').then((result)=>{
      $.each(result, (index, child)=>{
        this.storage.remove(child.tag).then(()=>{
          this.storage.remove('children')
          this.storage.remove('token').then(()=>{
            this.nav.setRoot(LoginPage);
          }).catch(()=>{
            console.log("error")
          });
        });
      })
    });
  }

  loadingPage(){
    this.storage.ready().then(()=>{

      this.storage.get("children").then((data)=>{
        if(data != null){
          this.rootPage = ChildrenPage;
          this.loader.dismiss();

        }else if(data == null){
          this.loader.dismiss();
          this.rootPage = HomePage;
        }
      })
    })
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
    this.loader.present();
  }
}
