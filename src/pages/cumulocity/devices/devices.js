var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { DeviceDataPage } from '../device-data/device-data';
import { DataServiceProvider } from '../../../providers/data-service/data-service';
import { UserHomePage } from '../home/home';
var DevicesPage = /** @class */ (function () {
    function DevicesPage(navCtrl, storage, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.dataService = dataService;
        this.storage.get('devices').then(function (data) {
            _this.devices = data;
        });
    }
    DevicesPage.prototype.addDevice = function (device) {
        var _this = this;
        this.storage.get("devices").then(function (devices) {
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var x = devices_1[_i];
                if (x["id"] == device["id"]) {
                    x["disableBTN"] = true;
                }
            }
            _this.storage.set("devices", devices);
        });
        this.dataService.presentLoading();
        this.storage.get('userData').then(function (data) {
            _this.token = data.token;
            _this.tenant = data.tenant;
            console.log("device", device);
            // for(let device of this.devices){
            for (var _i = 0, _a = device["c8y_SupportedMeasurements"]; _i < _a.length; _i++) {
                var sensor = _a[_i];
                _this.dataService.getDataService(_this.tenant, device["id"], sensor, _this.token, sensor, device["name"])
                    .then(function (flag) {
                    if (flag == true) {
                        _this.navCtrl.push(UserHomePage);
                    }
                    else {
                    }
                });
            }
            // }
        });
    };
    DevicesPage = __decorate([
        Component({
            selector: 'page-devices',
            templateUrl: 'devices.html',
            providers: [DataServiceProvider]
        }),
        __metadata("design:paramtypes", [NavController, Storage, DataServiceProvider])
    ], DevicesPage);
    return DevicesPage;
}());
export { DevicesPage };
//# sourceMappingURL=devices.js.map