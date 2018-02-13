import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';

import { LoginProvider } from '../login/login';
import { GetChildrenProvider } from '../get-children/get-children';
import { GetNotificationProvider } from '../get-notification/get-notification';


@Injectable()
export class EditProfileProvider {
	error: any;

	constructor( private loginProvider: LoginProvider, private getChildrenProvider: GetChildrenProvider,
				 private translate: TranslateService, private getNotificationProvider: GetNotificationProvider) {

		this.error = this.translate.get('PROFILE_PAGE.error')
	}

    updateProfile(token, data, nid, isEmailChanged){

    	return new Promise ((resolve, reject)=>{

			// this.storage.get("token").then(token=>{
				
				if (isEmailChanged) {
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
							this.translate.get('PROFILE_PAGE.updated').subscribe((updated)=>{
					        	resolve(updated);
					        })
						}
						else
						{
							reject(this.error)
						}

					}).fail((error)=>{
						reject(this.error);
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
							        	this.getNotificationProvider.getNotification(newToken).then((data) => {
											resolve("updated");
										}).catch((error2)=>{
											console.log(error2)
							          	})
							        }
							    }).catch((error1)=>{
							        alert(error1);
							    });
							});
						}
						else
						{
							reject(this.error)
						}

					}).fail((error)=>{
						reject(this.error);
					});
				}

			// })
    	})
    }

}
