import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import * as $ from 'jquery';
import 'rxjs/add/operator/map';


@Injectable()
export class GetNotificationProvider {
	children: any;

	constructor(private storage: Storage) {
		console.log('Hello GetNotificationProvider Provider');
	}


	getNotification(token){

		let dfd = $.Deferred();

    	this.storage.get("children").then((result)=>{

    		this.children = result;

			$.each(result, (index, child)=>{
				let settings = {
					"async": true,
					"crossDomain": true,
					"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notification/"+child.tag+"/10/0?token="+token,
					"method": "POST",
					"headers": {
						"cache-control": "no-cache",
						"postman-token": "0de21fdb-9125-bb9b-15bd-e4fb1736e465",
					    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
				        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
				        "Access-Control-Allow-Origin":"*",
				        "Allow-Control-Allow-Origin":"*"
					}
				}
				$.ajax(settings).done((response)=> {
					
					if(response.success)
			      	{
			      		let messages = response.message;
			      		$.each(messages, (index, message)=>{
			      			if (child.tag == message.sid || child.bus_id == message.sid ) {

			      				if (message.name) {
				      				message.name.push(child.name);
				      			}else{
				      				message.name = [child.name];
				      			}
			      			}

			      			message.msg = message.msg.replace(/['"]/g, "");
			      			message.status = message.status.replace(/['"]/g, "");
			      		})

			      		this.storage.set(child.tag, messages);
            			if (messages.length > 0) {
            				child.lastMsg= messages[0];
            				for (let i=0; i< messages.length; i++) {
            					if (messages[i].sid == child.tag) {
            						child.childLastMsg = messages[i];
            						break
            					}else{
		            				child.childLastMsg = [];
		            			}
            				}
            			}
            			else{
            				child.lastMsg = [];
            				child.childLastMsg = [];
            			}
		            	this.storage.set("children", this.children);
				    	dfd.resolve(this.children);
			      	}
			      	else{
			       		dfd.reject("children not allowed")
			      	}
				}).fail((error) => {
					dfd.reject(error)
				});
			})
		})
  		return dfd.promise();     
	}

}
