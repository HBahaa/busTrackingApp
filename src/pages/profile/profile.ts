import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})


export class ProfilePage {

	name: string;
	address: string;
	password: string;
	phone: string;

	constructor(public navCtrl: NavController, private storage: Storage) {

	}

	ionViewDidLoad(){

		this.storage.get("userData").then((data)=>{
			this.name = data.name;
			this.phone = data.phone;
			this.password = data.password;
			this.address = data.address;
		})

	}
	// presentToast() {
	//     let toast = this.toastCtrl.create({
	//       message: "data saved",
	//       duration: 3000,
	//       position: 'top'
	//     });
	//     toast.onDidDismiss(() => {
	//       console.log('Dismissed toast');
	//       this.navCtrl.setRoot(ChildrenPage)
	//     });

	//     toast.present();
	// }

}
