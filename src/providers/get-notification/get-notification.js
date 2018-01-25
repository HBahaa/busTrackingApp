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
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
var GetNotificationProvider = /** @class */ (function () {
    function GetNotificationProvider(storage) {
        this.storage = storage;
    }
    GetNotificationProvider.prototype.getNotification = function (token) {
        var _this = this;
        var dfd = $.Deferred();
        this.storage.get("children").then(function (result) {
            _this.children = result;
            $.each(result, function (index, child) {
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
                $.ajax(settings).done(function (response) {
                    if (response.success) {
                        var messages_1 = response.message;
                        _this.storage.get("roomsData").then(function (data) {
                            var roomsData = data;
                            $.each(messages_1, function (index, message) {
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
    GetNotificationProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage])
    ], GetNotificationProvider);
    return GetNotificationProvider;
}());
export { GetNotificationProvider };
//# sourceMappingURL=get-notification.js.map