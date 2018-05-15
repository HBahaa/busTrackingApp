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
import { NavController, AlertController, ViewController, MenuController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IntroPage } from '../../intro/intro';
import { UserLoginPage } from '../userlogin/userlogin';
import { DevicesPage } from '../devices/devices';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';
var UserHomePage = /** @class */ (function () {
    function UserHomePage(navCtrl, navParams, alertCtrl, viewCtrl, storage, menuCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.ids = [];
        this.names = {};
        this.flag = false;
        this.icons = { "c8y_TemperatureMeasurement": "thermometer",
            "c8y_LightMeasurement": "bulb",
            "c8y_AccelerationMeasurement": "compass",
            "c8y_PositionMeasurement": "pin",
            "c8y_DistanceMeasurement": "walk",
            "c8y_Mobile": "phone-portrait"
        };
        this.diplayItems();
        this.doRefresh(0);
        var my = this;
        setTimeout(function () {
            my.storage.get("userData").then(function (data) {
                var tenant = data.tenant;
                var token = data.token;
                if (my.items != null) {
                    for (var _i = 0, _a = my.items; _i < _a.length; _i++) {
                        var item = _a[_i];
                        var deviceID = item.deviceID;
                        var type = item.type;
                        var userMeasurementName = item.name;
                        my.authService.reloadAll(tenant, deviceID, type, token, userMeasurementName).then(function () {
                            my.storage.get("devicesMeasurements").then(function (data) {
                                my.items = data;
                            });
                        });
                    }
                }
            });
        }, 3000);
    }
    UserHomePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
        this.diplayItems();
        this.doRefresh(0);
    };
    UserHomePage.prototype.ionViewDidEnter = function () {
        this.diplayItems();
        this.menuCtrl.enable(false);
    };
    UserHomePage.prototype.diplayItems = function () {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            if (data != null) {
                _this.items = data;
                var _loop_1 = function (i) {
                    if ((_a = _this.ids).indexOf.apply(_a, Object.keys(i)) == -1) {
                        (_b = _this.ids).push.apply(_b, Object.keys(i));
                        _this.storage.get("devices").then(function (devices) {
                            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                                var dev = devices_1[_i];
                                if (dev["id"] == Object.keys(i)[0]) {
                                    var did = dev["id"];
                                    _this.names[did] = dev["name"];
                                }
                            }
                        });
                    }
                    var _a, _b;
                };
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var i = data_1[_i];
                    _loop_1(i);
                }
            }
        });
    };
    UserHomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            _this.items = data;
            if (refresher != 0)
                refresher.complete();
        });
    };
    // reorderItems(indexes){
    //   this.items = reorderArray(this.items, indexes);
    //   this.storage.set("devicesMeasurements", this.items);
    // }
    UserHomePage.prototype.removeItem = function (index) {
        var _this = this;
        if (index > -1) {
            this.storage.get("devices").then(function (data) {
                for (var i in data) {
                    if (data[i]["id"] == Object.keys(_this.items[index])[0]) {
                        data[i]["disableBTN"] = false;
                        _this.storage.set("devices", data).then(function () {
                            _this.items.splice(index, 1);
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component); // to refresh page
                            _this.storage.set("devicesMeasurements", _this.items);
                        });
                        break;
                    }
                }
            });
        }
    };
    UserHomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Help',
            subTitle: 'Click to add button to one of your devices. when you click on device, it will be added to this page.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UserHomePage.prototype.showDevices = function () {
        this.navCtrl.push(DevicesPage);
    };
    UserHomePage.prototype.switchTrackingApp = function () {
        this.navCtrl.setRoot(IntroPage);
    };
    UserHomePage.prototype.logout = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.navCtrl.setRoot(UserLoginPage);
        });
    };
    UserHomePage = __decorate([
        Component({
            selector: 'page-userhome',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController,
            ViewController, Storage, MenuController,
            AuthServiceProvider])
    ], UserHomePage);
    return UserHomePage;
}());
export { UserHomePage };
//# sourceMappingURL=home.js.map