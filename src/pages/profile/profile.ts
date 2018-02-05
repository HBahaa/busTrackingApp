import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MapModalPage } from '../map-modal/map-modal';
import { LoginPage } from '../login/login';
import { LoginProvider } from '../../providers/login/login';
import { EditProfileProvider } from '../../providers/edit-profile/edit-profile';



@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
	providers: [LoginProvider , EditProfileProvider]
})
export class ProfilePage {

	nid: string;
	name: string;
	email: string;
	address: string;
	password: string;
	phone: string;
	location: any;
	flag: boolean = false;

	constructor(public navCtrl: NavController, private storage: Storage, private platform: Platform,
				private toastCtrl: ToastController, private loginProvider: LoginProvider, private editProfileProvider: EditProfileProvider)
	{

		platform.ready().then(() => {
			this.storage.get("userData").then((data)=>{
				console.log("user Data", JSON.stringify(data))
				this.nid = data.nid;
				this.name = data.name;
				this.email = data.email;
				this.phone = data.phone;
				this.password = data.password;
				this.address = data.address;
				this.location = data.loc;
			})
		})
	}

	changeFlag(){
		this.flag = true;
		return this.flag;
	}

	presentMapModal(){
		console.log("param1 loc", JSON.stringify(this.location))
		this.navCtrl.setRoot(MapModalPage, {'param1' : this.location});
	}

	editProfile(data){
		this.storage.get("userData").then((user)=>{

			this.loginProvider.Login(user.nid, user.password).then(log=>{
				if (user.email == data.value.email) {
					this.editProfileProvider.updateProfile(log, data.value, user.nid , 0).then((res)=>{
						this.flag = false;
						return this.flag;
					}).catch((error)=>{
						console.log("error", error)
					});
				}
				else
				{
					this.editProfileProvider.updateProfile(log, data.value, user.nid , 1).then((res)=>{
						alert(res);
						this.storage.clear().then(()=>{
					      this.navCtrl.setRoot(LoginPage);
					    });
					}).catch((error)=>{
						console.log("error", error);
					});
				}

			}).catch(err=>{
				console.log("err in login")
			})
	    });
	}

	presentToast(data) {
		var toast = this.toastCtrl.create({
			message: "data saved",
			duration: 3000,
			position: 'top'
	    });
	    toast.present();
	}
}
