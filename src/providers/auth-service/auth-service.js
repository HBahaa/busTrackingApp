var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(storage) {
        this.storage = storage;
    }
    AuthServiceProvider.prototype.checkToken = function (name, token) {
        return new Promise(function (resolve) {
            if (name == undefined && token == undefined) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    };
    AuthServiceProvider.prototype.reloadAll = function (tenant, id, type, token, userMeasurementName, currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        return new Promise(function (resolve) {
            var my = _this;
            var value;
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
                if (response.statistics.totalPages == null) {
                    if (response.measurements.length > 1) {
                        var l = response.measurements.length;
                        var obj = response.measurements[l - 1];
                        if (type == "c8y_TemperatureMeasurement") {
                            value = obj[type]["T"]["value"];
                        }
                        else if (type == "c8y_LightMeasurement") {
                            value = obj[type]["e"]["value"];
                        }
                        else if (type == "c8y_AccelerationMeasurement") {
                            value = obj[type]["acceleration"]["value"];
                        }
                        // var newItem = {
                        //   "deviceID":id,
                        //   "name":userMeasurementName,
                        //   "type":type,
                        //   "value":value,
                        //   "unit":unit
                        // }
                        my.storage.get('devicesMeasurements').then(function (data) {
                            for (var item in data) {
                                if (data[item]["deviceID"] == id && data[item]["type"] == type) {
                                    data[item]['value'] = value;
                                    my.storage.set("devicesMeasurements", data);
                                }
                            }
                        });
                        resolve(true);
                    }
                }
                else {
                    var current = response.statistics.totalPages;
                    my.reloadAll(id, type, token, userMeasurementName, currentPage = current);
                }
            }).fail(function (error) {
                console.log("error error", error);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());
export { AuthServiceProvider };
//# sourceMappingURL=auth-service.js.map