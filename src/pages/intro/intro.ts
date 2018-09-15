import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

// import { HomePage } from '../home/home';
import { ChildrenPage } from '../children/children';
// import { UserLoginPage } from '../cumulocity/userlogin/userlogin';
import { UserHomePage } from '../cumulocity/home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginProvider } from '../../providers/login/login';
import { GetChildrenProvider } from '../../providers/get-children/get-children';
import { MyDevicesPage } from '../trackingApp/my-devices/my-devices';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

	constructor(public navCtrl: NavController, private menuCtrl: MenuController, private storage: Storage,
		private translateService: TranslateService, private platform: Platform, private authService: AuthServiceProvider,
		private loginProvider: LoginProvider, private getChildrenProvider: GetChildrenProvider) {
	}
	ionViewDidEnter() {
		this.menuCtrl.enable(false);
	}
	
	mySensors(){
		this.authService.Login('sam', 'leesmasmalee@gmail.com', 'myhome123', 1).then(resp=>{
			// console.log("resp", resp)
      this.navCtrl.setRoot(UserHomePage);
    })
		
		// this.storage.get("devices").then((data)=>{
	  //   this.storage.get("userData").then(user=>{
	  //     if (user != null && data != null) {
		// 			this.navCtrl.setRoot(UserHomePage);
		// 		}else{
		// 			this.navCtrl.setRoot(UserLoginPage);
		// 		}
		// 	})
		// });
	}

	trackingApp(){
		this.navCtrl.setRoot(MyDevicesPage);
	}

	busTrackingApp(){
		this.loginProvider.Login("12345", "Mh12345").then((token)=>{
      this.getChildrenProvider.getAllChildren(token).then((flag)=>{
        if (flag) {
					this.navCtrl.setRoot(ChildrenPage);
					this.storage.set("language", "en");
					this.platform.setDir('ltr', true);
        }
      }).catch((error1)=>{
        alert(error1);
      });
    }).catch((error2)=>{
      alert(error2)
		});

	
		
		//****************//
    // this.storage.ready().then(()=>{
    //   this.storage.get("children").then((data)=>{
    //     if(data != null){
    //     	this.storage.get("language").then(lang => {
        		
    //     		if (lang === 'ar') {
    //     			this.platform.setDir('rtl', true);
    //     		}else{
    //     			this.platform.setDir('ltr', true);
    //     		}
    //     		this.translateService.use(lang);
    //     	});
    //     	this.navCtrl.setRoot(ChildrenPage);
    //     }else{
		// 			this.storage.set("language", "en");
		// 			this.platform.setDir('ltr', true);
		// 			this.navCtrl.setRoot(HomePage);
    //     }
    //   });
    // });
  }

}
