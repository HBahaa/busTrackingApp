import { Component } from '@angular/core';
import { NavController, AlertController, ViewController, MenuController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

import { IntroPage } from '../../intro/intro';
import { UserLoginPage } from '../userlogin/userlogin';
import { DevicesPage } from '../devices/devices';
import { DataServiceProvider } from '../../../providers/data-service/data-service';

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

  icons:any = {"temperature": "ios-thermometer",
               "light":"md-bulb",
               "acceleration":"md-compass",
               "position":"pin",
               "distance": "walk",
               "mobile": "phone-portrait",
               "bus": "bus"
              };
  
  measures = ["co2", "pressure", "temperature", "humidity", "temperaturesensor", "thermostat", "oiltemperature"]
  

  constructor(public navCtrl: NavController, private alertCtrl:AlertController, private viewCtrl: ViewController,
            public storage: Storage, private menuCtrl: MenuController, public dataService : DataServiceProvider) 
    {
      this.menuCtrl.enable(false);
      this.viewCtrl.showBackButton(false);
      this.storage.get("devices").then(devices=>{
        this.devices = devices;
        this.diplayItems();
      });
      setTimeout(()=>{
        this.storage.get("userData").then((data)=>{
          let tenant = data.tenant;
          let token = data.token;
          if(this.items.length > 0){
            for(let item of this.items){
              for (let sensor of item ) {
                // this.dataService.updateData(tenant,sensor.deviceID, sensor.type, token, sensor.type, sensor.name ).then((resp)=>{
                //   if (sensor.type.indexOf("Position") >= 0) {
                //     if (sensor["lat"] != resp["lat"]) {
                //       sensor["lat"] = resp["lat"]
                //     }else if (sensor["lng"] != resp["lng"]){
                //       sensor["lng"] = resp["lng"]
                //     }
                //   }
                //   else{
                //     if (sensor.value != resp[Object.keys(resp)[0]]["value"]) {
                //       sensor.value = resp[Object.keys(resp)[0]]["value"];
                //     }
                //   }
                // }).catch(error=>{
                //   console.log("dataservice error", error)
                // })


                
                  if (sensor.type.indexOf("Position") >= 0) {
                    this.dataService.updatePostionData(tenant,sensor.deviceID, sensor.type, token, sensor.type, sensor.name).then(resp=>{
                      resp = resp[sensor.type];
                      if (sensor["lat"] != resp["lat"]) {
                        sensor["lat"] = resp["lat"]
                      }
                      if (sensor["lng"] != resp["lng"]){
                        sensor["lng"] = resp["lng"]
                      }
                    })
                    
                  }else if (sensor.type.indexOf("custom") >= 0) {
                    console.log("custom")
                    this.dataService.updatePostionData(tenant,sensor.deviceID, sensor.type, token, sensor.type, sensor.name).then(resp=>{
                      console.log("custom", resp);
                      sensor["AbsolutePressure"] = resp["AbsolutePressure"].value;
                      sensor["CO2"] = resp["CO2"].value;
                      sensor["Noise"] = resp["Noise"].value;
                      sensor["Humidity"] = resp["Humidity"].value;
                    })
                    
                  }
                  else{
                    this.dataService.updateData(tenant,sensor.deviceID, sensor.type, token, sensor.type, sensor.name ).then((resp)=>{
                      if (sensor.value != resp[Object.keys(resp)[0]]["value"]) {
                        sensor.value = resp[Object.keys(resp)[0]]["value"];
                      }
                    }).catch(error=>{
                      console.log("dataservice error", error)
                    })
                  }
              }
            }
          }
        })
      }, 3000);

    }

  ionViewWillEnter() {

   
  }

  ionViewDidEnter() {}

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
