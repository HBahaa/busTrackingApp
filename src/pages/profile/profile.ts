import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';

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
	map;

	constructor(public navCtrl: NavController, private storage: Storage, private toastCtrl: ToastController,
				private googleMaps: GoogleMaps, private editProfileProvider: EditProfileProvider) {}

	ionViewDidLoad(){
		this.storage.get("userData").then((data)=>{
			this.name = data.name;
			this.email = data.email;
			this.phone = data.phone;
			this.password = data.password;
			this.address = data.address;
			this.location = data.loc
		})
	}

	loadMap(x, y) {
		let mapOptions: GoogleMapOptions = {
			camera: {
				target: {
	                lat: x,
	                lng: y
	            },
				zoom: 18,
				tilt: 15
			}
		};

		this.map = this.googleMaps.create('map', mapOptions);

		this.map.one(GoogleMapsEvent.MAP_READY)
      	.then(() => {
	        this.map.addMarker({
	            title: 'Your Previous Address',
	            icon: 'red',
	            animation: 'DROP',
	            position: {
	              lat: x,
	              lng: y
	            }
	        })
	    });
	}
	
	changeFlag(){
		this.flag = true;
		this.loadMap(this.location["locLat"], this.location["locLong"]);
		return this.flag
	}

	presentToast(data) {
		console.log(data.value);
		let toast = this.toastCtrl.create({
			message: "data saved",
			duration: 3000,
			position: 'top'
	    });
	  //   toast.onDidDismiss(() => {
	  //       console.log('Dismissed toast');
	  //     	this.flag = false;
			// return this.flag
	  //   });
	    toast.present();

		this.editProfileProvider.updateProfile(data).then((res)=>{

					
			// this.loginProvider.Login(this.id, this.password).then((token)=>{

		 //    	this.getChildrenProvider.getAllChildren(token).then((flag)=>{
			//         if (flag) {
			//           this.navCtrl.setRoot(ChildrenPage);
			//         }
			//     }).catch((error1)=>{
			//         alert(error1);
			//     });

		 //    }).catch((error2)=>{
		 //      alert(error2)
		 //    });

			toast.dismiss();
			this.flag = false;
			return this.flag;
		}).catch((error)=>{
			toast.dismiss();
			alert("error" + error)
		})
	}
}
