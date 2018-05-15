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
import * as $ from 'jquery';
import { NotificationPage } from '../notification/notification';
import { ChildGradesPage } from '../child-grades/child-grades';
import { BusTrackPage } from '../bus-track/bus-track';
import { MessagesPage } from '../messages/messages';
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.items = [];
        this.newDate = new Date();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var msg = [];
        this.storage.get("rooms").then(function (data) {
            _this.rooms = data;
        });
        this.storage.get("language").then(function (lang) {
            _this.lang = lang;
        });
        this.storage.get("children").then(function (result) {
            // let children = result;
            $.each(result, function (index, child) {
                _this.storage.get(child.tag).then(function (final) {
                    msg.push.apply(msg, final);
                    msg.sort(function (a, b) {
                        // return (a.timestamp > b.timestamp) ? -1 : ((b.timestamp > a.timestamp) ? 1 : 0);
                        return (a.time > b.time) ? -1 : ((b.time > a.time) ? 1 : 0);
                    });
                    return msg;
                })
                    .then(function (items) {
                    _this.items = items.filter(function (items, index, self) {
                        return index === self.findIndex(function (t) { return (
                        // t.timestamp === items.timestamp && t.sid === items.sid && t.status === items.status
                        t.time === items.time && t.sid === items.sid && t.status === items.status); });
                    });
                })
                    .catch(function (error1) {
                    console.log("error1");
                });
            });
        });
    };
    NotificationsPage.prototype.notificationDetails = function (item) {
        this.navCtrl.push(NotificationPage, { 'param1': item, 'param2': this.lang });
    };
    NotificationsPage.prototype.childScore = function () {
        this.navCtrl.push(ChildGradesPage);
    };
    NotificationsPage.prototype.busTrack = function () {
        this.navCtrl.push(BusTrackPage);
    };
    NotificationsPage.prototype.showMessage = function () {
        this.navCtrl.push(MessagesPage);
    };
    NotificationsPage = __decorate([
        Component({
            selector: 'page-notifications',
            templateUrl: 'notifications.html'
        }),
        __metadata("design:paramtypes", [NavController, Storage])
    ], NotificationsPage);
    return NotificationsPage;
}());
export { NotificationsPage };
//# sourceMappingURL=notifications.js.map