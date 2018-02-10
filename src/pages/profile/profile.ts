import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { MapModalPage } from '../map-modal/map-modal';
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
	showEditForm: boolean = false;
	loader:any;

	constructor(public navCtrl: NavController, private storage: Storage, private platform: Platform,
				private loadingCtrl: LoadingController, private loginProvider: LoginProvider,
				private editProfileProvider: EditProfileProvider)
	{
		platform.ready().then(() => {
			this.storage.get("userData").then((data)=>{
				// alert("data = "+ JSON.stringify(data));
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
		this.showEditForm = true;
		return this.showEditForm;
	}

	presentMapModal(){
		this.navCtrl.setRoot(MapModalPage, {'param1' : this.location});
	}

	editProfile(data){
		this.storage.get("userData").then((user)=>{
			// console.log("user.password", user.password);
			this.loginProvider.Login(user.nid, user.password).then(log=>{
				if (user.email == data.value.email) {
					this.editProfileProvider.updateProfile(log, data.value, user.nid, false).then((res)=>{
						this.showEditForm = false;
						return this.showEditForm;
					}).catch((error)=>{
						console.log(error)
					});
				}
				else
				{
					this.presentLoading();
					this.editProfileProvider.updateProfile(log, data.value, user.nid, true).then((res)=>{
						// alert(res);
						this.loader.dismiss();
						this.storage.clear().then(()=>{
					      this.navCtrl.setRoot(LoginPage);
					    });
					}).catch((error)=>{
						this.loader.dismiss();
						console.log(error);
					});
				}

			}).catch(err=>{
				console.log("err in login")
			})
	    });
	}

	// presentToast(data) {
	// 	var toast = this.toastCtrl.create({
	// 		message: "data saved",
	// 		duration: 3000,
	// 		position: 'top'
	//     });
	//     toast.present();
	// }

	presentLoading() {
	    // this.translate.get('MAPMODAL_PAGE.loading').subscribe((loading)=>{
	      this.loader = this.loadingCtrl.create({
	        content: "Updating..."
	      });
	      this.loader.present();
	    // });
	}
}
