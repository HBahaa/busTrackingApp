webpackJsonp([0],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(87);
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(33);
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(71);
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
        selector: 'page-register1',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register1/register1.html"*/'<ion-content padding class="register1-content">\n  <form novalidate (ngSubmit)="onSubmit(validations_form)" [formGroup]="validations_form">\n    <h3>{{ \'REGISTER1_PAGE.title\' | translate }}</h3>\n    <ion-item>\n      <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER1_PAGE.idNumber\' | translate }}" formControlName="id"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( validations_form.get(\'id\').hasError(\'required\') || validations_form.get(\'id\').hasError(\'pattern\'))&& validations_form.get(\'id\').touched">\n\n      <div class="error" *ngIf="validations_form.get(\'id\').hasError(\'required\') && validations_form.get(\'id\').touched">\n        {{ \'ERROR_MESSAGES.register1.id.required\' | translate }}\n      </div>\n      <div class="error" *ngIf="validations_form.get(\'id\').hasError(\'pattern\') && validations_form.get(\'id\').touched">\n        {{ \'ERROR_MESSAGES.register1.id.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="key"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER1_PAGE.secertKey\' | translate }}" formControlName="skey"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( validations_form.get(\'skey\').hasError(\'required\') || validations_form.get(\'skey\').hasError(\'min\') || validations_form.get(\'skey\').hasError(\'max\'))&& validations_form.get(\'skey\').touched">\n\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'required\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.required\' | translate }}\n      </div>\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'min\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.min\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'max\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.max\' | translate }}\n      </div>\n\n    </div>\n\n    <button ion-button block round color="mainColor" [disabled]="validations_form.invalid"><ion-icon name="log-in"></ion-icon>{{ \'REGISTER1_PAGE.send\' | translate }}</button>\n  </form>\n    <button ion-button color="light" icon-start (click)="alreadyHaveAccount()" clear>\n      <ion-icon name="arrow-round-forward"></ion-icon> {{ \'REGISTER1_PAGE.alreadyHaveAccount\' | translate }}\n    </button>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register1/register1.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(87);
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
        alert("clicked");
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_modal_map_modal__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_edit_profile_edit_profile__ = __webpack_require__(447);
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
    function ProfilePage(navCtrl, storage, platform, toastCtrl, loginProvider, editProfileProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.loginProvider = loginProvider;
        this.editProfileProvider = editProfileProvider;
        this.flag = false;
        platform.ready().then(function () {
            _this.storage.get("userData").then(function (data) {
                console.log("user Data", JSON.stringify(data));
                _this.nid = data.nid;
                _this.name = data.name;
                _this.email = data.email;
                _this.phone = data.phone;
                _this.password = data.password;
                _this.address = data.address;
                _this.location = data.loc;
            });
        });
    }
    ProfilePage.prototype.changeFlag = function () {
        this.flag = true;
        return this.flag;
    };
    ProfilePage.prototype.presentMapModal = function () {
        console.log("param1 loc", JSON.stringify(this.location));
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_modal_map_modal__["a" /* MapModalPage */], { 'param1': this.location });
    };
    ProfilePage.prototype.editProfile = function (data) {
        var _this = this;
        this.storage.get("userData").then(function (user) {
            _this.loginProvider.Login(user.nid, user.password).then(function (log) {
                if (user.email == data.value.email) {
                    _this.editProfileProvider.updateProfile(log, data.value, user.nid, 0).then(function (res) {
                        _this.flag = false;
                        return _this.flag;
                    }).catch(function (error) {
                        console.log("error", error);
                    });
                }
                else {
                    _this.editProfileProvider.updateProfile(log, data.value, user.nid, 1).then(function (res) {
                        alert(res);
                        _this.storage.clear().then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        });
                    }).catch(function (error) {
                        console.log("error", error);
                    });
                }
            }).catch(function (err) {
                console.log("err in login");
            });
        });
    };
    ProfilePage.prototype.presentToast = function (data) {
        var toast = this.toastCtrl.create({
            message: "data saved",
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'PROFILE_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="!flag">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <ion-card-title color="mainColor">{{ \'PROFILE_PAGE.subTitle\' | translate }}</ion-card-title>\n              <ion-row>\n\n                <ion-col col-12><br /></ion-col>\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.name\' | translate }}:</h2>\n                </ion-col><ion-col col-8><h2>{{name}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.email\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{email}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.password\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{password}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.phone\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{phone}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.address\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{address}}</h2></ion-col>\n              \n              </ion-row>\n              <button ion-button icon-start color="mainColor" block (click)="changeFlag()">\n                <ion-icon name="create"></ion-icon>\n                {{ \'PROFILE_PAGE.edit\' | translate }}\n              </button>\n              <button ion-button icon-start block (click)="presentMapModal()">\n                <ion-icon name="pin"></ion-icon> change address\n              </button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-content *ngIf="flag">\n  <ion-card>\n    <ion-card-title color="mainColor">\n      {{ \'PROFILE_PAGE.subTitle\' | translate }}\n    </ion-card-title>\n    <ion-card-content>\n      <form #profileForm="ngForm" (ngSubmit)="editProfile(profileForm)">\n        <ion-list inset>\n          <ion-item>\n            <ion-label> <ion-icon name="person"></ion-icon></ion-label>\n            <ion-input type="text" name="name" [(ngModel)]="name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label> <ion-icon name="mail"></ion-icon></ion-label>\n            <ion-input type="email" name="email" [(ngModel)]="email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label> <ion-icon name="phone-portrait"></ion-icon></ion-label>\n            <ion-input type="text" name="phone" [(ngModel)]="phone"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label> <ion-icon name="lock"></ion-icon></ion-label>\n            <ion-input type="password" name="password" [(ngModel)]="password"></ion-input>\n          </ion-item>\n          <button ion-button icon-start type="submit" color="mainColor" block round>\n            <ion-icon name="log-in"></ion-icon> {{ \'PROFILE_PAGE.update\' | translate }}\n          </button>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/profile/profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(97);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(71);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__children_children__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_register_register__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_get_children_get_children__ = __webpack_require__(72);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(33);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(33);
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



var ResetPasswordProvider = (function () {
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
            __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"](settings).done(function (response) {
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
    return ResetPasswordProvider;
}());
ResetPasswordProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ResetPasswordProvider);

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_get_children_get_children__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapModalPage = (function () {
    function MapModalPage(navCtrl, navParams, storage, loginProvider, getChildrenProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loginProvider = loginProvider;
        this.getChildrenProvider = getChildrenProvider;
        this.location = navParams.get('param1');
        console.log("location cons ", JSON.stringify(this.location));
        this.loadMap(this.location["locLat"], this.location["locLong"]);
        // this.loadMap();
    }
    MapModalPage.prototype.loadMap = function (x, y) {
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
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log("map ready");
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
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
            console.log('Map is ready!');
            console.log("location", JSON.stringify(_this.location));
            _this.map.addEventListener(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_CLICK).subscribe(function (data) {
                console.log("data", JSON.stringify(data));
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
                    // alert("location"+ this.location);
                });
            });
            _this.map.setMyLocationEnabled(true);
        });
    };
    // function to geocode a lat/long
    MapModalPage.prototype.getAddress = function (myLatitude, myLongitude) {
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
    MapModalPage.prototype.codeAddress = function () {
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
                        console.log("clear map");
                    });
                }
                else {
                    // alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }
    };
    MapModalPage.prototype.dismiss = function () {
        var _this = this;
        this.storage.get("userData").then(function (user) {
            if (_this.address) {
                user.address = _this.address;
            }
            if (_this.location['lat']) {
                user.loc['locLat'] = _this.location.lat;
                user.loc['locLong'] = _this.location.lng;
            }
            else {
                user.loc = _this.location;
            }
            _this.storage.set("userData", user);
            _this.storage.get("token").then(function (token) {
                var settings = {
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
                    "data": "{\"loc\": {\"locLat\": \"" + user.loc['locLat'] + "\", \"locLong\": \"" + user.loc['locLong'] + "\", \"locDesc\": \"" + _this.address + "\"}}"
                };
                __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"](settings).done(function (response) {
                    if (response.success) {
                        _this.loginProvider.Login(user.nid, "Hb222").then(function (newToken) {
                            _this.getChildrenProvider.getAllChildren(newToken).then(function (flag) {
                                if (flag) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
                                }
                            }).catch(function (error1) {
                                alert(error1);
                            });
                        });
                    }
                    else {
                        alert("fail error during saving data");
                    }
                }).fail(function (error) {
                    alert("error during saving data here" + error);
                });
            });
        });
    };
    return MapModalPage;
}());
MapModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map-modal',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/map-modal/map-modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Map</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" (click)="dismiss()">\n        save\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n \n<ion-content>\n  <div id="over_map">\n\n    <ion-searchbar primary [(ngModel)]="searchQuery" show-cancel="true" placeholder="Search"></ion-searchbar>\n    <button ion-button icon-only block (click)="codeAddress()"><ion-icon name="redo"></ion-icon></button>\n  </div>\n  <div id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/map-modal/map-modal.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_get_children_get_children__["a" /* GetChildrenProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_get_children_get_children__["a" /* GetChildrenProvider */]])
], MapModalPage);

//# sourceMappingURL=map-modal.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_children_get_children__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Storage } from '@ionic/storage';




var EditProfileProvider = (function () {
    function EditProfileProvider(loginProvider, getChildrenProvider) {
        this.loginProvider = loginProvider;
        this.getChildrenProvider = getChildrenProvider;
    }
    EditProfileProvider.prototype.updateProfile = function (token, data, nid, f) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // this.storage.get("token").then(token=>{
            if (f) {
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
                __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"](settings1).done(function (response) {
                    if (response.success) {
                        resolve("Your Data Updated, Please Verify your email and relogin");
                    }
                    else {
                        reject("fail");
                    }
                }).fail(function (error) {
                    reject("error");
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
                __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"](settings2).done(function (response) {
                    if (response.success) {
                        _this.loginProvider.Login(response.data.nid, data.password).then(function (newToken) {
                            _this.getChildrenProvider.getAllChildren(newToken).then(function (flag) {
                                if (flag) {
                                    resolve("updated");
                                }
                            }).catch(function (error1) {
                                alert(error1);
                            });
                        });
                    }
                    else {
                        reject("fail");
                    }
                }).fail(function (error) {
                    reject("error");
                });
            }
            // })
        });
    };
    return EditProfileProvider;
}());
EditProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_4__get_children_get_children__["a" /* GetChildrenProvider */]])
], EditProfileProvider);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(33);
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

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(572);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_native__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notification_notification__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_details_details__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_children_children__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register1_register1__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register2_register2__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_map_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_map_modal_map_modal__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_get_notification_get_notification__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_get_children_get_children__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_register_register__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_date_date__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_reset_password_reset_password__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_edit_profile_edit_profile__ = __webpack_require__(447);
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
            __WEBPACK_IMPORTED_MODULE_26__pages_map_modal_map_modal__["a" /* MapModalPage */],
            __WEBPACK_IMPORTED_MODULE_31__pipes_date_date__["a" /* DatePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
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
            __WEBPACK_IMPORTED_MODULE_25__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_map_modal_map_modal__["a" /* MapModalPage */]
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
            __WEBPACK_IMPORTED_MODULE_27__providers_get_notification_get_notification__["a" /* GetNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_get_children_get_children__["a" /* GetChildrenProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_32__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */],
            __WEBPACK_IMPORTED_MODULE_33__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__children_children__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register1_register1__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__ = __webpack_require__(445);
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
        this.resetPasswordProvider.resetPassword(this.nid).then(function (res) {
            alert(res);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__["a" /* GetChildrenProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetChildrenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(33);
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
        this.rooms = {};
        this.roomsData = {};
        this.parent = { 'loc': {} };
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
                    _this.children = [];
                    _this.rooms = {};
                    _this.roomsData = {};
                    _this.parent.nid = response.data['nid'];
                    _this.parent.name = response.data['name'];
                    _this.parent.email = response.data['email'];
                    _this.parent.phone = response.data['phone'];
                    _this.parent.password = response.data['pass'];
                    _this.parent.address = response.data['loc']['locDesc'];
                    _this.parent.loc["locLat"] = response.data['loc']['locLat'];
                    _this.parent.loc["locLong"] = response.data['loc']['locLong'];
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
                        console.log("data set to storage");
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

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_children_children__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(71);
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
        var _this = this;
        this.storage.clear().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
        });
    };
    MyApp.prototype.loadingPage = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("children").then(function (data) {
                _this.loader.dismiss();
                if (data != null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_children_children__["a" /* ChildrenPage */];
                    // this.loader.dismiss();
                }
                else if (data == null) {
                    // this.loader.dismiss();
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/app/app.html"*/'<ion-menu *ngIf="this.platform.dir()===\'rtl\'" side="right" [content]="content">\n  <ion-header>\n    <ion-toolbar style="min-height: 150px;">\n      <ion-title>{{ \'APP_PAGE.menu\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{ p.title | translate }}\n      </button>\n      <button menuClose ion-item (click)="userLogout()">\n        <ion-icon name="log-out"></ion-icon> {{ \'APP_PAGE.logout\' | translate }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu *ngIf="this.platform.dir()===\'ltr\'" side="left" [content]="content">\n  <ion-header>\n    <ion-toolbar style="min-height: 150px;">\n      <ion-title>{{ \'APP_PAGE.menu\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{ p.title | translate }}\n      </button>\n      <button menuClose ion-item (click)="userLogout()">\n        <ion-icon name="log-out"></ion-icon> {{ \'APP_PAGE.logout\' | translate }}\n      </button>      \n    </ion-list>\n  </ion-content>\n  \n  <ion-footer>\n  <ion-toolbar>\n    <ion-title>v1.3.2</ion-title>\n  </ion-toolbar>\n</ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 904:
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

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 448,
	"./af.js": 448,
	"./ar": 449,
	"./ar-dz": 450,
	"./ar-dz.js": 450,
	"./ar-kw": 451,
	"./ar-kw.js": 451,
	"./ar-ly": 452,
	"./ar-ly.js": 452,
	"./ar-ma": 453,
	"./ar-ma.js": 453,
	"./ar-sa": 454,
	"./ar-sa.js": 454,
	"./ar-tn": 455,
	"./ar-tn.js": 455,
	"./ar.js": 449,
	"./az": 456,
	"./az.js": 456,
	"./be": 457,
	"./be.js": 457,
	"./bg": 458,
	"./bg.js": 458,
	"./bm": 459,
	"./bm.js": 459,
	"./bn": 460,
	"./bn.js": 460,
	"./bo": 461,
	"./bo.js": 461,
	"./br": 462,
	"./br.js": 462,
	"./bs": 463,
	"./bs.js": 463,
	"./ca": 464,
	"./ca.js": 464,
	"./cs": 465,
	"./cs.js": 465,
	"./cv": 466,
	"./cv.js": 466,
	"./cy": 467,
	"./cy.js": 467,
	"./da": 468,
	"./da.js": 468,
	"./de": 469,
	"./de-at": 470,
	"./de-at.js": 470,
	"./de-ch": 471,
	"./de-ch.js": 471,
	"./de.js": 469,
	"./dv": 472,
	"./dv.js": 472,
	"./el": 473,
	"./el.js": 473,
	"./en-au": 474,
	"./en-au.js": 474,
	"./en-ca": 475,
	"./en-ca.js": 475,
	"./en-gb": 476,
	"./en-gb.js": 476,
	"./en-ie": 477,
	"./en-ie.js": 477,
	"./en-nz": 478,
	"./en-nz.js": 478,
	"./eo": 479,
	"./eo.js": 479,
	"./es": 480,
	"./es-do": 481,
	"./es-do.js": 481,
	"./es-us": 482,
	"./es-us.js": 482,
	"./es.js": 480,
	"./et": 483,
	"./et.js": 483,
	"./eu": 484,
	"./eu.js": 484,
	"./fa": 485,
	"./fa.js": 485,
	"./fi": 486,
	"./fi.js": 486,
	"./fo": 487,
	"./fo.js": 487,
	"./fr": 488,
	"./fr-ca": 489,
	"./fr-ca.js": 489,
	"./fr-ch": 490,
	"./fr-ch.js": 490,
	"./fr.js": 488,
	"./fy": 491,
	"./fy.js": 491,
	"./gd": 492,
	"./gd.js": 492,
	"./gl": 493,
	"./gl.js": 493,
	"./gom-latn": 494,
	"./gom-latn.js": 494,
	"./gu": 495,
	"./gu.js": 495,
	"./he": 496,
	"./he.js": 496,
	"./hi": 497,
	"./hi.js": 497,
	"./hr": 498,
	"./hr.js": 498,
	"./hu": 499,
	"./hu.js": 499,
	"./hy-am": 500,
	"./hy-am.js": 500,
	"./id": 501,
	"./id.js": 501,
	"./is": 502,
	"./is.js": 502,
	"./it": 503,
	"./it.js": 503,
	"./ja": 504,
	"./ja.js": 504,
	"./jv": 505,
	"./jv.js": 505,
	"./ka": 506,
	"./ka.js": 506,
	"./kk": 507,
	"./kk.js": 507,
	"./km": 508,
	"./km.js": 508,
	"./kn": 509,
	"./kn.js": 509,
	"./ko": 510,
	"./ko.js": 510,
	"./ky": 511,
	"./ky.js": 511,
	"./lb": 512,
	"./lb.js": 512,
	"./lo": 513,
	"./lo.js": 513,
	"./lt": 514,
	"./lt.js": 514,
	"./lv": 515,
	"./lv.js": 515,
	"./me": 516,
	"./me.js": 516,
	"./mi": 517,
	"./mi.js": 517,
	"./mk": 518,
	"./mk.js": 518,
	"./ml": 519,
	"./ml.js": 519,
	"./mr": 520,
	"./mr.js": 520,
	"./ms": 521,
	"./ms-my": 522,
	"./ms-my.js": 522,
	"./ms.js": 521,
	"./mt": 523,
	"./mt.js": 523,
	"./my": 524,
	"./my.js": 524,
	"./nb": 525,
	"./nb.js": 525,
	"./ne": 526,
	"./ne.js": 526,
	"./nl": 527,
	"./nl-be": 528,
	"./nl-be.js": 528,
	"./nl.js": 527,
	"./nn": 529,
	"./nn.js": 529,
	"./pa-in": 530,
	"./pa-in.js": 530,
	"./pl": 531,
	"./pl.js": 531,
	"./pt": 532,
	"./pt-br": 533,
	"./pt-br.js": 533,
	"./pt.js": 532,
	"./ro": 534,
	"./ro.js": 534,
	"./ru": 535,
	"./ru.js": 535,
	"./sd": 536,
	"./sd.js": 536,
	"./se": 537,
	"./se.js": 537,
	"./si": 538,
	"./si.js": 538,
	"./sk": 539,
	"./sk.js": 539,
	"./sl": 540,
	"./sl.js": 540,
	"./sq": 541,
	"./sq.js": 541,
	"./sr": 542,
	"./sr-cyrl": 543,
	"./sr-cyrl.js": 543,
	"./sr.js": 542,
	"./ss": 544,
	"./ss.js": 544,
	"./sv": 545,
	"./sv.js": 545,
	"./sw": 546,
	"./sw.js": 546,
	"./ta": 547,
	"./ta.js": 547,
	"./te": 548,
	"./te.js": 548,
	"./tet": 549,
	"./tet.js": 549,
	"./th": 550,
	"./th.js": 550,
	"./tl-ph": 551,
	"./tl-ph.js": 551,
	"./tlh": 552,
	"./tlh.js": 552,
	"./tr": 553,
	"./tr.js": 553,
	"./tzl": 554,
	"./tzl.js": 554,
	"./tzm": 555,
	"./tzm-latn": 556,
	"./tzm-latn.js": 556,
	"./tzm.js": 555,
	"./uk": 557,
	"./uk.js": 557,
	"./ur": 558,
	"./ur.js": 558,
	"./uz": 559,
	"./uz-latn": 560,
	"./uz-latn.js": 560,
	"./uz.js": 559,
	"./vi": 561,
	"./vi.js": 561,
	"./x-pseudo": 562,
	"./x-pseudo.js": 562,
	"./yo": 563,
	"./yo.js": 563,
	"./zh-cn": 564,
	"./zh-cn.js": 564,
	"./zh-hk": 565,
	"./zh-hk.js": 565,
	"./zh-tw": 566,
	"./zh-tw.js": 566
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
webpackContext.id = 905;

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_details__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_login_login__ = __webpack_require__(56);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.backgroundMode = backgroundMode;
        this.platform = platform;
        this.getNotificationProvider = getNotificationProvider;
        this.loginProvider = loginProvider;
        this.children = [];
        this.items = [];
        this.serverConnection();
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
        selector: 'page-children',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/children/children.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'CHILDREN_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="std" *ngFor="let child of children">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="child.image" onError="this.src=\'assets/imgs/1.png\'">\n      </ion-avatar>\n      \n      <ion-row>\n        <ion-col col-5><span>{{ \'CHILDREN_PAGE.name\' | translate }}:</span></ion-col>\n        <ion-col col-7><span class="chData">{{child.name}}</span></ion-col>\n        <ion-col col-5><span>{{ \'CHILDREN_PAGE.status\' | translate }}:</span></ion-col>\n        <ion-col col-7>\n          <span class="chData" *ngIf="child.childLastMsg != undefined">{{child.childLastMsg?.status}}</span>\n          <span class="chData" *ngIf="child.childLastMsg == undefined">No Status</span>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="mainColor" (click)="childDetails(child.tag, child)" >{{ \'CHILDREN_PAGE.details\' | translate }}</button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/children/children.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__["a" /* GetNotificationProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__["a" /* BackgroundMode */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__["a" /* GetNotificationProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */]])
], ChildrenPage);

//# sourceMappingURL=children.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_get_notification_get_notification__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification__ = __webpack_require__(157);
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

},[567]);
//# sourceMappingURL=main.js.map