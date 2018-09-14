webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(54);
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
        this.lang = this.navParams.get("param2");
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
        selector: 'page-notification',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/notification/notification.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'NOTIFICATION_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div id="map"></div>\n	<ion-card>\n	  <ion-card-content>\n	  	<p>{{notification.time | customDate: lang}}</p>\n		<h2><span>{{ \'NOTIFICATION_PAGE.childName\' | translate }}:</span> {{ notification.name }}</h2>\n		<h2><span>{{ \'NOTIFICATION_PAGE.busSpeed\' | translate }}:</span> {{ notification.speed }}</h2>\n		<h2><span>{{ \'NOTIFICATION_PAGE.status\' | translate }}:</span> {{ notification.status }}</h2>\n		<ion-card-title>\n	      {{ notification.msg }}\n	    </ion-card-title>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildGradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildGradesPage = (function () {
    function ChildGradesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChildGradesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildGradesPage');
    };
    return ChildGradesPage;
}());
ChildGradesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-child-grades',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/child-grades/child-grades.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'CHILDGRADES_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-card>\n	    <ion-item>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.subject\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>Math</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.childMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>60</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.totalMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>100</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.grade\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>B</span></ion-col>\n			</ion-row>\n	    </ion-item>\n	</ion-card>\n	<ion-card>\n	    <ion-item>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.subject\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>Science</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.childMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>40</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.totalMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>100</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.grade\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>C</span></ion-col>\n			</ion-row>\n	    </ion-item>\n	</ion-card>\n	<ion-card>\n	    <ion-item>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.subject\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>English</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.childMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>95</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.totalMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>100</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.grade\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>A</span></ion-col>\n			</ion-row>\n	    </ion-item>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/child-grades/child-grades.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ChildGradesPage);

//# sourceMappingURL=child-grades.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusTrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusTrackPage = (function () {
    function BusTrackPage() {
        this.p0 = { "lat": 30.044270, "lng": 31.218796 };
        this.p1 = { "lat": 30.046555, "lng": 31.218270 };
        this.p2 = { "lat": 30.047864, "lng": 31.217980 };
        this.p3 = { "lat": 30.048458, "lng": 31.218999 };
        this.p4 = { "lat": 30.048634, "lng": 31.220265 };
        this.p5 = { "lat": 30.048857, "lng": 31.222153 };
        this.p6 = { "lat": 30.048996, "lng": 31.225543 };
        this.p7 = { "lat": 30.049191, "lng": 31.229899 };
        this.p8 = { "lat": 30.049117, "lng": 31.231058 };
        this.p9 = { "lat": 30.048160, "lng": 31.231487 };
        this.date = new Date().toISOString();
    }
    BusTrackPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    BusTrackPage.prototype.loadMap = function () {
        var _this = this;
        // alert("loadMap")
        var mapOptions = {
            camera: {
                target: { lat: 30.048996, lng: 31.225543 },
                zoom: 15,
                tilt: 20
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            // alert("map ready")
            _this.map.addPolyline({
                points: [
                    _this.p0, _this.p1, _this.p2, _this.p3, _this.p4, _this.p5, _this.p6, _this.p7, _this.p8, _this.p9
                ],
                'color': '#AA00FF',
                'width': 5,
                'geodesic': true
            });
        });
    };
    BusTrackPage.prototype.showTodayTrack = function () {
        var _this = this;
        this.map.clear().then(function () {
            return _this.ployLine([_this.p0, _this.p1, _this.p2, _this.p3, _this.p4, _this.p5, _this.p6, _this.p7, _this.p8, _this.p9], '#AA00FF');
        });
    };
    BusTrackPage.prototype.handleChangeDate = function (date) {
        var _this = this;
        // console.log("showlast", date)
        this.map.clear().then(function () {
            return _this.ployLine([_this.p0, _this.p1, _this.p2, _this.p3, _this.p4, _this.p5, _this.p6, _this.p7, _this.p8, _this.p9], '#FF0000');
        });
    };
    BusTrackPage.prototype.ployLine = function (points, color) {
        this.map.addPolyline({
            points: points,
            'color': color,
            'width': 5,
            'geodesic': true
        });
    };
    return BusTrackPage;
}());
BusTrackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bus-track',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/bus-track/bus-track.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'BUSTRACK_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n	    <ion-card-content>\n			<ion-card-title>\n				{{ \'BUSTRACK_PAGE.subTitle\' | translate }}:\n			</ion-card-title>\n\n		    <ion-item>\n				<ion-label>{{ \'BUSTRACK_PAGE.date\' | translate }}</ion-label>\n				<ion-datetime displayFormat="MM/DD/YYYY" (ionChange)="handleChangeDate(date)"[(ngModel)]="date"  [cancelText] ="\'BUSTRACK_PAGE.cancel\' | translate" [doneText]="\'BUSTRACK_PAGE.done\' | translate"></ion-datetime>\n			</ion-item>\n	\n			<h2>{{ \'BUSTRACK_PAGE.or\' | translate }}</h2>\n\n			<button ion-button color="mainColor" block (click)="showTodayTrack()">{{ \'BUSTRACK_PAGE.today\' | translate }}</button>\n		\n	    </ion-card-content>\n\n	</ion-card>\n\n	<div id="map"></div>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/bus-track/bus-track.html"*/,
    }),
    __metadata("design:paramtypes", [])
], BusTrackPage);

//# sourceMappingURL=bus-track.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagesPage');
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/messages/messages.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'MESSAGES_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-card>\n	    <ion-card-content>\n			<ion-card-title>\n				New Message\n			</ion-card-title>\n			<p>\n				This is the content of message. This is the content of message\n			</p>\n	    </ion-card-content>\n\n	    <ion-row>\n			<ion-col>\n				<button ion-button clear color="mainColor" icon-start>\n					<ion-icon name="attach"></ion-icon>\n				  	&nbsp;file\n				</button>\n			</ion-col>\n	    </ion-row>\n\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/messages/messages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MessagesPage);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_modal_map_modal__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_edit_profile_edit_profile__ = __webpack_require__(456);
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
        }
        else {
            this.platform.setDir('rtl', false);
            this.platform.setDir('ltr', true);
        }
        this.translate.use(language);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__map_modal_map_modal__["a" /* MapModalPage */], { 'param1': this.location });
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
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'PROFILE_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid  *ngIf="!showEditForm">\n    <ion-card class="settings">\n      <ion-card-title color="mainColor">\n        {{ \'PROFILE_PAGE.settings\' | translate }}\n      </ion-card-title>\n      <ion-card-content>\n        <ion-item>\n          <ion-label>{{ \'LANGUAGE.selectLanguage\' | translate }}:</ion-label>\n          <ion-select [(ngModel)]="lang" (ngModelChange)="changeLanguage($event)"\n              okText="{{ \'LANGUAGE.ok\' | translate }}" cancelText="{{ \'LANGUAGE.cancel\' | translate }}">\n\n            <ion-option value="en">{{ \'LANGUAGE.en\' | translate }}</ion-option>\n            <ion-option value="ar">{{ \'LANGUAGE.ar\' | translate }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-row>\n      <ion-col>\n        <ion-card class="profileData">\n          <ion-card-content>\n            <ion-card-title color="mainColor">{{ \'PROFILE_PAGE.subTitle\' | translate }}</ion-card-title>\n              <ion-row>\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.name\' | translate }}:</h2>\n                </ion-col><ion-col col-8><h2>{{name}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.email\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{user_email}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.password\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{user_password}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.phone\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{user_phone}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.address\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{address}}</h2></ion-col>\n              \n              </ion-row>\n              <button ion-button icon-start color="mainColor" block (click)="changeFlag()">\n                <ion-icon name="create"></ion-icon>&nbsp;{{ \'PROFILE_PAGE.edit\' | translate }}\n              </button>\n              <button ion-button icon-start block (click)="presentMapModal()">\n                <ion-icon name="pin"></ion-icon> &nbsp;{{ \'PROFILE_PAGE.changeAddress\' | translate }}\n              </button>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div *ngIf="showEditForm">\n    <ion-card>\n      <ion-card-title color="mainColor">\n        {{ \'PROFILE_PAGE.subTitle\' | translate }}\n      </ion-card-title>\n      <ion-card-content>\n        <form #profileForm="ngForm" (ngSubmit)="editProfile(profileForm)">\n          <ion-list inset>\n            <!-- <ion-item>\n              <ion-label> <ion-icon name="person"></ion-icon></ion-label>\n              <ion-input type="text" name="name" [(ngModel)]="name"></ion-input>\n            </ion-item> -->\n            <ion-item>\n              <ion-label> <ion-icon name="mail"></ion-icon></ion-label>\n              <ion-input type="email" name="email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label> <ion-icon name="phone-portrait"></ion-icon></ion-label>\n              <ion-input type="text" name="phone" [(ngModel)]="phone"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label> <ion-icon name="lock"></ion-icon></ion-label>\n              <ion-input type="text" name="password" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <button ion-button icon-start type="submit" color="mainColor" block>\n              {{ \'PROFILE_PAGE.update\' | translate }}\n            </button>\n\n          </ion-list>\n        </form>\n        <button ion-button icon-start type="submit" block (click)="cancelEdit()">\n          {{ \'PROFILE_PAGE.cancel\' | translate }}\n        </button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<!-- <ion-content class="editForm"></ion-content>-->'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/profile/profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_login_login__["a" /* LoginProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(72);
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
                _this.storage.set("userProfile", data._value).then(function () {
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
        selector: 'page-register1',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/register1/register1.html"*/'<ion-content padding class="register1-content">\n  <form novalidate (ngSubmit)="onSubmit(validations_form)" [formGroup]="validations_form">\n    <h3>{{ \'REGISTER1_PAGE.title\' | translate }}</h3>\n    <ion-item>\n      <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER1_PAGE.idNumber\' | translate }}" formControlName="id"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( validations_form.get(\'id\').hasError(\'required\') || validations_form.get(\'id\').hasError(\'pattern\'))&& validations_form.get(\'id\').touched">\n\n      <div class="error" *ngIf="validations_form.get(\'id\').hasError(\'required\') && validations_form.get(\'id\').touched">\n        {{ \'ERROR_MESSAGES.register1.id.required\' | translate }}\n      </div>\n      <div class="error" *ngIf="validations_form.get(\'id\').hasError(\'pattern\') && validations_form.get(\'id\').touched">\n        {{ \'ERROR_MESSAGES.register1.id.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="key"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER1_PAGE.secertKey\' | translate }}" formControlName="skey"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( validations_form.get(\'skey\').hasError(\'required\') || validations_form.get(\'skey\').hasError(\'min\') || validations_form.get(\'skey\').hasError(\'max\'))&& validations_form.get(\'skey\').touched">\n\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'required\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.required\' | translate }}\n      </div>\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'min\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.min\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'max\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.max\' | translate }}\n      </div>\n\n    </div>\n\n    <button ion-button block round color="mainColor" [disabled]="validations_form.invalid"><ion-icon name="log-in"></ion-icon>&nbsp;{{ \'REGISTER1_PAGE.send\' | translate }}</button>\n  </form>\n    <button ion-button color="light" icon-start (click)="alreadyHaveAccount()" clear>\n      <ion-icon name="arrow-round-forward"></ion-icon>&nbsp;{{ \'REGISTER1_PAGE.alreadyHaveAccount\' | translate }}\n    </button>\n</ion-content>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/register1/register1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], Register1Page);

//# sourceMappingURL=register1.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register2_register2__ = __webpack_require__(452);
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
        selector: 'map-page',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/map/map.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ \'MAP_PAGE.title\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" (click)="goToRegister()">\n        {{ \'MAP_PAGE.next\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n \n<ion-content>\n  <div id="over_map">\n    <ion-searchbar primary [(ngModel)]="searchQuery" show-cancel="true" placeholder="{{ \'MAP_PAGE.search\' | translate }}"></ion-searchbar>\n    <button ion-button icon-only block (click)="codeAddress()"><ion-icon name="redo"></ion-icon></button>\n  </div>\n  <div id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthServiceProvider = (function () {
    function AuthServiceProvider(storage) {
        this.storage = storage;
        this.managedDevices = [];
    }
    AuthServiceProvider.prototype.myFilter = function (objs) {
        return objs.filter(function (obj) {
            return obj['c8y_SupportedMeasurements'];
        }).map(function (obj) {
            return (function (_a) {
                var id = _a.id, name = _a.name, c8y_SupportedMeasurements = _a.c8y_SupportedMeasurements;
                return ({ id: id, name: name, c8y_SupportedMeasurements: c8y_SupportedMeasurements });
            })(obj);
        });
    };
    AuthServiceProvider.prototype.Login = function (tenant, username, password, currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        console.log("login", tenant, username, password);
        return new Promise(function (resolve) {
            var token = "Basic " + window.btoa(username + ':' + password);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://" + tenant + ".cumulocity.com/inventory/managedObjects?owner=" + username + "&pageSize=10&currentPage=" + currentPage,
                "method": "GET",
                "headers": {
                    "authorization": "" + token,
                    "cache-control": "no-cache",
                    "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                }
            };
            __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"](settings).done(function (response) {
                if (response.managedObjects.length > 0) {
                    _this.managedDevices = _this.managedDevices.concat(response.managedObjects);
                    var page = response.statistics.currentPage + 1;
                    _this.Login(tenant, username, password, currentPage = page);
                }
                // else{
                var devices = _this.myFilter(_this.managedDevices);
                for (var i in devices) {
                    devices[i]["disableBTN"] = false;
                }
                _this.storage.set('devices', devices);
                _this.storage.set("userData", {
                    'tenant': tenant,
                    'username': username,
                    "password": password,
                    "token": token
                });
                resolve(true);
                // }
            }).fail(function (error) {
                resolve(false);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(27);
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




var DataServiceProvider = (function () {
    function DataServiceProvider(storage, loadingCtrl, alertCtrl) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    DataServiceProvider.prototype.updateData = function (tenant, id, type, token, userMeasurementName, deviceName) {
        return new Promise(function (resolve, reject) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://" + tenant + ".cumulocity.com/measurement/measurements?source=" + id + "&type=" + type,
                "method": "GET",
                "headers": {
                    "authorization": token,
                    "cache-control": "no-cache",
                }
            };
            __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"](settings).done(function (response) {
                console.log("response from update", response);
                if (response.measurements.length >= 1) {
                    var l = response.measurements.length;
                    var resp = response.measurements[l - 1];
                    resolve(resp[type]);
                }
            }).fail(function (error) {
                reject();
            });
        });
    };
    DataServiceProvider.prototype.updatePostionData = function (tenant, id, type, token, userMeasurementName, deviceName) {
        return new Promise(function (resolve, reject) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://" + tenant + ".cumulocity.com/inventory/managedObjects/" + id,
                "method": "GET",
                "headers": {
                    "authorization": token,
                    "cache-control": "no-cache",
                }
            };
            __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"](settings).done(function (response) {
                console.log("resp", response);
                resolve(response);
            }).fail(function (error) {
                reject();
            });
        });
    };
    DataServiceProvider.prototype.getDataService = function (tenant, id, type, token, userMeasurementName, deviceName, currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        if (type === "c8y_Temperature") {
            type = "c8y_TemperatureMeasurement";
        }
        return new Promise(function (resolve) {
            var value;
            var unit;
            var lat;
            var lng;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://" + tenant + ".cumulocity.com/measurement/measurements?source=" + id + "&type=" + type + "&currentPage=" + currentPage,
                "method": "GET",
                "headers": {
                    "authorization": token,
                    "cache-control": "no-cache",
                }
            };
            __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"](settings).done(function (response) {
                if (response.statistics.totalPages == null) {
                    var obj = {};
                    var newItem;
                    var sName = userMeasurementName.substring(4);
                    var n = sName.indexOf("Measurement");
                    if (n > 0) {
                        sName = sName.substring(0, n);
                    }
                    if (response.measurements.length >= 1) {
                        var l = response.measurements.length;
                        var resp = response.measurements[l - 1];
                        // if (type == "c8y_Position") 
                        if (type.indexOf("c8y_Position") >= 0) {
                            lat = resp[type]["lat"];
                            lng = resp[type]["lng"];
                        }
                        else {
                            var respType = resp[type];
                            value = resp[type][Object.keys(respType)[0]]["value"];
                            unit = resp[type][Object.keys(respType)[0]]["unit"];
                        }
                        if (type.indexOf("c8y_Position") >= 0) {
                            newItem = {
                                "deviceID": id,
                                "name": sName,
                                "type": type,
                                "lat": lat,
                                "lng": lng
                            };
                        }
                        else {
                            newItem = {
                                "deviceID": id,
                                "name": sName,
                                "type": type,
                                "value": value,
                                "unit": unit
                            };
                        }
                        obj = newItem;
                    }
                    else if (response.measurements.length == 0) {
                        if (type.indexOf("c8y_Position") >= 0) {
                            newItem = {
                                "deviceID": id,
                                "name": sName,
                                "type": type,
                                "lat": ""
                            };
                        }
                        else {
                            newItem = {
                                "deviceID": id,
                                "name": sName,
                                "type": type,
                                "value": ""
                            };
                        }
                        obj = newItem;
                    }
                    _this.deviceMeasurements(id, obj);
                    _this.loader.dismiss();
                    resolve(true);
                }
                else {
                    var current = response.statistics.totalPages;
                    _this.getDataService(tenant, id, type, token, userMeasurementName, currentPage = current);
                    // this.getDataService(tenant,id, type, token, userMeasurementName, deviceName, currentPage=current)
                }
            }).fail(function (error) {
                _this.loader.dismiss();
                _this.showAlert("Error while saving data, Check your internet connection!");
            });
        });
    };
    DataServiceProvider.prototype.deviceMeasurements = function (id, item) {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            if (data == null || data.length == 0) {
                var arr = {};
                arr[id] = [item];
                _this.storage.set('devicesMeasurements', arr);
            }
            else {
                if (data[id]) {
                    data[id].push(item);
                }
                else {
                    data[id] = [item];
                }
                _this.storage.set("devicesMeasurements", data);
            }
        });
    };
    DataServiceProvider.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait..."
        });
        this.loader.present();
    };
    DataServiceProvider.prototype.showAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: title,
            buttons: ['OK']
        });
        alert.present();
    };
    return DataServiceProvider;
}());
DataServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
], DataServiceProvider);

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 180:
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
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 223:
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
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_driver__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bus_track_bus_track__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__semesters_semesters__ = __webpack_require__(451);
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
            _this.storage.get("language").then(function (lang) {
                _this.lang = lang;
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
    DetailsPage.prototype.selectSemester = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__semesters_semesters__["a" /* SemestersPage */]);
    };
    DetailsPage.prototype.tripTrack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__bus_track_bus_track__["a" /* BusTrackPage */]);
    };
    DetailsPage.prototype.driverBehaviour = function () {
        // this.navCtrl.push(DriverPage, {'param1': name});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__driver_driver__["a" /* DriverPage */]);
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/details/details.html"*/'<ion-header>\n  <ion-navbar color="navbarColor">\n    <ion-title>\n      {{ \'DETAILS_PAGE.title\' | translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card>\n		<img [src]="childData.image" onError="this.src=\'assets/imgs/1.png\'">\n		<ion-card-content>\n			<ion-card-title color="mainColor">{{childData.name}}</ion-card-title>\n			<ion-row>\n	        	<!-- <ion-col col-12><br /></ion-col> -->\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.childID\' | translate }}:</h2></ion-col>\n\n	        	<ion-col col-7><h2>{{childData.tag}}</h2></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.childStatus\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf="childData.childLastMsg != undefined">{{childData["childLastMsg"]["status"]}}</h2>\n	        		<h2 *ngIf="childData.childLastMsg == undefined">No Status</h2>\n	        	</ion-col>\n	        	<ion-col> <button ion-button clear color="primary" (click)="selectSemester()">View Grades</button> </ion-col>\n	        	<ion-col col-12><hr /></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busNumber\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7><h2>{{childData.bus}}</h2></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busID\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7><h2>{{childData.bus_id}}</h2></ion-col>\n\n	        	<ion-col col-6><h2>{{ \'DETAILS_PAGE.busTemp\' | translate }}:</h2></ion-col>\n	        	<ion-col col-6><h2>20</h2></ion-col>\n	        	\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busSpeed\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf="childData.childLastMsg?.speed != undefined; else lastMsgSpeed ">\n	        			{{childData["childLastMsg"]["speed"]}}\n	        		</h2>\n	        		<ng-template #lastMsgSpeed>\n	        			<h2 *ngIf="childData.lastMsg?.speed != undefined">{{childData["lastMsg"]["speed"]}}</h2>\n	        			<h2 *ngIf="childData.lastMsg?.speed == undefined">No Reading</h2>\n	        		</ng-template>\n	        	</ion-col>\n	        	<ion-col> <button ion-button clear color="primary" (click)="tripTrack()">Bus Trip Track</button> </ion-col>\n	        	<ion-col col-12><hr /></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.driverName\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] != undefined\'>{{childData["childLastMsg"]?.driverName}}</h2>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] == undefined\'>{{childData["lastMsg"]?.driverName}}</h2>\n	        	</ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.driverPhone\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] != undefined\'>{{childData["childLastMsg"]?.driverPhone}}</h2>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] == undefined\'>{{childData["lastMsg"]?.driverPhone}}</h2>\n	        	</ion-col>\n	        	<ion-col> <button ion-button clear color="primary" (click)="driverBehaviour()">Driver Behaviour</button> </ion-col>\n	        </ion-row>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-list *ngIf="messages.length > 0">\n\n		<h2>{{ \'DETAILS_PAGE.notifications\' | translate }}</h2>\n\n	    <button ion-item *ngFor="let message of messages"  (click)="notificationDetails(message)">\n	    	\n			<ion-icon color="mainColor" *ngIf="message.sid == tag" ios="ios-pricetag-outline" md="md-pricetag" item-start></ion-icon>\n			<ion-icon color="mainColor" *ngIf="rooms.bus.indexOf(message.sid) >= 0" ios="ios-bus-outline" md="md-bus" item-start></ion-icon>\n	      	<ion-icon color="mainColor" *ngIf="rooms.geo == message.sid" ios="ios-home-outline" md="md-home" item-start></ion-icon>\n	        \n	        <h2 *ngIf="message.msg.length == 30 || message.msg.length < 30 ;else msg">{{message.msg}}</h2>\n        	<ng-template #msg><h2>{{message.msg.substr(0, 30) +"..."}}</h2></ng-template>\n\n\n	        <p *ngIf="(message.time | customDate: lang) != message.time; else temp" text-right>\n	          <span>{{ message.time | customDate: lang }}</span>\n	          <span *ngIf="(message.time | customDate: lang).includes(\'day\')">\n	          	, {{message.time | date:\'shortTime\'}}\n	          </span>\n	        </p>\n	        <ng-template #temp>\n	          <p text-right>\n	            {{message.time | date:\'short\'}}\n	          </p>\n	        </ng-template>\n\n	    </button>\n\n	    <button ion-button color="mainColor" clear (click)="moreNotifications()">More Notifications</button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/details/details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverPage = (function () {
    // name: string;
    // data;
    function DriverPage() {
        // "mileage"  		: "Mileage",
        // "safty" 		: "Safty",
        // "fuel" 			: "Fuel efficience"
        // this.data = this.navParams.get('param1');
        // if (this.data["ChildLastMsg"] != undefined) {
        // 	this.name = this.data["childLastMsg"]["driverName"];
        // 	console.log("this.name", this.name)
        // }else{
        // 	this.name = this.data["lastMsg"]["driverName"];
        // 	console.log("this.name", this.name)
        // }
    }
    return DriverPage;
}());
DriverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-driver',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/driver/driver.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'DRIVER_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-header color="mainColor">\n			Day Avarage\n		</ion-card-header>\n		<ion-card-header>\n			Driver Name\n		</ion-card-header>\n		<ion-card-content>\n			<div class="circle"><h2>70</h2></div>\n			<br>\n			<ion-row>\n				<ion-col col-4>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.speed\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>7</h3></ion-col>\n				</ion-col>\n				<ion-col col-4>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.break\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>3</h3></ion-col>\n				</ion-col>\n				<ion-col col-4 id="last">\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.stops\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>5</h3></ion-col>\n				</ion-col>\n			</ion-row>\n			<!-- <ion-row>\n				<ion-col col-6>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.fuel\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>63</h3></ion-col>\n				</ion-col>\n\n				<ion-col col-6>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.mileage\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>80</h3></ion-col>\n				</ion-col>\n			</ion-row> -->\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header color="mainColor">\n			Last 6 Month Avarage\n		</ion-card-header>\n		<ion-card-header>\n			Driver Name\n		</ion-card-header>\n		<ion-card-content>\n			<div class="circle"><h2>80</h2></div>\n			<br>\n			<ion-row>\n				<ion-col col-4>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.speed\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>7</h3></ion-col>\n				</ion-col>\n				<ion-col col-4>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.break\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>3</h3></ion-col>\n				</ion-col>\n				<ion-col col-4 id="last">\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.stops\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>5</h3></ion-col>\n				</ion-col>\n			</ion-row>\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/driver/driver.html"*/,
    }),
    __metadata("design:paramtypes", [])
], DriverPage);

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemestersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_grades_child_grades__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SemestersPage = (function () {
    function SemestersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SemestersPage.prototype.showGrades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__child_grades_child_grades__["a" /* ChildGradesPage */]);
    };
    return SemestersPage;
}());
SemestersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-semesters',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/semesters/semesters.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Semesters</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content" padding>\n\n	<button ion-button color="mainColor" block (click)="showGrades()">\n    	Semester 1\n    </button>\n\n    <button ion-button color="mainColor" block (click)="showGrades()">\n    	Semester 2\n    </button>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/semesters/semesters.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SemestersPage);

//# sourceMappingURL=semesters.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_register_register__ = __webpack_require__(453);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */]);
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    return Register2Page;
}());
Register2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register2',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/register2/register2.html"*/'<ion-content padding class="login-content">\n  <form novalidate (ngSubmit)="onSubmit(user)" [formGroup]="user">\n\n    <h3>{{ \'REGISTER2_PAGE.title\' | translate }}</h3>\n     <ion-item>\n        <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n        <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.name\' | translate }}" formControlName="name">\n        </ion-input>\n      </ion-item>\n\n      <div class="error-container" no-lines *ngIf="( user.get(\'name\').hasError(\'minlength\') || user.get(\'name\').hasError(\'required\') ) && user.get(\'name\').touched">\n\n        <div class="error" *ngIf="user.get(\'name\').hasError(\'required\') && user.get(\'name\').touched">\n          {{ \'ERROR_MESSAGES.register2.name.required\' | translate }}\n        </div>\n        <div class="error" *ngIf="user.get(\'name\').hasError(\'minlength\') && user.get(\'name\').touched">\n          {{ \'ERROR_MESSAGES.register2.name.minlength\' | translate }}\n        </div>\n      </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.email\' | translate }}" formControlName="email"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'email\').hasError(\'required\') || user.get(\'email\').hasError(\'pattern\') ) && user.get(\'email\').touched">\n\n      <div class="error" *ngIf=" user.get(\'email\').hasError(\'required\') && user.get(\'email\').touched">\n        {{ \'ERROR_MESSAGES.register2.email.required\' | translate }}\n      </div>\n\n      <div class="error" *ngIf=" user.get(\'email\').hasError(\'pattern\') && user.get(\'email\').touched">\n        {{ \'ERROR_MESSAGES.register2.email.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="lock"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.password\' | translate }}" formControlName="password"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'password\').hasError(\'required\') || user.get(\'password\').hasError(\'minlength\') || user.get(\'password\').hasError(\'pattern\') ) && user.get(\'password\').touched">\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.required\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'minlength\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.minlength\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'pattern\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="pin"></ion-icon></ion-label>\n      <ion-input type="text" formControlName="address" readonly></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ><ion-icon name="phone-portrait"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.phone\' | translate }}" formControlName="mob"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'mob\').hasError(\'required\') || user.get(\'mob\').hasError(\'pattern\'))&& user.get(\'mob\').touched">\n\n      <div class="error" *ngIf="user.get(\'mob\').hasError(\'required\') && user.get(\'mob\').touched">\n        {{ \'ERROR_MESSAGES.register2.mobile.required\' | translate }}\n      </div>\n      <!-- <div class="error" *ngIf="user.get(\'mob\').hasError(\'minlength\') && user.get(\'mob\').touched">\n        Please enter valid mobile number\n      </div> -->\n\n      <div class="error" *ngIf="user.get(\'mob\').hasError(\'pattern\') && user.get(\'mob\').touched">\n        {{ \'ERROR_MESSAGES.register2.mobile.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <button ion-button block round color="mainColor" [disabled]="!user.valid"><ion-icon name="log-in"></ion-icon>{{ \'REGISTER2_PAGE.register\' | translate }}</button>\n  </form>\n\n  <button ion-button type="button" color="primary" block round style="text-transform: capitalize;" (click)="locateMe()">\n    <ion-icon name="pin"></ion-icon>&nbsp;{{ \'REGISTER2_PAGE.locateMe\' | translate }}\n  </button>\n      \n</ion-content>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/register2/register2.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_register_register__["a" /* RegisterProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_register_register__["a" /* RegisterProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], Register2Page);

//# sourceMappingURL=register2.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(27);
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
    function RegisterProvider(translate) {
        this.translate = translate;
    }
    RegisterProvider.prototype.Register = function (nid, secureCode, location, user) {
        // alert("location"+ JSON.stringify(location))
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
                    console.log("response", JSON.stringify(response));
                    // this.storage.set("token", response.token);
                    resolve(response.token);
                }
                else {
                    _this.translate.get('REGISTER2_PAGE.error').subscribe(function (error) {
                        reject(error);
                    });
                }
            }).fail(function (error) {
                _this.translate.get('REGISTER2_PAGE.error').subscribe(function (error) {
                    reject(error);
                });
            });
        });
    };
    return RegisterProvider;
}());
RegisterProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], RegisterProvider);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
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

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_login__ = __webpack_require__(51);
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
    function MapModalPage(navCtrl, navParams, storage, loadingCtrl, translate, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.loginProvider = loginProvider;
        this.location = navParams.get('param1');
        this.loadMap(this.location["locLat"], this.location["locLong"]);
    }
    MapModalPage.prototype.loadMap = function (x, y) {
        var _this = this;
        // alert("load Mappp")
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
            // alert("map ready")
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
            alert('Map is ready!');
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
        this.presentLoading();
        this.storage.get("userProfile").then(function (user) {
            _this.loginProvider.Login(user.nid, user.password).then(function (token) {
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
                _this.storage.set("userProfile", user);
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
                __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"](settings).done(function (response) {
                    // alert("response"+ JSON.stringify(response))
                    if (response.success) {
                        _this.loader.dismiss();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
                    }
                    else {
                        _this.loader.dismiss();
                        _this.translate.get('MAPMODAL_PAGE.loading').subscribe(function (sesionNotAuthenticated) {
                            // alert(response.message)
                            alert(sesionNotAuthenticated);
                        });
                    }
                }).fail(function (error) {
                    _this.loader.dismiss();
                    _this.translate.get('MAPMODAL_PAGE.loading').subscribe(function (errorOnUpdateAddress) {
                        alert(errorOnUpdateAddress);
                    });
                });
            }).catch(function (error) {
                console.log("error on getting token");
            });
        });
    };
    MapModalPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get('MAPMODAL_PAGE.loading').subscribe(function (loading) {
            _this.loader = _this.loadingCtrl.create({
                content: loading
            });
            _this.loader.present();
        });
    };
    return MapModalPage;
}());
MapModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map-modal',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/map-modal/map-modal.html"*/'<ion-header>\n  <ion-navbar color="navbarColor">\n\n    <ion-toolbar>\n      <ion-title>{{ \'MAPMODAL_PAGE.map\' | translate }}</ion-title>\n      <ion-buttons end>\n        <button ion-button color="light" (click)="dismiss()">\n          {{ \'MAPMODAL_PAGE.save\' | translate }}\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n \n<ion-content>\n  <div id="over_map">\n\n    <ion-searchbar primary [(ngModel)]="searchQuery" show-cancel="true" placeholder="{{ \'MAPMODAL_PAGE.search\' | translate }}"></ion-searchbar>\n    <button ion-button icon-only block (click)="codeAddress()"><ion-icon name="redo"></ion-icon></button>\n  </div>\n  <div id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/map-modal/map-modal.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */]])
], MapModalPage);

//# sourceMappingURL=map-modal.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_children_get_children__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__get_notification_get_notification__ = __webpack_require__(163);
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
                __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"](settings1).done(function (response) {
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
                __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"](settings2).done(function (response) {
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
    return EditProfileProvider;
}());
EditProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_5__get_children_get_children__["a" /* GetChildrenProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__get_notification_get_notification__["a" /* GetNotificationProvider */]])
], EditProfileProvider);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_track_device_track__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyDevicesPage = (function () {
    function MyDevicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyDevicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyDevicesPage');
    };
    MyDevicesPage.prototype.deviceDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__device_track_device_track__["a" /* DeviceTrackPage */]);
    };
    return MyDevicesPage;
}());
MyDevicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-devices',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/my-devices/my-devices.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Devices</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <ion-icon ios="ios-bus" md="md-bus"></ion-icon>\n      </ion-thumbnail>\n      <h3><ion-row><ion-col col-5>1pm</ion-col><ion-col col-7> Giza</ion-col></ion-row></h3>\n      <h3><ion-row><ion-col col-5>1:30pm</ion-col><ion-col col-7> Dokki</ion-col></ion-row></h3>\n      <h3><ion-row><ion-col col-5>2pm</ion-col><ion-col col-7> Mohandseen</ion-col></ion-row></h3>\n      <button ion-button clear item-end (click)="deviceDetails()">View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <ion-icon ios="ios-car" md="md-car"></ion-icon>\n      </ion-thumbnail>\n      <h3><ion-row><ion-col col-5>9am</ion-col><ion-col col-7> Maadi</ion-col></ion-row></h3>\n      <h3><ion-row><ion-col col-5>10am</ion-col><ion-col col-7> Nasr City</ion-col></ion-row></h3>\n      <h3><ion-row><ion-col col-5>7pm</ion-col><ion-col col-7> Maadi</ion-col></ion-row></h3>\n      <button ion-button clear item-end (click)="deviceDetails()">View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/my-devices/my-devices.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MyDevicesPage);

//# sourceMappingURL=my-devices.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceTrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceTrackPage = (function () {
    function DeviceTrackPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DeviceTrackPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    DeviceTrackPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            var infoWindow = new google.maps.InfoWindow({
                content: contentString
            });
            _this.map.addMarker({
                title: 'Location',
                icon: 'red',
                animation: 'DROP',
                position: {
                    lat: 43.0741904,
                    lng: -89.3809802
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    infoWindow.open(marker);
                });
            });
        });
        var contentString = "\n        <ion-fab>\n          <button ion-fab color=\"danger\"><ion-icon name=\"md-share\"></ion-icon></button>\n          <ion-fab-list side=\"top\">\n            <button ion-fab color=\"primary\"><ion-icon name=\"logo-vimeo\"></ion-icon></button>\n          </ion-fab-list>\n          <ion-fab-list side=\"bottom\">\n            <button ion-fab color=\"secondary\"><ion-icon name=\"logo-facebook\"></ion-icon></button>\n          </ion-fab-list>\n          <ion-fab-list side=\"left\">\n            <button ion-fab color=\"light\"><ion-icon name=\"logo-googleplus\"></ion-icon></button>\n          </ion-fab-list>\n          <ion-fab-list side=\"right\">\n            <button ion-fab color=\"dark\"><ion-icon name=\"logo-twitter\"></ion-icon></button>\n          </ion-fab-list>\n        </ion-fab>\n      ";
    };
    return DeviceTrackPage;
}());
DeviceTrackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-device-track',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/device-track/device-track.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>device-track</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div id="map">\n    \n  </div>\n  \n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <ion-icon ios="ios-bus" md="md-bus"></ion-icon>\n      </ion-thumbnail>\n      <h2>My Bus</h2>\n      <ion-fab right>\n        <button class="action" ion-fab item-end>Actions</button>\n        <ion-fab-list side="left">\n          <button ion-fab><ion-icon name="pause"></ion-icon></button>\n          <button ion-fab><ion-icon name="help"></ion-icon></button>\n          <button ion-fab><ion-icon name="information"></ion-icon></button>\n          <button ion-fab><ion-icon name="play"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <ion-icon ios="ios-car" md="md-car"></ion-icon>\n      </ion-thumbnail>\n      <h2>Car</h2>\n      <ion-fab right>\n        <button class="action" ion-fab item-end>Actions</button>\n        <ion-fab-list side="left">\n          <button ion-fab><ion-icon name="pause"></ion-icon></button>\n          <button ion-fab><ion-icon name="help"></ion-icon></button>\n          <button ion-fab><ion-icon name="information"></ion-icon></button>\n          <button ion-fab><ion-icon name="play"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/device-track/device-track.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], DeviceTrackPage);

//# sourceMappingURL=device-track.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register1_register1__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__intro_intro__ = __webpack_require__(73);
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
    function HomePage(navCtrl, platform, storage, translateService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.storage = storage;
        this.translateService = translateService;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    HomePage.prototype.backToIntro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__intro_intro__["a" /* IntroPage */]);
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
        this.storage.set("language", language);
    };
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToRegistration = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register1_register1__["a" /* Register1Page */]);
    };
    HomePage.prototype.segmentChanged = function (event) {
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
        selector: 'page-home',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/home/home.html"*/'<ion-content padding class="home">\n	<ion-item>\n		<ion-label>{{ \'LANGUAGE.selectLanguage\' | translate }}:</ion-label>\n		<ion-select [(ngModel)]="lang" (ngModelChange)="changeLanguage($event)"\n				okText="{{ \'LANGUAGE.ok\' | translate }}" cancelText="{{ \'LANGUAGE.cancel\' | translate }}">\n\n			<ion-option value="en">{{ \'LANGUAGE.en\' | translate }}</ion-option>\n			<ion-option value="ar">{{ \'LANGUAGE.ar\' | translate }}</ion-option>\n		</ion-select>\n	</ion-item>\n\n    <button ion-button color="mainColor" round block (click)="goToLogin()">\n    	<ion-icon name="ios-log-in"></ion-icon>&nbsp;{{ \'HOME_PAGE.login\' | translate }}\n    </button>\n\n    <h3>{{ \'HOME_PAGE.or\' | translate }}</h3>\n\n    <button ion-button color="primary" round block (click)="goToRegistration()">\n    	<ion-icon name="ios-log-in"></ion-icon>&nbsp;{{ \'HOME_PAGE.register\' | translate }}\n    </button>\n\n    <button ion-button icon-start color="light" clear (click)="backToIntro()">\n     	<ion-icon name="arrow-round-back"></ion-icon>&nbsp; {{ \'HOME_PAGE.back\' | translate }}\n    </button>\n</ion-content>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intro_intro__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserLoginPage = UserLoginPage_1 = (function () {
    function UserLoginPage(alertCtrl, navCtrl, menuCtrl, storage, loadingCtrl, authService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
    }
    UserLoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    UserLoginPage.prototype.backToIntro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__intro_intro__["a" /* IntroPage */]);
    };
    UserLoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Check your connection and make sure that UserName and Password are correct, Please Try Again!',
            buttons: ['OK']
        });
        alert.present();
    };
    UserLoginPage.prototype.login = function () {
        var _this = this;
        this.presentLoading();
        // this.authService.Login(this.tenant, this.username, this.password, 1).then(resp=>{
        this.authService.Login('sam', 'leesmasmalee@gmail.com', 'myhome123', 1).then(function (resp) {
            if (resp) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* UserHomePage */]);
                _this.loader.dismiss();
            }
            else {
                _this.navCtrl.push(UserLoginPage_1);
                _this.loader.dismiss();
                _this.username = "";
                _this.password = "";
                _this.showAlert();
            }
        }).catch(function (error) {
            _this.navCtrl.push(UserLoginPage_1);
            _this.loader.dismiss();
            _this.username = "";
            _this.password = "";
            _this.showAlert();
        });
    };
    UserLoginPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait..."
        });
        this.loader.present();
    };
    return UserLoginPage;
}());
UserLoginPage = UserLoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userlogin',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/cumulocity/userlogin/userlogin.html"*/'\n<ion-content class="login">\n  <div class="login-box">\n    <form #loginForm="ngForm" (ngSubmit)="login()">\n      <ion-row>\n        <ion-col>\n          <h3>Login</h3>\n          <ion-label>Please Enter Your<br> Cumulocity Credentials</ion-label>\n\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Tenant" name="tenant" [(ngModel)]="tenant" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="username" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n            <button ion-button type="submit" [disabled]="!loginForm.form.valid"><ion-icon ios="ios-exit" md="md-exit"></ion-icon> Login</button>\n\n          </ion-list>\n\n        </ion-col>\n      </ion-row>\n    </form>\n    <button ion-button icon-start color="light" clear (click)="backToIntro()">\n      <ion-icon name="arrow-round-back"></ion-icon>&nbsp; Back\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/cumulocity/userlogin/userlogin.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], UserLoginPage);

var UserLoginPage_1;
//# sourceMappingURL=userlogin.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DevicesPage = (function () {
    function DevicesPage(navCtrl, storage, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.dataService = dataService;
        this.storage.get('devices').then(function (data) {
            _this.devices = data;
        });
    }
    DevicesPage.prototype.addDevice = function (device) {
        var _this = this;
        this.storage.get("devices").then(function (devices) {
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var x = devices_1[_i];
                if (x["id"] == device["id"]) {
                    x["disableBTN"] = true;
                }
            }
            _this.storage.set("devices", devices);
        });
        this.dataService.presentLoading();
        this.storage.get('userData').then(function (data) {
            _this.token = data.token;
            _this.tenant = data.tenant;
            var len = device["c8y_SupportedMeasurements"].length;
            var _loop_1 = function (i) {
                _this.dataService.getDataService(_this.tenant, device["id"], device["c8y_SupportedMeasurements"][i], _this.token, device["c8y_SupportedMeasurements"][i], device["name"])
                    .then(function (flag) {
                    if (i == len - 1) {
                        _this.dataService.loader.dismiss();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* UserHomePage */]);
                    }
                }).catch(function (error) {
                    _this.dataService.loader.dismiss();
                });
            };
            for (var i = 0; i < len; i++) {
                _loop_1(i);
            }
        });
    };
    return DevicesPage;
}());
DevicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-devices',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/cumulocity/devices/devices.html"*/'\n<ion-header>\n\n  <ion-navbar>\n  <ion-title>Devices</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="content">\n  <ion-list>\n    <button ion-item detail-none *ngFor="let device of devices; let i=index" (click)="addDevice(device)" [disabled]="device[\'disableBTN\']">\n        <p ion-text><span class="devID">{{device.id}}</span> {{device.name}}</p>\n      <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/cumulocity/devices/devices.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */]])
], DevicesPage);

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(27);
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
            __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"](settings).then(function (response) {
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
    return LoginProvider;
}());
LoginProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], LoginProvider);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(585);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_native__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notification_notification__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_details_details__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_children_children__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register1_register1__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_register2_register2__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_map_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_map_modal_map_modal__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_messages_messages__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_driver_driver__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_bus_track_bus_track__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_child_grades_child_grades__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_semesters_semesters__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_my_devices_my_devices__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_device_track_device_track__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_popover_popover__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_auth_service_auth_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_data_service_data_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_cumulocity_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_cumulocity_userlogin_userlogin__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_cumulocity_devices_devices__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_get_notification_get_notification__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_get_children_get_children__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_register_register__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pipes_date_date__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_reset_password_reset_password__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_edit_profile_edit_profile__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































/**** cumuulocity ***/






// import { DeviceDataPage } from '../pages/cumulocity/device-data/device-data';
// import { ItemDataPage } from '../pages/cumulocity/item-data/item-data';
/** wialon **/







function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
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
            __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_register1_register1__["a" /* Register1Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_register2_register2__["a" /* Register2Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_children_children__["a" /* ChildrenPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_map_modal_map_modal__["a" /* MapModalPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_driver_driver__["a" /* DriverPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_child_grades_child_grades__["a" /* ChildGradesPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_bus_track_bus_track__["a" /* BusTrackPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_semesters_semesters__["a" /* SemestersPage */],
            __WEBPACK_IMPORTED_MODULE_45__pipes_date_date__["a" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_39__pages_cumulocity_userlogin_userlogin__["a" /* UserLoginPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_cumulocity_home_home__["a" /* UserHomePage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_cumulocity_devices_devices__["a" /* DevicesPage */],
            // DeviceDataPage,
            // ItemDataPage,
            __WEBPACK_IMPORTED_MODULE_35__components_popover_popover__["a" /* PopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_33__pages_my_devices_my_devices__["a" /* MyDevicesPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_device_track_device_track__["a" /* DeviceTrackPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
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
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_register1_register1__["a" /* Register1Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_register2_register2__["a" /* Register2Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_children_children__["a" /* ChildrenPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_map_modal_map_modal__["a" /* MapModalPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_driver_driver__["a" /* DriverPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_child_grades_child_grades__["a" /* ChildGradesPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_bus_track_bus_track__["a" /* BusTrackPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_semesters_semesters__["a" /* SemestersPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_cumulocity_userlogin_userlogin__["a" /* UserLoginPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_cumulocity_home_home__["a" /* UserHomePage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_cumulocity_devices_devices__["a" /* DevicesPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_my_devices_my_devices__["a" /* MyDevicesPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_device_track_device_track__["a" /* DeviceTrackPage */]
            // DeviceDataPage,
            // ItemDataPage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_native__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__["a" /* BackgroundMode */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_41__providers_get_notification_get_notification__["a" /* GetNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_42__providers_get_children_get_children__["a" /* GetChildrenProvider */],
            __WEBPACK_IMPORTED_MODULE_43__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_44__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_46__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */],
            __WEBPACK_IMPORTED_MODULE_47__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_37__providers_data_service_data_service__["a" /* DataServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__children_children__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register1_register1__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__ = __webpack_require__(454);
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
        selector: 'page-login',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/login/login.html"*/'<ion-content class="login-content">\n  <div *ngIf="!flag">\n    <form #loginForm="ngForm" (ngSubmit)="login()">\n      <ion-row>\n        <ion-col>\n          <h3>{{ \'LOGIN_PAGE.title\' | translate }}</h3>\n          <ion-list inset>\n            <ion-item>\n              <ion-label> <ion-icon name="person"></ion-icon></ion-label>\n              <ion-input type="text" placeholder="{{ \'LOGIN_PAGE.idNumber\' | translate }}" name="id" [(ngModel)]="id" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label> <ion-icon name="lock"></ion-icon></ion-label>\n              <ion-input type="password" placeholder="{{ \'LOGIN_PAGE.password\' | translate }}" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n            <button ion-button icon-start type="submit" color="primary" block round [disabled]="!loginForm.form.valid">\n              <ion-icon name="log-in"></ion-icon>&nbsp;{{ \'LOGIN_PAGE.login\' | translate }}\n            </button>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n    <button ion-button icon-start color="light" clear (click)="changeFlag()">\n      <ion-icon name="arrow-round-forward"></ion-icon>&nbsp;{{ \'LOGIN_PAGE.forgetPassword\' | translate }}\n    </button><br />\n    <button ion-button icon-start color="light" (click)="createAccount()" clear>\n      <ion-icon name="arrow-round-forward"></ion-icon>&nbsp;{{ \'LOGIN_PAGE.dontHaveAccount\' | translate }}\n    </button>\n  </div>\n\n\n  <div *ngIf="flag">\n    <form #resetForm="ngForm" (ngSubmit)="resetPassword()">\n      <ion-row>\n        <ion-col>\n          <h3>{{ \'LOGIN_PAGE.resetPassword\' | translate }}</h3>\n          <ion-list inset>\n            <ion-item>\n              <ion-label><ion-icon name="person"></ion-icon></ion-label>\n              <ion-input type="text" placeholder="{{ \'LOGIN_PAGE.idNumber\' | translate }}" name="nid" [(ngModel)]="nid" required></ion-input>\n            </ion-item>\n\n            <button ion-button icon-start type="submit" color="mainColor" block round \n            [disabled]="!resetForm.form.valid">\n              <ion-icon name="log-in"></ion-icon>&nbsp;{{ \'LOGIN_PAGE.send\' | translate }}\n            </button>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__["a" /* GetChildrenProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__["a" /* GetChildrenProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__children_children__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cumulocity_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_get_children_get_children__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../home/home';

// import { UserLoginPage } from '../cumulocity/userlogin/userlogin';




var IntroPage = (function () {
    function IntroPage(navCtrl, menuCtrl, storage, translateService, platform, authService, loginProvider, getChildrenProvider) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.translateService = translateService;
        this.platform = platform;
        this.authService = authService;
        this.loginProvider = loginProvider;
        this.getChildrenProvider = getChildrenProvider;
    }
    IntroPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    IntroPage.prototype.mySensors = function () {
        var _this = this;
        this.authService.Login('sam', 'leesmasmalee@gmail.com', 'myhome123', 1).then(function (resp) {
            // console.log("resp", resp)
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cumulocity_home_home__["a" /* UserHomePage */]);
        });
        // this.storage.get("devices").then((data)=>{
        //   this.storage.get("userData").then(user=>{
        //     if (user != null && data != null) {
        // 			this.navCtrl.setRoot(UserHomePage);
        // 		}else{
        // 			this.navCtrl.setRoot(UserLoginPage);
        // 		}
        // 	})
        // });
    };
    IntroPage.prototype.busTrackingApp = function () {
        var _this = this;
        this.loginProvider.Login("12345", "Mh12345").then(function (token) {
            _this.getChildrenProvider.getAllChildren(token).then(function (flag) {
                if (flag) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__children_children__["a" /* ChildrenPage */]);
                    _this.storage.set("language", "en");
                    _this.platform.setDir('ltr', true);
                }
            }).catch(function (error1) {
                alert(error1);
            });
        }).catch(function (error2) {
            alert(error2);
        });
        //****************//
        // this.storage.ready().then(()=>{
        //   this.storage.get("children").then((data)=>{
        //     if(data != null){
        //     	this.storage.get("language").then(lang => {
        //     		if (lang === 'ar') {
        //     			this.platform.setDir('rtl', true);
        //     		}else{
        //     			this.platform.setDir('ltr', true);
        //     		}
        //     		this.translateService.use(lang);
        //     	});
        //     	this.navCtrl.setRoot(ChildrenPage);
        //     }else{
        // 			this.storage.set("language", "en");
        // 			this.platform.setDir('ltr', true);
        // 			this.navCtrl.setRoot(HomePage);
        //     }
        //   });
        // });
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/intro/intro.html"*/'<ion-content class="content" padding>\n	<h3>MW3 PLATFORM</h3>\n	<h3>My Apps</h3>\n	<ion-list>\n		<ion-item (click)="mySensors()">\n			<ion-avatar item-start>\n			  <img src="assets/imgs/home.jpeg">\n			</ion-avatar>\n			<h2>My Home</h2>\n		</ion-item>\n		<ion-item (click)="busTrackingApp()">\n			<ion-avatar item-start>\n			  <img src="assets/imgs/icon.png">\n			</ion-avatar>\n			<h2>My School Bus</h2>\n		</ion-item>\n	</ion-list>\n	<h3>Other Apps</h3>\n	<ion-list class="otherApps">\n		<ion-item>\n			<ion-avatar item-start>\n			  <img src="assets/imgs/home.png">\n			</ion-avatar>\n			<h2>Home Safe</h2>\n			<a class="download">Download</a>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n			  <img src="assets/imgs/freeTracking.jpeg">\n			</ion-avatar>\n			<h2>Free Tracking</h2>\n			<a class="download">Download</a>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n			  <img src="assets/imgs/logistics.png">\n			</ion-avatar>\n			<h2>Logistics</h2>\n			<a class="download">Download</a>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n			  <img src="assets/imgs/crm.png">\n			</ion-avatar>\n			<h2>CRM</h2>\n			<a class="download">Download</a>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_get_children_get_children__["a" /* GetChildrenProvider */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_children_children__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_messages_messages__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_devices_my_devices__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__ = __webpack_require__(73);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__["a" /* IntroPage */];
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
        });
        this.pages = [
            { icon: 'contacts', title: 'CHILDREN_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_7__pages_children_children__["a" /* ChildrenPage */] },
            { icon: 'notifications', title: 'NOTIFICATIONS_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { icon: 'chatboxes', title: 'MESSAGES_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_10__pages_messages_messages__["a" /* MessagesPage */] },
            { icon: 'person', title: 'PROFILE_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */] },
            { icon: 'build', title: 'My Devices', component: __WEBPACK_IMPORTED_MODULE_11__pages_my_devices_my_devices__["a" /* MyDevicesPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.userLogout = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]);
        });
    };
    MyApp.prototype.switchMySensors = function () {
        var _this = this;
        this.storage.get("language").then(function (lang) {
            if (lang === 'ar') {
                _this.platform.setDir('ltr', true);
                _this.platform.setDir('rtl', false);
            }
        });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__["a" /* IntroPage */]);
    };
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
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/app/app.html"*/'<ion-menu *ngIf="this.platform.dir()===\'rtl\'" side="right" [content]="content">\n  <ion-header>\n    <ion-toolbar style="min-height: 150px;">\n      <ion-title>{{ \'APP_PAGE.menu\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{ p.title | translate }}\n      </button>\n      <button menuClose ion-item (click)="switchMySensors()">\n        <ion-icon name="swap"></ion-icon> {{ \'APP_PAGE.switchApp\' | translate }}\n      </button>\n      <!-- <button menuClose ion-item (click)="userLogout()">\n        <ion-icon name="exit"></ion-icon> {{ \'APP_PAGE.logout\' | translate }}\n      </button> -->\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu *ngIf="this.platform.dir()===\'ltr\'" side="left" [content]="content">\n  <ion-header>\n    <ion-toolbar style="min-height: 150px;">\n      <ion-title>{{ \'APP_PAGE.menu\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{ p.title | translate }}\n      </button>\n      <button menuClose ion-item (click)="switchMySensors()">\n        <ion-icon name="swap"></ion-icon> {{ \'APP_PAGE.switchApp\' | translate }}\n      </button>\n      <!-- <button menuClose ion-item (click)="userLogout()">\n        <ion-icon name="exit"></ion-icon> {{ \'APP_PAGE.logout\' | translate }}\n      </button> -->\n    </ion-list>\n  </ion-content>\n  \n  <ion-footer>\n  <ion-toolbar>\n    <ion-title>v1.3.2</ion-title>\n  </ion-toolbar>\n</ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopoverComponent = (function () {
    function PopoverComponent() {
        console.log('Hello PopoverComponent Component');
        this.text = 'Hello World';
    }
    return PopoverComponent;
}());
PopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'popover',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/components/popover/popover.html"*/'\n<div>\n  <ion-list>\n    <ion-item (click)="sayHello()">\n      Add\n    </ion-item>\n    <ion-item (click)="sayHello()">\n      Sort\n    </ion-item>\n    <ion-item (click)="sayHello()">\n      Delete\n    </ion-item>\n  </ion-list>\n</div>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/components/popover/popover.html"*/
    }),
    __metadata("design:paramtypes", [])
], PopoverComponent);

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_ar__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_ar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_locale_ar__);
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
        if (args[0]) {
            __WEBPACK_IMPORTED_MODULE_1_moment__["locale"](args[0]);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_moment__["locale"]('en');
        }
        if (myDate.getFullYear() === newDate.getFullYear() && newDate.getMonth() === newDate.getMonth()) {
            if (myDate.getDate() === newDate.getDate()) {
                return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
            }
            else if (newDate.getDate() >= myDate.getDate() && myDate.getDate() >= newDate.getDate() - 6) {
                return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
            }
            else {
                // return value
                return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format('l, h:mm a');
            }
        }
        else {
            // return value
            return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format('l, h:mm a');
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

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 462,
	"./af.js": 462,
	"./ar": 169,
	"./ar-dz": 463,
	"./ar-dz.js": 463,
	"./ar-kw": 464,
	"./ar-kw.js": 464,
	"./ar-ly": 465,
	"./ar-ly.js": 465,
	"./ar-ma": 466,
	"./ar-ma.js": 466,
	"./ar-sa": 467,
	"./ar-sa.js": 467,
	"./ar-tn": 468,
	"./ar-tn.js": 468,
	"./ar.js": 169,
	"./az": 469,
	"./az.js": 469,
	"./be": 470,
	"./be.js": 470,
	"./bg": 471,
	"./bg.js": 471,
	"./bm": 472,
	"./bm.js": 472,
	"./bn": 473,
	"./bn.js": 473,
	"./bo": 474,
	"./bo.js": 474,
	"./br": 475,
	"./br.js": 475,
	"./bs": 476,
	"./bs.js": 476,
	"./ca": 477,
	"./ca.js": 477,
	"./cs": 478,
	"./cs.js": 478,
	"./cv": 479,
	"./cv.js": 479,
	"./cy": 480,
	"./cy.js": 480,
	"./da": 481,
	"./da.js": 481,
	"./de": 482,
	"./de-at": 483,
	"./de-at.js": 483,
	"./de-ch": 484,
	"./de-ch.js": 484,
	"./de.js": 482,
	"./dv": 485,
	"./dv.js": 485,
	"./el": 486,
	"./el.js": 486,
	"./en-au": 487,
	"./en-au.js": 487,
	"./en-ca": 488,
	"./en-ca.js": 488,
	"./en-gb": 489,
	"./en-gb.js": 489,
	"./en-ie": 490,
	"./en-ie.js": 490,
	"./en-nz": 491,
	"./en-nz.js": 491,
	"./eo": 492,
	"./eo.js": 492,
	"./es": 493,
	"./es-do": 494,
	"./es-do.js": 494,
	"./es-us": 495,
	"./es-us.js": 495,
	"./es.js": 493,
	"./et": 496,
	"./et.js": 496,
	"./eu": 497,
	"./eu.js": 497,
	"./fa": 498,
	"./fa.js": 498,
	"./fi": 499,
	"./fi.js": 499,
	"./fo": 500,
	"./fo.js": 500,
	"./fr": 501,
	"./fr-ca": 502,
	"./fr-ca.js": 502,
	"./fr-ch": 503,
	"./fr-ch.js": 503,
	"./fr.js": 501,
	"./fy": 504,
	"./fy.js": 504,
	"./gd": 505,
	"./gd.js": 505,
	"./gl": 506,
	"./gl.js": 506,
	"./gom-latn": 507,
	"./gom-latn.js": 507,
	"./gu": 508,
	"./gu.js": 508,
	"./he": 509,
	"./he.js": 509,
	"./hi": 510,
	"./hi.js": 510,
	"./hr": 511,
	"./hr.js": 511,
	"./hu": 512,
	"./hu.js": 512,
	"./hy-am": 513,
	"./hy-am.js": 513,
	"./id": 514,
	"./id.js": 514,
	"./is": 515,
	"./is.js": 515,
	"./it": 516,
	"./it.js": 516,
	"./ja": 517,
	"./ja.js": 517,
	"./jv": 518,
	"./jv.js": 518,
	"./ka": 519,
	"./ka.js": 519,
	"./kk": 520,
	"./kk.js": 520,
	"./km": 521,
	"./km.js": 521,
	"./kn": 522,
	"./kn.js": 522,
	"./ko": 523,
	"./ko.js": 523,
	"./ky": 524,
	"./ky.js": 524,
	"./lb": 525,
	"./lb.js": 525,
	"./lo": 526,
	"./lo.js": 526,
	"./lt": 527,
	"./lt.js": 527,
	"./lv": 528,
	"./lv.js": 528,
	"./me": 529,
	"./me.js": 529,
	"./mi": 530,
	"./mi.js": 530,
	"./mk": 531,
	"./mk.js": 531,
	"./ml": 532,
	"./ml.js": 532,
	"./mr": 533,
	"./mr.js": 533,
	"./ms": 534,
	"./ms-my": 535,
	"./ms-my.js": 535,
	"./ms.js": 534,
	"./mt": 536,
	"./mt.js": 536,
	"./my": 537,
	"./my.js": 537,
	"./nb": 538,
	"./nb.js": 538,
	"./ne": 539,
	"./ne.js": 539,
	"./nl": 540,
	"./nl-be": 541,
	"./nl-be.js": 541,
	"./nl.js": 540,
	"./nn": 542,
	"./nn.js": 542,
	"./pa-in": 543,
	"./pa-in.js": 543,
	"./pl": 544,
	"./pl.js": 544,
	"./pt": 545,
	"./pt-br": 546,
	"./pt-br.js": 546,
	"./pt.js": 545,
	"./ro": 547,
	"./ro.js": 547,
	"./ru": 548,
	"./ru.js": 548,
	"./sd": 549,
	"./sd.js": 549,
	"./se": 550,
	"./se.js": 550,
	"./si": 551,
	"./si.js": 551,
	"./sk": 552,
	"./sk.js": 552,
	"./sl": 553,
	"./sl.js": 553,
	"./sq": 554,
	"./sq.js": 554,
	"./sr": 555,
	"./sr-cyrl": 556,
	"./sr-cyrl.js": 556,
	"./sr.js": 555,
	"./ss": 557,
	"./ss.js": 557,
	"./sv": 558,
	"./sv.js": 558,
	"./sw": 559,
	"./sw.js": 559,
	"./ta": 560,
	"./ta.js": 560,
	"./te": 561,
	"./te.js": 561,
	"./tet": 562,
	"./tet.js": 562,
	"./th": 563,
	"./th.js": 563,
	"./tl-ph": 564,
	"./tl-ph.js": 564,
	"./tlh": 565,
	"./tlh.js": 565,
	"./tr": 566,
	"./tr.js": 566,
	"./tzl": 567,
	"./tzl.js": 567,
	"./tzm": 568,
	"./tzm-latn": 569,
	"./tzm-latn.js": 569,
	"./tzm.js": 568,
	"./uk": 570,
	"./uk.js": 570,
	"./ur": 571,
	"./ur.js": 571,
	"./uz": 572,
	"./uz-latn": 573,
	"./uz-latn.js": 573,
	"./uz.js": 572,
	"./vi": 574,
	"./vi.js": 574,
	"./x-pseudo": 575,
	"./x-pseudo.js": 575,
	"./yo": 576,
	"./yo.js": 576,
	"./zh-cn": 577,
	"./zh-cn.js": 577,
	"./zh-hk": 578,
	"./zh-hk.js": 578,
	"./zh-tw": 579,
	"./zh-tw.js": 579
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
webpackContext.id = 919;

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_details__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_login_login__ = __webpack_require__(51);
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
    function ChildrenPage(navCtrl, storage, backgroundMode, platform, getNotificationProvider, loginProvider, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.backgroundMode = backgroundMode;
        this.platform = platform;
        this.getNotificationProvider = getNotificationProvider;
        this.loginProvider = loginProvider;
        this.menuCtrl = menuCtrl;
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
    ChildrenPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true);
    };
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
            _this.storage.get("topics").then(function (topics) {
                _this.socket.emit("set", { "topics": topics });
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
        this.storage.get("userProfile").then(function (user) {
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
        selector: 'page-children',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/children/children.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'CHILDREN_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="std" *ngFor="let child of children">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="child.image" onError="this.src=\'assets/imgs/1.png\'">\n      </ion-avatar>\n      \n      <ion-row>\n        <ion-col col-5><span>{{ \'CHILDREN_PAGE.name\' | translate }}:</span></ion-col>\n        <ion-col col-7><span class="chData">{{child.name}}</span></ion-col>\n        <ion-col col-5><span>{{ \'CHILDREN_PAGE.status\' | translate }}: </span></ion-col>\n        <ion-col col-7>\n          <span class="chData"> {{ child.childLastMsg?.length > 0 ? child.childLastMsg.status : \'No Status\'}}</span>\n          <!-- <span class="chData" *ngIf="child.childLastMsg?.length > 0">{{child.childLastMsg?.status}}</span>\n          <span class="chData" *ngIf="child.childLastMsg?.length == 0">No Status</span> -->\n        </ion-col>\n      </ion-row>\n      <button ion-button color="mainColor" (click)="childDetails(child.tag, child)" >{{ \'CHILDREN_PAGE.details\' | translate }}</button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/children/children.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__["a" /* GetNotificationProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__["a" /* BackgroundMode */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__["a" /* GetNotificationProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], ChildrenPage);

//# sourceMappingURL=children.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__child_grades_child_grades__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bus_track_bus_track__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_messages__ = __webpack_require__(162);
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
    function NotificationsPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.items = [];
        this.newDate = new Date();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var msg = [];
        this.storage.get("rooms").then(function (data) {
            _this.rooms = data;
        });
        this.storage.get("language").then(function (lang) {
            _this.lang = lang;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */], { 'param1': item, 'param2': this.lang });
    };
    NotificationsPage.prototype.childScore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__child_grades_child_grades__["a" /* ChildGradesPage */]);
    };
    NotificationsPage.prototype.busTrack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__bus_track_bus_track__["a" /* BusTrackPage */]);
    };
    NotificationsPage.prototype.showMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__messages_messages__["a" /* MessagesPage */]);
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'NOTIFICATIONS_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item (click)="childScore()">\n      <ion-icon color="mainColor" ios="ios-paper" md="md-paper" item-start></ion-icon>\n      <h3>{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: Ahmed</h3>\n      <h2>New Test Score</h2>\n      <p text-right> <span>{{ newDate | customDate: lang }}</span> </p>\n    </button>\n    <button ion-item (click)="busTrack()">\n      <ion-icon color="mainColor" ios="ios-bus-outline" md="md-bus" item-start></ion-icon>\n      <h3>{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: Ahmed</h3>\n      <h2>Bus out of track</h2>\n      <p text-right> <span>{{ newDate | customDate: lang }}</span> </p>\n    </button>\n    <button ion-item (click)="showMessage()">\n      <ion-icon color="mainColor" ios="ios-chatboxes" md="md-chatboxes" item-start></ion-icon>\n      <h3>{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: Ahmed</h3>\n      <h2>New Message form School</h2>\n      <p text-right> <span>{{ newDate | customDate: lang }}</span> </p>\n    </button>\n\n    <button ion-item *ngFor="let item of items" (click)="notificationDetails(item)">\n      <ion-icon \n        color="mainColor" *ngIf="rooms.tag.indexOf(item.sid) >= 0" ios="ios-pricetag-outline" md="md-pricetag" item-start>\n      </ion-icon>\n\n      <ion-icon\n        color="mainColor" *ngIf="rooms.bus.indexOf(item.sid) >= 0" ios="ios-bus-outline" md="md-bus" item-start>\n      </ion-icon>\n\n      <ion-icon\n        color="mainColor" *ngIf="rooms.geo == item.sid" ios="ios-home-outline" md="md-home" item-start>\n      </ion-icon>\n\n      <h3 *ngIf="item.name">{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: {{item.name.toString()}}</h3>\n\n      <h2 *ngIf="item.msg.length == 30 || item.msg.length < 30;else msg">{{item.msg}}</h2>\n\n      <ng-template #msg><h2>{{item.msg.substr(0, 30) +"..."}}</h2></ng-template>\n      \n      <p *ngIf="(item.time | customDate: lang) != item.time; else temp" text-right>\n        <span>{{ item.time | customDate: lang }}</span>\n        <span *ngIf="(item.time | customDate: lang).includes(\'day\')">, {{item.time | date:\'shortTime\'}}</span>\n      </p>\n\n      <ng-template #temp>\n        <p text-right>{{item.time | date:\'short\'}}</p>\n      </ng-template>\n    </button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/notifications/notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetChildrenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
    // parent:any = {'loc':{}};
    function GetChildrenProvider(storage, loadingCtrl, translate) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.children = [];
        this.rooms = {};
        this.roomsData = {};
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
            __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"](settings).done(function (response) {
                if (response.success) {
                    _this.children = [];
                    _this.topics = [];
                    _this.rooms = {};
                    _this.roomsData = {};
                    _this.storage.get("userProfile").then(function (parent) {
                        parent.nid = response.data['nid'];
                        parent.name = response.data['name'];
                        parent.email = response.data['email'];
                        parent.phone = response.data['phone'];
                        parent.address = response.data['loc']['locDesc'];
                        parent.loc["locLat"] = response.data['loc']['locLat'];
                        parent.loc["locLong"] = response.data['loc']['locLong'];
                        _this.storage.set("userProfile", parent);
                    });
                    var geo_id_1 = response.data['loc']['fence_id'];
                    _this.rooms.geo = geo_id_1;
                    _this.roomsData[geo_id_1] = [];
                    _this.topics.push(geo_id_1);
                    __WEBPACK_IMPORTED_MODULE_4_jquery__["each"](response.data.children, function (index, value) {
                        value["tag"] = index;
                        value["image"] = "https://hst-api.wialon.com/avl_tag_image/" + value.source + "/" + value.id + "/100/100/2490508405.png";
                        _this.roomsData[index] = [value.name];
                        _this.topics.push(index);
                        if (_this.topics.indexOf(value.bus_id) == -1) {
                            _this.topics.push(value.bus_id);
                        }
                        else {
                            console.log("else");
                        }
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
                        _this.storage.set("topics", _this.topics);
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
        var _this = this;
        this.translate.get('LOGIN_PAGE.loading').subscribe(function (content) {
            _this.loader = _this.loadingCtrl.create({
                content: content
            });
            _this.loader.present();
        });
    };
    return GetChildrenProvider;
}());
GetChildrenProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], GetChildrenProvider);

//# sourceMappingURL=get-children.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intro_intro__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userlogin_userlogin__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devices_devices__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserHomePage = (function () {
    function UserHomePage(navCtrl, alertCtrl, viewCtrl, storage, menuCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.items = [];
        this.ids = [];
        this.names = {};
        this.icons = { "c8y_TemperatureMeasurement": "ios-thermometer",
            "c8y_LightMeasurement": "md-bulb",
            "c8y_AccelerationMeasurement": "md-compass",
            "c8y_Position": "pin",
            "c8y_DistanceMeasurement": "walk",
            "c8y_Mobile": "phone-portrait"
        };
        this.menuCtrl.enable(false);
        this.viewCtrl.showBackButton(false);
        this.storage.get("devices").then(function (devices) {
            _this.devices = devices;
            _this.diplayItems();
        });
        setTimeout(function () {
            _this.storage.get("userData").then(function (data) {
                var tenant = data.tenant;
                var token = data.token;
                if (_this.items.length > 0) {
                    for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                        var item = _a[_i];
                        var _loop_1 = function (sensor) {
                            // this.dataService.updateData(tenant,sensor.deviceID, sensor.type, token, sensor.type, sensor.name ).then((resp)=>{
                            //   if (sensor.type.indexOf("Position") >= 0) {
                            //     if (sensor["lat"] != resp["lat"]) {
                            //       sensor["lat"] = resp["lat"]
                            //     }else if (sensor["lng"] != resp["lng"]){
                            //       sensor["lng"] = resp["lng"]
                            //     }
                            //   }
                            //   else{
                            //     if (sensor.value != resp[Object.keys(resp)[0]]["value"]) {
                            //       sensor.value = resp[Object.keys(resp)[0]]["value"];
                            //     }
                            //   }
                            // }).catch(error=>{
                            //   console.log("dataservice error", error)
                            // })
                            if (sensor.type.indexOf("Position") >= 0) {
                                _this.dataService.updatePostionData(tenant, sensor.deviceID, sensor.type, token, sensor.type, sensor.name).then(function (resp) {
                                    resp = resp[sensor.type];
                                    if (sensor["lat"] != resp["lat"]) {
                                        sensor["lat"] = resp["lat"];
                                    }
                                    if (sensor["lng"] != resp["lng"]) {
                                        sensor["lng"] = resp["lng"];
                                    }
                                });
                            }
                            else if (sensor.type.indexOf("custom") >= 0) {
                                console.log("custom");
                                _this.dataService.updatePostionData(tenant, sensor.deviceID, sensor.type, token, sensor.type, sensor.name).then(function (resp) {
                                    console.log("custom", resp);
                                    sensor["AbsolutePressure"] = resp["AbsolutePressure"].value;
                                    sensor["CO2"] = resp["CO2"].value;
                                    sensor["Noise"] = resp["Noise"].value;
                                    sensor["Humidity"] = resp["Humidity"].value;
                                });
                            }
                            else {
                                _this.dataService.updateData(tenant, sensor.deviceID, sensor.type, token, sensor.type, sensor.name).then(function (resp) {
                                    if (sensor.value != resp[Object.keys(resp)[0]]["value"]) {
                                        sensor.value = resp[Object.keys(resp)[0]]["value"];
                                    }
                                }).catch(function (error) {
                                    console.log("dataservice error", error);
                                });
                            }
                        };
                        for (var _b = 0, item_1 = item; _b < item_1.length; _b++) {
                            var sensor = item_1[_b];
                            _loop_1(sensor);
                        }
                    }
                }
            });
        }, 3000);
    }
    UserHomePage.prototype.ionViewWillEnter = function () {
    };
    UserHomePage.prototype.ionViewDidEnter = function () { };
    UserHomePage.prototype.diplayItems = function () {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            if (data != null) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__["each"](data, function (i, resp) {
                    _this.ids.push(i);
                    _this.items.push(resp);
                    for (var _i = 0, _a = _this.devices; _i < _a.length; _i++) {
                        var dev = _a[_i];
                        if (dev["id"] == i) {
                            _this.names[i] = dev["name"];
                        }
                    }
                });
            }
        });
    };
    UserHomePage.prototype.removeItem = function (index) {
        var _this = this;
        if (index > -1) {
            this.storage.get("devices").then(function (data) {
                var _loop_2 = function (i) {
                    if (data[i]["id"] == _this.items[index][0]['deviceID']) {
                        data[i]["disableBTN"] = false;
                        _this.storage.set("devices", data).then(function () {
                            _this.items.splice(index, 1);
                            _this.ids.splice(data[i]["id"], 1);
                            delete _this.names[data[i]["id"]];
                            _this.storage.get("devicesMeasurements").then(function (resp) {
                                delete resp[data[i]["id"]];
                                _this.navCtrl.setRoot(_this.navCtrl.getActive().component); // to refresh page
                                _this.storage.set("devicesMeasurements", resp);
                            });
                        });
                        return "break";
                    }
                };
                for (var i in data) {
                    var state_1 = _loop_2(i);
                    if (state_1 === "break")
                        break;
                }
            });
        }
    };
    UserHomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Help',
            subTitle: 'Click to add button to one of your devices. when you click on device, it will be added to this page.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UserHomePage.prototype.showDevices = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__devices_devices__["a" /* DevicesPage */]);
    };
    UserHomePage.prototype.switchTrackingApp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__intro_intro__["a" /* IntroPage */]);
    };
    UserHomePage.prototype.logout = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__userlogin_userlogin__["a" /* UserLoginPage */]);
        });
    };
    return UserHomePage;
}());
UserHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userhome',template:/*ion-inline-start:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/cumulocity/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="content">\n\n<div class="fixed-action-btn">\n  <a class="btn-floating medium red">\n    <i class="medium material-icons">mode_edit</i>\n  </a>\n  <ul>\n    <li><a class="btn-floating red" (click)="showDevices()"><i class="material-icons">create</i></a></li>\n    <li><a class="btn-floating yellow darken-1" (click)="presentAlert()">\n      <i class="material-icons">help_outline</i></a>\n    </li>\n    <li><a class="btn-floating green" (click)="switchTrackingApp()"><i class="material-icons">swap_horiz</i></a></li>\n    <!-- <li><a class="btn-floating blue" (click)="logout()"><i class="material-icons">exit_to_app</i></a></li> -->\n  </ul>\n</div>\n  <ion-list no-lines>\n    <!-- <ion-icon name="trash"></ion-icon> -->\n\n    <ion-item-group>\n      <ion-item-sliding *ngFor="let item of items;let i=index">\n        <ion-item class="card horizontal">\n          <ion-icon name="ios-close-circle-outline" (click)="removeItem(i)"></ion-icon>\n          <div class="card-content">\n            <div class="card-title">\n              {{ names[ids[i]] }}\n              <hr>\n            </div>\n            <div class="measures" *ngFor="let sensor of item;let j=index">\n              <span  *ngIf="sensor.type == \'c8y_Position\'; else anotherData">\n                <h3 ion-text>{{sensor.name}}</h3>\n                \n                <p>\n                  <span *ngIf="!sensor.lat">\n                    <span class="lat">No Reading</span>\n                  </span>\n                  <span *ngIf="sensor.lat">\n                    <span class="lat">lat: {{sensor.lat}}</span>\n                    <span class="lat">lng: {{sensor.lng}}</span>\n                  </span>\n                </p>\n              </span>\n              <ng-template #anotherData>\n                <p *ngIf="sensor.type == \'custom\'">\n                  <span>\n                      <h3 ion-text>CO2:</h3>\n                      <span class="val">{{sensor.CO2}}</span>\n                  </span>\n                  <span>\n                      <h3 ion-text>Noise:</h3>\n                      <span class="val"> {{sensor.Noise}}</span>\n                  </span>\n                  <span>\n                      <h3 ion-text>Humidity:</h3>\n                      <span class="val"> {{sensor.Humidity}}</span>\n                  </span>\n                  <span>\n                      <h3 ion-text>AbsolutePressure:</h3>\n                      <span class="val"> {{sensor.AbsolutePressure}}</span>\n                  </span>\n                </p>\n                <span *ngIf="sensor.type != \'c8y_Position\' && sensor.type != \'custom\'">\n                  <h3 ion-text>{{sensor.name}}</h3>\n                  <p>\n                    <span *ngIf="!sensor.value">\n                      <span class="lat">No Reading</span>\n                    </span>\n                    <span *ngIf="sensor.value">\n                      <span class="val">{{sensor.value}}</span><span class="unit"> {{sensor.unit}}</span>\n                    </span>\n                  </p>\n                </span>\n              </ng-template>\n              <ion-icon *ngIf="icons[sensor.type]" name="{{icons[sensor.type]}}" end></ion-icon>\n              <ion-icon *ngIf="!icons[sensor.type]" name="information-circle" end></ion-icon>\n              <!-- <hr style="margin-top: 20px; background-color: #aaa" /> -->\n            </div>\n          </div>\n\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button default color="danger" (click)="removeItem(i)">\n            <ion-icon name="ios-trash-outline" style="font-size: 50px"></ion-icon>\n            delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Documents/work/MW3/busTrackingApp/src/pages/cumulocity/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__["a" /* DataServiceProvider */]])
], UserHomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[580]);
//# sourceMappingURL=main.js.map