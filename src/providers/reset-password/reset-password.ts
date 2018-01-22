import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';

@Injectable()
export class ResetPasswordProvider {

	constructor() {}

	resetPassword(nid){
    	return new Promise ((resolve, reject)=>{
    		var settings = {
				"async": true,
					"crossDomain": true,
					"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notesecure/reset?nid="+nid,
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

			$.ajax(settings).done((response)=>{

				if(response.success)
				{
					resolve("check your email");
				}
				else{
					reject("error occurs while reset password");
				}

			}).fail((error)=>{
				reject("fail to reset password");
			});
    	})
    }
}
