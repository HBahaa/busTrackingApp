import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';


@Injectable()
export class AuthServiceProvider {
  url:any;
  response:any;
  username: any;
  password: any;
  token:any;
  devices:any;
  items:any;


  managedDevices: any = [];

  constructor(public storage: Storage) {
  }

  myFilter(objs){
    return objs.filter((obj)=>{
      return obj['c8y_SupportedMeasurements'];
    }).map((obj)=>{

      return (({ id, name, c8y_SupportedMeasurements }) => ({ id, name, c8y_SupportedMeasurements }))(obj)
    })
  }


  Login(tenant, username, password, currentPage=1){
    return new Promise((resolve)=>{

      var token = "Basic " + window.btoa(username+':'+password);

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://${tenant}.cumulocity.com/inventory/managedObjects?owner=${username}&pageSize=10&currentPage=${currentPage}`,
        "method": "GET",
        "headers": {
          "authorization": `${token}`,
          "cache-control": "no-cache",
          "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
        }
      }


      $.ajax(settings).done(response=> {

        if(response.managedObjects.length > 0)
        {

          this.managedDevices = this.managedDevices.concat(response.managedObjects);

          let page = response.statistics.currentPage + 1;
          this.Login(tenant, username, password, currentPage=page)
        }
        // else{

          var devices = this.myFilter(this.managedDevices);
          for(let i in devices){
            devices[i]["disableBTN"] = false;
          }
          this.storage.set('devices', devices)
          this.storage.set("userData", {
            'tenant':tenant,
            'username': username,
            "password": password,
            "token": token
          });

          resolve(true);
        // }

      }).fail(error=>{
        resolve(false);
      });
    })
  }

}
