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
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
var ResetPasswordProvider = /** @class */ (function () {
    function ResetPasswordProvider() {
    }
    ResetPasswordProvider.prototype.resetPassword = function (nid) {
        return new Promise(function (resolve, reject) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notsecure/reset",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                    "postman-token": "1fe201ea-0110-78b2-be27-f6f780d9c3db"
                },
                "processData": false,
                "data": "{\"nid\": " + nid + "}"
            };
            $.ajax(settings).done(function (response) {
                if (response.success) {
                    resolve("Please check your email");
                }
                else {
                    reject("error occurs while reset password");
                }
            }).fail(function (error) {
                reject("fail to reset password");
            });
        });
    };
    ResetPasswordProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ResetPasswordProvider);
    return ResetPasswordProvider;
}());
export { ResetPasswordProvider };
//# sourceMappingURL=reset-password.js.map