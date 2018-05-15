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
// import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';
import { LoginProvider } from '../login/login';
import { GetChildrenProvider } from '../get-children/get-children';
import { GetNotificationProvider } from '../get-notification/get-notification';
var EditProfileProvider = /** @class */ (function () {
    function EditProfileProvider(loginProvider, getChildrenProvider, translate, getNotificationProvider) {
        this.loginProvider = loginProvider;
        this.getChildrenProvider = getChildrenProvider;
        this.translate = translate;
        this.getNotificationProvider = getNotificationProvider;
        this.error = this.translate.get('PROFILE_PAGE.error');
    }
    EditProfileProvider.prototype.updateProfile = function (token, data, nid, isEmailChanged) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // this.storage.get("token").then(token=>{
            if (isEmailChanged) {
                var settings1 = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?token=" + token,
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json",
                        "cache-control": "no-cache",
                        "postman-token": "aa50dfb0-9c6d-a871-8fef-d6fbcaf228d1"
                    },
                    "processData": false,
                    "data": "{\"phone\": \"" + data.phone + "\", \"pass\": \"" + data.password + "\", \"email\": \"" + data.email + "\"}"
                };
                $.ajax(settings1).done(function (response) {
                    if (response.success) {
                        _this.translate.get('PROFILE_PAGE.updated').subscribe(function (updated) {
                            resolve(updated);
                        });
                    }
                    else {
                        reject(_this.error);
                    }
                }).fail(function (error) {
                    reject(_this.error);
                });
            }
            else {
                var settings2 = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?token=" + token,
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json",
                        "cache-control": "no-cache",
                        "postman-token": "aa50dfb0-9c6d-a871-8fef-d6fbcaf228d1"
                    },
                    "processData": false,
                    "data": "{\"phone\": \"" + data.phone + "\", \"pass\": \"" + data.password + "\"}"
                };
                $.ajax(settings2).done(function (response) {
                    if (response.success) {
                        _this.loginProvider.Login(response.data.nid, data.password).then(function (newToken) {
                            _this.getChildrenProvider.getAllChildren(newToken).then(function (flag) {
                                if (flag) {
                                    _this.getNotificationProvider.getNotification(newToken).then(function (data) {
                                        resolve("updated");
                                    }).catch(function (error2) {
                                        console.log(error2);
                                    });
                                }
                            }).catch(function (error1) {
                                alert(error1);
                            });
                        });
                    }
                    else {
                        reject(_this.error);
                    }
                }).fail(function (error) {
                    reject(_this.error);
                });
            }
            // })
        });
    };
    EditProfileProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoginProvider, GetChildrenProvider,
            TranslateService, GetNotificationProvider])
    ], EditProfileProvider);
    return EditProfileProvider;
}());
export { EditProfileProvider };
//# sourceMappingURL=edit-profile.js.map