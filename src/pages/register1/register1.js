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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { MapPage } from '../map/map';
import { LoginPage } from '../login/login';
var Register1Page = /** @class */ (function () {
    function Register1Page(navCtrl, storage, translate) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.translate = translate;
    }
    Register1Page.prototype.ionViewWillLoad = function () {
        this.validations_form = new FormGroup({
            id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
            skey: new FormControl('', [Validators.required, Validators.min(144311), Validators.max(84813736161378)])
        });
    };
    Register1Page.prototype.onSubmit = function (data) {
        var _this = this;
        console.log("data._value", data._value.id); //Object {id: "12345678901234", skey: "144311"}
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notsecure/checkcode?nid=" + data._value.id + "&secureCode=" + data._value.skey,
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                "Access-Control-Allow-Origin": "*"
            }
        };
        $.ajax(settings).done(function (response) {
            if (response.success) {
                _this.storage.set("userProfile", data._value).then(function () {
                    _this.navCtrl.setRoot(MapPage);
                });
            }
            else {
                _this.translate.get('REGISTER1_PAGE.error').subscribe(function (error) {
                    alert(error);
                });
            }
        }).catch(function (error) {
            _this.translate.get('REGISTER1_PAGE.error').subscribe(function (error) {
                alert(error);
            });
        });
    };
    Register1Page.prototype.alreadyHaveAccount = function () {
        this.navCtrl.setRoot(LoginPage);
    };
    Register1Page = __decorate([
        Component({
            selector: 'page-register1',
            templateUrl: 'register1.html'
        }),
        __metadata("design:paramtypes", [NavController, Storage, TranslateService])
    ], Register1Page);
    return Register1Page;
}());
export { Register1Page };
//# sourceMappingURL=register1.js.map