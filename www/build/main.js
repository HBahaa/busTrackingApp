webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intro_intro__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(74);
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
    function UserLoginPage(alertCtrl, navCtrl, menuCtrl, storage, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
    }
    UserLoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    UserLoginPage.prototype.backToIntro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__intro_intro__["a" /* IntroPage */]);
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
        this.presentLoading();
        var storage = this.storage;
        var navCtrl = this.navCtrl;
        // var devices = this.devices;
        var my = this;
        this.token = "Basic " + window.btoa(this.username + ':' + this.password);
        function myFilter(objs) {
            console.log("filter objs", objs);
            return objs.filter(function (obj) {
                console.log("obj", obj);
                return obj['c8y_SupportedMeasurements'];
            }).map(function (obj) {
                return (function (_a) {
                    var id = _a.id, name = _a.name, c8y_SupportedMeasurements = _a.c8y_SupportedMeasurements;
                    return ({ id: id, name: name, c8y_SupportedMeasurements: c8y_SupportedMeasurements });
                })(obj);
            });
        }
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://" + this.tenant + ".cumulocity.com/inventory/managedObjects?owner=" + this.username,
            "method": "GET",
            "headers": {
                "authorization": "" + this.token,
                "cache-control": "no-cache",
                "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
            }
        };
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"](settings).done(function (response) {
            console.log("response", response);
            storage.set("userData", {
                'tenant': my.tenant,
                'username': my.username,
                "password": my.password,
                "token": my.token
            });
            if (response.statistics.totalPages == undefined || response.statistics.totalPages == null) {
                var objs = response.managedObjects;
                console.log("response.managedObjects", response.managedObjects);
                var devices = myFilter(objs);
                console.log("devices", devices);
                for (var i in devices) {
                    devices[i]["disableBTN"] = false;
                }
                storage.set('devices', devices).then(function () {
                    console.log("from set devices", devices);
                });
                navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* UserHomePage */]);
                my.loader.dismiss();
            }
            else {
                var total = response.statistics.totalPages;
                var size = response.statistics.pageSize;
                // let current = response.statistics.currentPage;
                var totalSize = total * size;
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://" + this.tenent + ".cumulocity.com/inventory/managedObjects?owner=" + this.username + "&pageSize=" + totalSize + "&currentPage=1",
                    "method": "GET",
                    "headers": {
                        "authorization": "" + this.token,
                        "cache-control": "no-cache",
                        "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                    }
                };
                __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"](settings).done(function (response) {
                    var objs = response.managedObjects;
                    var devices = myFilter(objs);
                    for (var i in devices) {
                        devices[i]["disableBTN"] = false;
                    }
                    storage.set('devices', devices).then(function () {
                        console.log("from set devices", devices);
                    });
                    navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* UserHomePage */]);
                    my.loader.dismiss();
                });
            }
        }).fail(function (error) {
            navCtrl.push(UserLoginPage_1);
            my.loader.dismiss();
            my.username = "";
            my.password = "";
            my.showAlert();
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
        selector: 'page-userlogin',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/cumulocity/userlogin/userlogin.html"*/'\n<ion-content class="login">\n  <div class="login-box">\n    <form #loginForm="ngForm" (ngSubmit)="login()">\n      <ion-row>\n        <ion-col>\n          <h3>Login</h3>\n          <ion-label>Please Enter Your<br> Cumulocity Credentials</ion-label>\n\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Tenant" name="tenant" [(ngModel)]="tenant" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="username" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n            <button ion-button type="submit" [disabled]="!loginForm.form.valid"><ion-icon ios="ios-exit" md="md-exit"></ion-icon> Login</button>\n\n            \n          </ion-list>\n\n        </ion-col>\n      </ion-row>\n    </form>\n    <button ion-button icon-start color="light" clear (click)="backToIntro()">\n      <ion-icon name="arrow-round-back"></ion-icon>&nbsp; Back\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/cumulocity/userlogin/userlogin.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], UserLoginPage);

var UserLoginPage_1;
//# sourceMappingURL=userlogin.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(67);
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
        selector: 'page-notification',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/notification/notification.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'NOTIFICATION_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div id="map"></div>\n	<ion-card>\n	  <ion-card-content>\n	  	<p>{{notification.time | customDate: lang}}</p>\n		<h2><span>{{ \'NOTIFICATION_PAGE.childName\' | translate }}:</span> {{ notification.name }}</h2>\n		<h2><span>{{ \'NOTIFICATION_PAGE.busSpeed\' | translate }}:</span> {{ notification.speed }}</h2>\n		<h2><span>{{ \'NOTIFICATION_PAGE.status\' | translate }}:</span> {{ notification.status }}</h2>\n		<ion-card-title>\n	      {{ notification.msg }}\n	    </ion-card-title>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 161:
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
        selector: 'page-child-grades',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/child-grades/child-grades.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'CHILDGRADES_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-card>\n	    <ion-item>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.subject\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>Math</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.childMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>60</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.totalMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>100</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.grade\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>B</span></ion-col>\n			</ion-row>\n	    </ion-item>\n	</ion-card>\n	<ion-card>\n	    <ion-item>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.subject\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>Science</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.childMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>40</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.totalMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>100</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.grade\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>C</span></ion-col>\n			</ion-row>\n	    </ion-item>\n	</ion-card>\n	<ion-card>\n	    <ion-item>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.subject\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>English</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.childMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>95</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.totalMarks\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>100</span></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-7><span class="title">{{ \'CHILDGRADES_PAGE.grade\' | translate }}:</span></ion-col>\n				<ion-col col-5><span>A</span></ion-col>\n			</ion-row>\n	    </ion-item>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/child-grades/child-grades.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ChildGradesPage);

//# sourceMappingURL=child-grades.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusTrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(67);
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
        this.x = { "lat": 25.5, "lng": 30.7 };
        this.y = { "lat": 30, "lng": 30.7 };
        this.date = new Date().toISOString();
    }
    BusTrackPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    BusTrackPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: { lat: 27, lng: 30.7 },
                zoom: 6,
                tilt: 20
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            _this.map.addPolyline({
                points: [
                    _this.x,
                    _this.y
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
            return _this.ployLine(_this.x, _this.y, '#AA00FF');
        });
    };
    BusTrackPage.prototype.handleChangeDate = function (date) {
        var _this = this;
        // console.log("showlast", date)
        this.map.clear().then(function () {
            return _this.ployLine({ "lat": 24.0283, "lng": 30.7 }, { "lat": 29.01929, "lng": 30.7 }, '#FF0000');
        });
    };
    BusTrackPage.prototype.ployLine = function (x, y, color) {
        this.map.addPolyline({
            points: [
                x,
                y
            ],
            'color': color,
            'width': 5,
            'geodesic': true
        });
    };
    return BusTrackPage;
}());
BusTrackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bus-track',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/bus-track/bus-track.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'BUSTRACK_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n	    <ion-card-content>\n			<ion-card-title>\n				{{ \'BUSTRACK_PAGE.subTitle\' | translate }}:\n			</ion-card-title>\n\n		    <ion-item>\n				<ion-label>{{ \'BUSTRACK_PAGE.date\' | translate }}</ion-label>\n				<ion-datetime displayFormat="MM/DD/YYYY" (ionChange)="handleChangeDate(date)"[(ngModel)]="date"  [cancelText] ="\'BUSTRACK_PAGE.cancel\' | translate" [doneText]="\'BUSTRACK_PAGE.done\' | translate"></ion-datetime>\n			</ion-item>\n	\n			<h2>{{ \'BUSTRACK_PAGE.or\' | translate }}</h2>\n\n			<button ion-button color="mainColor" block (click)="showTodayTrack()">{{ \'BUSTRACK_PAGE.today\' | translate }}</button>\n		\n	    </ion-card-content>\n\n	</ion-card>\n\n	<div id="map"></div>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/bus-track/bus-track.html"*/,
    }),
    __metadata("design:paramtypes", [])
], BusTrackPage);

//# sourceMappingURL=bus-track.js.map

/***/ }),

/***/ 163:
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
        selector: 'page-messages',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/messages/messages.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'MESSAGES_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-card>\n	    <ion-card-content>\n			<ion-card-title>\n				New Message\n			</ion-card-title>\n			<p>\n				This is the content of message. This is the content of message\n			</p>\n	    </ion-card-content>\n\n	    <ion-row>\n			<ion-col>\n				<button ion-button clear color="mainColor" icon-start>\n					<ion-icon name="attach"></ion-icon>\n				  	&nbsp;file\n				</button>\n			</ion-col>\n	    </ion-row>\n\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/messages/messages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MessagesPage);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_modal_map_modal__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_login__ = __webpack_require__(56);
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
        selector: 'page-profile',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'PROFILE_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid  *ngIf="!showEditForm">\n    <ion-card class="settings">\n      <ion-card-title color="mainColor">\n        {{ \'PROFILE_PAGE.settings\' | translate }}\n      </ion-card-title>\n      <ion-card-content>\n        <ion-item>\n          <ion-label>{{ \'LANGUAGE.selectLanguage\' | translate }}:</ion-label>\n          <ion-select [(ngModel)]="lang" (ngModelChange)="changeLanguage($event)"\n              okText="{{ \'LANGUAGE.ok\' | translate }}" cancelText="{{ \'LANGUAGE.cancel\' | translate }}">\n\n            <ion-option value="en">{{ \'LANGUAGE.en\' | translate }}</ion-option>\n            <ion-option value="ar">{{ \'LANGUAGE.ar\' | translate }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-row>\n      <ion-col>\n        <ion-card class="profileData">\n          <ion-card-content>\n            <ion-card-title color="mainColor">{{ \'PROFILE_PAGE.subTitle\' | translate }}</ion-card-title>\n              <ion-row>\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.name\' | translate }}:</h2>\n                </ion-col><ion-col col-8><h2>{{name}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.email\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{user_email}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.password\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{user_password}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.phone\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{user_phone}}</h2></ion-col>\n\n                <ion-col col-4><h2>{{ \'PROFILE_PAGE.address\' | translate }}:</h2></ion-col>\n                <ion-col col-8><h2>{{address}}</h2></ion-col>\n              \n              </ion-row>\n              <button ion-button icon-start color="mainColor" block (click)="changeFlag()">\n                <ion-icon name="create"></ion-icon>&nbsp;{{ \'PROFILE_PAGE.edit\' | translate }}\n              </button>\n              <button ion-button icon-start block (click)="presentMapModal()">\n                <ion-icon name="pin"></ion-icon> &nbsp;{{ \'PROFILE_PAGE.changeAddress\' | translate }}\n              </button>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div *ngIf="showEditForm">\n    <ion-card>\n      <ion-card-title color="mainColor">\n        {{ \'PROFILE_PAGE.subTitle\' | translate }}\n      </ion-card-title>\n      <ion-card-content>\n        <form #profileForm="ngForm" (ngSubmit)="editProfile(profileForm)">\n          <ion-list inset>\n            <!-- <ion-item>\n              <ion-label> <ion-icon name="person"></ion-icon></ion-label>\n              <ion-input type="text" name="name" [(ngModel)]="name"></ion-input>\n            </ion-item> -->\n            <ion-item>\n              <ion-label> <ion-icon name="mail"></ion-icon></ion-label>\n              <ion-input type="email" name="email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label> <ion-icon name="phone-portrait"></ion-icon></ion-label>\n              <ion-input type="text" name="phone" [(ngModel)]="phone"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label> <ion-icon name="lock"></ion-icon></ion-label>\n              <ion-input type="text" name="password" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <button ion-button icon-start type="submit" color="mainColor" block>\n              {{ \'PROFILE_PAGE.update\' | translate }}\n            </button>\n\n          </ion-list>\n        </form>\n        <button ion-button icon-start type="submit" block (click)="cancelEdit()">\n          {{ \'PROFILE_PAGE.cancel\' | translate }}\n        </button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<!-- <ion-content class="editForm"></ion-content>-->'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/profile/profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_login_login__["a" /* LoginProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(73);
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
        selector: 'page-register1',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register1/register1.html"*/'<ion-content padding class="register1-content">\n  <form novalidate (ngSubmit)="onSubmit(validations_form)" [formGroup]="validations_form">\n    <h3>{{ \'REGISTER1_PAGE.title\' | translate }}</h3>\n    <ion-item>\n      <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER1_PAGE.idNumber\' | translate }}" formControlName="id"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( validations_form.get(\'id\').hasError(\'required\') || validations_form.get(\'id\').hasError(\'pattern\'))&& validations_form.get(\'id\').touched">\n\n      <div class="error" *ngIf="validations_form.get(\'id\').hasError(\'required\') && validations_form.get(\'id\').touched">\n        {{ \'ERROR_MESSAGES.register1.id.required\' | translate }}\n      </div>\n      <div class="error" *ngIf="validations_form.get(\'id\').hasError(\'pattern\') && validations_form.get(\'id\').touched">\n        {{ \'ERROR_MESSAGES.register1.id.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="key"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER1_PAGE.secertKey\' | translate }}" formControlName="skey"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( validations_form.get(\'skey\').hasError(\'required\') || validations_form.get(\'skey\').hasError(\'min\') || validations_form.get(\'skey\').hasError(\'max\'))&& validations_form.get(\'skey\').touched">\n\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'required\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.required\' | translate }}\n      </div>\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'min\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.min\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="validations_form.get(\'skey\').hasError(\'max\') && validations_form.get(\'skey\').touched">\n        {{ \'ERROR_MESSAGES.register1.skey.max\' | translate }}\n      </div>\n\n    </div>\n\n    <button ion-button block round color="mainColor" [disabled]="validations_form.invalid"><ion-icon name="log-in"></ion-icon>&nbsp;{{ \'REGISTER1_PAGE.send\' | translate }}</button>\n  </form>\n    <button ion-button color="light" icon-start (click)="alreadyHaveAccount()" clear>\n      <ion-icon name="arrow-round-forward"></ion-icon>&nbsp;{{ \'REGISTER1_PAGE.alreadyHaveAccount\' | translate }}\n    </button>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register1/register1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], Register1Page);

//# sourceMappingURL=register1.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
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
        selector: 'map-page',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/map/map.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ \'MAP_PAGE.title\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" (click)="goToRegister()">\n        {{ \'MAP_PAGE.next\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n \n<ion-content>\n  <div id="over_map">\n    <ion-searchbar primary [(ngModel)]="searchQuery" show-cancel="true" placeholder="{{ \'MAP_PAGE.search\' | translate }}"></ion-searchbar>\n    <button ion-button icon-only block (click)="codeAddress()"><ion-icon name="redo"></ion-icon></button>\n  </div>\n  <div id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetChildrenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(26);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_driver__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bus_track_bus_track__ = __webpack_require__(162);
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
        selector: 'page-details',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/details/details.html"*/'<ion-header>\n  <ion-navbar color="navbarColor">\n    <ion-title>\n      {{ \'DETAILS_PAGE.title\' | translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card>\n		<img [src]="childData.image" onError="this.src=\'assets/imgs/1.png\'">\n		<ion-card-content>\n			<ion-card-title color="mainColor">{{childData.name}}</ion-card-title>\n			<ion-row>\n	        	<!-- <ion-col col-12><br /></ion-col> -->\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.childID\' | translate }}:</h2></ion-col>\n\n	        	<ion-col col-7><h2>{{childData.tag}}</h2></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.childStatus\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf="childData.childLastMsg != undefined">{{childData["childLastMsg"]["status"]}}</h2>\n	        		<h2 *ngIf="childData.childLastMsg == undefined">No Status</h2>\n	        	</ion-col>\n	        	<ion-col> <button ion-button clear color="primary" (click)="selectSemester()">View Grades</button> </ion-col>\n	        	<ion-col col-12><hr /></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busNumber\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7><h2>{{childData.bus}}</h2></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busID\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7><h2>{{childData.bus_id}}</h2></ion-col>\n\n	        	<ion-col col-6><h2>{{ \'DETAILS_PAGE.busTemp\' | translate }}:</h2></ion-col>\n	        	<ion-col col-6><h2>20</h2></ion-col>\n	        	\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.busSpeed\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf="childData[\'childLastMsg\'][\'speed\'] != undefined; else lastMsgSpeed ">\n	        			{{childData["childLastMsg"]["speed"]}}\n	        		</h2>\n	        		<ng-template #lastMsgSpeed>\n	        			<h2>{{childData["lastMsg"]["speed"]}}</h2>\n	        		</ng-template>\n	        	</ion-col>\n	        	<ion-col> <button ion-button clear color="primary" (click)="tripTrack()">Bus Trip Track</button> </ion-col>\n	        	<ion-col col-12><hr /></ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.driverName\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] != undefined\'>{{childData["childLastMsg"]["driverName"]}}</h2>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] == undefined\'>{{childData["lastMsg"]["driverName"]}}</h2>\n	        	</ion-col>\n\n	        	<ion-col col-5><h2>{{ \'DETAILS_PAGE.driverPhone\' | translate }}:</h2></ion-col>\n	        	<ion-col col-7>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] != undefined\'>{{childData["childLastMsg"]["driverPhone"]}}</h2>\n	        		<h2 *ngIf=\'childData["ChildLastMsg"] == undefined\'>{{childData["lastMsg"]["driverPhone"]}}</h2>\n	        	</ion-col>\n	        	<ion-col> <button ion-button clear color="primary" (click)="driverBehaviour()">Driver Behaviour</button> </ion-col>\n	        </ion-row>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-list *ngIf="messages.length > 0">\n\n		<h2>{{ \'DETAILS_PAGE.notifications\' | translate }}</h2>\n\n	    <button ion-item *ngFor="let message of messages"  (click)="notificationDetails(message)">\n	    	\n			<ion-icon color="mainColor" *ngIf="message.sid == tag" ios="ios-pricetag-outline" md="md-pricetag" item-start></ion-icon>\n			<ion-icon color="mainColor" *ngIf="rooms.bus.indexOf(message.sid) >= 0" ios="ios-bus-outline" md="md-bus" item-start></ion-icon>\n	      	<ion-icon color="mainColor" *ngIf="rooms.geo == message.sid" ios="ios-home-outline" md="md-home" item-start></ion-icon>\n	        \n	        <h2 *ngIf="message.msg.length == 30 || message.msg.length < 30 ;else msg">{{message.msg}}</h2>\n        	<ng-template #msg><h2>{{message.msg.substr(0, 30) +"..."}}</h2></ng-template>\n\n\n	        <p *ngIf="(message.time | customDate: lang) != message.time; else temp" text-right>\n	          <span>{{ message.time | customDate: lang }}</span>\n	          <span *ngIf="(message.time | customDate: lang).includes(\'day\')">\n	          	, {{message.time | date:\'shortTime\'}}\n	          </span>\n	        </p>\n	        <ng-template #temp>\n	          <p text-right>\n	            {{message.time | date:\'short\'}}\n	          </p>\n	        </ng-template>\n\n	    </button>\n\n	    <button ion-button color="mainColor" clear (click)="moreNotifications()">More Notifications</button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/details/details.html"*/
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
        selector: 'page-driver',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/driver/driver.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'DRIVER_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-header color="mainColor">\n			Day Avarage\n		</ion-card-header>\n		<ion-card-header>\n			Driver Name\n		</ion-card-header>\n		<ion-card-content>\n			<div class="circle"><h2>70</h2></div>\n			<br>\n			<ion-row>\n				<ion-col col-4>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.speed\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>7</h3></ion-col>\n				</ion-col>\n				<ion-col col-4>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.break\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>3</h3></ion-col>\n				</ion-col>\n				<ion-col col-4 id="last">\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.stops\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>5</h3></ion-col>\n				</ion-col>\n			</ion-row>\n			<!-- <ion-row>\n				<ion-col col-6>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.fuel\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>63</h3></ion-col>\n				</ion-col>\n\n				<ion-col col-6>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.mileage\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>80</h3></ion-col>\n				</ion-col>\n			</ion-row> -->\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header color="mainColor">\n			Last 6 Month Avarage\n		</ion-card-header>\n		<ion-card-header>\n			Driver Name\n		</ion-card-header>\n		<ion-card-content>\n			<div class="circle"><h2>80</h2></div>\n			<br>\n			<ion-row>\n				<ion-col col-4>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.speed\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>7</h3></ion-col>\n				</ion-col>\n				<ion-col col-4>\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.break\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>3</h3></ion-col>\n				</ion-col>\n				<ion-col col-4 id="last">\n					<ion-col col-12><span>{{ \'DRIVER_PAGE.stops\' | translate }}</span></ion-col>\n					<ion-col col-12><h3>5</h3></ion-col>\n				</ion-col>\n			</ion-row>\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/driver/driver.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_grades_child_grades__ = __webpack_require__(161);
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
        selector: 'page-semesters',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/semesters/semesters.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Semesters</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content" padding>\n\n	<button ion-button color="mainColor" block (click)="showGrades()">\n    	Semester 1\n    </button>\n\n    <button ion-button color="mainColor" block (click)="showGrades()">\n    	Semester 2\n    </button>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/semesters/semesters.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(167);
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
        selector: 'page-register2',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register2/register2.html"*/'<ion-content padding class="login-content">\n  <form novalidate (ngSubmit)="onSubmit(user)" [formGroup]="user">\n\n    <h3>{{ \'REGISTER2_PAGE.title\' | translate }}</h3>\n     <ion-item>\n        <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n        <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.name\' | translate }}" formControlName="name">\n        </ion-input>\n      </ion-item>\n\n      <div class="error-container" no-lines *ngIf="( user.get(\'name\').hasError(\'minlength\') || user.get(\'name\').hasError(\'required\') ) && user.get(\'name\').touched">\n\n        <div class="error" *ngIf="user.get(\'name\').hasError(\'required\') && user.get(\'name\').touched">\n          {{ \'ERROR_MESSAGES.register2.name.required\' | translate }}\n        </div>\n        <div class="error" *ngIf="user.get(\'name\').hasError(\'minlength\') && user.get(\'name\').touched">\n          {{ \'ERROR_MESSAGES.register2.name.minlength\' | translate }}\n        </div>\n      </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.email\' | translate }}" formControlName="email"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'email\').hasError(\'required\') || user.get(\'email\').hasError(\'pattern\') ) && user.get(\'email\').touched">\n\n      <div class="error" *ngIf=" user.get(\'email\').hasError(\'required\') && user.get(\'email\').touched">\n        {{ \'ERROR_MESSAGES.register2.email.required\' | translate }}\n      </div>\n\n      <div class="error" *ngIf=" user.get(\'email\').hasError(\'pattern\') && user.get(\'email\').touched">\n        {{ \'ERROR_MESSAGES.register2.email.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="lock"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.password\' | translate }}" formControlName="password"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'password\').hasError(\'required\') || user.get(\'password\').hasError(\'minlength\') || user.get(\'password\').hasError(\'pattern\') ) && user.get(\'password\').touched">\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.required\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'minlength\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.minlength\' | translate }}\n      </div>\n\n      <div class="error" *ngIf="user.get(\'password\').hasError(\'pattern\') && user.get(\'password\').touched">\n        {{ \'ERROR_MESSAGES.register2.password.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <ion-item>\n      <ion-label ><ion-icon name="pin"></ion-icon></ion-label>\n      <ion-input type="text" formControlName="address" readonly></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ><ion-icon name="phone-portrait"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="{{ \'REGISTER2_PAGE.phone\' | translate }}" formControlName="mob"></ion-input>\n    </ion-item>\n\n    <div class="error-container" no-lines *ngIf="( user.get(\'mob\').hasError(\'required\') || user.get(\'mob\').hasError(\'pattern\'))&& user.get(\'mob\').touched">\n\n      <div class="error" *ngIf="user.get(\'mob\').hasError(\'required\') && user.get(\'mob\').touched">\n        {{ \'ERROR_MESSAGES.register2.mobile.required\' | translate }}\n      </div>\n      <!-- <div class="error" *ngIf="user.get(\'mob\').hasError(\'minlength\') && user.get(\'mob\').touched">\n        Please enter valid mobile number\n      </div> -->\n\n      <div class="error" *ngIf="user.get(\'mob\').hasError(\'pattern\') && user.get(\'mob\').touched">\n        {{ \'ERROR_MESSAGES.register2.mobile.pattern\' | translate }}\n      </div>\n\n    </div>\n\n    <button ion-button block round color="mainColor" [disabled]="!user.valid"><ion-icon name="log-in"></ion-icon>{{ \'REGISTER2_PAGE.register\' | translate }}</button>\n  </form>\n\n  <button ion-button type="button" color="primary" block round style="text-transform: capitalize;" (click)="locateMe()">\n    <ion-icon name="pin"></ion-icon>&nbsp;{{ \'REGISTER2_PAGE.locateMe\' | translate }}\n  </button>\n      \n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/register2/register2.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_login__ = __webpack_require__(56);
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
        selector: 'page-map-modal',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/map-modal/map-modal.html"*/'<ion-header>\n  <ion-navbar color="navbarColor">\n\n    <ion-toolbar>\n      <ion-title>{{ \'MAPMODAL_PAGE.map\' | translate }}</ion-title>\n      <ion-buttons end>\n        <button ion-button color="light" (click)="dismiss()">\n          {{ \'MAPMODAL_PAGE.save\' | translate }}\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n \n<ion-content>\n  <div id="over_map">\n\n    <ion-searchbar primary [(ngModel)]="searchQuery" show-cancel="true" placeholder="{{ \'MAPMODAL_PAGE.search\' | translate }}"></ion-searchbar>\n    <button ion-button icon-only block (click)="codeAddress()"><ion-icon name="redo"></ion-icon></button>\n  </div>\n  <div id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/map-modal/map-modal.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_children_get_children__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__get_notification_get_notification__ = __webpack_require__(164);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { DeviceDataPage } from '../device-data/device-data';


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
            console.log("device", device);
            // for(let device of this.devices){
            for (var _i = 0, _a = device["c8y_SupportedMeasurements"]; _i < _a.length; _i++) {
                var sensor = _a[_i];
                _this.dataService.getDataService(_this.tenant, device["id"], sensor, _this.token, sensor, device["name"])
                    .then(function (flag) {
                    if (flag == true) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* UserHomePage */]);
                    }
                    else {
                    }
                });
            }
            // }
        });
    };
    return DevicesPage;
}());
DevicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-devices',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/cumulocity/devices/devices.html"*/'\n<ion-header>\n\n  <ion-navbar>\n  <ion-title>Devices</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="content">\n  <ion-list>\n    <button ion-item detail-none *ngFor="let device of devices; let i=index" (click)="addDevice(device)" [disabled]="device[\'disableBTN\']">\n        <p ion-text><span class="devID">{{device.id}}</span> {{device.name}}</p>\n      <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/cumulocity/devices/devices.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */]])
], DevicesPage);

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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





var DataServiceProvider = (function () {
    function DataServiceProvider(storage, loadingCtrl, alertCtrl) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    DataServiceProvider.prototype.getDataService = function (tenant, id, type, token, userMeasurementName, deviceName, currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        console.log("type", type);
        if (type === "c8y_Temperature") {
            type = "c8y_TemperatureMeasurement";
        }
        return new Promise(function (resolve) {
            console.log("type", type);
            console.log("id", id);
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
            __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"](settings).done(function (response) {
                console.log("response", response);
                if (response.statistics.totalPages == null) {
                    var obj = {};
                    obj[id] = [];
                    var newItem;
                    var sName = userMeasurementName.substring(4);
                    var n = sName.indexOf("Measurement");
                    if (n > 0) {
                        console.log('iiif');
                        sName = sName.substring(0, n);
                    }
                    if (response.measurements.length >= 1) {
                        var l = response.measurements.length;
                        var resp = response.measurements[l - 1];
                        if (type == "c8y_Position") {
                            console.log("resp", resp);
                            lat = resp[type]["lat"];
                            lng = resp[type]["lng"];
                        }
                        else {
                            var respType = resp[type];
                            value = resp[type][Object.keys(respType)[0]]["value"];
                            unit = resp[type][Object.keys(respType)[0]]["unit"];
                        }
                        if (type == "c8y_Position") {
                            console.log("resp", sName, id, type, lat, lng);
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
                        obj[id].push(newItem);
                    }
                    else if (response.measurements.length == 0) {
                        if (type == "c8y_Position") {
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
                        obj[id].push(newItem);
                    }
                    _this.deviceMeasurements(id, obj);
                    _this.loader.dismiss();
                    resolve(true);
                }
                else {
                    var current = response.statistics.totalPages;
                    _this.getDataService(tenant, id, type, token, userMeasurementName, deviceName, currentPage = current);
                    // this.getDataService(id, type, token, userMeasurementName, deviceName, currentPage=current)
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
            if (data == null) {
                var arr = [item];
                _this.storage.set('devicesMeasurements', arr);
            }
            else {
                data.push(item);
                _this.storage.set("devicesMeasurements", data);
            }
        });
        this.storage.get("devices").then(function (data) {
            for (var i in data) {
                if (data[i]["id"] == id) {
                    data[i]["disableBTN"] = true;
                    _this.storage.set("devices", data).then(function () {
                    });
                    break;
                }
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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
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

// import { Http, Headers } from '@angular/http';



var AuthServiceProvider = (function () {
    function AuthServiceProvider(storage) {
        this.storage = storage;
    }
    AuthServiceProvider.prototype.checkToken = function (name, token) {
        return new Promise(function (resolve) {
            if (name == undefined && token == undefined) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    };
    AuthServiceProvider.prototype.reloadAll = function (tenant, id, type, token, userMeasurementName, currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        return new Promise(function (resolve) {
            var my = _this;
            var value;
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
                    if (response.measurements.length > 1) {
                        var l = response.measurements.length;
                        var obj = response.measurements[l - 1];
                        if (type == "c8y_TemperatureMeasurement") {
                            value = obj[type]["T"]["value"];
                        }
                        else if (type == "c8y_LightMeasurement") {
                            value = obj[type]["e"]["value"];
                        }
                        else if (type == "c8y_AccelerationMeasurement") {
                            value = obj[type]["acceleration"]["value"];
                        }
                        // var newItem = {
                        //   "deviceID":id,
                        //   "name":userMeasurementName,
                        //   "type":type,
                        //   "value":value,
                        //   "unit":unit
                        // }
                        my.storage.get('devicesMeasurements').then(function (data) {
                            for (var item in data) {
                                if (data[item]["deviceID"] == id && data[item]["type"] == type) {
                                    data[item]['value'] = value;
                                    my.storage.set("devicesMeasurements", data);
                                }
                            }
                        });
                        resolve(true);
                    }
                }
                else {
                    var current = response.statistics.totalPages;
                    my.reloadAll(id, type, token, userMeasurementName, currentPage = current);
                }
            }).fail(function (error) {
                console.log("error error", error);
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
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

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(583);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 583:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_native__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notification_notification__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_details_details__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_children_children__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register1_register1__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_register2_register2__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_map_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_map_modal_map_modal__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_messages_messages__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_driver_driver__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_bus_track_bus_track__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_child_grades_child_grades__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_semesters_semesters__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_popover_popover__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_auth_service_auth_service__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_data_service_data_service__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_cumulocity_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_cumulocity_userlogin_userlogin__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_cumulocity_devices_devices__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_get_notification_get_notification__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_get_children_get_children__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_register_register__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pipes_date_date__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_reset_password_reset_password__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_edit_profile_edit_profile__ = __webpack_require__(456);
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
            __WEBPACK_IMPORTED_MODULE_43__pipes_date_date__["a" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_37__pages_cumulocity_userlogin_userlogin__["a" /* UserLoginPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_cumulocity_home_home__["a" /* UserHomePage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_cumulocity_devices_devices__["a" /* DevicesPage */],
            // DeviceDataPage,
            // ItemDataPage,
            __WEBPACK_IMPORTED_MODULE_33__components_popover_popover__["a" /* PopoverComponent */]
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
            __WEBPACK_IMPORTED_MODULE_37__pages_cumulocity_userlogin_userlogin__["a" /* UserLoginPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_cumulocity_home_home__["a" /* UserHomePage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_cumulocity_devices_devices__["a" /* DevicesPage */],
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
            __WEBPACK_IMPORTED_MODULE_39__providers_get_notification_get_notification__["a" /* GetNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_40__providers_get_children_get_children__["a" /* GetChildrenProvider */],
            __WEBPACK_IMPORTED_MODULE_41__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_42__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_44__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */],
            __WEBPACK_IMPORTED_MODULE_45__providers_edit_profile_edit_profile__["a" /* EditProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_34__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_data_service_data_service__["a" /* DataServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 72:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_details__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__ = __webpack_require__(164);
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
        selector: 'page-children',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/children/children.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'CHILDREN_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="std" *ngFor="let child of children">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="child.image" onError="this.src=\'assets/imgs/1.png\'">\n      </ion-avatar>\n      \n      <ion-row>\n        <ion-col col-5><span>{{ \'CHILDREN_PAGE.name\' | translate }}:</span></ion-col>\n        <ion-col col-7><span class="chData">{{child.name}}</span></ion-col>\n        <ion-col col-5><span>{{ \'CHILDREN_PAGE.status\' | translate }}:</span></ion-col>\n        <ion-col col-7>\n          <span class="chData" *ngIf="child.childLastMsg != undefined">{{child.childLastMsg?.status}}</span>\n          <span class="chData" *ngIf="child.childLastMsg == undefined">No Status</span>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="mainColor" (click)="childDetails(child.tag, child)" >{{ \'CHILDREN_PAGE.details\' | translate }}</button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/children/children.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__["a" /* GetNotificationProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_mode__["a" /* BackgroundMode */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_get_notification_get_notification__["a" /* GetNotificationProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], ChildrenPage);

//# sourceMappingURL=children.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__children_children__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register1_register1__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__ = __webpack_require__(168);
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
        selector: 'page-login',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/login/login.html"*/'<ion-content class="login-content">\n  <div *ngIf="!flag">\n    <form #loginForm="ngForm" (ngSubmit)="login()">\n      <ion-row>\n        <ion-col>\n          <h3>{{ \'LOGIN_PAGE.title\' | translate }}</h3>\n          <ion-list inset>\n            <ion-item>\n              <ion-label> <ion-icon name="person"></ion-icon></ion-label>\n              <ion-input type="text" placeholder="{{ \'LOGIN_PAGE.idNumber\' | translate }}" name="id" [(ngModel)]="id" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label> <ion-icon name="lock"></ion-icon></ion-label>\n              <ion-input type="password" placeholder="{{ \'LOGIN_PAGE.password\' | translate }}" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n            <button ion-button icon-start type="submit" color="primary" block round [disabled]="!loginForm.form.valid">\n              <ion-icon name="log-in"></ion-icon>&nbsp;{{ \'LOGIN_PAGE.login\' | translate }}\n            </button>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n    <button ion-button icon-start color="light" clear (click)="changeFlag()">\n      <ion-icon name="arrow-round-forward"></ion-icon>&nbsp;{{ \'LOGIN_PAGE.forgetPassword\' | translate }}\n    </button><br />\n    <button ion-button icon-start color="light" (click)="createAccount()" clear>\n      <ion-icon name="arrow-round-forward"></ion-icon>&nbsp;{{ \'LOGIN_PAGE.dontHaveAccount\' | translate }}\n    </button>\n  </div>\n\n\n  <div *ngIf="flag">\n    <form #resetForm="ngForm" (ngSubmit)="resetPassword()">\n      <ion-row>\n        <ion-col>\n          <h3>{{ \'LOGIN_PAGE.resetPassword\' | translate }}</h3>\n          <ion-list inset>\n            <ion-item>\n              <ion-label><ion-icon name="person"></ion-icon></ion-label>\n              <ion-input type="text" placeholder="{{ \'LOGIN_PAGE.idNumber\' | translate }}" name="nid" [(ngModel)]="nid" required></ion-input>\n            </ion-item>\n\n            <button ion-button icon-start type="submit" color="mainColor" block round \n            [disabled]="!resetForm.form.valid">\n              <ion-icon name="log-in"></ion-icon>&nbsp;{{ \'LOGIN_PAGE.send\' | translate }}\n            </button>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__["a" /* GetChildrenProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_get_children_get_children__["a" /* GetChildrenProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_reset_password_reset_password__["a" /* ResetPasswordProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__children_children__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userlogin_userlogin__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devices_devices__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(459);
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
    function UserHomePage(navCtrl, navParams, alertCtrl, viewCtrl, storage, menuCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.ids = [];
        this.names = {};
        this.flag = false;
        this.icons = { "c8y_TemperatureMeasurement": "ios-thermometer", "c8y_LightMeasurement": "md-bulb", "c8y_AccelerationMeasurement": "md-compass" };
        this.colors = { "c8y_TemperatureMeasurement": ["c1"], "c8y_LightMeasurement": ["color5"], "c8y_AccelerationMeasurement": ["c4"] };
        this.diplayItems();
        this.doRefresh(0);
        var my = this;
        setTimeout(function () {
            my.storage.get("userData").then(function (data) {
                var tenant = data.tenant;
                var token = data.token;
                if (my.items != null) {
                    for (var _i = 0, _a = my.items; _i < _a.length; _i++) {
                        var item = _a[_i];
                        var deviceID = item.deviceID;
                        var type = item.type;
                        var userMeasurementName = item.name;
                        my.authService.reloadAll(tenant, deviceID, type, token, userMeasurementName).then(function () {
                            my.storage.get("devicesMeasurements").then(function (data) {
                                my.items = data;
                            });
                        });
                    }
                }
            });
        }, 3000);
    }
    UserHomePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
        this.diplayItems();
        this.doRefresh(0);
    };
    UserHomePage.prototype.ionViewDidEnter = function () {
        this.diplayItems();
        this.menuCtrl.enable(false);
    };
    UserHomePage.prototype.diplayItems = function () {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            if (data != null) {
                _this.items = data;
                var _loop_1 = function (i) {
                    if ((_a = _this.ids).indexOf.apply(_a, Object.keys(i)) == -1) {
                        (_b = _this.ids).push.apply(_b, Object.keys(i));
                        _this.storage.get("devices").then(function (devices) {
                            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                                var dev = devices_1[_i];
                                if (dev["id"] == Object.keys(i)[0]) {
                                    var did = dev["id"];
                                    _this.names[did] = dev["name"];
                                }
                            }
                        });
                    }
                    var _a, _b;
                };
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var i = data_1[_i];
                    _loop_1(i);
                }
            }
        });
    };
    UserHomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            _this.items = data;
            if (refresher != 0)
                refresher.complete();
        });
    };
    UserHomePage.prototype.reorderItems = function (indexes) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* reorderArray */])(this.items, indexes);
        this.storage.set("devicesMeasurements", this.items);
    };
    UserHomePage.prototype.removeItem = function (index) {
        var _this = this;
        if (index > -1) {
            this.storage.get("devices").then(function (data) {
                for (var i in data) {
                    if (data[i]["id"] == Object.keys(_this.items[index])[0]) {
                        data[i]["disableBTN"] = false;
                        _this.storage.set("devices", data).then(function () {
                            _this.items.splice(index, 1);
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                            _this.storage.set("devicesMeasurements", _this.items);
                        });
                        break;
                    }
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
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("children").then(function (data) {
                if (data != null) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__children_children__["a" /* ChildrenPage */]);
                }
                else {
                    _this.storage.set("language", "en");
                    // this.translateService.use('en');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
            });
        });
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
        selector: 'page-userhome',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/cumulocity/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n\n<div class="fixed-action-btn">\n  <a class="btn-floating medium red">\n    <i class="medium material-icons">mode_edit</i>\n  </a>\n  <ul>\n    <li><a class="btn-floating red" (click)="showDevices()"><i class="material-icons">create</i></a></li>\n    <li><a class="btn-floating yellow darken-1" (click)="presentAlert()">\n      <i class="material-icons">help_outline</i></a>\n    </li>\n    <li><a class="btn-floating green" (click)="switchTrackingApp()"><i class="material-icons">swap_horiz</i></a></li>\n    <li><a class="btn-floating blue" (click)="logout()"><i class="material-icons">exit_to_app</i></a></li>\n  </ul>\n</div>\n  <!-- <button ion-button color="danger" (click)="showDevices()" class="addBtn">\n    <ion-icon name="md-create"></ion-icon></button>\n     <button ion-button color="primary" (click)="presentAlert()" class="helpBtn">\n    <ion-icon name="help"></ion-icon></button> -->\n  <ion-list no-lines>\n    <!-- <ion-icon name="trash"></ion-icon> -->\n\n    <ion-item-group>\n      <ion-item-sliding *ngFor="let item of items;let i=index">\n        <ion-item class="card horizontal">\n          <ion-icon name="ios-close-circle-outline" (click)="removeItem(i)"></ion-icon>\n          <div class="card-content">\n            <div class="card-title">\n              {{names[ids[i]] }}\n              <hr>\n            </div>\n            <div *ngFor="let sensor of item[ids[i]];let j=index">\n              <h3 ion-text color="{{colors[sensor.type]}}">{{sensor.name}}</h3>\n              <p *ngIf="sensor.type != \'c8y_Position\'">\n                <span *ngIf="!sensor.value">\n                  <span class="lat">No Reading</span>\n                </span>\n                <span *ngIf="sensor.value">\n                  <span class="val">{{sensor.value}}</span><span class="unit"> {{sensor.unit}}</span>\n                </span>\n              </p>\n              <p *ngIf="sensor.type == \'c8y_Position\'">\n                <span *ngIf="!sensor.lat">\n                  <span class="lat">No Reading</span>\n                </span>\n                <span *ngIf="sensor.lat">\n                  <span class="lat">lat: {{sensor.lat}}</span>\n                  <span class="lat">lng: {{sensor.lng}}</span>\n                </span>\n              </p>\n              <ion-icon *ngIf="icons[sensor.type]" color="{{colors[sensor.type]}}" name="{{icons[sensor.type]}}" end></ion-icon>\n              <ion-icon *ngIf="!icons[sensor.type]" name="information-circle" end></ion-icon>\n            </div>\n            <hr style="margin-top: 20px; background-color: #aaa" />\n          </div>\n\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button default color="danger" (click)="removeItem(i)">\n            <ion-icon name="ios-trash-outline" style="font-size: 50px"></ion-icon>\n            delete\n          </button>\n        </ion-item-options>\n    </ion-item-sliding>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/cumulocity/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _g || Object])
], UserHomePage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_children_children__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_messages_messages__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_intro_intro__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cumulocity_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cumulocity_userlogin_userlogin__ = __webpack_require__(100);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_intro_intro__["a" /* IntroPage */];
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
            // this.loadingPage();
        });
        this.pages = [
            { icon: 'contacts', title: 'CHILDREN_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_7__pages_children_children__["a" /* ChildrenPage */] },
            { icon: 'notifications', title: 'NOTIFICATIONS_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { icon: 'chatboxes', title: 'MESSAGES_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_10__pages_messages_messages__["a" /* MessagesPage */] },
            { icon: 'person', title: 'PROFILE_PAGE.title', component: __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.userLogout = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]);
        });
    };
    MyApp.prototype.switchMySensors = function () {
        var _this = this;
        this.storage.get("devices").then(function (data) {
            _this.platform.setDir('rtl', false);
            _this.platform.setDir('ltr', true);
            _this.translateService.use('en');
            if (data != null) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_cumulocity_home_home__["a" /* UserHomePage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_cumulocity_userlogin_userlogin__["a" /* UserLoginPage */]);
            }
        });
    };
    // loadingPage(){
    //   this.storage.ready().then(()=>{
    //     this.storage.get("children").then((data)=>{
    //       this.loader.dismiss();
    //       if(data != null){
    //         this.setLanguage()
    //         this.rootPage = ChildrenPage;
    //         // this.loader.dismiss();
    //       }else if(data == null){
    //         // this.loader.dismiss();
    //         this.storage.set("language", "en");
    //         this.translateService.use('en');
    //         this.rootPage = HomePage;
    //       }
    //     })
    //   })
    // }
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
        // this.translateService.get('APP_PAGE.load').subscribe((load)=>{
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
        // });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/app/app.html"*/'<ion-menu *ngIf="this.platform.dir()===\'rtl\'" side="right" [content]="content">\n  <ion-header>\n    <ion-toolbar style="min-height: 150px;">\n      <ion-title>{{ \'APP_PAGE.menu\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{ p.title | translate }}\n      </button>\n      <button menuClose ion-item (click)="switchMySensors()">\n        <ion-icon name="swap"></ion-icon> {{ \'APP_PAGE.switchApp\' | translate }}\n      </button>\n      <button menuClose ion-item (click)="userLogout()">\n        <ion-icon name="exit"></ion-icon> {{ \'APP_PAGE.logout\' | translate }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu *ngIf="this.platform.dir()===\'ltr\'" side="left" [content]="content">\n  <ion-header>\n    <ion-toolbar style="min-height: 150px;">\n      <ion-title>{{ \'APP_PAGE.menu\' | translate }} </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{ p.title | translate }}\n      </button>\n      <button menuClose ion-item (click)="switchMySensors()">\n        <ion-icon name="swap"></ion-icon> {{ \'APP_PAGE.switchApp\' | translate }}\n      </button>\n      <button menuClose ion-item (click)="userLogout()">\n        <ion-icon name="exit"></ion-icon> {{ \'APP_PAGE.logout\' | translate }}\n      </button>\n    </ion-list>\n  </ion-content>\n  \n  <ion-footer>\n  <ion-toolbar>\n    <ion-title>v1.3.2</ion-title>\n  </ion-toolbar>\n</ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 915:
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
        selector: 'popover',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/components/popover/popover.html"*/'\n<div>\n  <ion-list>\n    <ion-item (click)="sayHello()">\n      Add\n    </ion-item>\n    <ion-item (click)="sayHello()">\n      Sort\n    </ion-item>\n    <ion-item (click)="sayHello()">\n      Delete\n    </ion-item>\n  </ion-list>\n</div>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/components/popover/popover.html"*/
    }),
    __metadata("design:paramtypes", [])
], PopoverComponent);

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 916:
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

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 460,
	"./af.js": 460,
	"./ar": 169,
	"./ar-dz": 461,
	"./ar-dz.js": 461,
	"./ar-kw": 462,
	"./ar-kw.js": 462,
	"./ar-ly": 463,
	"./ar-ly.js": 463,
	"./ar-ma": 464,
	"./ar-ma.js": 464,
	"./ar-sa": 465,
	"./ar-sa.js": 465,
	"./ar-tn": 466,
	"./ar-tn.js": 466,
	"./ar.js": 169,
	"./az": 467,
	"./az.js": 467,
	"./be": 468,
	"./be.js": 468,
	"./bg": 469,
	"./bg.js": 469,
	"./bm": 470,
	"./bm.js": 470,
	"./bn": 471,
	"./bn.js": 471,
	"./bo": 472,
	"./bo.js": 472,
	"./br": 473,
	"./br.js": 473,
	"./bs": 474,
	"./bs.js": 474,
	"./ca": 475,
	"./ca.js": 475,
	"./cs": 476,
	"./cs.js": 476,
	"./cv": 477,
	"./cv.js": 477,
	"./cy": 478,
	"./cy.js": 478,
	"./da": 479,
	"./da.js": 479,
	"./de": 480,
	"./de-at": 481,
	"./de-at.js": 481,
	"./de-ch": 482,
	"./de-ch.js": 482,
	"./de.js": 480,
	"./dv": 483,
	"./dv.js": 483,
	"./el": 484,
	"./el.js": 484,
	"./en-au": 485,
	"./en-au.js": 485,
	"./en-ca": 486,
	"./en-ca.js": 486,
	"./en-gb": 487,
	"./en-gb.js": 487,
	"./en-ie": 488,
	"./en-ie.js": 488,
	"./en-nz": 489,
	"./en-nz.js": 489,
	"./eo": 490,
	"./eo.js": 490,
	"./es": 491,
	"./es-do": 492,
	"./es-do.js": 492,
	"./es-us": 493,
	"./es-us.js": 493,
	"./es.js": 491,
	"./et": 494,
	"./et.js": 494,
	"./eu": 495,
	"./eu.js": 495,
	"./fa": 496,
	"./fa.js": 496,
	"./fi": 497,
	"./fi.js": 497,
	"./fo": 498,
	"./fo.js": 498,
	"./fr": 499,
	"./fr-ca": 500,
	"./fr-ca.js": 500,
	"./fr-ch": 501,
	"./fr-ch.js": 501,
	"./fr.js": 499,
	"./fy": 502,
	"./fy.js": 502,
	"./gd": 503,
	"./gd.js": 503,
	"./gl": 504,
	"./gl.js": 504,
	"./gom-latn": 505,
	"./gom-latn.js": 505,
	"./gu": 506,
	"./gu.js": 506,
	"./he": 507,
	"./he.js": 507,
	"./hi": 508,
	"./hi.js": 508,
	"./hr": 509,
	"./hr.js": 509,
	"./hu": 510,
	"./hu.js": 510,
	"./hy-am": 511,
	"./hy-am.js": 511,
	"./id": 512,
	"./id.js": 512,
	"./is": 513,
	"./is.js": 513,
	"./it": 514,
	"./it.js": 514,
	"./ja": 515,
	"./ja.js": 515,
	"./jv": 516,
	"./jv.js": 516,
	"./ka": 517,
	"./ka.js": 517,
	"./kk": 518,
	"./kk.js": 518,
	"./km": 519,
	"./km.js": 519,
	"./kn": 520,
	"./kn.js": 520,
	"./ko": 521,
	"./ko.js": 521,
	"./ky": 522,
	"./ky.js": 522,
	"./lb": 523,
	"./lb.js": 523,
	"./lo": 524,
	"./lo.js": 524,
	"./lt": 525,
	"./lt.js": 525,
	"./lv": 526,
	"./lv.js": 526,
	"./me": 527,
	"./me.js": 527,
	"./mi": 528,
	"./mi.js": 528,
	"./mk": 529,
	"./mk.js": 529,
	"./ml": 530,
	"./ml.js": 530,
	"./mr": 531,
	"./mr.js": 531,
	"./ms": 532,
	"./ms-my": 533,
	"./ms-my.js": 533,
	"./ms.js": 532,
	"./mt": 534,
	"./mt.js": 534,
	"./my": 535,
	"./my.js": 535,
	"./nb": 536,
	"./nb.js": 536,
	"./ne": 537,
	"./ne.js": 537,
	"./nl": 538,
	"./nl-be": 539,
	"./nl-be.js": 539,
	"./nl.js": 538,
	"./nn": 540,
	"./nn.js": 540,
	"./pa-in": 541,
	"./pa-in.js": 541,
	"./pl": 542,
	"./pl.js": 542,
	"./pt": 543,
	"./pt-br": 544,
	"./pt-br.js": 544,
	"./pt.js": 543,
	"./ro": 545,
	"./ro.js": 545,
	"./ru": 546,
	"./ru.js": 546,
	"./sd": 547,
	"./sd.js": 547,
	"./se": 548,
	"./se.js": 548,
	"./si": 549,
	"./si.js": 549,
	"./sk": 550,
	"./sk.js": 550,
	"./sl": 551,
	"./sl.js": 551,
	"./sq": 552,
	"./sq.js": 552,
	"./sr": 553,
	"./sr-cyrl": 554,
	"./sr-cyrl.js": 554,
	"./sr.js": 553,
	"./ss": 555,
	"./ss.js": 555,
	"./sv": 556,
	"./sv.js": 556,
	"./sw": 557,
	"./sw.js": 557,
	"./ta": 558,
	"./ta.js": 558,
	"./te": 559,
	"./te.js": 559,
	"./tet": 560,
	"./tet.js": 560,
	"./th": 561,
	"./th.js": 561,
	"./tl-ph": 562,
	"./tl-ph.js": 562,
	"./tlh": 563,
	"./tlh.js": 563,
	"./tr": 564,
	"./tr.js": 564,
	"./tzl": 565,
	"./tzl.js": 565,
	"./tzm": 566,
	"./tzm-latn": 567,
	"./tzm-latn.js": 567,
	"./tzm.js": 566,
	"./uk": 568,
	"./uk.js": 568,
	"./ur": 569,
	"./ur.js": 569,
	"./uz": 570,
	"./uz-latn": 571,
	"./uz-latn.js": 571,
	"./uz.js": 570,
	"./vi": 572,
	"./vi.js": 572,
	"./x-pseudo": 573,
	"./x-pseudo.js": 573,
	"./yo": 574,
	"./yo.js": 574,
	"./zh-cn": 575,
	"./zh-cn.js": 575,
	"./zh-hk": 576,
	"./zh-hk.js": 576,
	"./zh-tw": 577,
	"./zh-tw.js": 577
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
webpackContext.id = 917;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__child_grades_child_grades__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bus_track_bus_track__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_messages__ = __webpack_require__(163);
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
        selector: 'page-notifications',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'NOTIFICATIONS_PAGE.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item (click)="childScore()">\n      <ion-icon color="mainColor" ios="ios-paper" md="md-paper" item-start></ion-icon>\n      <h3>{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: Ahmed</h3>\n      <h2>New Test Score</h2>\n      <p text-right> <span>{{ newDate | customDate: lang }}</span> </p>\n    </button>\n    <button ion-item (click)="busTrack()">\n      <ion-icon color="mainColor" ios="ios-bus-outline" md="md-bus" item-start></ion-icon>\n      <h3>{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: Ahmed</h3>\n      <h2>Bus out of track</h2>\n      <p text-right> <span>{{ newDate | customDate: lang }}</span> </p>\n    </button>\n    <button ion-item (click)="showMessage()">\n      <ion-icon color="mainColor" ios="ios-chatboxes" md="md-chatboxes" item-start></ion-icon>\n      <h3>{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: Ahmed</h3>\n      <h2>New Message form School</h2>\n      <p text-right> <span>{{ newDate | customDate: lang }}</span> </p>\n    </button>\n\n    <button ion-item *ngFor="let item of items" (click)="notificationDetails(item)">\n      <ion-icon \n        color="mainColor" *ngIf="rooms.tag.indexOf(item.sid) >= 0" ios="ios-pricetag-outline" md="md-pricetag" item-start>\n      </ion-icon>\n\n      <ion-icon\n        color="mainColor" *ngIf="rooms.bus.indexOf(item.sid) >= 0" ios="ios-bus-outline" md="md-bus" item-start>\n      </ion-icon>\n\n      <ion-icon\n        color="mainColor" *ngIf="rooms.geo == item.sid" ios="ios-home-outline" md="md-home" item-start>\n      </ion-icon>\n\n      <h3 *ngIf="item.name">{{ \'NOTIFICATIONS_PAGE.childName\' | translate }}: {{item.name.toString()}}</h3>\n\n      <h2 *ngIf="item.msg.length == 30 || item.msg.length < 30;else msg">{{item.msg}}</h2>\n\n      <ng-template #msg><h2>{{item.msg.substr(0, 30) +"..."}}</h2></ng-template>\n      \n      <p *ngIf="(item.time | customDate: lang) != item.time; else temp" text-right>\n        <span>{{ item.time | customDate: lang }}</span>\n        <span *ngIf="(item.time | customDate: lang).includes(\'day\')">, {{item.time | date:\'shortTime\'}}</span>\n      </p>\n\n      <ng-template #temp>\n        <p text-right>{{item.time | date:\'short\'}}</p>\n      </ng-template>\n    </button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/notifications/notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register1_register1__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__intro_intro__ = __webpack_require__(99);
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
        selector: 'page-home',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/home/home.html"*/'<ion-content padding class="home">\n	<ion-item>\n		<ion-label>{{ \'LANGUAGE.selectLanguage\' | translate }}:</ion-label>\n		<ion-select [(ngModel)]="lang" (ngModelChange)="changeLanguage($event)"\n				okText="{{ \'LANGUAGE.ok\' | translate }}" cancelText="{{ \'LANGUAGE.cancel\' | translate }}">\n\n			<ion-option value="en">{{ \'LANGUAGE.en\' | translate }}</ion-option>\n			<ion-option value="ar">{{ \'LANGUAGE.ar\' | translate }}</ion-option>\n		</ion-select>\n	</ion-item>\n\n    <button ion-button color="mainColor" round block (click)="goToLogin()">\n    	<ion-icon name="ios-log-in"></ion-icon>&nbsp;{{ \'HOME_PAGE.login\' | translate }}\n    </button>\n\n    <h3>{{ \'HOME_PAGE.or\' | translate }}</h3>\n\n    <button ion-button color="primary" round block (click)="goToRegistration()">\n    	<ion-icon name="ios-log-in"></ion-icon>&nbsp;{{ \'HOME_PAGE.register\' | translate }}\n    </button>\n\n    <button ion-button icon-start color="light" clear (click)="backToIntro()">\n     	<ion-icon name="arrow-round-back"></ion-icon>&nbsp; {{ \'HOME_PAGE.back\' | translate }}\n    </button>\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__children_children__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cumulocity_userlogin_userlogin__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cumulocity_home_home__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IntroPage = (function () {
    function IntroPage(navCtrl, menuCtrl, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
    }
    IntroPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    IntroPage.prototype.mySensors = function () {
        var _this = this;
        // this.navCtrl.setRoot(UserLoginPage);
        this.storage.get("devices").then(function (data) {
            _this.storage.get("userData").then(function (user) {
                if (user != null && data != null) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__cumulocity_home_home__["a" /* UserHomePage */]);
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cumulocity_userlogin_userlogin__["a" /* UserLoginPage */]);
                }
            });
        });
    };
    IntroPage.prototype.busTrackingApp = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("children").then(function (data) {
                if (data != null) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__children_children__["a" /* ChildrenPage */]);
                }
                else {
                    _this.storage.set("language", "en");
                    // this.translateService.use('en');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
            });
        });
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/intro/intro.html"*/'<ion-content class="content" padding>\n\n	<button ion-button color="primary" round block (click)="mySensors()">\n    	My Sensors\n    </button>\n\n    <h3>OR</h3>\n\n    <button ion-button color="primary" round block (click)="busTrackingApp()">\n    	Bus Tracking App\n    </button>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/busTrackingApp/src/pages/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ })

},[578]);
//# sourceMappingURL=main.js.map