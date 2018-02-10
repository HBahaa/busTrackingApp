import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from 'ionic-native';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import * as io from "socket.io-client";

import { DetailsPage } from '../details/details';
import { NotificationsPage } from '../notifications/notifications';
import { GetNotificationProvider } from '../../providers/get-notification/get-notification';
import { LoginProvider } from '../../providers/login/login';


@Component({
  selector: 'page-children',
  templateUrl: 'children.html',
  providers: [GetNotificationProvider, LoginProvider]
})

export class ChildrenPage {
	children: any = [];
	obj: any;
	socket: any;
	socketHost: String;
	items: any[] = [];

	constructor(public navCtrl: NavController, private storage: Storage, public backgroundMode: BackgroundMode,
				private platform: Platform, private getNotificationProvider: GetNotificationProvider,
				private loginProvider: LoginProvider) {	

		// this.serverConnection();

		this.platform.ready().then(() => {

			this.backgroundMode.on("activate").subscribe(() => {
				console.log('activated');
				LocalNotifications.on('click', (notification, state) => {
					this.navCtrl.setRoot(NotificationsPage);
				});
			});
			this.backgroundMode.enable();
			
		}).catch((error) => {
			alert("error 1: "+ error);
		});
	}

	ionViewDidLoad(){

		this.storage.get("children").then((res)=>{
			if(res != null ){
				this.storage.get(res[0].tag).then((data)=>{

					if (data != null) {
						this.children = res;
					}else{
						this.storage.get("token").then((token)=>{
							this.getNotificationProvider.getNotification(token).then((data) => {
								this.children = data;
							}).catch((error5)=>{
								//get new token
								this.getNewToken();
							});
						}).catch((error4)=>{
							console.log("error4 can't get token");
						})	
					}
				})	
			}else{
				this.storage.get("token").then((token)=>{
					this.getNotificationProvider.getNotification(token).then((data) => {
						this.children = data;
					}).catch((error3)=>{
						//get new token
						this.getNewToken();
					});
				}).catch((error2)=>{
					console.log("error2 can't get token");
				})	
			}
		}).catch((error1)=>{
			console.log("error1");
		})
		
	}

	childDetails(tag,child){
		this.navCtrl.push(DetailsPage, {'param1': tag, 'param2': child})
	}

	scheduleNotification() {
		LocalNotifications.schedule(this.items);
	}

	serverConnection() {

		this.socketHost = "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9000";
		this.socket = io(this.socketHost);

		this.socket.on("connect", (msg) => {
			this.storage.get("rooms").then((rooms)=>{
				this.socket.emit("set", { "topics": rooms });

				this.socket.on("serverpublisher", (data) => {
					
					this.items[0] = {
						id: 1,
						title: data.status,
						text: data.msg,
						data: data,
						at: new Date(new Date().getTime())
					}

					this.scheduleNotification();
					let id = data.sid

					this.storage.get("token").then((token)=>{
						this.getNotificationProvider.getNotification(token).then((data) => {
							// this.children = data;
							// alert("data")
						}).catch((error7)=>{
							//get new token
							this.getNewToken();
						});

					}).catch((error6)=>{
						console.log("error6 can't get token")
					})

					this.storage.get("children").then((ch)=>{
						
						if (ch != null || ch != undefined) {
							$.each(ch, (index, child)=>{
								if (id == child.tag) {
									child.childLastMsg = data;
								}else{
									child.lastMsg = data;
								}
							});
							this.children = ch;
							this.storage.set("children", ch);
						}
						else{
							console.log("not found")
						}
					})
				})

			})
			
		})	
	}

	getNewToken(){
		//get new token
		this.storage.get("userData").then((user)=>{
			this.loginProvider.Login(user.id, user.password).then((token)=>{
				this.getNotificationProvider.getNotification(token).then((data) => {

				}).catch(()=>{
					console.log("error after new token")
				});
			});
		})
	}

}
