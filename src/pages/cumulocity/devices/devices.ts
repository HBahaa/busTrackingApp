import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DataServiceProvider } from '../../../providers/data-service/data-service';
import { UserHomePage } from '../home/home';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
  providers: [DataServiceProvider]
})
export class DevicesPage {

  devices:any;
  token:any;
  tenant:string;
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

      let len = device["c8y_SupportedMeasurements"].length;
      for (let i=0; i<len; i++) {
        this.dataService.getDataService(this.tenant, device["id"], device["c8y_SupportedMeasurements"][i], this.token, device["c8y_SupportedMeasurements"][i], device["name"])
        .then((flag)=>{
          if (i == len-1) {
            this.navCtrl.push(UserHomePage)
          }
        });
      }

    });

  }

}
