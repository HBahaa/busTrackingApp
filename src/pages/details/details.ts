import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

	messages: any[] = [];
	childData: any;
	tag: any;

	constructor(public navCtrl: NavController, private navParams: NavParams,
		private storage: Storage, private platform: Platform) {

		this.platform.ready().then(() => {

			this.tag = this.navParams.get("param1");
			this.childData = this.navParams.get("param2");

			console.log(this.childData)
			console.log(this.childData["childLastMsg"]["speed"])
			
			this.storage.get(this.tag).then((messages)=>{
				this.messages = messages;
			}).catch((error2) => {
				console.log("error 2: "+ error2);
			});

		}).catch((error1) => {
			console.log("error 1: "+ error1);
		});

	}

}
