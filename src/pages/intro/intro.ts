import { Component } from '@angular/core';
import { NavController, MenuController, Platform, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChildrenPage } from '../children/children';
import { UserHomePage } from '../cumulocity/home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginProvider } from '../../providers/login/login';
import { GetChildrenProvider } from '../../providers/get-children/get-children';
import { MyDevicesPage } from '../trackingApp/my-devices/my-devices';
import { MyHomePage } from '../IFTTTApp/my-home/my-home';
import * as launcher from '../../assets/js/start-app';


@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})

export class IntroPage {

	showMyApplist = false;
	showMySensorApp = false;
	showMyBusApp = false;
  showMyTrackingApp = false;
  showMySmartOfficeApp = false;
  showMyIFTTTApp = false;

	constructor(public navCtrl: NavController, private menuCtrl: MenuController, private storage: Storage,
		private platform: Platform, private authService: AuthServiceProvider, public alertCtrl: AlertController,
		private loginProvider: LoginProvider, private getChildrenProvider: GetChildrenProvider)
  {
    this.storage.get("myApps").then(data=>{
      console.log("data", data)
      if(data != null){
        this.showMyApplist= data.showMyApplist ? data.showMyApplist : false
        this.showMyTrackingApp= data.showMyTrackingApp ? data.showMyTrackingApp : false
        this.showMyBusApp= data.showMyBusApp ? data.showMyBusApp : false
        this.showMySensorApp = data.showMySensorApp ? data.showMySensorApp : false
        this.showMySmartOfficeApp = data.showMySmartOfficeApp ? data.showMySmartOfficeApp : false;
        this.showMyIFTTTApp = data.showMyIFTTTApp ? data.showMyIFTTTApp : false;
      }else{
        let myApps = {
          showMyApplist : false,
          showMyTrackingApp : false,
          showMyBusApp : false,
          showMySensorApp : false,
          showMySmartOfficeApp: false,
          showMyIFTTTApp: false
        }
        this.storage.set("myApps", myApps)
      }
    }).catch(error=>{
      console.log("error")
    })
	}
	ionViewDidEnter() {
		this.menuCtrl.enable(false);
  }
  
  unsubscribeService(name){
    const confirm = this.alertCtrl.create({
      message: 'Are you sure to unsubscribe this sevice',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.showMyApplist = true;
            this.storage.get("myApps").then(data=>{
              if (data) {
                data['showMyApplist'] = false;
                if (name == 'showMyTrackingApp') {
                  this.showMyTrackingApp = false
                  data['showMyTrackingApp'] = false
                }else if (name == 'showMyBusApp') {
                  this.showMyBusApp = false
                  data['showMyBusApp'] = false
                }else if (name == 'showMySensorApp') {
                  this.showMySensorApp = false
                  data['showMySensorApp'] = false
                }else if (name == 'showMySmartOfficeApp') {
                  this.showMySmartOfficeApp = false
                  data['showMySmartOfficeApp'] = false
                }else if (name == 'showMyIFTTTApp') {
                  this.showMyIFTTTApp = false
                  data['showMyIFTTTApp'] = false
                }
                this.storage.set('myApps', data)
              }
            })
          }
        }
      ]
    });
    confirm.present();
  }

	serviceLicense(name){
    const confirm = this.alertCtrl.create({
      message: 'You have successfully subscribed to this service',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.showMyApplist = true;
            this.storage.get("myApps").then(data=>{
              if (data) {
                data['showMyApplist'] = true;
                if (name == 'showMyTrackingApp') {
                  this.showMyTrackingApp = true
                  data['showMyTrackingApp'] = true
                }else if (name == 'showMyBusApp') {
                  this.showMyBusApp = true
                  data['showMyBusApp'] = true
                }else if (name == 'showMySensorApp') {
                  this.showMySensorApp = true
                  data['showMySensorApp'] = true
                }else if (name == 'showMySmartOfficeApp') {
                  this.showMySmartOfficeApp = true
                  data['showMySmartOfficeApp'] = true
                }else if (name == 'showMyIFTTTApp') {
                  this.showMyIFTTTApp = true
                  data['showMyIFTTTApp'] = true
                }
                this.storage.set('myApps', data)
              }
            })
          }
        }
      ]
    });
    confirm.present();
  }

	
	mySensors(){
		this.authService.Login('samosamlee', 'samosamlee@gmail.com', 'samosamlee123!@#', 1).then(resp=>{
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
  
  IFTTTApp(){
		this.navCtrl.setRoot(MyHomePage);
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

  openExternalApp(){
    launcher.packageLaunch("com.gwcd.airplug");
  }

}
