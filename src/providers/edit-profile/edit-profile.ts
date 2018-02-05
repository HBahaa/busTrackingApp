import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';

import { LoginProvider } from '../login/login';
import { GetChildrenProvider } from '../get-children/get-children';


@Injectable()
export class EditProfileProvider {

	constructor(private storage: Storage, private loginProvider: LoginProvider, private getChildrenProvider: GetChildrenProvider) {}

    updateProfile(data, nid){
    	return new Promise ((resolve, reject)=>{
			this.storage.get("token").then(token=>{
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
					  // "data": `{\"phone\": ${data.phone}, \"pass\": \"Hb111\"}`
					"data": "{ \"phone\": \"012012\", \"pass\": \"Hb111\"}"
				}

				$.ajax(settings1).done((response)=>{
					console.log("response", response)

					if(response.success)
					{
						console.log("data", data)
						// this.storage.get("userData").then((user)=>{
						// 	// user.password = response.data.password;
						// 	user.password = data.password;
						// 	user.phone = response.data.phone;
						// 	user.email = response.data.email;
						// 	user.name = response.data.name;
						// 	this.storage.set("userData", user);
						// });

						console.log("response.data.nid", response.data.nid)
						console.log("data.password", data.password)
						this.loginProvider.Login(response.data.nid , data.password).then((newToken)=>{
							console.log("new token", newToken)
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
						
						this.loginProvider.Login(response.data.nid, data.password).then((newToken)=>{
							this.getChildrenProvider.getAllChildren(newToken).then((flag)=>{
						        if (flag) {
						          resolve("updated");
						        }else{

						        	console.log("fail")
									reject("error occurs while update profile");

						        }
						    }).catch((error1)=>{
						        alert(error1);
						    });
						});


					}

				}).fail((error)=>{
					reject("fail");
				});
			})
    	})
    }

}
