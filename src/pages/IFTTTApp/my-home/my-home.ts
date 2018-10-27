import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IntroPage } from './../../intro/intro';
import { AddBtnPage } from './../add-btn/add-btn';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

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
    let settings = {
      url: "http://18.220.223.50:3001/iftt/"+item.action,
      method: 'GET'
    }
    
    $.ajax(settings)
    .done(response => {
      this.presentAlert("Congratulations! Your request successfully sent.");
    })
    .fail(error=>{
      this.presentAlert("Sorry! Something goes wrong, please try again later.");
    })

    
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      subTitle: msg,
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
