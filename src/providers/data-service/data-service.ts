import { AlertController, LoadingController  } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';



@Injectable()
export class DataServiceProvider {
  devices:any;
  loader:any;

  constructor(public storage: Storage, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  getDataService(tenant,id, type, token, userMeasurementName, deviceName, currentPage=1){

    console.log("type", type)

    if (type === "c8y_Temperature") {
      type = "c8y_TemperatureMeasurement";
    }

    return new Promise((resolve)=>{

      console.log("type", type)
      console.log("id", id)

      let value;
      let unit;
      let lat;
      let lng;

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://"+tenant+".cumulocity.com/measurement/measurements?source="+id+"&type="+type+"&currentPage="+currentPage,
        "method": "GET",
        "headers": {
          "authorization": token,
          "cache-control": "no-cache",
        }
      }

      $.ajax(settings).done((response) => {

        console.log("response", response);

        if(response.statistics.totalPages == null){

          var obj = {};
          obj[id] = [];
          var newItem;
          var sName = userMeasurementName.substring(4);
          
          let n = sName.indexOf("Measurement");
          if (n > 0) {
            console.log('iiif')
            sName = sName.substring(0, n);
          }

          if(response.measurements.length >= 1){

            let l = response.measurements.length;
            var resp = response.measurements[l-1];



            if (type == "c8y_Position") {
              console.log("resp", resp)
              lat = resp[type]["lat"];
              lng = resp[type]["lng"];
            }else{

              let respType = resp[type];
              value = resp[type][Object.keys(respType)[0]]["value"];
              unit = resp[type][Object.keys(respType)[0]]["unit"];
            }

            if (type == "c8y_Position") {
              console.log("resp", sName, id, type, lat, lng)
              newItem = {
                "deviceID":id,
                "name":sName,
                "type":type,
                "lat":lat,
                "lng":lng
              }
            }else{
              newItem = {
                "deviceID":id,
                "name":sName,
                "type":type,
                "value":value,
                "unit":unit
              }
            }

            obj[id].push(newItem);
          }
          else if(response.measurements.length == 0){

            if (type == "c8y_Position") {
              newItem = {
                "deviceID":id,
                "name":sName,
                "type":type,
                "lat":""
              }
            }else{
              newItem = {
                "deviceID":id,
                "name":sName,
                "type":type,
                "value":""
              }
            }
            obj[id].push(newItem);
          }

          this.deviceMeasurements(id, obj);
            this.loader.dismiss();
            resolve(true);

        }else{
          let current = response.statistics.totalPages;
          this.getDataService(tenant,id, type, token, userMeasurementName, deviceName, currentPage=current)
          // this.getDataService(id, type, token, userMeasurementName, deviceName, currentPage=current)
        }

      }).fail((error)=>{
        this.loader.dismiss();
        this.showAlert("Error while saving data, Check your internet connection!")
      });

    })

  }

  deviceMeasurements(id, item){
    this.storage.get('devicesMeasurements').then((data)=>{
      if(data == null){
        var arr = [item]
        this.storage.set('devicesMeasurements', arr);
      }else{
        data.push(item);
        this.storage.set("devicesMeasurements", data)
      }
    })
    this.storage.get("devices").then((data)=>{
      for(let i in data){
        if(data[i]["id"] == id){
          data[i]["disableBTN"]=true;
          this.storage.set("devices", data).then(()=>{
          });
          break;
        }
      }
    })
  }


  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    this.loader.present();
  }
  showAlert(title) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: title,
      buttons: ['OK']
    });
    alert.present();
  }
}
