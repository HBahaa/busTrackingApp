import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';


@Injectable()
export class GetChildrenProvider {
	loader:any;
	children: any[] = [];
	rooms:any = {};
	topics:any;
	roomsData:any = {};
	// parent:any = {'loc':{}};


	constructor(private storage: Storage, private loadingCtrl: LoadingController, private translate: TranslateService) {}

	getAllChildren(token){
		return new Promise((resolve, reject) => {
			this.presentLoading();

			var settings = {
				"async": true,
				"crossDomain": true,
				"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/data?token="+token,
				"method": "POST",
				"headers": {
					"content-type": "application/json",
					"cache-control": "no-cache",
					"postman-token": "4935ed16-98ed-c035-1572-aeb484e2838a",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
					"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
					"Access-Control-Allow-Origin":"*",
					"Allow-Control-Allow-Origin":"*"
				}
			}

			$.ajax(settings).done((response)=> {
			  	if(response.success)
		      	{
		      		this.children = [];
		      		this.topics = [];
					this.rooms = {};
					this.roomsData = {};
					this.storage.get("userData").then((parent)=>{
						parent.nid = response.data['nid'];
			      		parent.name = response.data['name'];
			      		parent.email = response.data['email'];
			      		parent.phone = response.data['phone'];
			      		parent.address = response.data['loc']['locDesc'];
			      		parent.loc["locLat"] = response.data['loc']['locLat'];
			      		parent.loc["locLong"] = response.data['loc']['locLong'];
			      		this.storage.set("userData", parent);

					})
		      		
		    		let geo_id = response.data['loc']['fence_id']
		    		this.rooms.geo = geo_id;
		    		this.roomsData[geo_id] = [];

		    		this.topics.push(geo_id);

					$.each(response.data.children, (index, value)=>{
				   		value["tag"] = index;
				   		value["image"] = "https://hst-api.wialon.com/avl_tag_image/"+value.source+"/"+value.id+"/100/100/2490508405.png";

				   		this.roomsData[index] = [value.name];

				   		this.topics.push(index);
						if (this.topics.indexOf(value.bus_id) == -1) {
							this.topics.push(value.bus_id);
						}
						else{
							console.log("else")
						}

				   		if (geo_id in this.roomsData) {
				   			
				   			if (this.roomsData[geo_id].indexOf(value.bus_id) == -1) {
					   			this.roomsData[geo_id].push(value.bus_id);
					   		}

				   		}else{
				   			this.roomsData[geo_id] = [value.bus_id];
				   		}

				   		if (value.bus_id in this.roomsData) {
				   			this.roomsData[value.bus_id].push(value.name);
				   		}else{
				   			this.roomsData[value.bus_id] = [value.name];
				   		}

				   		if ('tag' in this.rooms) {
				   			this.rooms.tag.push(index);
				   		}else{
				   			this.rooms.tag = [index];
				   		}

				   		if ('bus' in this.rooms) {
				   			
				   			if (this.rooms.bus.indexOf(value.bus_id) == -1) {
					   			this.rooms.bus.push(value.bus_id);
					   		}else{
					   			// this.rooms.bus.push(value.bus_id);
					   			console.log("else")
					   		}

				   		}else{
				   			this.rooms.bus = [value.bus_id];
				   		}

				   		console.log("data set to storage")
						this.children.push(value);
						this.storage.set("topics", this.topics);
						this.storage.set("rooms", this.rooms);
						this.storage.set("roomsData", this.roomsData);
						this.storage.set("children", this.children);
						
			        });

			        this.loader.dismiss();
			        resolve("true");
		      	}
		      	else{
		      		this.loader.dismiss();
		       		reject("Failed to authenticate token.");
		      	}
			}).fail((err)=>{
				this.loader.dismiss();
				reject(err.message);
			});

		});
	}

	presentLoading() {
		this.translate.get('LOGIN_PAGE.loading').subscribe((content)=>{
		    this.loader = this.loadingCtrl.create({
		      content: content
		    });
		    this.loader.present();
		});
	}

}
