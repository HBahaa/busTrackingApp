import { Component } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import {  Storage } from '@ionic/storage';

import { ChildrenPage } from '../children/children';
import { MapPage } from '../map/map';
import { RegisterProvider } from '../../providers/register/register';
import { GetChildrenProvider } from '../../providers/get-children/get-children';

@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
  providers: [RegisterProvider, GetChildrenProvider]
})

export class Register2Page {

  address : any;
  location: any;
  user    : FormGroup;
  rooms:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
   private registerProvider: RegisterProvider, private getChildrenProvider: GetChildrenProvider, private storage: Storage) {
    
    this.address = this.navParams.get('param1');
    this.location = this.navParams.get('param2');

    // this.address = "3015 حلبان، Dhahrat Laban, Riyadh 13782, Saudi Arabia";
    // this.location = {
    //   "lat": "24.637307",
    //   "lng": "46.553948"
    // }

    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$')]),
      address: new FormControl(this.address),
      mob: new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$')]),
      password: new FormControl('', [Validators.minLength(5),Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
    });
  }

  onSubmit(user){
    
    this.menuCtrl.enable(true);
    this.storage.get('userData').then((data)=> {

      let nid= data.id;
      let secureCode = data.skey
      data.name = user._value.name;
      data.email = user._value.email;
      data.password = user._value.password;
      data.phone = user._value.mob;
      data.address = this.address;

      this.storage.set("userData", data);

      this.registerProvider.Register(nid, secureCode, this.location, user).then((token)=>{

        this.getChildrenProvider.getAllChildren(token).then((flag)=>{
          if (flag) {
            this.navCtrl.setRoot(ChildrenPage);
          }
        }).catch((error1)=>{
          console.log("error1", error1);
        });

      }).catch((error2)=>{
        alert(error2);  //error2=User registration is currently not allowed
      })

    }).catch((error3)=>{
      alert("error getting userData from storage")
    })
    
  }

  RegisterFN() {
    this.menuCtrl.enable(true);
    this.navCtrl.setRoot(ChildrenPage);
  }

  locateMe()
  {
    this.navCtrl.setRoot(MapPage);
  }

}
