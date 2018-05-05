import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

import { IntroPage } from '../../intro/intro';
import { UserHomePage } from '../home/home';

@Component({
  selector: 'page-userlogin',
  templateUrl: 'userlogin.html'
})
export class UserLoginPage {
  tenant:string;
  username:string;
  password:string;
  res:any;
  token:any;
  loader:any;
  devices:any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,
              public storage: Storage, public loadingCtrl: LoadingController) {
  }

  backToIntro(){
    this.navCtrl.setRoot(IntroPage);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Check your connection and make sure that UserName and Password are correct, Please Try Again!',
      buttons: ['OK']
    });
    alert.present();
  }

  login(){
    this.presentLoading();
    var storage = this.storage;
    var navCtrl = this.navCtrl;
    // var devices = this.devices;
    var my = this;

    this.token = "Basic " + window.btoa(this.username+':'+this.password);
    
    function myFilter(objs){
      return objs.filter((obj)=>{
        return obj['c8y_SupportedMeasurements'];
      }).map((obj)=>{
        return (({ id, name, c8y_SupportedMeasurements }) => ({ id, name, c8y_SupportedMeasurements }))(obj)
      })
    }

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://${this.tenant}.cumulocity.com/inventory/managedObjects?owner=${this.username}`,
      "method": "GET",
      "headers": {
        "authorization": `${this.token}`,
        "cache-control": "no-cache",
        "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
      }
    }


    $.ajax(settings).done(function (response) {

      storage.set("userData", {
        'tenant':my.tenant,
        'username': my.username,
        "password": my.password,
        "token": my.token
      });
      
      if(response.statistics.totalPages == undefined || response.statistics.totalPages == null)
      {
        var objs = response.managedObjects;
        var devices = myFilter(objs);
        for(let i in devices){
          devices[i]["disableBTN"] = false;
        }
        storage.set('devices', devices).then(()=>{
          console.log("from set devices", devices)
        });
        navCtrl.push(UserHomePage);
        my.loader.dismiss();
      }
      else{
        let total = response.statistics.totalPages;
        let size = response.statistics.pageSize;
        // let current = response.statistics.currentPage;
        let totalSize = total * size;
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": `http://${this.tenent}.cumulocity.com/inventory/managedObjects?owner=${this.username}&pageSize=`+totalSize+"&currentPage=1",
          "method": "GET",
          "headers": {
            "authorization": `${this.token}`,
            "cache-control": "no-cache",
            "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
          }
        }


        $.ajax(settings).done(function (response) {
          var objs = response.managedObjects;
          var devices = myFilter(objs);
          for(let i in devices){
            devices[i]["disableBTN"] = false;
          }
          storage.set('devices', devices).then(()=>{
            console.log("from set devices", devices)
          });
          navCtrl.push(UserHomePage);
          my.loader.dismiss();
        })
      }

    }).fail(function(error){
      navCtrl.push(UserLoginPage);
      my.loader.dismiss();
      my.username = "";
      my.password = "";
      my.showAlert();
    })
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    this.loader.present();
  }
}
