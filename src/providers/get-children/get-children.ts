import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';


@Injectable()
export class GetChildrenProvider {
	loader:any;
	children: any[] = [];
	rooms:any = {};
	roomsData:any = {};
	parent:any = {'loc':{}};


	constructor(private storage: Storage, private loadingCtrl: LoadingController) {}

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
					this.rooms = {};
					this.roomsData = {};
		      		this.parent.nid = response.data['nid'];
		      		this.parent.name = response.data['name'];
		      		this.parent.email = response.data['email'];
		      		this.parent.phone = response.data['phone'];
		      		this.parent.password = response.data['pass'];
		      		this.parent.address = response.data['loc']['locDesc'];
		      		this.parent.loc["locLat"] = response.data['loc']['locLat']
		      		this.parent.loc["locLong"] = response.data['loc']['locLong']
		      		this.storage.set("userData", this.parent);
		      		
		    		let geo_id = response.data['loc']['fence_id']
		    		this.rooms.geo = geo_id;
		    		this.roomsData[geo_id] = [];

					$.each(response.data.children, (index, value)=>{
				   		value["tag"] = index;
				   		value["image"] = "https://hst-api.wialon.com/avl_tag_image/"+value.source+"/"+value.id+"/100/100/2490508405.png";

				   		this.roomsData[index] = [value.name];

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
	    this.loader = this.loadingCtrl.create({
	      content: "Loading..."
	    });
	    this.loader.present();
	}

}
