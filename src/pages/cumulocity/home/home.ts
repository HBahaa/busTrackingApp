import { Component } from '@angular/core';
import { NavController, AlertController, ViewController, MenuController} from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
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
  map: GoogleMap;

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
            public storage: Storage, private menuCtrl: MenuController, public dataService : DataServiceProvider) 
    {
      this.menuCtrl.enable(false);
      this.viewCtrl.showBackButton(false);
      this.storage.get("devices").then(devices=>{
        this.devices = devices;
        console.log("dev", devices);
        this.diplayItems();
      });
      setTimeout(()=>{
        this.storage.get("userData").then((data)=>{
          let tenant = data.tenant;
          let token = data.token;
          if(this.items.length > 0){
            for(let item of this.items){
              for (let sensor of item ) {
                this.dataService.updateData(tenant,sensor.deviceID, sensor.type, token, sensor.type, sensor.name ).then((resp)=>{
                  if (sensor.type.indexOf("Position") >= 0) {
                    if (sensor["lat"] != resp["lat"]) {
                      sensor["lat"] = resp["lat"]
                    }else if (sensor["lng"] != resp["lng"]){
                      sensor["lng"] = resp["lng"]
                    }
                  }
                  else{
                    if (sensor.value != resp[Object.keys(resp)[0]]["value"]) {
                      sensor.value = resp[Object.keys(resp)[0]]["value"];
                    }
                  }
                }).catch(error=>{
                  console.log("dataservice error", error)
                })
              }
            }
          }
        })
      }, 3000);

    }

  ionViewDidEnter() {}

  diplayItems(){
    this.storage.get('devicesMeasurements').then((data)=>{
      console.log("devices", data)
      if(data != null){
        $.each(data, (i, resp)=>{
          console.log("resp", resp)
          this.ids.push(i);
          this.items.push(resp);
          // for(let i of resp){
          //   if (i["type"].indexOf("Position") > 0) {
          //     console.log("position", i)
          //     this.loadMap();
          //   }
          }
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

  // loadMap() {

  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //       target: {
  //         lat: 43.0741904,
  //         lng: -89.3809802
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   };

  //  this.map = GoogleMaps.create('map', mapOptions);

  //  // Wait the MAP_READY before using any methods.
  //   this.map.one(GoogleMapsEvent.MAP_READY)
  //     .then(() => {
  //       console.log('Map is ready!');
  //       // Now you can use all methods safely.
  //       this.map.addMarker({
  //         title: 'Ionic',
  //         icon: 'blue',
  //         animation: 'DROP',
  //         position: {
  //           lat: 43.0741904,
  //           lng: -89.3809802
  //         }
  //       })
  //     });
  // }

}
