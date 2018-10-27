import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyHomePage } from './../my-home/my-home';

@Component({
  selector: 'page-add-btn',
  templateUrl: 'add-btn.html',
})
export class AddBtnPage {

  btn = {}

  constructor(public navCtrl: NavController, private storage: Storage) {}

  submitForm(){
    let arr = [];
    arr.push(this.btn);
    this.storage.set("IFTTT", arr);
    this.navCtrl.setRoot(MyHomePage);
  }
}
