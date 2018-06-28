import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

import { MapPage } from '../map/map';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-register1',
  templateUrl: 'register1.html'
})

export class Register1Page {

  validations_form    : FormGroup;

  constructor(public navCtrl: NavController, public storage: Storage, private translate: TranslateService) {
  }


  ionViewWillLoad() {
    this.validations_form = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      skey: new FormControl('', [Validators.required, Validators.min(144311),Validators.max(84813736161378)])
    });

  }

  onSubmit(data){
    console.log("data._value", data._value.id);  //Object {id: "12345678901234", skey: "144311"}

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notsecure/checkcode?nid="+data._value.id+"&secureCode="+data._value.skey,
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
        "Access-Control-Allow-Origin":"*"
      }
    }

    $.ajax(settings).done((response)=>{

      if (response.success) {
        this.storage.set("userProfile", data._value).then(()=>{
          this.navCtrl.setRoot(MapPage);
        })
      }
      else{
        this.translate.get('REGISTER1_PAGE.error').subscribe((error)=>{
          alert(error);
        })
      }
      
    }).catch((error)=>{
      this.translate.get('REGISTER1_PAGE.error').subscribe((error)=>{
        alert(error)
      })
    });    
  }

  alreadyHaveAccount(){
    this.navCtrl.setRoot(LoginPage);
  }

}
