import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { UserLoginPage } from '../cumulocity/userlogin/userlogin';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

	constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
	}
	ionViewDidEnter() {
		this.menuCtrl.enable(false);
	}
	mySensors(){
		this.navCtrl.setRoot(UserLoginPage);
	}

	busTrackingApp(){
		this.navCtrl.setRoot(HomePage);
	}

}
