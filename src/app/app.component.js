var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { ChildrenPage } from '../pages/children/children';
import { HomePage } from '../pages/home/home';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translateService, keyboard, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translateService = translateService;
        this.keyboard = keyboard;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.rootPage = ProfilePage;
        platform.ready().then(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.disableScroll(true);
            }
            _this.keyboard.disableScroll(true);
            statusBar.styleDefault();
            splashScreen.hide();
            // this.translateService.setDefaultLang(en);
            _this.translateService.use('en');
            // this.presentLoading();
            // this.loadingPage();
        });
        this.pages = [
            { icon: 'contacts', title: 'CHILDREN_PAGE.title', component: ChildrenPage },
            { icon: 'notifications', title: 'NOTIFICATIONS_PAGE.title', component: NotificationsPage },
            { icon: 'person', title: 'PROFILE_PAGE.title', component: ProfilePage }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.userLogout = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.nav.setRoot(LoginPage);
        });
    };
    MyApp.prototype.loadingPage = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("children").then(function (data) {
                if (data != null) {
                    _this.rootPage = ChildrenPage;
                    _this.loader.dismiss();
                }
                else if (data == null) {
                    _this.loader.dismiss();
                    _this.rootPage = HomePage;
                }
            });
        });
    };
    MyApp.prototype.presentLoading = function () {
        var _this = this;
        this.translateService.get('APP_PAGE.load').subscribe(function (content) {
            _this.loader = _this.loadingCtrl.create({
                content: content
            });
            _this.loader.present();
        });
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen,
            TranslateService, Keyboard, ToastController,
            LoadingController, Storage])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map