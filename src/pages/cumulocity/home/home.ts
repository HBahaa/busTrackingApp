import { Component } from '@angular/core';
import { NavController, AlertController, ViewController, MenuController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

import { IntroPage } from '../../intro/intro';
import { UserLoginPage } from '../userlogin/userlogin';
import { DevicesPage } from '../devices/devices';
import { DataServiceProvider } from '../../../providers/data-service/data-service';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

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

  icons:any = {"temperature": "ios-thermometer",
               "light":"md-bulb",
               "acceleration":"md-compass",
               "position":"pin",
               "distance": "walk",
               "mobile": "phone-portrait",
               "bus": "bus"
              };
  
  measures = ["co2", "pressure", "absolutepressure", "noise", "temperature", "humidity", "temperaturesensor", "thermostat", "oiltemperature"]
  

  constructor(public navCtrl: NavController, private alertCtrl:AlertController, private viewCtrl: ViewController,
            public storage: Storage, private menuCtrl: MenuController, public dataService : DataServiceProvider) 
    {
      this.menuCtrl.enable(false);
      this.viewCtrl.showBackButton(false);
      this.storage.get('devices').then(devices=>{
        console.log("devices", devices)
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
                
                  if (sensor.type.indexOf("Position") >= 0) {
                    this.dataService.updatePostionData(tenant,sensor.deviceID, sensor.type, token, sensor.type, sensor.name).then(resp=>{
                      resp = resp[sensor.type];
                      
                        if (sensor["lat"] != resp["lat"]) {
                          sensor["lat"] = resp["lat"]
                        }data
                        if (sensor["lng"] != resp["lng"]){
                          sensor["lng"] = resp["lng"]
                        }
                       
                    })
                    
                  }else{
                    this.dataService.updatePostionData(tenant,sensor.deviceID, sensor.type, token, sensor.type, sensor.name).then(resp=>{
                      if (sensor.value != resp[sensor.type]['value']) {
                        sensor.value = resp[sensor.type]['value'];
                      }
                    })
                  }
              }
            }
          }
        })
      }, 3000);
    }

  diplayItems(){
    this.storage.get('devicesMeasurements').then((data)=>{
      if(data != null ){
        $.each(data, (i, resp)=>{
          this.ids.push(i);
          this.items.push(resp);
          for(let dev of this.devices){
            if (dev["id"] == i) {
              this.names[i] =dev["name"];
              dev['disableBTN'] = true;
            }
          }
          
        });
        this.storage.set('devices', this.devices)
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

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map', mapOptions);    
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
          title: 'Location',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        // .then(marker => {
        //   marker.on(GoogleMapsEvent.MARKER_CLICK)
        //     .subscribe(() => {
        //       alert("clicked")
        //     });
        // });
      });    
  }

}
