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
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../login/login';
import { MapPage } from '../map/map';
import { RegisterProvider } from '../../providers/register/register';
var Register2Page = /** @class */ (function () {
    function Register2Page(navCtrl, navParams, alertCtrl, translate, registerProvider, storage, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.registerProvider = registerProvider;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.rooms = [];
        this.address = this.navParams.get('param1');
        this.location = this.navParams.get('param2');
        this.translate.get('REGISTER2_PAGE.alertTitle').subscribe(function (title) {
            _this.alertTitle = title;
        });
        this.translate.get('REGISTER2_PAGE.alertSubtitle').subscribe(function (subtitle) {
            _this.alertSubtitle = subtitle;
        });
        this.translate.get('PROFILE_PAGE.alertBtn').subscribe(function (text) {
            _this.alertBtn = text;
        });
        this.user = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(4)]),
            email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$')]),
            address: new FormControl(this.address),
            mob: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
            password: new FormControl('', [Validators.minLength(5), Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
        });
    }
    Register2Page.prototype.onSubmit = function (user) {
        var _this = this;
        this.presentLoading();
        this.storage.get('userProfile').then(function (data) {
            var nid = data.id;
            var secureCode = data.skey;
            _this.registerProvider.Register(nid, secureCode, _this.location, user).then(function (token) {
                _this.loader.dismiss();
                _this.showAlert();
            }).catch(function (error2) {
                _this.loader.dismiss();
                alert(error2);
            });
        }).catch(function (error3) {
            _this.loader.dismiss();
        });
    };
    Register2Page.prototype.locateMe = function () {
        this.navCtrl.setRoot(MapPage);
    };
    Register2Page.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get('REGISTER2_PAGE.loader').subscribe(function (loader) {
            _this.loader = _this.loadingCtrl.create({
                content: loader
            });
            _this.loader.present();
        });
    };
    Register2Page.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.alertTitle,
            subTitle: this.alertSubtitle,
            buttons: [
                {
                    text: this.alertBtn,
                    handler: function (data) {
                        _this.navCtrl.setRoot(LoginPage);
                    }
                }
            ]
        });
        alert.present();
    };
    Register2Page = __decorate([
        Component({
            selector: 'page-register2',
            templateUrl: 'register2.html',
            providers: [RegisterProvider]
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController, TranslateService,
            RegisterProvider, Storage, LoadingController])
    ], Register2Page);
    return Register2Page;
}());
export { Register2Page };
//# sourceMappingURL=register2.js.map