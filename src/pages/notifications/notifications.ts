import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

import { GetNotificationProvider } from '../../providers/get-notification/get-notification';
import { NotificationPage } from '../notification/notification';


@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
  providers: [GetNotificationProvider]
})
export class NotificationsPage {

  items: any= [];
  newDate = new Date();
  rooms:any;

  constructor(public navCtrl: NavController, private storage: Storage, private getNotificationProvider: GetNotificationProvider) {

  }

  ionViewDidLoad(){

    let msg = [];

    this.storage.get("rooms").then((data)=>{
      this.rooms = data;
    })

    this.storage.get("children").then((result)=>{
      // let children = result;

      $.each(result, (index, child)=>{
        this.storage.get(child.tag).then((final)=>{
          msg.push(...final);
          msg.sort ((a, b)=> {
            // return (a.timestamp > b.timestamp) ? -1 : ((b.timestamp > a.timestamp) ? 1 : 0);
            return (a.time > b.time) ? -1 : ((b.time > a.time) ? 1 : 0);
          });          

          return msg
        })
        .then((items)=>{
          this.items = items.filter((items, index, self) =>
            index === self.findIndex((t) => (
              // t.timestamp === items.timestamp && t.sid === items.sid && t.status === items.status
              t.time === items.time && t.sid === items.sid && t.status === items.status
            ))
          )
        })
        .catch((error1)=>{
          console.log("error1");
        })

      });

    });
  }

  notificationDetails(item){
    this.navCtrl.push(NotificationPage, {'param1': item})
  }
}
