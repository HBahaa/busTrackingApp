import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { Register1Page } from '../register1/register1';
import { IntroPage } from '../intro/intro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform, private storage: Storage,
              private translateService: TranslateService, private menuCtrl: MenuController){}

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  backToIntro(){
    this.navCtrl.setRoot(IntroPage);
  }

  changeLanguage(language){
    if (language === 'ar') {
      this.platform.setDir('ltr', false);
      this.platform.setDir('rtl', true);
      this.translateService.use(language);
      
    } else {
      this.platform.setDir('rtl', false);
      this.platform.setDir('ltr', true);
      this.translateService.use(language);
    }
    this.storage.set("language", language);
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  goToRegistration() {
    this.navCtrl.setRoot(Register1Page);
  }

  segmentChanged(event) {
    this.translateService.use(event._value);
    if(event._value == 'ar'){
      this.platform.setDir('rtl', true);
    }
    else{
      this.platform.setDir('ltr', true);
    }
  }

}
