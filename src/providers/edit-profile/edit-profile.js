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
var EditProfileProvider = /** @class */ (function () {
    function EditProfileProvider() {
    }
    EditProfileProvider.prototype.updateProfile = function (data) {
        return new Promise(function (resolve, reject) {
            var settings1 = {
                "async": true,
                "crossDomain": true,
                "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?name=" + data.value['name'] + "&password=" + data.value['password'] + "&phone=" + data.value['phone'] + "&email=" + data.value['email'] + "&locLat=" + data.lat + "&locLong=" + data.lng + "&locDesc=" + data._value.address,
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                    "postman-token": "4a53920c-7605-4383-bde5-db03b13e1214",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                    "Access-Control-Allow-Origin": "*"
                }
            };
            $.ajax(settings1).done(function (response) {
                if (response.success) {
                    resolve("updated");
                }
                else {
                    reject("error occurs while update profile");
                }
            }).fail(function (error) {
                reject("fail");
            });
        });
    };
    EditProfileProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], EditProfileProvider);
    return EditProfileProvider;
}());
export { EditProfileProvider };
//# sourceMappingURL=edit-profile.js.map