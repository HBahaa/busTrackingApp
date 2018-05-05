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
			  "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notsecure/reset",
			  "method": "POST",
			  "headers": {
			    "content-type": "application/json",
			    "cache-control": "no-cache",
			    "postman-token": "1fe201ea-0110-78b2-be27-f6f780d9c3db"
			  },
			  "processData": false,
			  "data": `{\"nid\": ${nid}}`
			}

			$.ajax(settings).done((response)=>{

				if(response.success)
				{
					resolve("Please check your email");
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
