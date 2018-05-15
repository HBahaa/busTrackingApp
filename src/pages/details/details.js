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
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NotificationPage } from '../notification/notification';
import { NotificationsPage } from '../notifications/notifications';
import { DriverPage } from '../driver/driver';
import { BusTrackPage } from '../bus-track/bus-track';
import { SemestersPage } from '../semesters/semesters';
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, storage, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.platform = platform;
        this.messages = [];
        this.platform.ready().then(function () {
            _this.storage.get("rooms").then(function (data) {
                _this.rooms = data;
            });
            _this.storage.get("language").then(function (lang) {
                _this.lang = lang;
            });
            _this.tag = _this.navParams.get("param1");
            _this.childData = _this.navParams.get("param2");
            _this.storage.get(_this.tag).then(function (messages) {
                _this.messages = messages;
            }).catch(function (error2) {
                console.log("error 2: " + error2);
            });
        }).catch(function (error1) {
            console.log("error 1: " + error1);
        });
    }
    DetailsPage.prototype.notificationDetails = function (item) {
        this.navCtrl.push(NotificationPage, { 'param1': item });
    };
    DetailsPage.prototype.moreNotifications = function () {
        this.navCtrl.setRoot(NotificationsPage);
    };
    DetailsPage.prototype.selectSemester = function () {
        this.navCtrl.push(SemestersPage);
    };
    DetailsPage.prototype.tripTrack = function () {
        this.navCtrl.push(BusTrackPage);
    };
    DetailsPage.prototype.driverBehaviour = function () {
        // this.navCtrl.push(DriverPage, {'param1': name});
        this.navCtrl.push(DriverPage);
    };
    DetailsPage = __decorate([
        Component({
            selector: 'page-details',
            templateUrl: 'details.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            Storage, Platform])
    ], DetailsPage);
    return DetailsPage;
}());
export { DetailsPage };
//# sourceMappingURL=details.js.map