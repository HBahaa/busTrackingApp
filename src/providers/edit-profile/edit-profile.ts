import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';

import { LoginProvider } from '../login/login';
import { GetChildrenProvider } from '../get-children/get-children';


@Injectable()
export class EditProfileProvider {

	constructor(private loginProvider: LoginProvider, private getChildrenProvider: GetChildrenProvider) {}

    updateProfile(data, nid){
    	return new Promise ((resolve, reject)=>{
    		var settings1 = {
				"async": true,
					"crossDomain": true,
					"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?name="+data.value['name']+"&password="+data.value['password']+"&phone="+data.value['phone']+"&email="+data.value['email'],
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
					this.loginProvider.Login(nid, data.password).then((newToken)=>{
						this.getChildrenProvider.getAllChildren(newToken).then((flag)=>{
					        if (flag) {
					          resolve("updated");
					        }
					    }).catch((error1)=>{
					        alert(error1);
					    });
					})
				}
				else
				{
					reject("error occurs while update profile");
				}

			}).fail((error)=>{
				reject("fail");
			});
    	})
    }

}
