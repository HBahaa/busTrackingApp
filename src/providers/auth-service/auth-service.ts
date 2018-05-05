import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
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

  constructor(public storage: Storage) {
  }

  checkToken(name, token)
  {
    return new Promise((resolve)=>{
      if(name == undefined && token == undefined)
      {
        resolve(false);
      }
      else{
        resolve(true);
      }
    })
  }


  reloadAll(tenant,id, type, token, userMeasurementName, currentPage=1){
    return new Promise((resolve)=>{
      let my = this;
      let value;
      let unit

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://"+tenant+".cumulocity.com/measurement/measurements?source="+id+"&type="+type+"&currentPage="+currentPage,
        "method": "GET",
        "headers": {
          "authorization": token,
          "cache-control": "no-cache",
        }
      }


      $.ajax(settings).done(function (response) {
        if(response.statistics.totalPages == null){
          if(response.measurements.length > 1){
            let l = response.measurements.length
            var obj = response.measurements[l-1];
            if(type == "c8y_TemperatureMeasurement"){
              value = obj[type]["T"]["value"];
            }else if(type == "c8y_LightMeasurement"){
              value = obj[type]["e"]["value"];
            }else if(type == "c8y_AccelerationMeasurement"){
              value = obj[type]["acceleration"]["value"];
            }

            // var newItem = {
            //   "deviceID":id,
            //   "name":userMeasurementName,
            //   "type":type,
            //   "value":value,
            //   "unit":unit
            // }

            my.storage.get('devicesMeasurements').then((data)=>{
              for(let item in data){
                if(data[item]["deviceID"] == id && data[item]["type"] == type){
                  data[item]['value'] = value;
                  my.storage.set("devicesMeasurements", data)
                }
              }

            })
            resolve(true);
          }
        }else{

          let current = response.statistics.totalPages;
          my.reloadAll(id, type, token, userMeasurementName, currentPage=current)
        }

      }).fail((error)=>{
        console.log("error error", error)
      });

    })
  }

}
