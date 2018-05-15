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
import { NavController, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { ChildrenPage } from '../children/children';
import { UserLoginPage } from '../cumulocity/userlogin/userlogin';
import { UserHomePage } from '../cumulocity/home/home';
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, menuCtrl, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
    }
    IntroPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    IntroPage.prototype.mySensors = function () {
        var _this = this;
        // this.navCtrl.setRoot(UserLoginPage);
        this.storage.get("devices").then(function (data) {
            _this.storage.get("userData").then(function (user) {
                if (user != null && data != null) {
                    _this.navCtrl.setRoot(UserHomePage);
                }
                else {
                    _this.navCtrl.setRoot(UserLoginPage);
                }
            });
        });
    };
    IntroPage.prototype.busTrackingApp = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("children").then(function (data) {
                if (data != null) {
                    _this.navCtrl.setRoot(ChildrenPage);
                }
                else {
                    _this.storage.set("language", "en");
                    // this.translateService.use('en');
                    _this.navCtrl.setRoot(HomePage);
                }
            });
        });
    };
    IntroPage = __decorate([
        Component({
            selector: 'page-intro',
            templateUrl: 'intro.html',
        }),
        __metadata("design:paramtypes", [NavController, MenuController, Storage])
    ], IntroPage);
    return IntroPage;
}());
export { IntroPage };
//# sourceMappingURL=intro.js.map