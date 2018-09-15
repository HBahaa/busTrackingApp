import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceTrackPage } from '../device-track/device-track';
import { IntroPage } from '../../intro/intro';

@Component({
  selector: 'page-my-devices',
  templateUrl: 'my-devices.html',
})
export class MyDevicesPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDevicesPage');
  }

  deviceDetails(){
    this.navCtrl.push(DeviceTrackPage)
  }

  switchTrackingApp(){
    this.navCtrl.setRoot(IntroPage);
  }

}
