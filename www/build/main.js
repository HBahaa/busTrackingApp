webpackJsonp([0],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationPage = (function () {
    function NotificationPage(navParams, googleMaps) {
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.notification = this.navParams.get("param1");
        this.loadMap(this.notification["locLat"], this.notification["locLong"], this.notification["locDesc"]);
    }
    NotificationPage.prototype.loadMap = function (x, y, desc) {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: x,
                    lng: y
                },
                zoom: 18,
                tilt: 15
            }
        };
        this.map = this.googleMaps.create('map', mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            _this.map.addMarker({
                title: desc,
                icon: 'red',
                animation: 'DROP',
                position: {
                    lat: x,
                    lng: y
                }
            });
        });
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/notification/notification.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'NOTIFICATION_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div id="map"></div>\n	<ion-card>\n	  <ion-card-content>\n	  	<p>{{notification.time | date:\'shortTime\'}}</p>\n		<h2><span>{{ \'NOTIFICATION_PAGE.childName\' | translate }}:</span> {{ notification.name }}</h2>\n		<h2><span>{{ \'NOTIFICATION_PAGE.busSpeed\' | translate }}:</span> {{ notification.speed }}</h2>\n		<h2><span>{{ \'NOTIFICATION_PAGE.status\' | translate }}:</span> {{ notification.status }}</h2>\n		<ion-card-title>\n	      {{ notification.msg }}\n	    </ion-card-title>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetNotificationProvider = (function () {
    function GetNotificationProvider(storage) {
        this.storage = storage;
    }
    GetNotificationProvider.prototype.getNotification = function (token) {
        var _this = this;
        var dfd = __WEBPACK_IMPORTED_MODULE_2_jquery__["Deferred"]();
        this.storage.get("children").then(function (result) {
            _this.children = result;
            __WEBPACK_IMPORTED_MODULE_2_jquery__["each"](result, function (index, child) {
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notification/" + child.tag + "/10/0?token=" + token,
                    "method": "POST",
                    "headers": {
                        "cache-control": "no-cache",
                        "postman-token": "0de21fdb-9125-bb9b-15bd-e4fb1736e465",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                        "Access-Control-Allow-Origin": "*",
                        "Allow-Control-Allow-Origin": "*"
                    }
                };
                __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"](settings).done(function (response) {
                    if (response.success) {
                        var messages_1 = response.message;
                        _this.storage.get("roomsData").then(function (data) {
                            var roomsData = data;
                            __WEBPACK_IMPORTED_MODULE_2_jquery__["each"](messages_1, function (index, message) {
                                if (child.tag == message.sid || child.bus_id == message.sid) {
                                    message.name = roomsData[message.sid];
                                }
                                else {
                                    //if sid equal geo id
                                    if (message.bus_id) {
                                        var id = roomsData[message.sid][message.bus_id];
                                        message.name = roomsData[id];
                                    }
                                }
                                message.msg = message.msg.replace(/['"]/g, "");
                                message.status = message.status.replace(/['"]/g, "");
                            });
                            _this.storage.set(child.tag, messages_1);
                            if (messages_1.length > 0) {
                                child.lastMsg = messages_1[0];
                                for (var i = 0; i < messages_1.length; i++) {
                                    if (messages_1[i].sid == child.tag) {
                                        child.childLastMsg = messages_1[i];
                                        break;
                                    }
                                    else {
                                        child.childLastMsg = [];
                                    }
                                }
                            }
                            else {
                                child.lastMsg = [];
                                child.childLastMsg = [];
                            }
                            _this.storage.set("children", _this.children);
                            dfd.resolve(_this.children);
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                    else {
                        dfd.reject("children not allowed");
                    }
                }).fail(function (error) {
                    dfd.reject(error);
                });
            });
        });
        return dfd.promise();
    };
    return GetNotificationProvider;
}());
GetNotificationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], GetNotificationProvider);

//# sourceMappingURL=get-notification.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginProvider = (function () {
    function LoginProvider(storage, translate) {
        this.storage = storage;
        this.translate = translate;
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
            __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"](settings).then(function (response) {
                if (response.success) {
                    _this.storage.set("token", response.token);
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
    return LoginProvider;
}());
LoginProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], LoginProvider);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__children_children__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register1_register1__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__ = __webpack_require__(903);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, menuCtrl, loginProvider, getChildrenProvider, resetPasswordProvider) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loginProvider = loginProvider;
        this.getChildrenProvider = getChildrenProvider;
        this.resetPasswordProvider = resetPasswordProvider;
        this.rooms = [];
        this.children = [];
        this.flag = false;
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.changeFlag = function () {
        this.flag = true;
        return this.flag;
    };
    LoginPage.prototype.resetPassword = function () {
        var _this = this;
        console.log("nid", this.nid);
        this.resetPasswordProvider.resetPassword(this.nid).then(function (res) {
            _this.flag = false;
            return _this.flag;
        }).catch(function (error) {
            alert("error " + error);
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.loginProvider.Login(this.id, this.password).then(function (token) {
            _this.getChildrenProvider.getAllChildren(token).then(function (flag) {
                if (flag) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__children_children__["a" /* ChildrenPage */]);
                }
            }).catch(function (error1) {
                alert(error1);
            });
        }).catch(function (error2) {
            alert(error2);
        });
    };
    LoginPage.prototype.createAccount = function () {
        this.menuCtrl.enable(false);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register1_register1__["a" /* Register1Page */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/login/login.html"*/'<ion-content class="login-content">\n  <div *ngIf="!flag">\n    <form #loginForm="ngForm" (ngSubmit)="login()">\n      <ion-row>\n        <ion-col>\n          <h3>{{ \'LOGIN_PAGE.title\' | translate }}</h3>\n          <ion-list inset>\n            <ion-item>\n              <ion-label> <ion-icon name="person"></ion-icon></ion-label>\n              <ion-input type="text" placeholder="{{ \'LOGIN_PAGE.idNumber\' | translate }}" name="id" [(ngModel)]="id" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label> <ion-icon name="lock"></ion-icon></ion-label>\n              <ion-input type="text" placeholder="{{ \'LOGIN_PAGE.password\' | translate }}" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n            <button ion-button icon-start type="submit" color="primary" block round [disabled]="!loginForm.form.valid">\n              <ion-icon name="log-in"></ion-icon> {{ \'LOGIN_PAGE.login\' | translate }}\n            </button>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n    <button ion-button icon-start color="light" clear (click)="changeFlag()">\n      <ion-icon name="arrow-round-forward"></ion-icon> {{ \'LOGIN_PAGE.forgetPassword\' | translate }}\n    </button>\n    <button ion-button icon-start color="light" (click)="createAccount()" clear>\n      <ion-icon name="arrow-round-forward"></ion-icon> {{ \'LOGIN_PAGE.dontHaveAccount\' | translate }}\n    </button>\n  </div>\n\n\n  <div *ngIf="flag">\n    <form #resetForm="ngForm" (ngSubmit)="resetPassword()">\n      <ion-row>\n        <ion-col>\n          <h3>{{ \'LOGIN_PAGE.resetPassword\' | translate }}</h3>\n          <ion-list inset>\n            <ion-item>\n              <ion-label><ion-icon name="person"></ion-icon></ion-label>\n              <ion-input type="text" placeholder="{{ \'LOGIN_PAGE.idNumber\' | translate }}" name="nid" [(ngModel)]="nid" required></ion-input>\n            </ion-item>\n\n            <button ion-button icon-start type="submit" color="mainColor" block round \n            [disabled]="!resetForm.form.valid">\n              <ion-icon name="log-in"></ion-icon> {{ \'LOGIN_PAGE.send\' | translate }}\n            </button>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__["a" /* GetChildrenProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__["a" /* GetChildrenProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__["a" /* GetChildrenProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */]) === "function" && _e || Object])
], LoginPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Register1Page = (function () {
    function Register1Page(navCtrl, storage, translate) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.translate = translate;
    }
    Register1Page.prototype.ionViewWillLoad = function () {
        this.validations_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            skey: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].min(144311), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].max(84813736161378)])
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
        __WEBPACK_IMPORTED_MODULE_6_jquery__["ajax"](settings).done(function (response) {
            if (response.success) {
                _this.storage.set("userData", data._value).then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */]);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    return Register1Page;
}());
Register1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register1',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register1/register1.html"*/'<ion-content padding class="register1-content">\n  <form novalidate (ngSubmit)="onSubmit(validations_form)" [formGroup]="validations_form">\n    <h3>{{ \'REGISTER1_PAGE.title\' | translate }}</h3>\n    <ion-item>\n      <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER1_PAGE.idNumber\' | translate }}" formControlName="id"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( validations_form.get(\'id\').hasError(\'required\') || validations_form.get(\'id\').hasError(\'pattern\'))&& validations_form.get(\'id\').touched">\n\n      <div class="error" *ngIf="validations_form.get(\'id\').hasError(\'required\') && validations_form.get(\'id\').touched">\n        {{ \'ERROR_MESSAGES.register1.id.required\' | translate }}\n      </div>\n      <div class="error" *ngIf="validations_form.get(\'id\').hasError(\'pattern\') && validations_form.get(\'id\').touched">\n        {{ \'ERROR_MESSAGES.register1.id.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="key"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER1_PAGE.secertKey\' | translate }}" formControlName="skey"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( validations_form.get(\'skey\').hasError(\'required\') || validations_form.get(\'skey\').hasError(\'min\') || validations_form.get(\'skey\').hasError(\'max\'))&& validations_form.get(\'skey\').touched">\n\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'required\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.required\' | translate }}\n      </div>\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'min\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.min\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'max\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.max\' | translate }}\n      </div>\n\n    </div>\n\n    <button ion-button block round color="mainColor" [disabled]="validations_form.invalid"><ion-icon name="log-in"></ion-icon>{{ \'REGISTER1_PAGE.send\' | translate }}</button>\n  </form>\n    <button ion-button color="light" (click)="alreadyHaveAccount()" clear>{{ \'REGISTER1_PAGE.alreadyHaveAccount\' | translate }}</button>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register1/register1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], Register1Page);

//# sourceMappingURL=register1.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register2_register2__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = (function () {
    function MapPage(navCtrl, platform, googleMaps, toastCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.googleMaps = googleMaps;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        platform.ready().then(function () {
            _this.loadMap();
            _this.translate.get('MAP_PAGE.toast1').subscribe(function (toast1) {
                _this.presentToast(toast1, 5000, 'top');
            });
        });
    }
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                zoom: 18,
                tilt: 15
            }
        };
        this.map = this.googleMaps.create('map', mapOptions);
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
            console.log('Map is ready!');
            _this.map.addEventListener(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_CLICK).subscribe(function (data) {
                _this.map.clear().then(function () {
                    _this.lat = data[0]['lat'];
                    _this.lng = data[0]['lng'];
                    var mapOption = {
                        camera: {
                            target: {
                                lat: _this.lat,
                                lng: _this.lng
                            },
                            zoom: 15,
                            tilt: 30
                        }
                    };
                    _this.map.setOptions(mapOption);
                    _this.map.setMyLocationEnabled(true);
                    // Now you can use all methods safely.
                    _this.map.addMarker({
                        title: "your location",
                        icon: 'red',
                        animation: 'DROP',
                        position: {
                            lat: _this.lat,
                            lng: _this.lng
                        }
                    });
                    _this.getAddress(_this.lat, _this.lng);
                    _this.location = { 'lat': _this.lat, 'lng': _this.lng };
                });
            });
            _this.map.getMyLocation().then(function (location) {
                _this.lat = location['latLng']['lat'];
                _this.lng = location['latLng']['lng'];
                var mapOption = {
                    camera: {
                        target: {
                            lat: _this.lat,
                            lng: _this.lng
                        },
                        zoom: 15,
                        tilt: 30
                    }
                };
                _this.map.setOptions(mapOption);
                _this.map.setMyLocationEnabled(true);
                // Now you can use all methods safely.
                _this.map.addMarker({
                    title: "your location",
                    icon: 'red',
                    animation: 'DROP',
                    position: {
                        lat: _this.lat,
                        lng: _this.lng
                    }
                });
                _this.getAddress(_this.lat, _this.lng);
                _this.location = { 'lat': _this.lat, 'lng': _this.lng };
            });
            _this.map.setMyLocationEnabled(true);
        });
    };
    // function to geocode a lat/long
    MapPage.prototype.getAddress = function (myLatitude, myLongitude) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        var location = new google.maps.LatLng(myLatitude, myLongitude);
        geocoder.geocode({ 'latLng': location }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                _this.address = results[0].formatted_address;
            }
            else {
                alert("Geocode failure: " + status);
                return false;
            }
        });
    };
    MapPage.prototype.codeAddress = function () {
        var _this = this;
        var loc = {};
        if (this.searchQuery != undefined) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': this.searchQuery }, function (results, status) {
                loc["lat"] = results[0].geometry.location.lat();
                loc["lng"] = results[0].geometry.location.lng();
                if (status == google.maps.GeocoderStatus.OK) {
                    _this.map.clear().then(function () {
                        _this.map.addMarker({
                            title: _this.searchQuery,
                            icon: 'red',
                            animation: 'DROP',
                            position: results[0].geometry.location
                        });
                        _this.address = _this.searchQuery;
                        _this.location = loc;
                        var mapOption = {
                            camera: {
                                target: _this.location,
                                zoom: 10,
                                tilt: 30
                            }
                        };
                        _this.map.setOptions(mapOption);
                        _this.searchQuery = '';
                    }).catch(function () {
                        // console.log("clear map")
                    });
                }
                else {
                    // alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }
        else if (this.searchQuery == undefined) {
            this.translate.get('MAP_PAGE.toast2').subscribe(function (toast2) {
                _this.presentToast(toast2, 4000, "bottom");
            });
        }
    };
    MapPage.prototype.presentToast = function (msg, t, pos) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: t,
            position: pos
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MapPage.prototype.goToRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register2_register2__["a" /* Register2Page */], { 'param1': this.address, 'param2': this.location });
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'map-page',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/map/map.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Select your home</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" (click)="goToRegister()">\n        Next\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n \n<ion-content>\n  <div id="over_map">\n    <!-- <ion-item>\n      \n      <ion-input type="text" placeholder="enter your address" name="nationalID" [(ngModel)]="inpt" (keyup)="codeAddress()"></ion-input>\n      <ion-label><ion-icon name="search"></ion-icon></ion-label>\n    </ion-item> -->\n    <!-- (keyup)="updateList($event)" -->\n\n    <ion-searchbar primary [(ngModel)]="searchQuery" show-cancel="true" placeholder="Search"></ion-searchbar>\n    <button ion-button icon-only block (click)="codeAddress()"><ion-icon name="redo"></ion-icon></button>\n  </div>\n  <div id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetChildrenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetChildrenProvider = (function () {
    function GetChildrenProvider(storage, loadingCtrl) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.children = [];
        // rooms: any[] = [];
        this.rooms = {};
        this.roomsData = {};
        this.parent = {};
    }
    GetChildrenProvider.prototype.getAllChildren = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.presentLoading();
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/data?token=" + token,
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                    "postman-token": "4935ed16-98ed-c035-1572-aeb484e2838a",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                    "Access-Control-Allow-Origin": "*",
                    "Allow-Control-Allow-Origin": "*"
                }
            };
            __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"](settings).done(function (response) {
                if (response.success) {
                    _this.parent.nid = response.data['nid'];
                    _this.parent.name = response.data['name'];
                    _this.parent.email = response.data['email'];
                    _this.parent.phone = response.data['phone'];
                    _this.parent.password = response.data['password'];
                    _this.parent.address = response.data['loc']['desc'];
                    _this.storage.set("userData", _this.parent);
                    var geo_id_1 = response.data['loc']['fence_id'];
                    _this.rooms.geo = geo_id_1;
                    _this.roomsData[geo_id_1] = [];
                    __WEBPACK_IMPORTED_MODULE_3_jquery__["each"](response.data.children, function (index, value) {
                        value["tag"] = index;
                        value["image"] = "https://hst-api.wialon.com/avl_tag_image/" + value.source + "/" + value.id + "/100/100/2490508405.png";
                        _this.roomsData[index] = [value.name];
                        if (geo_id_1 in _this.roomsData) {
                            if (_this.roomsData[geo_id_1].indexOf(value.bus_id) == -1) {
                                _this.roomsData[geo_id_1].push(value.bus_id);
                            }
                        }
                        else {
                            _this.roomsData[geo_id_1] = [value.bus_id];
                        }
                        if (value.bus_id in _this.roomsData) {
                            _this.roomsData[value.bus_id].push(value.name);
                        }
                        else {
                            _this.roomsData[value.bus_id] = [value.name];
                        }
                        if ('tag' in _this.rooms) {
                            _this.rooms.tag.push(index);
                        }
                        else {
                            _this.rooms.tag = [index];
                        }
                        if ('bus' in _this.rooms) {
                            if (_this.rooms.bus.indexOf(value.bus_id) == -1) {
                                _this.rooms.bus.push(value.bus_id);
                            }
                            else {
                                // this.rooms.bus.push(value.bus_id);
                                console.log("else");
                            }
                        }
                        else {
                            _this.rooms.bus = [value.bus_id];
                        }
                        _this.children.push(value);
                        _this.storage.set("rooms", _this.rooms);
                        _this.storage.set("roomsData", _this.roomsData);
                        _this.storage.set("children", _this.children);
                    });
                    _this.loader.dismiss();
                    resolve("true");
                }
                else {
                    _this.loader.dismiss();
                    reject("Failed to authenticate token.");
                }
            }).fail(function (err) {
                _this.loader.dismiss();
                reject(err.message);
            });
        });
    };
    GetChildrenProvider.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    };
    return GetChildrenProvider;
}());
GetChildrenProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], GetChildrenProvider);

//# sourceMappingURL=get-children.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, storage, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.platform = platform;
        this.messages = [];
        this.platform.ready().then(function () {
            _this.storage.get("rooms").then(function (data) {
                _this.rooms = data;
            });
            _this.tag = _this.navParams.get("param1");
            _this.childData = _this.navParams.get("param2");
            _this.storage.get(_this.tag).then(function (messages) {
                _this.messages = messages;
            }).catch(function (error2) {
                console.log("error 2: " + error2);
            });
        }).catch(function (error1) {
            console.log("error 1: " + error1);
        });
    }
    DetailsPage.prototype.notificationDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */], { 'param1': item });
    };
    DetailsPage.prototype.moreNotifications = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */]);
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/details/details.html"*/'<ion-header>\n  <ion-navbar color="navbarColor">\n    <ion-title>\n      {{ \'DETAILS_PAGE.title\' | translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card>\n		<img [src]="childData.image" onError="this.src=\'assets/imgs/1.png\'">\n		<ion-card-content>\n			<ion-card-title color="mainColor">{{childData.name}}</ion-card-title>\n			<ion-row>\n	        	<ion-col col-12><br /></ion-col>\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.childID\' | translate }}:</h2></ion-col>\n\n	        	<ion-col col-7><h2>{{childData.tag}}</h2></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.childStatus\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf="childData.childLastMsg != undefined">{{childData["childLastMsg"]["status"]}}</h2>\n	        		<h2 *ngIf="childData.childLastMsg == undefined">No Status</h2>\n	        	</ion-col>\n	        	<ion-col col-12><hr /></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busNumber\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7><h2>{{childData.bus}}</h2></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busID\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7><h2>{{childData.bus_id}}</h2></ion-col>\n	        	\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busSpeed\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf="childData[\'childLastMsg\'][\'speed\'] != undefined; else lastMsgSpeed ">\n	        			{{childData["childLastMsg"]["speed"]}}\n	        		</h2>\n	        		<ng-template #lastMsgSpeed>\n	        			<h2>{{childData["lastMsg"]["speed"]}}</h2>\n	        		</ng-template>\n	        	</ion-col>\n	        	<ion-col col-12><hr /></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.driverName\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] != undefined\'>{{childData["childLastMsg"]["driverName"]}}</h2>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] == undefined\'>{{childData["lastMsg"]["driverName"]}}</h2>\n	        	</ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.driverPhone\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] != undefined\'>{{childData["childLastMsg"]["driverPhone"]}}</h2>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] == undefined\'>{{childData["lastMsg"]["driverPhone"]}}</h2>\n	        	</ion-col>\n\n	        </ion-row>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-list *ngIf="messages.length > 0">\n\n		<h2>{{ \'DETAILS_PAGE.notifications\' | translate }}</h2>\n\n	    <button ion-item *ngFor="let message of messages"  (click)="notificationDetails(message)">\n	    	\n			<ion-icon color="mainColor" *ngIf="message.sid == tag" ios="ios-pricetag-outline" md="md-pricetag" item-start></ion-icon>\n			<ion-icon color="mainColor" *ngIf="rooms.bus.indexOf(message.sid) >= 0" ios="ios-bus-outline" md="md-bus" item-start></ion-icon>\n	      	<ion-icon color="mainColor" *ngIf="rooms.geo == message.sid" ios="ios-home-outline" md="md-home" item-start></ion-icon>\n	        \n	        <h2 *ngIf="message.msg.length == 30 || message.msg.length < 30 ;else msg">{{message.msg}}</h2>\n        	<ng-template #msg><h2>{{message.msg.substr(0, 30) +"..."}}</h2></ng-template>\n\n\n	        <p *ngIf="(message.time | customDate) != message.time; else temp" text-right>\n	          <span>{{ message.time | customDate }}</span>\n	          <span *ngIf="(message.time | customDate).includes(\'day\')">\n	          	, {{message.time | date:\'shortTime\'}}\n	          </span>\n	        </p>\n	        <ng-template #temp>\n	          <p text-right>\n	            {{message.time | date:\'short\'}}\n	          </p>\n	        </ng-template>\n\n	    </button>\n\n	    <button ion-button color="mainColor" clear (click)="moreNotifications()">More Notifications</button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/details/details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register1_register1__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, platform, translateService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.translateService = translateService;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
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
        // this.translateService.use(language)
    };
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToRegistration = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register1_register1__["a" /* Register1Page */]);
    };
    HomePage.prototype.segmentChanged = function (event) {
        console.log("event._value", event._value);
        this.translateService.use(event._value);
        if (event._value == 'ar') {
            this.platform.setDir('rtl', true);
        }
        else {
            this.platform.setDir('ltr', true);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/home/home.html"*/'<ion-content padding class="home-content">\n	<ion-item>\n		<ion-label>{{ \'LANGUAGE.selectLanguage\' | translate }}:</ion-label>\n		<ion-select [(ngModel)]="lang" (ngModelChange)="changeLanguage($event)"\n				okText="{{ \'LANGUAGE.ok\' | translate }}" cancelText="{{ \'LANGUAGE.cancel\' | translate }}">\n\n			<ion-option value="en">{{ \'LANGUAGE.en\' | translate }}</ion-option>\n			<ion-option value="ar">{{ \'LANGUAGE.ar\' | translate }}</ion-option>\n		</ion-select>\n	</ion-item>\n\n    <button ion-button color="mainColor" round block (click)="goToLogin()">\n    	<ion-icon name="ios-log-in"></ion-icon> {{ \'HOME_PAGE.login\' | translate }}\n    </button>\n\n    <h3>{{ \'HOME_PAGE.or\' | translate }}</h3>\n\n    <button ion-button color="primary" round block (click)="goToRegistration()">\n    	<ion-icon name="ios-log-in"></ion-icon> {{ \'HOME_PAGE.register\' | translate }}\n    </button>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__children_children__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_register_register__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_get_children_get_children__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Register2Page = (function () {
    function Register2Page(navCtrl, navParams, menuCtrl, registerProvider, getChildrenProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.registerProvider = registerProvider;
        this.getChildrenProvider = getChildrenProvider;
        this.storage = storage;
        this.rooms = [];
        this.address = this.navParams.get('param1');
        this.location = this.navParams.get('param2');
        // this.address = "3015 حلبان، Dhahrat Laban, Riyadh 13782, Saudi Arabia";
        // this.location = {
        //   "lat": "24.637307",
        //   "lng": "46.553948"
        // }
        this.user = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$')]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.address),
            mob: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
        });
    }
    Register2Page.prototype.onSubmit = function (user) {
        var _this = this;
        this.menuCtrl.enable(true);
        this.storage.get('userData').then(function (data) {
            var nid = data.id;
            var secureCode = data.skey;
            data.name = user._value.name;
            data.email = user._value.email;
            data.password = user._value.password;
            data.phone = user._value.mob;
            data.address = _this.address;
            _this.storage.set("userData", data);
            _this.registerProvider.Register(nid, secureCode, _this.location, user).then(function (token) {
                _this.getChildrenProvider.getAllChildren(token).then(function (flag) {
                    if (flag) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__children_children__["a" /* ChildrenPage */]);
                    }
                }).catch(function (error1) {
                    console.log("error1", error1);
                });
            }).catch(function (error2) {
                alert(error2); //error2=User registration is currently not allowed
            });
        }).catch(function (error3) {
            alert("error getting userData from storage");
        });
    };
    Register2Page.prototype.RegisterFN = function () {
        this.menuCtrl.enable(true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__children_children__["a" /* ChildrenPage */]);
    };
    Register2Page.prototype.locateMe = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */]);
    };
    return Register2Page;
}());
Register2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register2',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register2/register2.html"*/'<ion-content padding class="login-content">\n  <form novalidate (ngSubmit)="onSubmit(user)" [formGroup]="user">\n\n    <h3>{{ \'REGISTER2_PAGE.title\' | translate }}</h3>\n     <ion-item>\n        <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n        <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.name\' | translate }}" formControlName="name">\n        </ion-input>\n      </ion-item>\n\n      <div class="error-container" no-lines *ngIf="( user.get(\'name\').hasError(\'minlength\') || user.get(\'name\').hasError(\'required\') ) && user.get(\'name\').touched">\n\n        <div class="error" *ngIf="user.get(\'name\').hasError(\'required\') && user.get(\'name\').touched">\n          {{ \'ERROR_MESSAGES.register2.name.required\' | translate }}\n        </div>\n        <div class="error" *ngIf="user.get(\'name\').hasError(\'minlength\') && user.get(\'name\').touched">\n          {{ \'ERROR_MESSAGES.register2.name.minlength\' | translate }}\n        </div>\n      </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.email\' | translate }}" formControlName="email"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'email\').hasError(\'required\') || user.get(\'email\').hasError(\'pattern\') ) && user.get(\'email\').touched">\n\n      <div class="error" *ngIf=" user.get(\'email\').hasError(\'required\') && user.get(\'email\').touched">\n        {{ \'ERROR_MESSAGES.register2.email.required\' | translate }}\n      </div>\n\n      <div class="error" *ngIf=" user.get(\'email\').hasError(\'pattern\') && user.get(\'email\').touched">\n        {{ \'ERROR_MESSAGES.register2.email.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="lock"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.password\' | translate }}" formControlName="password"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'password\').hasError(\'required\') || user.get(\'password\').hasError(\'minlength\') || user.get(\'password\').hasError(\'pattern\') ) && user.get(\'password\').touched">\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.required\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'minlength\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.minlength\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'pattern\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="pin"></ion-icon></ion-label>\n      <ion-input type="text" formControlName="{{ \'REGISTER2_PAGE.address\' | translate }}" readonly></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ><ion-icon name="phone-portrait"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.phone\' | translate }}" formControlName="mob"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'mob\').hasError(\'required\') || user.get(\'mob\').hasError(\'pattern\'))&& user.get(\'mob\').touched">\n\n      <div class="error" *ngIf="user.get(\'mob\').hasError(\'required\') && user.get(\'mob\').touched">\n        {{ \'ERROR_MESSAGES.register2.mobile.required\' | translate }}\n      </div>\n      <!-- <div class="error" *ngIf="user.get(\'mob\').hasError(\'minlength\') && user.get(\'mob\').touched">\n        Please enter valid mobile number\n      </div> -->\n\n      <div class="error" *ngIf="user.get(\'mob\').hasError(\'pattern\') && user.get(\'mob\').touched">\n        {{ \'ERROR_MESSAGES.register2.mobile.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <button ion-button block round color="mainColor" [disabled]="!user.valid"><ion-icon name="log-in"></ion-icon>{{ \'REGISTER2_PAGE.register\' | translate }}</button>\n  </form>\n\n  <button ion-button type="button" color="primary" block round style="text-transform: capitalize;" (click)="locateMe()">\n    <ion-icon name="pin"></ion-icon> {{ \'REGISTER2_PAGE.locateMe\' | translate }}\n  </button>\n      \n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register2/register2.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_register_register__["a" /* RegisterProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_get_children_get_children__["a" /* GetChildrenProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_register_register__["a" /* RegisterProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_get_children_get_children__["a" /* GetChildrenProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], Register2Page);

//# sourceMappingURL=register2.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterProvider = (function () {
    function RegisterProvider(storage) {
        this.storage = storage;
    }
    RegisterProvider.prototype.Register = function (nid, secureCode, location, user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var settings1 = {
                "async": true,
                "crossDomain": true,
                "url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/notsecure/register?nid=" + nid + "&secureCode=" + secureCode + "&name=" + user._value.name + "&locLat=" + location.lat + "&locLong=" + location.lng + "&locDesc=" + user._value.address + "&password=" + user._value.password + "&email=" + user._value.email + "&phone=" + user._value.mob,
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
            __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"](settings1).done(function (response) {
                if (response.success) {
                    _this.storage.set("token", response.token);
                    resolve(response.token);
                }
                else {
                    reject("User registration is currently not allowed");
                }
            }).fail(function (error) {
                reject("User registration is currently not allowed");
            });
        });
    };
    return RegisterProvider;
}());
RegisterProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], RegisterProvider);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edit_profile_edit_profile__ = __webpack_require__(904);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, storage, toastCtrl, googleMaps, editProfileProvider) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.googleMaps = googleMaps;
        this.editProfileProvider = editProfileProvider;
        this.flag = false;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userData").then(function (data) {
            _this.name = data.name;
            _this.email = data.email;
            _this.phone = data.phone;
            _this.password = data.password;
            _this.address = data.address;
            _this.location = data.loc;
        });
    };
    ProfilePage.prototype.loadMap = function (x, y) {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: x,
                    lng: y
                },
                zoom: 18,
                tilt: 15
            }
        };
        this.map = this.googleMaps.create('map', mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            _this.map.addMarker({
                title: 'Your Previous Address',
                icon: 'red',
                animation: 'DROP',
                position: {
                    lat: x,
                    lng: y
                }
            });
        });
    };
    ProfilePage.prototype.changeFlag = function () {
        this.flag = true;
        this.loadMap(this.location["locLat"], this.location["locLong"]);
        return this.flag;
    };
    ProfilePage.prototype.presentToast = function (data) {
        var _this = this;
        console.log(data.value);
        var toast = this.toastCtrl.create({
            message: "data saved",
            duration: 3000,
            position: 'top'
        });
        //   toast.onDidDismiss(() => {
        //       console.log('Dismissed toast');
        //     	this.flag = false;
        // return this.flag
        //   });
        toast.present();
        this.editProfileProvider.updateProfile(data).then(function (res) {
            // this.loginProvider.Login(this.id, this.password).then((token)=>{
            //    	this.getChildrenProvider.getAllChildren(token).then((flag)=>{
            //         if (flag) {
            //           this.navCtrl.setRoot(ChildrenPage);
            //         }
            //     }).catch((error1)=>{
            //         alert(error1);
            //     });
            //    }).catch((error2)=>{
            //      alert(error2)
            //    });
            toast.dismiss();
            _this.flag = false;
            return _this.flag;
        }).catch(function (error) {
            toast.dismiss();
            alert("error" + error);
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'PROFILE_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="profile-content">\n\n  <ion-card *ngIf="flag">\n    <ion-card-title color="mainColor">\n      {{ \'PROFILE_PAGE.subTitle\' | translate }}\n    </ion-card-title>\n    <ion-card-content>\n\n      <form #profileForm="ngForm" (ngSubmit)="presentToast(profileForm)">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              <ion-item>\n                <ion-label> <ion-icon name="person"></ion-icon></ion-label>\n                <ion-input type="text" name="name" [(ngModel)]="name"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label> <ion-icon name="mail"></ion-icon></ion-label>\n                <ion-input type="email" name="email" [(ngModel)]="email"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label> <ion-icon name="phone-portrait"></ion-icon></ion-label>\n                <ion-input type="text" name="phone" [(ngModel)]="phone"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label> <ion-icon name="lock"></ion-icon></ion-label>\n                <ion-input type="password" name="password" [(ngModel)]="password"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>Map</ion-label>\n                <div id="map"></div>\n              </ion-item>\n              <button ion-button type="submit" color="mainColor" block round [disabled]="!profileForm.form.valid">\n                <ion-icon name="log-in"></ion-icon> {{ \'PROFILE_PAGE.update\' | translate }}\n              </button>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n  \n    <ion-grid *ngIf="!flag">\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-content>\n              <ion-card-title color="mainColor">{{ \'PROFILE_PAGE.subTitle\' | translate }}</ion-card-title>\n                <ion-row>\n\n                  <ion-col col-12><br /></ion-col>\n                  <ion-col col-4><h2>{{ \'PROFILE_PAGE.name\' | translate }}:</h2>\n                  </ion-col><ion-col col-8><h2>{{name}}</h2></ion-col>\n\n                  <ion-col col-4><h2>{{ \'PROFILE_PAGE.email\' | translate }}:</h2></ion-col>\n                  <ion-col col-8><h2>{{email}}</h2></ion-col>\n\n                  <ion-col col-4><h2>{{ \'PROFILE_PAGE.password\' | translate }}:</h2></ion-col>\n                  <ion-col col-8><h2>{{password}}</h2></ion-col>\n\n                  <ion-col col-4><h2>{{ \'PROFILE_PAGE.phone\' | translate }}:</h2></ion-col>\n                  <ion-col col-8><h2>{{phone}}</h2></ion-col>\n\n                  <ion-col col-4><h2>{{ \'PROFILE_PAGE.address\' | translate }}:</h2></ion-col>\n                  <ion-col col-8><h2>{{address}}</h2></ion-col>\n                \n                </ion-row>\n                <button ion-button icon-start color="mainColor" block (click)="changeFlag()">\n                  <ion-icon name="create"></ion-icon>\n                  {{ \'PROFILE_PAGE.edit\' | translate }}\n                </button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/profile/profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */]) === "function" && _e || Object])
], ProfilePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(570);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_native__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notification_notification__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_details_details__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_children_children__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register1_register1__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register2_register2__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_map_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_get_notification_get_notification__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_get_children_get_children__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_register_register__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_date_date__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_reset_password_reset_password__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_edit_profile_edit_profile__ = __webpack_require__(904);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_register1_register1__["a" /* Register1Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_register2_register2__["a" /* Register2Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_children_children__["a" /* ChildrenPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_30__pipes_date_date__["a" /* DatePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_register1_register1__["a" /* Register1Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_register2_register2__["a" /* Register2Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_children_children__["a" /* ChildrenPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_map_map__["a" /* MapPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_native__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__["a" /* BackgroundMode */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_26__providers_get_notification_get_notification__["a" /* GetNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_get_children_get_children__["a" /* GetChildrenProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */],
            __WEBPACK_IMPORTED_MODULE_32__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_children_children__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
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
        platform.ready().then(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.disableScroll(true);
            }
            _this.keyboard.disableScroll(true);
            statusBar.styleDefault();
            splashScreen.hide();
            console.log(_this.platform.lang());
            // this.translateService.setDefaultLang(en);
            _this.translateService.use('en');
            _this.presentLoading();
            _this.loadingPage();
        });
        this.pages = [
            { icon: 'contacts', title: 'CHILDREN_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_7__pages_children_children__["a" /* ChildrenPage */] },
            { icon: 'notifications', title: 'NOTIFICATIONS_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { icon: 'person', title: 'PROFILE_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.userLogout = function () {
        this.storage.clear();
    };
    MyApp.prototype.loadingPage = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("children").then(function (data) {
                if (data != null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_children_children__["a" /* ChildrenPage */];
                    _this.loader.dismiss();
                }
                else if (data == null) {
                    _this.loader.dismiss();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
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
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/app/app.html"*/'<ion-menu *ngIf="this.platform.dir()===\'rtl\'" side="right" [content]="content">\n  <ion-header>\n    <ion-toolbar style="min-height: 150px;">\n      <ion-title>{{ \'APP_PAGE.menu\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{ p.title | translate }}\n      </button>\n      <button menuClose ion-item (click)="userLogout()">\n        <ion-icon name="log-out"></ion-icon> {{ \'APP_PAGE.logout\' | translate }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu *ngIf="this.platform.dir()===\'ltr\'" side="left" [content]="content">\n  <ion-header>\n    <ion-toolbar style="min-height: 150px;">\n      <ion-title>{{ \'APP_PAGE.menu\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{ p.title | translate }}\n      </button>\n      <button menuClose ion-item (click)="userLogout()">\n        <ion-icon name="log-out"></ion-icon> {{ \'APP_PAGE.logout\' | translate }}\n      </button>      \n    </ion-list>\n  </ion-content>\n  \n  <ion-footer>\n  <ion-toolbar>\n    <ion-title>v1.3.2</ion-title>\n  </ion-toolbar>\n</ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _j || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_details__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_login_login__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ChildrenPage = (function () {
    function ChildrenPage(navCtrl, storage, backgroundMode, platform, getNotificationProvider, loginProvider) {
        // this.serverConnection();
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.backgroundMode = backgroundMode;
        this.platform = platform;
        this.getNotificationProvider = getNotificationProvider;
        this.loginProvider = loginProvider;
        this.children = [];
        this.items = [];
        this.platform.ready().then(function () {
            _this.backgroundMode.on("activate").subscribe(function () {
                console.log('activated');
                __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* LocalNotifications */].on('click', function (notification, state) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__notifications_notifications__["a" /* NotificationsPage */]);
                });
            });
            _this.backgroundMode.enable();
        }).catch(function (error) {
            alert("error 1: " + error);
        });
    }
    ChildrenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("children").then(function (res) {
            if (res != null) {
                _this.storage.get(res[0].tag).then(function (data) {
                    if (data != null) {
                        _this.children = res;
                    }
                    else {
                        _this.storage.get("token").then(function (token) {
                            _this.getNotificationProvider.getNotification(token).then(function (data) {
                                _this.children = data;
                            }).catch(function (error5) {
                                //get new token
                                _this.getNewToken();
                            });
                        }).catch(function (error4) {
                            console.log("error4 can't get token");
                        });
                    }
                });
            }
            else {
                _this.storage.get("token").then(function (token) {
                    _this.getNotificationProvider.getNotification(token).then(function (data) {
                        _this.children = data;
                    }).catch(function (error3) {
                        //get new token
                        _this.getNewToken();
                    });
                }).catch(function (error2) {
                    console.log("error2 can't get token");
                });
            }
        }).catch(function (error1) {
            console.log("error1");
        });
    };
    ChildrenPage.prototype.childDetails = function (tag, child) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__details_details__["a" /* DetailsPage */], { 'param1': tag, 'param2': child });
    };
    ChildrenPage.prototype.scheduleNotification = function () {
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* LocalNotifications */].schedule(this.items);
    };
    ChildrenPage.prototype.serverConnection = function () {
        var _this = this;
        this.socketHost = "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9000";
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__(this.socketHost);
        this.socket.on("connect", function (msg) {
            _this.storage.get("rooms").then(function (rooms) {
                _this.socket.emit("set", { "topics": rooms });
                _this.socket.on("serverpublisher", function (data) {
                    _this.items[0] = {
                        id: 1,
                        title: data.status,
                        text: data.msg,
                        data: data,
                        at: new Date(new Date().getTime())
                    };
                    _this.scheduleNotification();
                    var id = data.sid;
                    _this.storage.get("token").then(function (token) {
                        _this.getNotificationProvider.getNotification(token).then(function (data) {
                            // this.children = data;
                            // alert("data")
                        }).catch(function (error7) {
                            //get new token
                            _this.getNewToken();
                        });
                    }).catch(function (error6) {
                        console.log("error6 can't get token");
                    });
                    _this.storage.get("children").then(function (ch) {
                        if (ch != null || ch != undefined) {
                            __WEBPACK_IMPORTED_MODULE_5_jquery__["each"](ch, function (index, child) {
                                if (id == child.tag) {
                                    child.childLastMsg = data;
                                }
                                else {
                                    child.lastMsg = data;
                                }
                            });
                            _this.children = ch;
                            _this.storage.set("children", ch);
                        }
                        else {
                            console.log("not found");
                        }
                    });
                });
            });
        });
    };
    ChildrenPage.prototype.getNewToken = function () {
        var _this = this;
        //get new token
        this.storage.get("userData").then(function (user) {
            _this.loginProvider.Login(user.id, user.password).then(function (token) {
                _this.getNotificationProvider.getNotification(token).then(function (data) {
                }).catch(function () {
                    console.log("error after new token");
                });
            });
        });
    };
    return ChildrenPage;
}());
ChildrenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-children',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/children/children.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'CHILDREN_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="std" *ngFor="let child of children">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="child.image" onError="this.src=\'assets/imgs/1.png\'">\n      </ion-avatar>\n      \n      <ion-row>\n        <ion-col col-4><span>{{ \'CHILDREN_PAGE.name\' | translate }}:</span></ion-col>\n        <ion-col col-8><span class="chData">{{child.name}}</span></ion-col>\n        <ion-col col-4><span>{{ \'CHILDREN_PAGE.status\' | translate }}:</span></ion-col>\n        <ion-col col-8>\n          <span class="chData" *ngIf="child.childLastMsg != undefined">{{child.childLastMsg?.status}}</span>\n          <span class="chData" *ngIf="child.childLastMsg == undefined">No Status</span>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="mainColor" (click)="childDetails(child.tag, child)" >{{ \'CHILDREN_PAGE.details\' | translate }}</button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/children/children.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__["a" /* GetNotificationProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__["a" /* BackgroundMode */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__["a" /* GetNotificationProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */]])
], ChildrenPage);

//# sourceMappingURL=children.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DatePipe = (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var newDate = new Date();
        var myDate = new Date(value);
        if (myDate.getFullYear() === newDate.getFullYear() && newDate.getMonth() === newDate.getMonth()) {
            if (myDate.getDate() === newDate.getDate()) {
                // return 'Today';
                return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
            }
            else if (newDate.getDate() >= myDate.getDate() && myDate.getDate() >= newDate.getDate() - 6) {
                return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
            }
            else {
                return value;
            }
        }
        else {
            return value;
        }
    };
    return DatePipe;
}());
DatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'customDate',
    })
], DatePipe);

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 446,
	"./af.js": 446,
	"./ar": 447,
	"./ar-dz": 448,
	"./ar-dz.js": 448,
	"./ar-kw": 449,
	"./ar-kw.js": 449,
	"./ar-ly": 450,
	"./ar-ly.js": 450,
	"./ar-ma": 451,
	"./ar-ma.js": 451,
	"./ar-sa": 452,
	"./ar-sa.js": 452,
	"./ar-tn": 453,
	"./ar-tn.js": 453,
	"./ar.js": 447,
	"./az": 454,
	"./az.js": 454,
	"./be": 455,
	"./be.js": 455,
	"./bg": 456,
	"./bg.js": 456,
	"./bm": 457,
	"./bm.js": 457,
	"./bn": 458,
	"./bn.js": 458,
	"./bo": 459,
	"./bo.js": 459,
	"./br": 460,
	"./br.js": 460,
	"./bs": 461,
	"./bs.js": 461,
	"./ca": 462,
	"./ca.js": 462,
	"./cs": 463,
	"./cs.js": 463,
	"./cv": 464,
	"./cv.js": 464,
	"./cy": 465,
	"./cy.js": 465,
	"./da": 466,
	"./da.js": 466,
	"./de": 467,
	"./de-at": 468,
	"./de-at.js": 468,
	"./de-ch": 469,
	"./de-ch.js": 469,
	"./de.js": 467,
	"./dv": 470,
	"./dv.js": 470,
	"./el": 471,
	"./el.js": 471,
	"./en-au": 472,
	"./en-au.js": 472,
	"./en-ca": 473,
	"./en-ca.js": 473,
	"./en-gb": 474,
	"./en-gb.js": 474,
	"./en-ie": 475,
	"./en-ie.js": 475,
	"./en-nz": 476,
	"./en-nz.js": 476,
	"./eo": 477,
	"./eo.js": 477,
	"./es": 478,
	"./es-do": 479,
	"./es-do.js": 479,
	"./es-us": 480,
	"./es-us.js": 480,
	"./es.js": 478,
	"./et": 481,
	"./et.js": 481,
	"./eu": 482,
	"./eu.js": 482,
	"./fa": 483,
	"./fa.js": 483,
	"./fi": 484,
	"./fi.js": 484,
	"./fo": 485,
	"./fo.js": 485,
	"./fr": 486,
	"./fr-ca": 487,
	"./fr-ca.js": 487,
	"./fr-ch": 488,
	"./fr-ch.js": 488,
	"./fr.js": 486,
	"./fy": 489,
	"./fy.js": 489,
	"./gd": 490,
	"./gd.js": 490,
	"./gl": 491,
	"./gl.js": 491,
	"./gom-latn": 492,
	"./gom-latn.js": 492,
	"./gu": 493,
	"./gu.js": 493,
	"./he": 494,
	"./he.js": 494,
	"./hi": 495,
	"./hi.js": 495,
	"./hr": 496,
	"./hr.js": 496,
	"./hu": 497,
	"./hu.js": 497,
	"./hy-am": 498,
	"./hy-am.js": 498,
	"./id": 499,
	"./id.js": 499,
	"./is": 500,
	"./is.js": 500,
	"./it": 501,
	"./it.js": 501,
	"./ja": 502,
	"./ja.js": 502,
	"./jv": 503,
	"./jv.js": 503,
	"./ka": 504,
	"./ka.js": 504,
	"./kk": 505,
	"./kk.js": 505,
	"./km": 506,
	"./km.js": 506,
	"./kn": 507,
	"./kn.js": 507,
	"./ko": 508,
	"./ko.js": 508,
	"./ky": 509,
	"./ky.js": 509,
	"./lb": 510,
	"./lb.js": 510,
	"./lo": 511,
	"./lo.js": 511,
	"./lt": 512,
	"./lt.js": 512,
	"./lv": 513,
	"./lv.js": 513,
	"./me": 514,
	"./me.js": 514,
	"./mi": 515,
	"./mi.js": 515,
	"./mk": 516,
	"./mk.js": 516,
	"./ml": 517,
	"./ml.js": 517,
	"./mr": 518,
	"./mr.js": 518,
	"./ms": 519,
	"./ms-my": 520,
	"./ms-my.js": 520,
	"./ms.js": 519,
	"./mt": 521,
	"./mt.js": 521,
	"./my": 522,
	"./my.js": 522,
	"./nb": 523,
	"./nb.js": 523,
	"./ne": 524,
	"./ne.js": 524,
	"./nl": 525,
	"./nl-be": 526,
	"./nl-be.js": 526,
	"./nl.js": 525,
	"./nn": 527,
	"./nn.js": 527,
	"./pa-in": 528,
	"./pa-in.js": 528,
	"./pl": 529,
	"./pl.js": 529,
	"./pt": 530,
	"./pt-br": 531,
	"./pt-br.js": 531,
	"./pt.js": 530,
	"./ro": 532,
	"./ro.js": 532,
	"./ru": 533,
	"./ru.js": 533,
	"./sd": 534,
	"./sd.js": 534,
	"./se": 535,
	"./se.js": 535,
	"./si": 536,
	"./si.js": 536,
	"./sk": 537,
	"./sk.js": 537,
	"./sl": 538,
	"./sl.js": 538,
	"./sq": 539,
	"./sq.js": 539,
	"./sr": 540,
	"./sr-cyrl": 541,
	"./sr-cyrl.js": 541,
	"./sr.js": 540,
	"./ss": 542,
	"./ss.js": 542,
	"./sv": 543,
	"./sv.js": 543,
	"./sw": 544,
	"./sw.js": 544,
	"./ta": 545,
	"./ta.js": 545,
	"./te": 546,
	"./te.js": 546,
	"./tet": 547,
	"./tet.js": 547,
	"./th": 548,
	"./th.js": 548,
	"./tl-ph": 549,
	"./tl-ph.js": 549,
	"./tlh": 550,
	"./tlh.js": 550,
	"./tr": 551,
	"./tr.js": 551,
	"./tzl": 552,
	"./tzl.js": 552,
	"./tzm": 553,
	"./tzm-latn": 554,
	"./tzm-latn.js": 554,
	"./tzm.js": 553,
	"./uk": 555,
	"./uk.js": 555,
	"./ur": 556,
	"./ur.js": 556,
	"./uz": 557,
	"./uz-latn": 558,
	"./uz-latn.js": 558,
	"./uz.js": 557,
	"./vi": 559,
	"./vi.js": 559,
	"./x-pseudo": 560,
	"./x-pseudo.js": 560,
	"./yo": 561,
	"./yo.js": 561,
	"./zh-cn": 562,
	"./zh-cn.js": 562,
	"./zh-hk": 563,
	"./zh-hk.js": 563,
	"./zh-tw": 564,
	"./zh-tw.js": 564
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 902;

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ResetPasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ResetPasswordProvider = (function () {
    function ResetPasswordProvider(http) {
        this.http = http;
        console.log('Hello ResetPasswordProvider Provider');
    }
    return ResetPasswordProvider;
}());
ResetPasswordProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ResetPasswordProvider);

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfileProvider = (function () {
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
            __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"](settings1).done(function (response) {
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
    return EditProfileProvider;
}());
EditProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EditProfileProvider);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_get_notification_get_notification__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, storage, getNotificationProvider) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.getNotificationProvider = getNotificationProvider;
        this.items = [];
        this.newDate = new Date();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var msg = [];
        this.storage.get("rooms").then(function (data) {
            _this.rooms = data;
        });
        this.storage.get("children").then(function (result) {
            // let children = result;
            __WEBPACK_IMPORTED_MODULE_3_jquery__["each"](result, function (index, child) {
                _this.storage.get(child.tag).then(function (final) {
                    msg.push.apply(msg, final);
                    msg.sort(function (a, b) {
                        // return (a.timestamp > b.timestamp) ? -1 : ((b.timestamp > a.timestamp) ? 1 : 0);
                        return (a.time > b.time) ? -1 : ((b.time > a.time) ? 1 : 0);
                    });
                    return msg;
                })
                    .then(function (items) {
                    _this.items = items.filter(function (items, index, self) {
                        return index === self.findIndex(function (t) { return (
                        // t.timestamp === items.timestamp && t.sid === items.sid && t.status === items.status
                        t.time === items.time && t.sid === items.sid && t.status === items.status); });
                    });
                })
                    .catch(function (error1) {
                    console.log("error1");
                });
            });
        });
    };
    NotificationsPage.prototype.notificationDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notification_notification__["a" /* NotificationPage */], { 'param1': item });
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'NOTIFICATIONS_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="notificationDetails(item)">\n      <ion-icon \n        color="mainColor" *ngIf="rooms.tag.indexOf(item.sid) >= 0" ios="ios-pricetag-outline" md="md-pricetag" item-start>\n      </ion-icon>\n\n      <ion-icon\n        color="mainColor" *ngIf="rooms.bus.indexOf(item.sid) >= 0" ios="ios-bus-outline" md="md-bus" item-start>\n      </ion-icon>\n\n      <ion-icon\n        color="mainColor" *ngIf="rooms.geo == item.sid" ios="ios-home-outline" md="md-home" item-start>\n      </ion-icon>\n\n      <h3 *ngIf="item.name">{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: {{item.name.toString()}}</h3>\n\n      <h2 *ngIf="item.msg.length == 30 || item.msg.length < 30;else msg">{{item.msg}}</h2>\n\n      <ng-template #msg><h2>{{item.msg.substr(0, 30) +"..."}}</h2></ng-template>\n      \n      <p *ngIf="(item.time | customDate) != item.time; else temp" text-right>\n        <span>{{ item.time | customDate }}</span>\n        <span *ngIf="(item.time | customDate).includes(\'day\')">, {{item.time | date:\'shortTime\'}}</span>\n      </p>\n\n      <ng-template #temp>\n        <p text-right>{{item.time | date:\'short\'}}</p>\n      </ng-template>\n\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/notifications/notifications.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_get_notification_get_notification__["a" /* GetNotificationProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_get_notification_get_notification__["a" /* GetNotificationProvider */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ })

},[565]);
//# sourceMappingURL=main.js.map