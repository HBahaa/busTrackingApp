import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})


export class ProfilePage {

	name: string;
	email: string;
	address: string;
	password: string;
	phone: string;
	flag: boolean = false;

	constructor(public navCtrl: NavController, private storage: Storage, private toastCtrl: ToastController) {}

	ionViewDidLoad(){
		this.storage.get("userData").then((data)=>{
			this.name = data.name;
			this.email = data.email;
			this.phone = data.phone;
			this.password = data.password;
			this.address = data.address;
		})
	}
	
	changeFlag(){
		this.flag = true;
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

		// var settings1 = {
		// 	"async": true,
		// 		"crossDomain": true,
		// 		"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?name="+data.value['name']+"&password="+data.value['password']+"&phone="+data.value['phone'],
		// 		"method": "POST",
		// 		"headers": {
		// 			"content-type": "application/json",
		// 			"cache-control": "no-cache",
		// 			"postman-token": "4a53920c-7605-4383-bde5-db03b13e1214",
		// 			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		// 			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
		// 			"Access-Control-Allow-Origin":"*"
		// 		}
		// 	}

		// $.ajax(settings1).done((response)=>{

		// 	console.log("response ", response)

		// 	toast.dismiss();
		// });

	}

}
