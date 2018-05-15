var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
var LoginProvider = /** @class */ (function () {
    function LoginProvider(storage, translate) {
        this.storage = storage;
        this.translate = translate;
        this.user = { 'loc': {} };
    }
    LoginProvider.prototype.Login = function (id, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notsecure/login?nid=" + id + "&password=" + password,
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                    "postman-token": "aaf1634c-7a6c-e7eb-ce6f-8f7a0448616b",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                    "Access-Control-Allow-Origin": "*",
                    "Allow-Control-Allow-Origin": "*"
                }
            };
            $.ajax(settings).then(function (response) {
                if (response.success) {
                    _this.user.password = password;
                    _this.storage.set("token", response.token);
                    _this.storage.set("userProfile", _this.user);
                    resolve(response.token);
                }
                else {
                    _this.translate.get('LOGIN_PAGE.error1').subscribe(function (error1) {
                        reject(error1);
                    });
                }
            }).catch(function (err) {
                _this.translate.get('LOGIN_PAGE.error2').subscribe(function (error2) {
                    reject(error2);
                });
            });
        });
    };
    LoginProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage, TranslateService])
    ], LoginProvider);
    return LoginProvider;
}());
export { LoginProvider };
//# sourceMappingURL=login.js.map