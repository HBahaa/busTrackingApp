import { Component } from '@angular/core';
import { NavController, ViewController , NavParams, reorderArray} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DevicesPage } from '../devices/devices';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';

@Component({
  selector: 'page-userhome',
  templateUrl: 'home.html'
})

export class UserHomePage {
  items:any[];
  flag: any = false;
  devices:any;
  username:string;
  token:string;
  icons:any = {"c8y_TemperatureMeasurement": "ios-thermometer", "c8y_LightMeasurement":"md-bulb", "c8y_AccelerationMeasurement":"md-compass"};
  colors:any= {"c8y_TemperatureMeasurement": ["c1"], "c8y_LightMeasurement":["color5"], "c8y_AccelerationMeasurement":["c4"]};
  item:any;

    constructor(public navCtrl: NavController,public navParams: NavParams,
              private viewCtrl: ViewController,public storage: Storage,
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

  diplayItems(){
    this.storage.get('devicesMeasurements').then((data)=>{
      if(data != null){
        this.items = data;
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

  ionViewWillEnter() {
      this.viewCtrl.showBackButton(false);
      this.diplayItems()
      this.doRefresh(0);
  }
  ionViewDidEnter() {
      this.diplayItems()

  }

  removeItem(index){
    if(index > -1){
      this.storage.get("devices").then((data)=>{
        for(let i in data){
          if(data[i]["id"] == this.items[index]["deviceID"]){
            data[i]["disableBTN"]=false;
            this.storage.set("devices", data).then(()=>{
              this.items.splice(index, 1);
              this.storage.set("devicesMeasurements", this.items)
            });
            break
          }
        }
      })
    }
  }

  showDevices(){
    this.navCtrl.push(DevicesPage);
  }

}
