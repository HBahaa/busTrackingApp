import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';


@Injectable()
export class EditProfileProvider {

	constructor() {}

    updateProfile(data){
    	return new Promise ((resolve, reject)=>{
    		var settings1 = {
				"async": true,
					"crossDomain": true,
					"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?name="+data.value['name']+"&password="+data.value['password']+"&phone="+data.value['phone']+"&email="+data.value['email']+"&locLat="+data.lat+"&locLong="+data.lng+"&locDesc="+data._value.address,
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
					resolve("updated");
				}
				else{
					reject("error occurs while update profile");
				}

			}).fail((error)=>{
				reject("fail");
			});
    	})
    }

}
