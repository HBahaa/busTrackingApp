import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

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

	user_email: string;
	user_password: string;
	user_phone: string;

	location: any;
	showEditForm: boolean = false;
	language:any;
	alertSubtitle :string;
	alertBtn: string;

	constructor(public navCtrl: NavController, private storage: Storage, private platform: Platform,
				private alertCtrl: AlertController, private loginProvider: LoginProvider,
				private editProfileProvider: EditProfileProvider, private translate: TranslateService)
	{
		platform.ready().then(() => {

		    this.translate.get('PROFILE_PAGE.alertSubtitle').subscribe((subtitle)=>{
		    	this.alertSubtitle = subtitle;
		    });
		    this.translate.get('PROFILE_PAGE.alertBtn').subscribe((text)=>{
		    	this.alertBtn = text;
		    });
			this.storage.get("language").then((lang)=>{
				this.language = lang; 
			});
			this.storage.get("userProfile").then((data)=>{
				// alert("data = "+ JSON.stringify(data));
				this.nid = data.nid;
				this.name = data.name;
				this.email = data.email;
				this.phone = data.phone;
				this.password = data.password;

				this.user_email = data.email;
				this.user_phone = data.phone;
				this.user_password = data.password;

				this.address = data.address;
				this.location = data.loc;
			})
		})
	}

	changeLanguage(language){
		if (language === 'ar') {
		  this.platform.setDir('ltr', false);
		  this.platform.setDir('rtl', true);
		  this.translate.use(language);
		  
		} else {
		  this.platform.setDir('rtl', false);
		  this.platform.setDir('ltr', true);
		  this.translate.use(language);
		}
		this.storage.set("language", language);
	}

	changeFlag(){
		this.showEditForm = true;
		return this.showEditForm;
	}
	cancelEdit(){
		this.email = this.user_email;
		this.phone = this.user_phone;
		this.password = this.user_password;
		this.showEditForm = false;
		return this.showEditForm;
	}

	presentMapModal(){
		this.navCtrl.push(MapModalPage, {'param1' : this.location});
	} 

	editProfile(data){
		this.storage.get("userProfile").then((user)=>{

			this.loginProvider.Login(user.nid, user.password).then(log=>{
				if (user.email == data.value.email) {
					this.editProfileProvider.updateProfile(log, data.value, user.nid, false).then((res)=>{
						this.user_email = this.email;
						this.user_phone = this.phone;
						this.user_password = this.password;
						this.showEditForm = false;
						return this.showEditForm;
					}).catch((error)=>{
						console.log(error)
					});
				}
				else
				{
					this.editProfileProvider.updateProfile(log, data.value, user.nid, true).then((res)=>{
						// alert(res);
						this.showAlert();
					}).catch((error)=>{
						console.log(error);
					});
				}

			}).catch(err=>{
				console.log("err in login")
			})
	    });
	}

	showAlert() {
	    let alert = this.alertCtrl.create({
	      subTitle: this.alertSubtitle,
	      buttons: [
	        {
	        	text: this.alertBtn,
	          handler: data => {
	            this.storage.clear().then(()=>{
			      this.navCtrl.setRoot(LoginPage);
			    });
	          }
	        }
	      ]
	    });
	    alert.present();
    }
}
