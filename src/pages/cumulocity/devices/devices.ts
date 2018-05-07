import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// import { DeviceDataPage } from '../device-data/device-data';
import { DataServiceProvider } from '../../../providers/data-service/data-service';
import { UserHomePage } from '../home/home';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
  providers: [DataServiceProvider]
})
export class DevicesPage {

  devices:any;
  // colors:any = ["color1", "color2", "color3", "color4", "color5", "color6"];
  token:any;
  tenant:string;
  loader:any;
  flag:any;
  disableBTN:any;

  constructor(public navCtrl: NavController, public storage: Storage, public dataService: DataServiceProvider) {
    this.storage.get('devices').then((data) => {
      this.devices = data;
    });
  }


  addDevice(device){

    this.storage.get("devices").then(devices=>{
      for(let x of devices){
        if (x["id"] == device["id"]) {
          x["disableBTN"] = true;
        }
      }
      this.storage.set("devices", devices);
    })
    this.dataService.presentLoading();

    this.storage.get('userData').then((data)=>{
      this.token = data.token;
      this.tenant = data.tenant;

      console.log("device", device)

      // for(let device of this.devices){

        for(let sensor of device["c8y_SupportedMeasurements"]){
          this.dataService.getDataService(this.tenant, device["id"], sensor, this.token, sensor, device["name"])
          .then((flag)=>{
            if(flag == true){
              this.navCtrl.push(UserHomePage)
            }else{
            }
          });
        }

      // }

    });

  }

  // deviceDate(device){
  //   this.navCtrl.push(DeviceDataPage,{'param1': device});
  // }

}
