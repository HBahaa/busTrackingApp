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
var DriverPage = /** @class */ (function () {
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
    DriverPage = __decorate([
        Component({
            selector: 'page-driver',
            templateUrl: 'driver.html',
        }),
        __metadata("design:paramtypes", [])
    ], DriverPage);
    return DriverPage;
}());
export { DriverPage };
//# sourceMappingURL=driver.js.map