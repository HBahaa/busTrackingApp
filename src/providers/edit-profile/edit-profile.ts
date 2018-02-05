import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';

import { LoginProvider } from '../login/login';
import { GetChildrenProvider } from '../get-children/get-children';


@Injectable()
export class EditProfileProvider {

	constructor( private loginProvider: LoginProvider, private getChildrenProvider: GetChildrenProvider) {}

    updateProfile(token, data, nid, f){

    	return new Promise ((resolve, reject)=>{

			// this.storage.get("token").then(token=>{
				
				if (f) {
					var settings1 = {
						"async": true,
						"crossDomain": true,
						"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?token="+token,
						"method": "POST",
						"headers": {
							"content-type": "application/json",
							"cache-control": "no-cache",
							"postman-token": "aa50dfb0-9c6d-a871-8fef-d6fbcaf228d1"
						},
						"processData": false,
						"data": `{\"phone\": \"${data.phone}\", \"pass\": \"${data.password}\", \"email\": \"${data.email}\"}`
					}

					$.ajax(settings1).done((response)=>{

						if(response.success)
						{
							resolve("Your Data Updated, Please Verify your email and relogin");
						}
						else
						{
							reject("fail")
						}

					}).fail((error)=>{
						reject("error");
					});
				}
				else{
					var settings2 = {
						"async": true,
						"crossDomain": true,
						"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?token="+token,
						"method": "POST",
						"headers": {
							"content-type": "application/json",
							"cache-control": "no-cache",
							"postman-token": "aa50dfb0-9c6d-a871-8fef-d6fbcaf228d1"
						},
						"processData": false,
						"data": `{\"phone\": \"${data.phone}\", \"pass\": \"${data.password}\"}`
					}

					$.ajax(settings2).done((response)=>{
						if(response.success)
						{
							this.loginProvider.Login(response.data.nid , data.password).then((newToken)=>{
								this.getChildrenProvider.getAllChildren(newToken).then((flag)=>{
							        if (flag) {
							          resolve("updated");
							        }
							    }).catch((error1)=>{
							        alert(error1);
							    });
							});
						}
						else
						{
							reject("fail")
						}

					}).fail((error)=>{
						reject("error");
					});
				}

			// })
    	})
    }

}
