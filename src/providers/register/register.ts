import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';


@Injectable()
export class RegisterProvider {

	constructor(private storage: Storage) {}

	Register(nid, secureCode, location, user){

		return new Promise((resolve, reject) => {

			var settings1 = {
			"async": true,
				"crossDomain": true,
				"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notsecure/register?nid="+nid+"&secureCode="+secureCode+"&name="+user._value.name+"&locLat="+location.lat+"&locLong="+location.lng+"&locDesc="+user._value.address+"&password="+user._value.password+"&email="+user._value.email+"&phone="+user._value.mob,
				"method": "POST",
				"headers": {
					"content-type": "application/json",
					"cache-control": "no-cache",
					"postman-token": "4a53920c-7605-4383-bde5-db03b13e1214",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
					"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
					"Access-Control-Allow-Origin":"*"
				}
			}

			$.ajax(settings1).done((response)=>{

				if(response.success)
				{
			        this.storage.set("token", response.token);
					resolve(response.token);
				}
				else{
					reject("User registration is currently not allowed");
				}

			}).fail((error)=>{
				reject("User registration is currently not allowed");
			});

		});
	}

}
