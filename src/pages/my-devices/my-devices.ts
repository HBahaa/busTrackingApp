import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceTrackPage } from '../device-track/device-track';

@Component({
  selector: 'page-my-devices',
  templateUrl: 'my-devices.html',
})
export class MyDevicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDevicesPage');
  }

  deviceDetails(){
    this.navCtrl.push(DeviceTrackPage)
  }

}
