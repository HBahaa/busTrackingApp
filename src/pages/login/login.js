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
import { NavController, MenuController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ChildrenPage } from '../children/children';
import { Register1Page } from '../register1/register1';
import { LoginProvider } from '../../providers/login/login';
import { GetChildrenProvider } from '../../providers/get-children/get-children';
import { ResetPasswordProvider } from '../../providers/reset-password/reset-password';
var LoginPage = /** @class */ (function () {
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
                    _this.navCtrl.setRoot(ChildrenPage);
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
        this.navCtrl.setRoot(Register1Page);
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
            providers: [LoginProvider, GetChildrenProvider, ResetPasswordProvider]
        }),
        __metadata("design:paramtypes", [NavController, MenuController, LoginProvider,
            GetChildrenProvider, ResetPasswordProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map