import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';


@Injectable()
export class LoginProvider {

	constructor(public storage: Storage, private translate: TranslateService) {}

	Login(id, password){
		return new Promise((resolve, reject) => {

			var settings = {
		        "async": true,
		        "crossDomain": true,
		        "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notsecure/login?nid="+id+"&password="+password,
		        "method": "POST",
		        "headers": {
		          "content-type": "application/json",
		          "cache-control": "no-cache",
		          "postman-token": "aaf1634c-7a6c-e7eb-ce6f-8f7a0448616b",
		          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
		          "Access-Control-Allow-Origin":"*",
		          "Allow-Control-Allow-Origin":"*"
		        }
		    }

	    	$.ajax(settings).then((response)=> {
				if(response.success)
				{
			        this.storage.set("token", response.token);
			        resolve(response.token);			  
				}
				else{
					this.translate.get('LOGIN_PAGE.error1').subscribe((error1)=>{
			        	reject(error1);
			        })
				}

			}).catch((err)=>{
				this.translate.get('LOGIN_PAGE.error2').subscribe((error2)=>{
		         	reject(error2);
		        })
			});
		});
	}
}
