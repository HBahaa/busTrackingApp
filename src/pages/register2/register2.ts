import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import {  Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
              private registerProvider: RegisterProvider, private storage: Storage,private loadingCtrl: LoadingController ) {
    
    this.address = this.navParams.get('param1');
    this.location = this.navParams.get('param2');

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
    // this.menuCtrl.enable(true);
    this.storage.get('userData').then((data)=> {

      let nid= data.id;
      let secureCode = data.skey
      // data.name = user._value.name;
      // data.email = user._value.email;
      // data.password = user._value.password;
      // data.phone = user._value.mob;
      // data.address = this.address;

      // this.storage.set("userData", data);

      this.registerProvider.Register(nid, secureCode, this.location, user).then((token)=>{

        // this.getChildrenProvider.getAllChildren(token).then((flag)=>{
        //   if (flag) {
        //     this.navCtrl.setRoot(ChildrenPage);
        //   }
        // }).catch((error1)=>{
        //   console.log("error1", error1);
        // });
        this.loader.dismiss();
        this.showAlert();

      }).catch((error2)=>{
        this.loader.dismiss();
        alert(error2);  //error2=User registration is currently not allowed
      })

    }).catch((error3)=>{
      this.loader.dismiss();
      console.log("error getting userData from storage");
    })
    
  }

  // RegisterFN() {
  //   this.menuCtrl.enable(true);
  //   this.navCtrl.setRoot(ChildrenPage);
  // }

  locateMe()
  {
    this.navCtrl.setRoot(MapPage);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Creating account..."
    });
    this.loader.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Registration successeded',
      subTitle: 'Your accout has bees created, Please verify your email the Login!',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]

    });
    alert.present();
  }

}
