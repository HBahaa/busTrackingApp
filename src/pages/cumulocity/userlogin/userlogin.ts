import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { IntroPage } from '../../intro/intro';
import { UserHomePage } from '../home/home';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';

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

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,private menuCtrl: MenuController,
              public storage: Storage, public loadingCtrl: LoadingController, private authService: AuthServiceProvider) {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
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
    this.authService.Login(this.tenant, this.username, this.password, 1).then(resp=>{
      if (resp) {
        this.navCtrl.push(UserHomePage);
        this.loader.dismiss();
      }
      else{
        this.navCtrl.push(UserLoginPage);
        this.loader.dismiss();
        this.username = "";
        this.password = "";
        this.showAlert();
      }
    }).catch(error=>{
      this.navCtrl.push(UserLoginPage);
      this.loader.dismiss();
      this.username = "";
      this.password = "";
      this.showAlert();
    })
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    this.loader.present();
  }
}
