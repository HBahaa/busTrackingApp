import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

import { ChildrenPage } from '../pages/children/children';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { MessagesPage } from '../pages/messages/messages';

import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { UserHomePage } from '../pages/cumulocity/home/home';
import { UserLoginPage } from '../pages/cumulocity/userlogin/userlogin';

declare var cordova:any;
declare var window:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;
  isLoggedIn:boolean;
  loader:any;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private translateService: TranslateService, private keyboard: Keyboard,public toastCtrl:ToastController
    ,public loadingCtrl: LoadingController, private storage: Storage) {


    platform.ready().then(() => {

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.disableScroll(true);
      }

      this.keyboard.disableScroll(true);

      // this.storage.clear();

      statusBar.styleDefault();
      splashScreen.hide();
      this.translateService.use('en');

      // this.presentLoading();
      // this.loadingPage();
                
    });

    this.pages = [
      { icon: 'contacts',title: 'CHILDREN_PAGE.title', component: ChildrenPage },
      { icon: 'notifications',title: 'NOTIFICATIONS_PAGE.title', component: NotificationsPage },
      { icon: 'chatboxes',title: 'MESSAGES_PAGE.title', component: MessagesPage },
      { icon: 'person',title: 'PROFILE_PAGE.title', component: ProfilePage }
    ];

  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  userLogout(){
    this.storage.clear().then(()=>{
      this.nav.setRoot(HomePage);
    });
  }

  switchMySensors(){
    this.storage.get("devices").then((data)=>{
      this.platform.setDir('rtl', false);
      this.platform.setDir('ltr', true);
        this.translateService.use('en');

      if (data != null) {
        this.nav.setRoot(UserHomePage);
      }else{
        this.nav.setRoot(UserLoginPage);
      }
    });
  }

  // loadingPage(){
  //   this.storage.ready().then(()=>{

  //     this.storage.get("children").then((data)=>{
  //       this.loader.dismiss();
        
  //       if(data != null){

  //         this.setLanguage()

  //         this.rootPage = ChildrenPage;
  //         // this.loader.dismiss();

  //       }else if(data == null){
  //         // this.loader.dismiss();
  //         this.storage.set("language", "en");
  //         this.translateService.use('en');
  //         this.rootPage = HomePage;
  //       }
  //     })
  //   })
  // }

  setLanguage(){
    this.storage.get("language").then(lang =>{
      if (lang === 'ar') {
        this.platform.setDir('ltr', false);
        this.platform.setDir('rtl', true);
      }
      this.translateService.use(lang);
    }).catch(err =>{
      
      this.translateService.use('en');
    });
  }

  presentLoading() {
    // this.translateService.get('APP_PAGE.load').subscribe((load)=>{
      this.loader = this.loadingCtrl.create({
        content: "Authenticating..."
      });
      this.loader.present();
    // });

  }
}
