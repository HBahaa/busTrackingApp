import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { ChildrenPage } from '../children/children';
import { UserLoginPage } from '../cumulocity/userlogin/userlogin';
import { UserHomePage } from '../cumulocity/home/home';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

	constructor(public navCtrl: NavController, private menuCtrl: MenuController, private storage: Storage) {
	}
	ionViewDidEnter() {
		this.menuCtrl.enable(false);
	}
	mySensors(){
		// this.navCtrl.setRoot(UserLoginPage);
		this.storage.get("devices").then((data)=>{
	      	this.storage.get("userData").then(user=>{
	      		if (user != null && data != null) {
					this.navCtrl.setRoot(UserHomePage);
				}else{
					this.navCtrl.setRoot(UserLoginPage);
				}
	        })
	    });
	}

	busTrackingApp(){
    this.storage.ready().then(()=>{
      this.storage.get("children").then((data)=>{
        if(data != null){
          this.navCtrl.setRoot(ChildrenPage);
        }else{
          this.storage.set("language", "en");
          // this.translateService.use('en');
          this.navCtrl.setRoot(HomePage);
        }
      });
    });
  }

}
