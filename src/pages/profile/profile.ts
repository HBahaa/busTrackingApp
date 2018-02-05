import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MapModalPage } from '../map-modal/map-modal';
import { EditProfileProvider } from '../../providers/edit-profile/edit-profile';


@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
	providers: [EditProfileProvider]
})
export class ProfilePage {

	name: string;
	email: string;
	address: string;
	password: string;
	phone: string;
	location: any;
	flag: boolean = false;

	constructor(public navCtrl: NavController, private storage: Storage, private platform: Platform,
		private toastCtrl: ToastController, private editProfileProvider: EditProfileProvider) {

		platform.ready().then(() => {
			this.storage.get("userData").then((data)=>{
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
		this.navCtrl.setRoot(MapModalPage, {'param1' : this.location});
	}
	editProfile(data){
		console.log("data", data.value)
		this.storage.get("userData").then((user)=>{
	    	this.editProfileProvider.updateProfile(data.value, user.nid).then((res)=>{
	    		console.log("res", res)
				this.flag = false;
				return this.flag;
			}).catch((error)=>{
				// alert("error" + error)
				console.log("error", error)
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
	    
	    this.storage.get("userData").then((user)=>{
	    	this.editProfileProvider.updateProfile(data, user.nid).then((res)=>{
				toast.dismiss();
				this.flag = false;
				return this.flag;
			}).catch((error)=>{
				toast.dismiss();
				// alert("error" + error)
			})
	    });
	}
}
