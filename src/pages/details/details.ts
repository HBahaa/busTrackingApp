import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NotificationPage } from '../notification/notification';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

	messages: any[] = [];
	childData: any;
	tag: any;
	rooms:any;
	lang: string;

	constructor(public navCtrl: NavController, private navParams: NavParams,
		private storage: Storage, private platform: Platform) {

		this.platform.ready().then(() => {
			this.storage.get("rooms").then((data)=>{
		      this.rooms = data;
		    })

		    this.storage.get("language").then(lang=>{
		      this.lang = lang;
		    })

			this.tag = this.navParams.get("param1");
			this.childData = this.navParams.get("param2");
			
			
			this.storage.get(this.tag).then((messages)=>{
				this.messages = messages;
			}).catch((error2) => {
				console.log("error 2: "+ error2);
			});

		}).catch((error1) => {
			console.log("error 1: "+ error1);
		});

	}
	notificationDetails(item){
	    this.navCtrl.push(NotificationPage, {'param1': item})
	}

	moreNotifications(){
		this.navCtrl.setRoot(NotificationsPage);
	}

}
