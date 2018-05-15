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
import { NavController, AlertController, LoadingController, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { IntroPage } from '../../intro/intro';
import { UserHomePage } from '../home/home';
var UserLoginPage = /** @class */ (function () {
    function UserLoginPage(alertCtrl, navCtrl, menuCtrl, storage, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
    }
    UserLoginPage_1 = UserLoginPage;
    UserLoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    UserLoginPage.prototype.backToIntro = function () {
        this.navCtrl.setRoot(IntroPage);
    };
    UserLoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Check your connection and make sure that UserName and Password are correct, Please Try Again!',
            buttons: ['OK']
        });
        alert.present();
    };
    UserLoginPage.prototype.login = function () {
        this.presentLoading();
        var storage = this.storage;
        var navCtrl = this.navCtrl;
        // var devices = this.devices;
        var my = this;
        this.token = "Basic " + window.btoa(this.username + ':' + this.password);
        function myFilter(objs) {
            console.log("filter objs", objs);
            return objs.filter(function (obj) {
                console.log("obj", obj);
                return obj['c8y_SupportedMeasurements'];
            }).map(function (obj) {
                return (function (_a) {
                    var id = _a.id, name = _a.name, c8y_SupportedMeasurements = _a.c8y_SupportedMeasurements;
                    return ({ id: id, name: name, c8y_SupportedMeasurements: c8y_SupportedMeasurements });
                })(obj);
            });
        }
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://" + this.tenant + ".cumulocity.com/inventory/managedObjects?owner=" + this.username,
            "method": "GET",
            "headers": {
                "authorization": "" + this.token,
                "cache-control": "no-cache",
                "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
            }
        };
        $.ajax(settings).done(function (response) {
            console.log("response", response);
            storage.set("userData", {
                'tenant': my.tenant,
                'username': my.username,
                "password": my.password,
                "token": my.token
            });
            if (response.statistics.totalPages == undefined || response.statistics.totalPages == null) {
                var objs = response.managedObjects;
                console.log("response.managedObjects", response.managedObjects);
                var devices = myFilter(objs);
                console.log("devices", devices);
                for (var i in devices) {
                    devices[i]["disableBTN"] = false;
                }
                storage.set('devices', devices).then(function () {
                    console.log("from set devices", devices);
                });
                navCtrl.push(UserHomePage);
                my.loader.dismiss();
            }
            else {
                var total = response.statistics.totalPages;
                var size = response.statistics.pageSize;
                // let current = response.statistics.currentPage;
                var totalSize = total * size;
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://" + this.tenent + ".cumulocity.com/inventory/managedObjects?owner=" + this.username + "&pageSize=" + totalSize + "&currentPage=1",
                    "method": "GET",
                    "headers": {
                        "authorization": "" + this.token,
                        "cache-control": "no-cache",
                        "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                    }
                };
                $.ajax(settings).done(function (response) {
                    var objs = response.managedObjects;
                    var devices = myFilter(objs);
                    for (var i in devices) {
                        devices[i]["disableBTN"] = false;
                    }
                    storage.set('devices', devices).then(function () {
                        console.log("from set devices", devices);
                    });
                    navCtrl.push(UserHomePage);
                    my.loader.dismiss();
                });
            }
        }).fail(function (error) {
            navCtrl.push(UserLoginPage_1);
            my.loader.dismiss();
            my.username = "";
            my.password = "";
            my.showAlert();
        });
    };
    UserLoginPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait..."
        });
        this.loader.present();
    };
    UserLoginPage = UserLoginPage_1 = __decorate([
        Component({
            selector: 'page-userlogin',
            templateUrl: 'userlogin.html'
        }),
        __metadata("design:paramtypes", [AlertController, NavController, MenuController,
            Storage, LoadingController])
    ], UserLoginPage);
    return UserLoginPage;
    var UserLoginPage_1;
}());
export { UserLoginPage };
//# sourceMappingURL=userlogin.js.map