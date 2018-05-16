import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../home/home';
import { ChildrenPage } from '../children/children';
import { UserLoginPage } from '../cumulocity/userlogin/userlogin';
import { UserHomePage } from '../cumulocity/home/home';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

	constructor(public navCtrl: NavController, private menuCtrl: MenuController, private storage: Storage,
		private translateService: TranslateService, private platform: Platform) {
	}
	ionViewDidEnter() {
		this.menuCtrl.enable(false);
	}
	
	mySensors(){
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
        	this.storage.get("language").then(lang => {
        		
        		if (lang === 'ar') {
        			this.platform.setDir('rtl', true);
        		}else{
        			this.platform.setDir('ltr', true);
        		}
        		this.translateService.use(lang);
        	});
        	this.navCtrl.setRoot(ChildrenPage);
        }else{
			this.storage.set("language", "en");
			this.platform.setDir('ltr', true);
			this.navCtrl.setRoot(HomePage);
        }
      });
    });
  }

}
