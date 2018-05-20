import { Component } from '@angular/core';
import { NavController, AlertController, ViewController, MenuController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

import { IntroPage } from '../../intro/intro';
import { UserLoginPage } from '../userlogin/userlogin';
import { DevicesPage } from '../devices/devices';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';

@Component({
  selector: 'page-userhome',
  templateUrl: 'home.html'
})

export class UserHomePage {
  items = [];
  item:any;
  ids:any = [];
  names:object = {};
  devices:any;
  token:string;
  icons:any = {"c8y_TemperatureMeasurement": "ios-thermometer",
               "c8y_LightMeasurement":"md-bulb",
               "c8y_AccelerationMeasurement":"md-compass",
               "c8y_Position":"pin",
               "c8y_DistanceMeasurement": "walk",
               "c8y_Mobile": "phone-portrait"
              };

  constructor(public navCtrl: NavController, private alertCtrl:AlertController, private viewCtrl: ViewController,
            public storage: Storage, private menuCtrl: MenuController, public authService : AuthServiceProvider) 
    {
      setTimeout(()=>{
        this.storage.get("userData").then((data)=>{
          let tenant = data.tenant;
          let token = data.token;
          if(this.items != null){
            for(let item of this.items){
              let deviceID = item.deviceID;
              let type = item.type;
              let userMeasurementName = item.name;
              this.authService.reloadAll(tenant,deviceID, type, token, userMeasurementName).then(()=>{
                this.storage.get("devicesMeasurements").then((data)=>{
                  if(data != null){
                    $.each(data, (i, resp)=>{
                      console.log("resp", resp)
                      this.ids.push(i);
                      this.items.push(resp);
                      for(let dev of this.devices){
                        if (dev["id"] == i) {
                          this.names[i] =dev["name"];
                        }
                      }
                    });
                  }
                })
              });
            }
          }
        })
      }, 3000);

    }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
    this.viewCtrl.showBackButton(false);
    this.storage.get("devices").then(devices=>{
      this.devices = devices;
      this.diplayItems();
    });
  }

  diplayItems(){
    this.storage.get('devicesMeasurements').then((data)=>{
      if(data != null){
        $.each(data, (i, resp)=>{
          this.ids.push(i);
          this.items.push(resp);
          for(let dev of this.devices){
            if (dev["id"] == i) {
              this.names[i] =dev["name"];
            }
          }
        });
      }
    })
  }

  removeItem(index){
    
    if(index > -1){
      this.storage.get("devices").then((data)=>{
        for(let i in data){
          if(data[i]["id"] == this.items[index][0]['deviceID']){
            data[i]["disableBTN"]=false;
            this.storage.set("devices", data).then(()=>{

              this.items.splice(index, 1);
              this.ids.splice(data[i]["id"] , 1)
              delete this.names[data[i]["id"]];

              this.storage.get("devicesMeasurements").then(resp=>{
                delete resp[data[i]["id"]];
                this.navCtrl.setRoot(this.navCtrl.getActive().component); // to refresh page
                this.storage.set("devicesMeasurements", resp)

              })
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
    this.navCtrl.setRoot(IntroPage);
  }

  logout(){
    this.storage.clear().then(()=>{
      this.navCtrl.setRoot(UserLoginPage);
    });
  }

}
