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
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { ProfilePage } from '../profile/profile';
import { LoginProvider } from '../../providers/login/login';
var MapModalPage = /** @class */ (function () {
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
        this.map = GoogleMaps.create('map', mapOptions);
        this.map.one(GoogleMapsEvent.MAP_READY)
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
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(function () {
            console.log('Map is ready!');
            _this.map.addEventListener(GoogleMapsEvent.MAP_CLICK).subscribe(function (data) {
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
                $.ajax(settings).done(function (response) {
                    // alert("response"+ JSON.stringify(response))
                    if (response.success) {
                        _this.loader.dismiss();
                        _this.navCtrl.setRoot(ProfilePage);
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
    MapModalPage = __decorate([
        Component({
            selector: 'page-map-modal',
            templateUrl: 'map-modal.html',
            providers: [LoginProvider]
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Storage,
            LoadingController, TranslateService,
            LoginProvider])
    ], MapModalPage);
    return MapModalPage;
}());
export { MapModalPage };
//# sourceMappingURL=map-modal.js.map