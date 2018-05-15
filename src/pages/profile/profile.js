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
import { NavController, Platform, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../login/login';
import { MapModalPage } from '../map-modal/map-modal';
import { LoginProvider } from '../../providers/login/login';
import { EditProfileProvider } from '../../providers/edit-profile/edit-profile';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, storage, platform, alertCtrl, loginProvider, editProfileProvider, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loginProvider = loginProvider;
        this.editProfileProvider = editProfileProvider;
        this.translate = translate;
        this.showEditForm = false;
        platform.ready().then(function () {
            _this.translate.get('PROFILE_PAGE.alertSubtitle').subscribe(function (subtitle) {
                _this.alertSubtitle = subtitle;
            });
            _this.translate.get('PROFILE_PAGE.alertBtn').subscribe(function (text) {
                _this.alertBtn = text;
            });
            _this.storage.get("language").then(function (lang) {
                _this.language = lang;
            });
            _this.storage.get("userProfile").then(function (data) {
                // alert("data = "+ JSON.stringify(data));
                _this.nid = data.nid;
                _this.name = data.name;
                _this.email = data.email;
                _this.phone = data.phone;
                _this.password = data.password;
                _this.user_email = data.email;
                _this.user_phone = data.phone;
                _this.user_password = data.password;
                _this.address = data.address;
                _this.location = data.loc;
            });
        });
    }
    ProfilePage.prototype.changeLanguage = function (language) {
        if (language === 'ar') {
            this.platform.setDir('ltr', false);
            this.platform.setDir('rtl', true);
            this.translate.use(language);
        }
        else {
            this.platform.setDir('rtl', false);
            this.platform.setDir('ltr', true);
            this.translate.use(language);
        }
        this.storage.set("language", language);
    };
    ProfilePage.prototype.changeFlag = function () {
        this.showEditForm = true;
        return this.showEditForm;
    };
    ProfilePage.prototype.cancelEdit = function () {
        this.email = this.user_email;
        this.phone = this.user_phone;
        this.password = this.user_password;
        this.showEditForm = false;
        return this.showEditForm;
    };
    ProfilePage.prototype.presentMapModal = function () {
        this.navCtrl.push(MapModalPage, { 'param1': this.location });
    };
    ProfilePage.prototype.editProfile = function (data) {
        var _this = this;
        this.storage.get("userProfile").then(function (user) {
            _this.loginProvider.Login(user.nid, user.password).then(function (log) {
                if (user.email == data.value.email) {
                    _this.editProfileProvider.updateProfile(log, data.value, user.nid, false).then(function (res) {
                        _this.user_email = _this.email;
                        _this.user_phone = _this.phone;
                        _this.user_password = _this.password;
                        _this.showEditForm = false;
                        return _this.showEditForm;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                else {
                    _this.editProfileProvider.updateProfile(log, data.value, user.nid, true).then(function (res) {
                        // alert(res);
                        _this.showAlert();
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }).catch(function (err) {
                console.log("err in login");
            });
        });
    };
    ProfilePage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: this.alertSubtitle,
            buttons: [
                {
                    text: this.alertBtn,
                    handler: function (data) {
                        _this.storage.clear().then(function () {
                            _this.navCtrl.setRoot(LoginPage);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html',
            providers: [LoginProvider, EditProfileProvider]
        }),
        __metadata("design:paramtypes", [NavController, Storage, Platform,
            AlertController, LoginProvider,
            EditProfileProvider, TranslateService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map