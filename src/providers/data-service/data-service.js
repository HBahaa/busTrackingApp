var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AlertController, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
var DataServiceProvider = /** @class */ (function () {
    function DataServiceProvider(storage, loadingCtrl, alertCtrl) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    DataServiceProvider.prototype.getDataService = function (tenant, id, type, token, userMeasurementName, deviceName, currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        console.log("type", type);
        if (type === "c8y_Temperature") {
            type = "c8y_TemperatureMeasurement";
        }
        return new Promise(function (resolve) {
            console.log("type", type);
            console.log("id", id);
            var value;
            var unit;
            var lat;
            var lng;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://" + tenant + ".cumulocity.com/measurement/measurements?source=" + id + "&type=" + type + "&currentPage=" + currentPage,
                "method": "GET",
                "headers": {
                    "authorization": token,
                    "cache-control": "no-cache",
                }
            };
            $.ajax(settings).done(function (response) {
                console.log("response", response);
                if (response.statistics.totalPages == null) {
                    var obj = {};
                    obj[id] = [];
                    var newItem;
                    var sName = userMeasurementName.substring(4);
                    var n = sName.indexOf("Measurement");
                    if (n > 0) {
                        console.log('iiif');
                        sName = sName.substring(0, n);
                    }
                    if (response.measurements.length >= 1) {
                        var l = response.measurements.length;
                        var resp = response.measurements[l - 1];
                        if (type == "c8y_Position") {
                            console.log("resp", resp);
                            lat = resp[type]["lat"];
                            lng = resp[type]["lng"];
                        }
                        else {
                            var respType = resp[type];
                            value = resp[type][Object.keys(respType)[0]]["value"];
                            unit = resp[type][Object.keys(respType)[0]]["unit"];
                        }
                        if (type == "c8y_Position") {
                            console.log("resp", sName, id, type, lat, lng);
                            newItem = {
                                "deviceID": id,
                                "name": sName,
                                "type": type,
                                "lat": lat,
                                "lng": lng
                            };
                        }
                        else {
                            newItem = {
                                "deviceID": id,
                                "name": sName,
                                "type": type,
                                "value": value,
                                "unit": unit
                            };
                        }
                        obj[id].push(newItem);
                    }
                    else if (response.measurements.length == 0) {
                        if (type == "c8y_Position") {
                            newItem = {
                                "deviceID": id,
                                "name": sName,
                                "type": type,
                                "lat": ""
                            };
                        }
                        else {
                            newItem = {
                                "deviceID": id,
                                "name": sName,
                                "type": type,
                                "value": ""
                            };
                        }
                        obj[id].push(newItem);
                    }
                    _this.deviceMeasurements(id, obj);
                    _this.loader.dismiss();
                    resolve(true);
                }
                else {
                    var current = response.statistics.totalPages;
                    _this.getDataService(tenant, id, type, token, userMeasurementName, deviceName, currentPage = current);
                    // this.getDataService(id, type, token, userMeasurementName, deviceName, currentPage=current)
                }
            }).fail(function (error) {
                _this.loader.dismiss();
                _this.showAlert("Error while saving data, Check your internet connection!");
            });
        });
    };
    DataServiceProvider.prototype.deviceMeasurements = function (id, item) {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            if (data == null) {
                var arr = [item];
                _this.storage.set('devicesMeasurements', arr);
            }
            else {
                data.push(item);
                _this.storage.set("devicesMeasurements", data);
            }
        });
        this.storage.get("devices").then(function (data) {
            for (var i in data) {
                if (data[i]["id"] == id) {
                    data[i]["disableBTN"] = true;
                    _this.storage.set("devices", data).then(function () {
                    });
                    break;
                }
            }
        });
    };
    DataServiceProvider.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait..."
        });
        this.loader.present();
    };
    DataServiceProvider.prototype.showAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: title,
            buttons: ['OK']
        });
        alert.present();
    };
    DataServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage, LoadingController, AlertController])
    ], DataServiceProvider);
    return DataServiceProvider;
}());
export { DataServiceProvider };
//# sourceMappingURL=data-service.js.map