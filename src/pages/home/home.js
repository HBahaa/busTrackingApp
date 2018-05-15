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
import { NavController, MenuController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { Register1Page } from '../register1/register1';
import { IntroPage } from '../intro/intro';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, storage, translateService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.storage = storage;
        this.translateService = translateService;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    HomePage.prototype.backToIntro = function () {
        this.navCtrl.setRoot(IntroPage);
    };
    HomePage.prototype.changeLanguage = function (language) {
        if (language === 'ar') {
            this.platform.setDir('ltr', false);
            this.platform.setDir('rtl', true);
            this.translateService.use(language);
        }
        else {
            this.platform.setDir('rtl', false);
            this.platform.setDir('ltr', true);
            this.translateService.use(language);
        }
        this.storage.set("language", language);
    };
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(LoginPage);
    };
    HomePage.prototype.goToRegistration = function () {
        this.navCtrl.setRoot(Register1Page);
    };
    HomePage.prototype.segmentChanged = function (event) {
        this.translateService.use(event._value);
        if (event._value == 'ar') {
            this.platform.setDir('rtl', true);
        }
        else {
            this.platform.setDir('ltr', true);
        }
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Platform, Storage,
            TranslateService, MenuController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map