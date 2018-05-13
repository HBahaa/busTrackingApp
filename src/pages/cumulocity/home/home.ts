import { Component } from '@angular/core';
import { NavController, AlertController, ViewController, MenuController, NavParams, reorderArray} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ChildrenPage } from '../../children/children';
import { HomePage } from '../../home/home';
import { UserLoginPage } from '../userlogin/userlogin';
import { DevicesPage } from '../devices/devices';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';

@Component({
  selector: 'page-userhome',
  templateUrl: 'home.html'
})

export class UserHomePage {
  items:any[];
  ids:any = [];
  names:any = {};
  flag: any = false;
  devices:any;
  username:string;
  token:string;
  icons:any = {"c8y_TemperatureMeasurement": "ios-thermometer", "c8y_LightMeasurement":"md-bulb", "c8y_AccelerationMeasurement":"md-compass"};
  colors:any= {"c8y_TemperatureMeasurement": ["c1"], "c8y_LightMeasurement":["color5"], "c8y_AccelerationMeasurement":["c4"]};
  item:any;

    constructor(public navCtrl: NavController,public navParams: NavParams,private alertCtrl:AlertController,
              private viewCtrl: ViewController,public storage: Storage, private menuCtrl: MenuController,
              public authService : AuthServiceProvider) 
      {
        this.diplayItems();
        this.doRefresh(0);
        var my = this;
        

        setTimeout(function(){
          my.storage.get("userData").then((data)=>{
            let tenant = data.tenant;
             let token = data.token;

            if(my.items != null){
              for(let item of my.items){
                let deviceID = item.deviceID;
                let type = item.type;
                let userMeasurementName = item.name;
                my.authService.reloadAll(tenant,deviceID, type, token, userMeasurementName).then(()=>{
                  my.storage.get("devicesMeasurements").then((data)=>{
                    my.items = data;
                  })
                });
              }
            }

          })

        }, 3000);
      }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    this.diplayItems()
    this.doRefresh(0);
  }
  ionViewDidEnter() {
    this.diplayItems()
    this.menuCtrl.enable(false);
  }

  diplayItems(){
    this.storage.get('devicesMeasurements').then((data)=>{
      if(data != null){
        this.items = data;
        for (let i of data) {
          if (this.ids.indexOf(...Object.keys(i)) == -1) {
            this.ids.push(...Object.keys(i));
            this.storage.get("devices").then(devices=>{
              for(let dev of devices){
                if (dev["id"] == Object.keys(i)[0]) {
                    let did = dev["id"];
                    this.names[did] =dev["name"];
                }
              }
            })
          }
        }
      }
    })
  }
  
  doRefresh(refresher){
      this.storage.get('devicesMeasurements').then((data) => {
        this.items = data;
        if(refresher != 0)
           refresher.complete();
      });
  }

  reorderItems(indexes){
    this.items = reorderArray(this.items, indexes);
    this.storage.set("devicesMeasurements", this.items);
  }

  removeItem(index){
    if(index > -1){
      this.storage.get("devices").then((data)=>{
        for(let i in data){
          if(data[i]["id"] == Object.keys(this.items[index])[0]){
            data[i]["disableBTN"]=false;
            this.storage.set("devices", data).then(()=>{
              this.items.splice(index, 1);
              this.navCtrl.setRoot(this.navCtrl.getActive().component);
              this.storage.set("devicesMeasurements", this.items)
            });
            break
          }
        }
      })
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Help',
      subTitle: 'Click to add button to one of your devices. when you click on device, it will be added to this page.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  showDevices(){
    this.navCtrl.push(DevicesPage);
  }

  switchTrackingApp(){
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

  logout(){
    this.storage.clear().then(()=>{
      this.navCtrl.setRoot(UserLoginPage);
    });
  }

}
