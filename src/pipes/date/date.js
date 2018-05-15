var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/ar';
var DatePipe = /** @class */ (function () {
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
            moment.locale(args[0]);
        }
        else {
            moment.locale('en');
        }
        if (myDate.getFullYear() === newDate.getFullYear() && newDate.getMonth() === newDate.getMonth()) {
            if (myDate.getDate() === newDate.getDate()) {
                return moment(value).fromNow();
            }
            else if (newDate.getDate() >= myDate.getDate() && myDate.getDate() >= newDate.getDate() - 6) {
                return moment(value).fromNow();
            }
            else {
                // return value
                return moment(value).format('l, h:mm a');
            }
        }
        else {
            // return value
            return moment(value).format('l, h:mm a');
        }
    };
    DatePipe = __decorate([
        Pipe({
            name: 'customDate',
        })
    ], DatePipe);
    return DatePipe;
}());
export { DatePipe };
//# sourceMappingURL=date.js.map