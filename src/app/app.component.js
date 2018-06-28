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
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { MessagesPage } from '../pages/messages/messages';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { UserHomePage } from '../pages/cumulocity/home/home';
import { UserLoginPage } from '../pages/cumulocity/userlogin/userlogin';
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
        this.rootPage = IntroPage;
        platform.ready().then(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.disableScroll(true);
            }
            _this.keyboard.disableScroll(true);
            // this.storage.clear();
            statusBar.styleDefault();
            splashScreen.hide();
            _this.translateService.use('en');
            // this.presentLoading();
            // this.loadingPage();
        });
        this.pages = [
            { icon: 'contacts', title: 'CHILDREN_PAGE.title', component: ChildrenPage },
            { icon: 'notifications', title: 'NOTIFICATIONS_PAGE.title', component: NotificationsPage },
            { icon: 'chatboxes', title: 'MESSAGES_PAGE.title', component: MessagesPage },
            { icon: 'person', title: 'PROFILE_PAGE.title', component: ProfilePage }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.userLogout = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.nav.setRoot(HomePage);
        });
    };
    MyApp.prototype.switchMySensors = function () {
        var _this = this;
        this.storage.get("devices").then(function (data) {
            _this.platform.setDir('rtl', false);
            _this.platform.setDir('ltr', true);
            _this.translateService.use('en');
            if (data != null) {
                _this.nav.setRoot(UserHomePage);
            }
            else {
                _this.nav.setRoot(UserLoginPage);
            }
        });
    };
    // loadingPage(){
    //   this.storage.ready().then(()=>{
    //     this.storage.get("children").then((data)=>{
    //       this.loader.dismiss();
    //       if(data != null){
    //         this.setLanguage()
    //         this.rootPage = ChildrenPage;
    //         // this.loader.dismiss();
    //       }else if(data == null){
    //         // this.loader.dismiss();
    //         this.storage.set("language", "en");
    //         this.translateService.use('en');
    //         this.rootPage = HomePage;
    //       }
    //     })
    //   })
    // }
    MyApp.prototype.setLanguage = function () {
        var _this = this;
        this.storage.get("language").then(function (lang) {
            if (lang === 'ar') {
                _this.platform.setDir('ltr', false);
                _this.platform.setDir('rtl', true);
            }
            _this.translateService.use(lang);
        }).catch(function (err) {
            _this.translateService.use('en');
        });
    };
    MyApp.prototype.presentLoading = function () {
        // this.translateService.get('APP_PAGE.load').subscribe((load)=>{
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
        // });
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