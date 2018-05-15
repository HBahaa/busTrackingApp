import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import {  Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { LoginPage } from '../login/login';
import { MapPage } from '../map/map';
import { RegisterProvider } from '../../providers/register/register';

@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
  providers: [RegisterProvider]
})

export class Register2Page {

  address : any;
  location: any;
  user    : FormGroup;
  rooms:any = [];
  loader:any;
  alertTitle :string;
  alertSubtitle :string;
  alertBtn:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private translate: TranslateService, 
              private registerProvider: RegisterProvider, private storage: Storage,private loadingCtrl: LoadingController ) {
    
    this.address = this.navParams.get('param1');
    this.location = this.navParams.get('param2');

    this.translate.get('REGISTER2_PAGE.alertTitle').subscribe((title)=>{
      this.alertTitle = title;
    });

    this.translate.get('REGISTER2_PAGE.alertSubtitle').subscribe((subtitle)=>{
      this.alertSubtitle = subtitle;
    });
    this.translate.get('PROFILE_PAGE.alertBtn').subscribe((text)=>{
      this.alertBtn = text;
    });

    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$')]),
      address: new FormControl(this.address),
      mob: new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$')]),
      password: new FormControl('', [Validators.minLength(5),Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
    });
  }

  onSubmit(user){
    this.presentLoading();
    this.storage.get('userProfile').then((data)=> {

      let nid= data.id;
      let secureCode = data.skey

      this.registerProvider.Register(nid, secureCode, this.location, user).then((token)=>{
        this.loader.dismiss();
        this.showAlert();

      }).catch((error2)=>{
        this.loader.dismiss();
        alert(error2);
      })

    }).catch((error3)=>{
      this.loader.dismiss();
    })
    
  }

  locateMe()
  {
    this.navCtrl.setRoot(MapPage);
  }

  presentLoading() {
    this.translate.get('REGISTER2_PAGE.loader').subscribe((loader)=>{
      this.loader = this.loadingCtrl.create({
        content: loader
      });
      this.loader.present();
    });
  }

  showAlert() {
    
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: [
        {
          text: this.alertBtn,
          handler: data => {
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]

    });
    alert.present();
  }

}
