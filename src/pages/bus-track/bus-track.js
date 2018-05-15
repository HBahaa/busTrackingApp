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
import { GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
var BusTrackPage = /** @class */ (function () {
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
        this.map = GoogleMaps.create('map', mapOptions);
        this.map.one(GoogleMapsEvent.MAP_READY)
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
    BusTrackPage = __decorate([
        Component({
            selector: 'page-bus-track',
            templateUrl: 'bus-track.html',
        }),
        __metadata("design:paramtypes", [])
    ], BusTrackPage);
    return BusTrackPage;
}());
export { BusTrackPage };
//# sourceMappingURL=bus-track.js.map