import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

import { NotificationPage } from '../notification/notification';
import { ChildGradesPage } from '../child-grades/child-grades';
import { BusTrackPage } from '../bus-track/bus-track';
import { MessagesPage } from '../messages/messages';


@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {

  items: any= [];
  newDate = new Date();
  rooms:any;
  lang: string;

  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  ionViewDidLoad(){

    let msg = [];

    this.storage.get("rooms").then((data)=>{
      this.rooms = data;
    });

    this.storage.get("language").then(lang =>{
      this.lang = lang;
    });

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
    this.navCtrl.push(NotificationPage, {'param1': item, 'param2': this.lang})
  }

  childScore(){
    this.navCtrl.push(ChildGradesPage);
  }

  busTrack(){
    this.navCtrl.push(BusTrackPage);
  }

  showMessage(){
    this.navCtrl.push(MessagesPage);
  }

}
