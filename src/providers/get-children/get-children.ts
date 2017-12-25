import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';


@Injectable()
export class GetChildrenProvider {
	loader:any;
	children: any[] = [];
	rooms: any[] = [];

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
		      		
		    		this.rooms.push(response.data['loc']['fence_id']);
					$.each(response.data.children, (index, value)=>{
				   		value["tag"] = index;
				   		value["image"] = "https://hst-api.wialon.com/avl_tag_image/"+value.source+"/"+value.id+"/100/100/2490508405.png";
				   		this.rooms.push(index);

				   		if (this.rooms.indexOf(value.bus_id) == -1) {
				   			this.rooms.push(value.bus_id);
				   		}
				   		
						this.children.push(value);
						this.storage.set("rooms", this.rooms);
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
