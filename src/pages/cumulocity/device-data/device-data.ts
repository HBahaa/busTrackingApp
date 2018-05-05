import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDataPage } from '../item-data/item-data';

@Component({
  selector: 'page-device-data',
  templateUrl: 'device-data.html',
})
export class DeviceDataPage {
  device:any;
  disableBTN:any;
  icons:any = {"c8y_TemperatureMeasurement": "ios-thermometer", "c8y_LightMeasurement":"md-bulb", "c8y_AccelerationMeasurement":"md-compass"};
  colors:any= {"c8y_TemperatureMeasurement": ["danger"], "c8y_LightMeasurement":["light"], "c8y_AccelerationMeasurement":["secondary"]};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.device = this.navParams.get('param1');
    this.disableBTN = this.device.disableBTN;

  }

  selectedItem(id, item){
    this.navCtrl.push(ItemDataPage, {'param1': id, 'param2': item});
  }

}
