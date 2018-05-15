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
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
var GetChildrenProvider = /** @class */ (function () {
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
            $.ajax(settings).done(function (response) {
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
                    $.each(response.data.children, function (index, value) {
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
    GetChildrenProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage, LoadingController, TranslateService])
    ], GetChildrenProvider);
    return GetChildrenProvider;
}());
export { GetChildrenProvider };
//# sourceMappingURL=get-children.js.map