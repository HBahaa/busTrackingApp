import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IntroPage } from './../../intro/intro';
import { AddBtnPage } from './../add-btn/add-btn';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-my-home',
  templateUrl: 'my-home.html',
})
export class MyHomePage {

  items;

  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.storage.get('IFTTT')
    .then(data=>{
      this.items = data
    })
    .catch(error=> {
      console.log("error", error);
    })
  }

  itemSelected(item){
    console.log("item", item)
    this.presentAlert();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'Your request successfully sent.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  addNewBtn(){
    this.navCtrl.push(AddBtnPage)
  }

  backToIntro(){
    this.navCtrl.setRoot(IntroPage);
  }

}
