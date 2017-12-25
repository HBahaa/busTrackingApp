import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';
// import * as $ from 'jquery';

import { LoginPage } from '../login/login';
import { Register1Page } from '../register1/register1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform, private translateService: TranslateService, private menuCtrl: MenuController) {
  }

   ionViewDidEnter() {

    this.menuCtrl.enable(false);
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  goToRegistration() {
    this.navCtrl.setRoot(Register1Page);
  }

  segmentChanged(event) {
    console.log("event._value", event._value);
    this.translateService.use(event._value);
    if(event._value == 'ar'){
      this.platform.setDir('rtl', true);
    }
    else{
      this.platform.setDir('ltr', true);
    }
  }

}
