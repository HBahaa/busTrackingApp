import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { ChildrenPage } from '../children/children';
import { Register1Page } from '../register1/register1';
import { LoginProvider } from '../../providers/login/login';
import { GetChildrenProvider } from '../../providers/get-children/get-children';
import { ResetPasswordProvider } from '../../providers/reset-password/reset-password';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginProvider, GetChildrenProvider, ResetPasswordProvider]
})

export class LoginPage {
  id: any;
  nid: any;
  password: any;
  rooms: any = [];
  children: any = [];
  flag:boolean = false;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController, private loginProvider: LoginProvider,
              private getChildrenProvider: GetChildrenProvider, private resetPasswordProvider: ResetPasswordProvider ) {}

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  changeFlag(){
    this.flag = true;
    return this.flag;
  }

  resetPassword(){
    this.resetPasswordProvider.resetPassword(this.nid).then((res)=>{
      this.flag = false;
      return this.flag;
    }).catch((error)=>{
      alert("error "+ error)
    })
  }

  login() {

    this.menuCtrl.enable(true);
    this.loginProvider.Login(this.id, this.password).then((token)=>{

      this.getChildrenProvider.getAllChildren(token).then((flag)=>{
        if (flag) {
          this.navCtrl.setRoot(ChildrenPage);
        }
      }).catch((error1)=>{
        alert(error1);
      });

    }).catch((error2)=>{
      alert(error2)
    });
  }

  createAccount(){ 
    this.menuCtrl.enable(false);
    this.navCtrl.setRoot(Register1Page);
  }

}
