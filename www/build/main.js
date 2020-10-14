webpackJsonp([3],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bmobconfig; });
// import Bmob from 'hydrogen-js-sdk'
var Bmobconfig = /** @class */ (function () {
    function Bmobconfig() {
    }
    Bmobconfig.getBmob = function () {
        if (this.isIniteBmob == 0) {
            var Bmob = __webpack_require__(294);
            // var BmobSocket = require('../../node_modules/hydrogen-js-sdk/src/lib/socket.js')
            var APP_ID = '3a8d5ede11cbbdfc304094a29052a867';
            var APP_KEY = '609a1b690ebb89089aa7906a10f2144b';
            var secret_key = '0f4054a2d630d1c5';
            var API_secureCode = '092048';
            Bmob.initialize(APP_ID, APP_KEY);
            var BmobSocketIo = Bmob.Socket;
            console.log(BmobSocketIo.updateTable);
            console.log(BmobSocketIo);
            this.bmob = Bmob;
            this.isIniteBmob = 1;
        }
        return this.bmob;
    };
    Bmobconfig.isIniteBmob = 0;
    return Bmobconfig;
}());

//# sourceMappingURL=getBmob.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        // console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getURL = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.extractData = function (res) {
        var body = res.body.json();
        return JSON.parse(body) || {};
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpResponse */]) {
            var b = error.body.json() || '';
            var err = b.error || JSON.stringify(b);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUI; });
var BaseUI = /** @class */ (function () {
    function BaseUI() {
    }
    BaseUI.prototype.showLoading = function (LoadingCtrl, message) {
        var loader = LoadingCtrl.create({
            content: message,
            dismissOnPageChange: true
        });
        loader.present();
        return loader;
    };
    BaseUI.prototype.showToast = function (toastCtrl, message) {
        var toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    };
    return BaseUI;
}());

//# sourceMappingURL=baseui.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__moment_moment__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__write_write__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_moments_my_moments__ = __webpack_require__(188);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MomentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiscoveryPage = /** @class */ (function (_super) {
    __extends(DiscoveryPage, _super);
    function DiscoveryPage(navCtrl, navParams, modalCtrl, viewCtrl, loadingCtrl, toastCtrl, storage, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.http = http;
        return _this;
    }
    DiscoveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MomentPage');
    };
    DiscoveryPage.prototype.gotoMomentPage = function () {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var currentUser = Bmob.User.current();
        // console.log(currentUser);
        if (currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__moment_moment__["a" /* MomentPage */]);
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    DiscoveryPage.prototype.gotoMyMomentPage = function () {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var currentUser = Bmob.User.current();
        // console.log(currentUser);
        if (currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__my_moments_my_moments__["a" /* MyMomentsPage */]);
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    DiscoveryPage.prototype.gotoWritePage = function () {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var currentUser = Bmob.User.current();
        // console.log(currentUser);
        if (currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__write_write__["a" /* WritePage */]);
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    DiscoveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-moment',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/discovery/discovery.html"*/'<!--\n  Generated template for the DiscoveryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar style="opacity: 0.6" no-border-bottom >\n    <ion-title>Moments</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content text-center>\n  <br><br>\n  <h1 > Sharing ideas about movie!</h1>\n  <br><br><br>\n  <div class="buttons">\n\n\n    <div padding>\n      <button ion-button  (click)="gotoMomentPage()">My Friends&emsp;\n        <ion-icon name="heart"></ion-icon>\n      </button>\n    </div>\n    <br><br><br>\n    <div padding>\n      <button ion-button  (click)="gotoMyMomentPage()">My Moments&emsp;\n        <ion-icon name="person"></ion-icon>\n      </button>\n    </div>\n    <br><br><br>\n    <div padding>\n      <button ion-button   (click)="gotoWritePage()">New Moment&emsp;\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </div>\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/discovery/discovery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], DiscoveryPage);
    return DiscoveryPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=discovery.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__one_moment_one_moment__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function (_super) {
    __extends(MessagePage, _super);
    function MessagePage(navCtrl, navParams, modalCtrl, viewCtrl, storage, alertCtrl, loadingCtrl, toastCtrl, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.alertCtrl = alertCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.http = http;
        return _this;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
        this.getMessges();
        console.log(this.feeds);
    };
    MessagePage.prototype.getMessges = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                console.log('here', val);
                var query = Bmob.Query('comment');
                query.equalTo('moment_owner', "==", val);
                query.equalTo('owner', "!=", val);
                query.find().then(function (todo) {
                    _this.feeds = todo.reverse();
                    for (var i = 0; i < _this.feeds.length; i++) {
                        _this.feeds[i]['index'] = i;
                    }
                });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, 'Please Login first...');
            }
        });
    };
    MessagePage.prototype.gotoOneMomentPage0 = function (id) {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var currentUser = Bmob.User.current();
        console.log(currentUser);
        if (currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__one_moment_one_moment__["a" /* OneMomentPage */], { id: id });
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    MessagePage.prototype.set_read = function (comment_id) {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('comment');
        query.set('id', comment_id);
        query.set('read', true);
        query.save();
    };
    MessagePage.prototype.gotoOneMomentPage = function (id, comment_id) {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        this.set_read(comment_id);
        var currentUser = Bmob.User.current();
        console.log(currentUser);
        if (currentUser) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__one_moment_one_moment__["a" /* OneMomentPage */], { id: id });
            //关闭后的回调
            modal.onDidDismiss(function () {
                _this.getMessges();
            });
            modal.present();
            // this.navCtrl.push(OneMomentPage, { id: id ,like_id: like_id});
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>message</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class="card" *ngFor="let f of feeds" (click)="gotoOneMomentPage(f[\'moment\'],f[\'objectId\'])">\n\n    <ion-item>\n      <h2>{{f[\'owner_name\']}}</h2>comments on your moment:\n      <i class="i" [hidden]="f[\'read\']==true"></i>\n      <ion-card-content>\n        <p>{{f[\'content\']}}</p>\n      </ion-card-content>\n    </ion-item>\n\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], MessagePage);
    return MessagePage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/discovery/discovery.module": [
		366,
		2
	],
	"../pages/message/message.module": [
		367,
		1
	],
	"../pages/one-moment/one-moment.module": [
		368,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_comment__ = __webpack_require__(184);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MomentPage = /** @class */ (function (_super) {
    __extends(MomentPage, _super);
    function MomentPage(navCtrl, navParams, modalCtrl, viewCtrl, loadingCtrl, toastCtrl, storage, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.http = http;
        return _this;
    }
    MomentPage.prototype.ionViewDidLoad = function () {
        this.getFeeds();
        console.log("here", this.picture, this.username);
        console.log("feeds", this.feeds);
    };
    MomentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MomentPage.prototype.loadlikes = function () {
        var _this = this;
        this.likes = Array(this.feeds.length).fill(false);
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var _loop_1 = function (i) {
            query = Bmob.Query('like');
            feed = this_1.feeds[i];
            query.equalTo('moment', "==", feed['objectId']);
            query.equalTo('owner', "==", Bmob.User.current()['objectId']);
            query.find().then(function (res) {
                if (res.length != 0)
                    _this.likes[i] = true;
            });
        };
        var this_1 = this, query, feed;
        for (var i = 0; i < this.feeds.length; i++) {
            _loop_1(i);
        }
    };
    MomentPage.prototype.like = function (feed) {
        this.likes[feed['index']] = true;
        this.feeds[feed['index']]['likes']++;
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var like = Bmob.Query('like');
        like.set('moment', feed['objectId']);
        like.set('moment_owner', feed['ownerId']);
        like.set('owner', Bmob.User.current()['objectId']);
        like.set('owner_name', Bmob.User.current()['username']);
        like.set('read', false);
        like.save();
        var moment1 = Bmob.Query('moments');
        moment1.set('id', feed['objectId']);
        moment1.set('likes', feed['likes']);
        moment1.save();
    };
    MomentPage.prototype.notlike = function (feed) {
        console.log("notlike!");
        this.likes[feed['index']] = false;
        this.feeds[feed['index']]['likes']--;
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('like');
        query.equalTo('owner', "==", Bmob.User.current()['objectId']);
        query.equalTo('moment', "==", feed['objectId']);
        query.find().then(function (res) {
            var answer0 = Bmob.Query('like');
            answer0.destroy(res[0]['objectId']).then(function (res) {
                var moment1 = Bmob.Query('moments');
                moment1.set('id', feed['objectId']);
                moment1.set('likes', feed['likes']);
                moment1.save();
            });
        });
    };
    MomentPage.prototype.getFeeds = function () {
        this.todoGetFeeds();
    };
    MomentPage.prototype.todoGetFeeds = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var follow = Bmob.Query('follow');
        follow.equalTo("owner_id", "==", Bmob.User.current()['objectId']);
        // follow.select("following_id");
        follow.find().then(function (following) {
            console.log('following', following);
            var f = [];
            for (var i = 0; i < following.length; i++) {
                f.push(following[i]['following_id']);
            }
            f.push(Bmob.User.current()['objectId']);
            var query = Bmob.Query('moments');
            query.order('-updateAt');
            query.containedIn("owner", f);
            console.log('f', f);
            query.find().then(function (todo) {
                // this.feeds = todo.reverse();
                _this.feeds = todo;
                _this.loadlikes();
                _this.headface = Array(_this.feeds.length).fill("");
                _this.username = Array(_this.feeds.length).fill("");
                _this.picture = Array(_this.feeds.length).fill([]);
                _this.comment = Array(_this.feeds.length).fill([]);
                var _loop_2 = function (i_1) {
                    _this.feeds[i_1]['index'] = i_1;
                    feed1 = _this.feeds[i_1];
                    objectId = feed1['owner']['objectId'];
                    urls = feed1['urls'];
                    // var comment = Bmob.Query('comment');
                    // comment.equalTo("moment", "==", feed1['objectId']);
                    // comment.order('updateAt');
                    // comment.find().then(res=>{
                    //   this.comment[i]=res;
                    // });
                    var pic = [];
                    for (var j = 0; j < urls.length; j++) {
                        _this.http.get(urls[j], { responseType: 'arraybuffer' }).subscribe(function (ab) {
                            // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                            var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                            pic.push('data:image/jpeg;base64,' + base64String);
                        });
                    }
                    _this.picture[i_1] = pic;
                    comment = Bmob.Query('comment');
                    comment.equalTo("moment", "==", feed1['objectId']);
                    comment.order('updateAt');
                    var comment_list = [];
                    comment.find().then(function (res) {
                        for (var j = 0; j < res.length; j++) {
                            comment_list.push(res[j]);
                        }
                    });
                    _this.comment[i_1] = comment_list;
                    query0 = Bmob.Query('_User');
                    query0.equalTo('objectId', "==", objectId);
                    query0.find().then(function (res) {
                        var url = res[0]['headimage'];
                        _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                            // let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                            var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                            var imgData = 'data:image/jpeg;base64,' + base64String;
                            _this.headface[i_1] = imgData;
                            _this.username[i_1] = res[0]['username'];
                        });
                    });
                };
                var feed1, objectId, urls, comment, query0;
                for (var i_1 = 0; i_1 < _this.feeds.length; i_1++) {
                    _loop_2(i_1);
                }
                console.log(_this.picture);
                console.log(_this.comment);
            });
        });
    };
    MomentPage.prototype.gotoComment = function (f) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__comment_comment__["a" /* CommentPage */], { moment: f });
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.getFeeds();
        });
        modal.present();
    };
    MomentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-discovery',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/moment/moment.html"*/'<!--\n  Generated template for the MomentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Moments</ion-title>\n    <ion-buttons start>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager="true">\n    <div *ngFor="let f of feeds">\n      <ion-slide>\n        <ion-card>\n          <ion-list>\n            <ion-item>\n              <ion-avatar item-start>\n                <img  src="{{headface[f[\'index\']]}}">\n              </ion-avatar>\n              <p> {{username[f[\'index\']]}}</p>\n\n              <!--          <ion-card-content></ion-card-content>-->\n            </ion-item>\n            <ion-card-content>\n\n              <p>{{f[\'content\']}}</p>\n            </ion-card-content>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <img  src="{{picture[f[\'index\']][0]}}" >\n\n                  </ion-col>\n                  <ion-col>\n                    <img  src="{{picture[f[\'index\']][1]}}" >\n\n                  </ion-col>\n                  <ion-col>\n                    <img  src="{{picture[f[\'index\']][2]}}" >\n\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-item>\n                <div>\n                  <ion-icon  [hidden]="likes[f[\'index\']]==true" name="heart" (click)="like(f)"></ion-icon>\n                  <ion-icon  [hidden]="likes[f[\'index\']]==false" color=\'danger\' name="heart" (click)="notlike(f)"></ion-icon>\n                  &nbsp;{{f[\'likes\']}} like\n                </div>\n              </ion-item>\n            </ion-item>\n            <div *ngFor="let c of comment[f[\'index\']]" class="note-content">\n                <div>\n                  <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{c[\'owner_name\']}}:&nbsp;{{c[\'content\']}}</p>\n                </div>\n            </div>\n          </ion-list>\n\n          <div>\n            &nbsp;&nbsp;&nbsp;\n          </div>\n          <div>\n            &nbsp;&nbsp;&nbsp;\n          </div>\n        </ion-card>\n<!--        comment-->\n        <ion-fab right bottom>\n        <button class="create" ion-fab (click)="gotoComment(f)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-fab>\n      </ion-slide>\n    </div>\n\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/moment/moment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], MomentPage);
    return MomentPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_getBmob__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = /** @class */ (function (_super) {
    __extends(CommentPage, _super);
    function CommentPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        return _this;
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        this.moment = this.navParams.get("moment");
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CommentPage.prototype.submit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var Bmob = __WEBPACK_IMPORTED_MODULE_4__common_getBmob__["a" /* Bmobconfig */].getBmob();
                // var username =  Bmob.User.current()['username'];
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "Posting Comment...");
                var query = Bmob.Query('comment');
                query.set('moment', _this.moment['objectId']);
                query.set('moment_owner', _this.moment['ownerId']);
                query.set('owner', Bmob.User.current()['objectId']);
                query.set('owner_name', Bmob.User.current()['username']);
                query.set('content', _this.content);
                query.set('read', false);
                query.save();
                //   .then(res=>
                // {
                //
                //   var moment = Bmob.Query('moments');
                //   moment.get(this.moment['objectId']).then(res0=>{
                //     console.log('here');
                //     var comment=res0['comments'];
                //     console.log('res',res);
                //     console.log('res0',res0);
                //     console.log('comment',comment);
                //     comment.push(res['objectId']);
                //
                //     var moment0 = Bmob.Query('moments');
                //     moment0.set('id', res0['objectId']);
                //     moment0.set('comments',comment);
                //     moment0.save();
                //
                //   });
                //
                // });
                loading.dismiss();
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "Please Login first...");
            }
            _this.dismiss();
        });
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/comment/comment.html"*/'<!--\n  Generated template for the CommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>comment</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" >取消</span>\n<!--                <ion-icon name="md-close" showWhen="android"></ion-icon>-->\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="submit()">\n        <span ion-text color="primary" >发布</span>\n        <!--        <ion-icon name="md-add-circle" showWhen="android"></ion-icon>-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>请输入评论内容</ion-label>\n      <ion-textarea type="text" rows="20" style="height:100%;" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/comment/comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CommentPage);
    return CommentPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the WritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var WritePage = /** @class */ (function (_super) {
    __extends(WritePage, _super);
    function WritePage(navCtrl, navParams, modalCtrl, storage, loadingCtrl, http, camera, transfer, file, platform, filePath, actionSheetCtrl, toastCtrl, viewCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.http = http;
        _this.camera = camera;
        _this.transfer = transfer;
        _this.file = file;
        _this.platform = platform;
        _this.filePath = filePath;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.toastCtrl = toastCtrl;
        _this.viewCtrl = viewCtrl;
        _this.img_count = 1;
        _this.file_list = [];
        _this.blob2Base64 = function (blob, callback) {
            var reader = new FileReader();
            reader.onload = function () {
                var dataUrl = reader.result;
                var base64 = dataUrl.split(',')[1];
                callback(base64);
            };
            reader.readAsDataURL(blob);
        };
        return _this;
    }
    WritePage.prototype.ionViewDidLoad = function () {
        this.img_count = 1;
        this.file_list = [];
        if (this.platform.is('android'))
            this.device = 'android';
        else
            this.device = 'web';
    };
    WritePage.prototype.selectImg = function () {
        this.img_count++;
    };
    WritePage.prototype.post = function () {
        var _this = this;
        console.log("here");
        var img_list = [];
        for (var i = 1; i < 3; i++) {
            var uploadsFile = document.getElementById("file-input" + i.toString());
            var resultFile = uploadsFile.files[0];
            console.log(i, resultFile);
            var formData = new FormData();
            if (resultFile) {
                formData.append('file', resultFile);
                __WEBPACK_IMPORTED_MODULE_10_jquery__["ajax"]({
                    url: "http://localhost:8088/firstWeb/uploadImg",
                    type: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                    }
                });
                var headurl = 'http://localhost:8080/photo/' + resultFile.name;
                img_list.push(headurl);
            }
        }
        this.storage.get('UserId').then(function (val) {
            console.log(val);
            var Ownerid = val;
            var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
            var pointer1 = Bmob.Pointer('_User');
            var OwnerpoiID = pointer1.set(Ownerid);
            var moment = Bmob.Query('moments');
            moment.set('content', _this.content);
            moment.set('owner', OwnerpoiID);
            moment.set('ownerId', val);
            moment.set('urls', img_list);
            moment.set('comments', []);
            moment.set('likes', 0);
            moment.set('username', Bmob.User.current()['username']);
            moment.save();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "succeeded!");
        }).catch(function (err) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "error in choosing a photo!");
            console.log(err);
        });
    };
    //为文件生成一个新的文件名
    WritePage.prototype.createFileName = function () {
        var rand = Math.random().toString(36).slice(-4);
        var d = new Date(), n = d.getTime(), newFileName = n + rand + ".jpg"; //拼接文件名
        return newFileName;
    };
    WritePage.prototype.loadImageFromDevice1 = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            var blob = new Blob([new Uint8Array(reader.result)]);
            _this.blob2Base64(blob, function (base64String) {
                document.getElementById('show1')['src'] = 'data:image/jpeg;base64,' + base64String;
            });
            // this.img_count++;
        };
    };
    ;
    WritePage.prototype.loadImageFromDevice2 = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            var blob = new Blob([new Uint8Array(reader.result)]);
            _this.blob2Base64(blob, function (base64String) {
                document.getElementById('show2')['src'] = 'data:image/jpeg;base64,' + base64String;
            });
            // this.img_count++;
        };
    };
    ;
    WritePage.prototype.loadImageFromDevice3 = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            var blob = new Blob([new Uint8Array(reader.result)]);
            _this.blob2Base64(blob, function (base64String) {
                document.getElementById('show3')['src'] = 'data:image/jpeg;base64,' + base64String;
            });
            // this.img_count++;
        };
    };
    ;
    WritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-write',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/write/write.html"*/'<!--\n  Generated template for the WritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>write</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n<!--    <ion-label stacked>问题tag(以空格隔开)</ion-label>-->\n    <!--      多行文本的输入-->\n    <ion-textarea type="text"  placeholder="share your ideas!"  [(ngModel)]="content" autosize></ion-textarea>\n  </ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img id="show1"  src="http://localhost:8080/photo/blank.png" >\n\n      </ion-col>\n      <ion-col>\n        <img id="show2"  src="http://localhost:8080/photo/blank.png" >\n\n      </ion-col>\n      <ion-col>\n        <img id="show3" src="http://localhost:8080/photo/blank.png" >\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-footer padding-bottom>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n\n          <button [hidden]="img_count!=1" ion-button>\n            <input type="file" (change)="loadImageFromDevice1($event)" id="file-input1"\n                   accept="image/png, image/jpeg">\n          </button>\n          <button [hidden]="img_count!=2" ion-button>\n            <input type="file" (change)="loadImageFromDevice2($event)" id="file-input2"\n                   accept="image/png, image/jpeg">\n          </button>\n          <button [hidden]="img_count!=3" ion-button>\n            <input type="file" (change)="loadImageFromDevice3($event)" id="file-input3"\n                   accept="image/png, image/jpeg">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button  [hidden]="img_count>=4" (click)="selectImg()">OK!</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n<!--        <button [hidden]="device!=\'android\'" ion-button icon-left >-->\n<!--          <ion-icon name="cloud"></ion-icon>Post it...-->\n<!--        </button>-->\n        <button  ion-button icon-left (click)="post()">\n          <ion-icon name="cloud"></ion-icon>Post it...\n        </button>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/write/write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], WritePage);
    return WritePage;
}(__WEBPACK_IMPORTED_MODULE_9__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=write.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMomentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseui__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyMomentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MyMomentsPage = /** @class */ (function (_super) {
    __extends(MyMomentsPage, _super);
    function MyMomentsPage(navCtrl, navParams, modalCtrl, viewCtrl, loadingCtrl, toastCtrl, storage, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.http = http;
        return _this;
    }
    MyMomentsPage.prototype.ionViewDidLoad = function () {
        this.getFeeds();
        console.log("here", this.picture, this.username);
        console.log("feeds", this.feeds);
    };
    MyMomentsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MyMomentsPage.prototype.loadlikes = function () {
        var _this = this;
        this.likes = Array(this.feeds.length).fill(false);
        var Bmob = __WEBPACK_IMPORTED_MODULE_4__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var _loop_1 = function (i) {
            query = Bmob.Query('like');
            feed = this_1.feeds[i];
            query.equalTo('moment', "==", feed['objectId']);
            query.equalTo('owner', "==", Bmob.User.current()['objectId']);
            query.find().then(function (res) {
                if (res.length != 0)
                    _this.likes[i] = true;
            });
        };
        var this_1 = this, query, feed;
        for (var i = 0; i < this.feeds.length; i++) {
            _loop_1(i);
        }
    };
    MyMomentsPage.prototype.like = function (feed) {
        this.likes[feed['index']] = true;
        this.feeds[feed['index']]['likes']++;
        var Bmob = __WEBPACK_IMPORTED_MODULE_4__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var like = Bmob.Query('like');
        like.set('moment', feed['objectId']);
        like.set('moment_owner', feed['ownerId']);
        like.set('owner', Bmob.User.current()['objectId']);
        like.set('owner_name', Bmob.User.current()['username']);
        like.set('read', false);
        like.save();
        var moment1 = Bmob.Query('moments');
        moment1.set('id', feed['objectId']);
        moment1.set('likes', feed['likes']);
        moment1.save();
    };
    MyMomentsPage.prototype.notlike = function (feed) {
        console.log("notlike!");
        this.likes[feed['index']] = false;
        this.feeds[feed['index']]['likes']--;
        var Bmob = __WEBPACK_IMPORTED_MODULE_4__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('like');
        query.equalTo('owner', "==", Bmob.User.current()['objectId']);
        query.equalTo('moment', "==", feed['objectId']);
        query.find().then(function (res) {
            var answer0 = Bmob.Query('like');
            answer0.destroy(res[0]['objectId']).then(function (res) {
                var moment1 = Bmob.Query('moments');
                moment1.set('id', feed['objectId']);
                moment1.set('likes', feed['likes']);
                moment1.save();
            });
        });
    };
    MyMomentsPage.prototype.getFeeds = function () {
        this.todoGetFeeds();
    };
    MyMomentsPage.prototype.todoGetFeeds = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_4__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('moments');
        query.equalTo('ownerId', "==", Bmob.User.current()['objectId']);
        console.log('opppps', Bmob.User.current()['objectId']);
        query.order('-updateAt');
        query.find().then(function (todo) {
            // this.feeds = todo.reverse();
            _this.feeds = todo;
            console.log("feeds", _this.feeds);
            _this.loadlikes();
            _this.headface = Array(_this.feeds.length).fill("");
            _this.username = Array(_this.feeds.length).fill("");
            _this.picture = Array(_this.feeds.length).fill([]);
            _this.comment = Array(_this.feeds.length).fill([]);
            var _loop_2 = function (i) {
                _this.feeds[i]['index'] = i;
                feed1 = _this.feeds[i];
                objectId = feed1['owner']['objectId'];
                urls = feed1['urls'];
                var pic = [];
                for (var j = 0; j < urls.length; j++) {
                    _this.http.get(urls[j], { responseType: 'arraybuffer' }).subscribe(function (ab) {
                        // let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                        var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                        pic.push('data:image/jpeg;base64,' + base64String);
                    });
                }
                _this.picture[i] = pic;
                comment = Bmob.Query('comment');
                comment.equalTo("moment", "==", feed1['objectId']);
                comment.order('updateAt');
                var comment_list = [];
                comment.find().then(function (res) {
                    for (var j = 0; j < res.length; j++) {
                        comment_list.push(res[j]);
                    }
                });
                _this.comment[i] = comment_list;
                query0 = Bmob.Query('_User');
                query0.equalTo('objectId', "==", objectId);
                query0.find().then(function (res) {
                    var url = res[0]['headimage'];
                    _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                        // let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                        var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                        var imgData = 'data:image/jpeg;base64,' + base64String;
                        _this.headface[i] = imgData;
                        _this.username[i] = res[0]['username'];
                    });
                });
            };
            var feed1, objectId, urls, comment, query0;
            for (var i = 0; i < _this.feeds.length; i++) {
                _loop_2(i);
            }
            console.log(_this.picture);
        });
    };
    MyMomentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-moments',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/my-moments/my-moments.html"*/'<!--\n  Generated template for the MyMomentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>My Moments</ion-title>\n    <ion-buttons start>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager="true">\n    <div *ngFor="let f of feeds">\n      <ion-slide>\n        <ion-card>\n<!--          <ion-item>-->\n            <ion-card-content>\n\n              <p>{{f[\'content\']}}</p>\n            </ion-card-content>\n<!--          </ion-item>-->\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img  src="{{picture[f[\'index\']][0]}}" >\n\n              </ion-col>\n              <ion-col>\n                <img  src="{{picture[f[\'index\']][1]}}" >\n\n              </ion-col>\n              <ion-col>\n                <img  src="{{picture[f[\'index\']][2]}}" >\n\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n          <ion-item>\n            <div>\n              <ion-icon  [hidden]="likes[f[\'index\']]==true" name="heart" (click)="like(f)"></ion-icon>\n              <ion-icon  [hidden]="likes[f[\'index\']]==false" color=\'danger\' name="heart" (click)="notlike(f)"></ion-icon>\n              &nbsp;{{f[\'likes\']}} like\n            </div>\n          </ion-item>\n          <div *ngFor="let c of comment[f[\'index\']]" class="note-content">\n            <div>\n              <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{c[\'owner_name\']}}:&nbsp;{{c[\'content\']}}</p>\n            </div>\n          </div>\n        </ion-card>\n\n\n      </ion-slide>\n\n    </div>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/my-moments/my-moments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], MyMomentsPage);
    return MyMomentsPage;
}(__WEBPACK_IMPORTED_MODULE_5__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=my-moments.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discovery_discovery__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tabHome = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tabDiscovery = __WEBPACK_IMPORTED_MODULE_2__discovery_discovery__["a" /* DiscoveryPage */];
        // tabChat = ChatPage;
        this.tabNotification = __WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */];
        this.tabMore = __WEBPACK_IMPORTED_MODULE_4__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tabHome" tabTitle="Home" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tabDiscovery" tabTitle="Discovery" tabIcon="compass"></ion-tab>\n<!--  <ion-tab [root]="tabChat" tabTitle="Chat" tabIcon="chatboxes"></ion-tab>-->\n  <ion-tab [root]="tabNotification" tabTitle="Notification" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tabMore" tabTitle="Login" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/tabs/tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__answer_answer__ = __webpack_require__(233);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { QuestionPage } from "../question/question";





var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, modalCtrl, loadingCtrl, toastCtrl, rest, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.rest = rest;
        _this.http = http;
        _this.didLoad = false;
        _this.photo = [];
        _this.username = [];
        return _this;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.didLoad = true;
        this.getFeeds();
        // this.todoGetPhotos();
        console.log("here", this.photo, this.username);
        console.log("feeds", this.feeds);
    };
    HomePage.prototype.gotoQuestion = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__question_question__["a" /* QuestionPage */]);
        modal.onDidDismiss(function () {
            _this.getFeeds();
        });
        modal.present();
    };
    HomePage.prototype.searchByTitle = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('post');
        query.find().then(function (todo) {
            _this.feeds = todo.reverse();
            var temp = [];
            for (var i = 0; i < _this.feeds.length; i++) {
                if (_this.feeds[i]['title'].search(_this.search) != -1) {
                    temp.push(_this.feeds[i]);
                }
            }
            _this.feeds = temp;
            _this.photo = Array(_this.feeds.length).fill("");
            _this.username = Array(_this.feeds.length).fill("");
            var _loop_1 = function (i_1) {
                _this.feeds[i_1]['index'] = i_1;
                // console.log(this.feeds[i]);
                feed1 = _this.feeds[i_1];
                // console.log("feed1", feed1)
                objectId = feed1['questioner_id']['objectId'];
                // console.log(objectId);
                // console.log(typeof(objectId));
                query0 = Bmob.Query('_User');
                query0.equalTo('objectId', "==", objectId);
                query0.find().then(function (res) {
                    var url = res[0]['headimage'];
                    // this.feeds[j]['username']=tmp['username'];
                    _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                        // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                        // var imgData='data:image/jpeg;base64,'+ base64String;
                        var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                        var imgData = 'data:image/jpeg;base64,' + base64String;
                        _this.photo[i_1] = imgData;
                        _this.username[i_1] = res[0]['username'];
                    });
                });
            };
            var feed1, objectId, query0;
            for (var i_1 = 0; i_1 < _this.feeds.length; i_1++) {
                _loop_1(i_1);
            }
        });
    };
    HomePage.prototype.searchByTag = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('post');
        query.find().then(function (todo) {
            _this.feeds = todo.reverse();
            var temp = [];
            for (var i = 0; i < _this.feeds.length; i++) {
                var get = false;
                if (_this.feeds[i]['tags'] != null) {
                    for (var j = 0; j < _this.feeds[i]['tags'].length; j++) {
                        if (_this.feeds[i]['tags'][j].search(_this.search) != -1) {
                            get = true;
                        }
                    }
                }
                if (get === true)
                    temp.push(_this.feeds[i]);
            }
            _this.feeds = temp;
            _this.photo = Array(_this.feeds.length).fill("");
            _this.username = Array(_this.feeds.length).fill("");
            var _loop_2 = function (i_2) {
                _this.feeds[i_2]['index'] = i_2;
                // console.log(this.feeds[i]);
                feed1 = _this.feeds[i_2];
                // console.log("feed1", feed1)
                objectId = feed1['questioner_id']['objectId'];
                // console.log(objectId);
                // console.log(typeof(objectId));
                query0 = Bmob.Query('_User');
                query0.equalTo('objectId', "==", objectId);
                query0.find().then(function (res) {
                    var url = res[0]['headimage'];
                    // this.feeds[j]['username']=tmp['username'];
                    _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                        // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                        // var imgData='data:image/jpeg;base64,'+ base64String;
                        var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                        var imgData = 'data:image/jpeg;base64,' + base64String;
                        _this.photo[i_2] = imgData;
                        _this.username[i_2] = res[0]['username'];
                    });
                });
            };
            var feed1, objectId, query0;
            for (var i_2 = 0; i_2 < _this.feeds.length; i_2++) {
                _loop_2(i_2);
            }
        });
    };
    HomePage.prototype.searchByPerson = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('post');
        query.find().then(function (todo) {
            _this.feeds = todo.reverse();
            var temp = [];
            for (var i = 0; i < _this.feeds.length; i++) {
                if (_this.feeds[i]['username'].search(_this.search) != -1) {
                    temp.push(_this.feeds[i]);
                }
            }
            _this.feeds = temp;
            _this.photo = Array(_this.feeds.length).fill("");
            _this.username = Array(_this.feeds.length).fill("");
            var _loop_3 = function (i_3) {
                _this.feeds[i_3]['index'] = i_3;
                // console.log(this.feeds[i]);
                feed1 = _this.feeds[i_3];
                // console.log("feed1", feed1)
                objectId = feed1['questioner_id']['objectId'];
                // console.log(objectId);
                // console.log(typeof(objectId));
                query0 = Bmob.Query('_User');
                query0.equalTo('objectId', "==", objectId);
                query0.find().then(function (res) {
                    var url = res[0]['headimage'];
                    // this.feeds[j]['username']=tmp['username'];
                    _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                        console.log("ab", ab);
                        // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                        // var imgData='data:image/jpeg;base64,'+ base64String;
                        var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                        var imgData = 'data:image/jpeg;base64,' + base64String;
                        _this.photo[i_3] = imgData;
                        _this.username[i_3] = res[0]['username'];
                    });
                });
            };
            var feed1, objectId, query0;
            for (var i_3 = 0; i_3 < _this.feeds.length; i_3++) {
                _loop_3(i_3);
            }
        });
    };
    HomePage.prototype.getFeeds = function () {
        this.todoGetFeeds();
        // console.log(this.feeds);
    };
    HomePage.prototype.todoGetFeeds = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('post');
        query.find().then(function (todo) {
            _this.feeds = todo.reverse();
            _this.photo = Array(_this.feeds.length).fill("");
            _this.username = Array(_this.feeds.length).fill("");
            var _loop_4 = function (i) {
                _this.feeds[i]['index'] = i;
                // console.log(this.feeds[i]);
                feed1 = _this.feeds[i];
                // console.log("feed1", feed1)
                objectId = feed1['questioner_id']['objectId'];
                // console.log(objectId);
                // console.log(typeof(objectId));
                query0 = Bmob.Query('_User');
                query0.equalTo('objectId', "==", objectId);
                query0.find().then(function (res) {
                    var url = res[0]['headimage'];
                    // this.feeds[j]['username']=tmp['username'];
                    console.log(url);
                    _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                        // console.log("ab",ab);
                        // var base64String = btoa(String.fromCharCode(...new Uint8Array(ab)));
                        // // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                        // var imgData='data:image/jpeg;base64,'+ base64String;
                        var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                        var imgData = 'data:image/jpeg;base64,' + base64String;
                        // console.log(imgData)
                        _this.photo[i] = imgData;
                        _this.username[i] = res[0]['username'];
                    });
                });
            };
            var feed1, objectId, query0;
            for (var i = 0; i < _this.feeds.length; i++) {
                _loop_4(i);
            }
        });
    };
    HomePage.prototype.gotoAnswerPage = function (question) {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var currentUser = Bmob.User.current();
        // console.log(currentUser);
        if (currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__answer_answer__["a" /* AnswerPage */], { item: question });
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/home/home.html"*/'<!--<ion-header>-->\n<!--  <ion-navbar>-->\n<!--    <ion-title>Home</ion-title>-->\n<!--  </ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-header class="question">\n<!--  <ion-toolbar class="question">-->\n    <ion-searchbar  type="search" placeholder="search something about film" [(ngModel)]="search"></ion-searchbar>\n<!--    <button ng-click="search()"></button>-->\n<!--    <ion-icon name="create" class="top_header_message_icon" (click)="gotoQuestion()"></ion-icon>-->\n<!--  </ion-toolbar>-->\n<!--  <div >-->\n    <ion-grid class="floatMenu">\n<!--      <ion-grid >-->\n      <ion-row>\n        <ion-col col-4 text-center>\n          <div (click)="searchByTitle()">\n<!--            <ion-icon small name="search"></ion-icon> -->\n            Title\n          </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <div (click)="searchByTag()">\n            <span style="float:left;color:#dddddd;">|</span>\n<!--            <ion-icon name="navigate-outline"></ion-icon> -->\n            Tag\n            <span style="float:right;color:#dddddd;">|</span>\n          </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <div (click)="searchByPerson()">\n<!--            <ion-icon name="person-outline"></ion-icon> -->\n            Questioner\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n<!--  </div>-->\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class="card" *ngFor="let f of feeds" (click)="gotoAnswerPage(f)">\n    <p>&nbsp;&nbsp;</p>\n    <h2>{{f[\'title\']}}</h2>\n    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags: {{f[\'tags\']}}</p>\n    <ion-item>\n      <ion-avatar item-start>\n        <img  src="{{photo[f[\'index\']]}}">\n      </ion-avatar>\n      <p>{{username[f[\'index\']]}} 提出了该问题</p>\n    </ion-item>\n    <ion-card-content>\n      <p>{{f[\'context\']}}</p>\n    </ion-card-content>\n<!--    <ion-row>-->\n<!--      <ion-col col-8 center text-left>-->\n<!--        <ion-note>-->\n<!--          20&nbsp;赞同&nbsp;&nbsp;·&nbsp;&nbsp;2&nbsp;评论-->\n<!--        </ion-note>-->\n<!--      </ion-col>-->\n<!--      <ion-col col-4></ion-col>-->\n<!--    </ion-row>-->\n    <p>&nbsp;&nbsp;</p>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button class="create" ion-fab (click)="gotoQuestion()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_getBmob__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = /** @class */ (function (_super) {
    __extends(QuestionPage, _super);
    function QuestionPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, rest, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    QuestionPage.prototype.submitQuestion = function () {
        var _this = this;
        if (this.title == null || this.content == null || this.tags == null) {
            this.showToast(this.toastCtrl, "Please input necessary information first!");
            return;
        }
        this.storage.get('UserId').then(function (val) {
            console.log(val);
            var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "Posting...");
            _this.submitBack();
            loading.dismiss();
            _this.dismiss();
        });
    };
    QuestionPage.prototype.submitBack = function () {
        var _this = this;
        var bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.storage.get('UserName').then(function (name) {
                    var Ownerid = val;
                    var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
                    var pointer1 = Bmob.Pointer('_User');
                    var OwnerpoiID = pointer1.set(Ownerid);
                    var question = Bmob.Query('post');
                    var tag_list = _this.tags.split(/[ ]+/);
                    question.set('context', _this.content);
                    question.set('questioner_id', OwnerpoiID);
                    question.set('title', _this.title);
                    question.set('tags', tag_list);
                    question.set('answer_id_list', []);
                    question.set('username', bmob.User.current()['username']);
                    question.save();
                });
            }
        });
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/question/question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>提问</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n<!--        <span ion-text color="primary" showWhen="ios">取消</span>-->\n        <span ion-text color="primary">取消</span>\n<!--        <ion-icon name="md-close" showWhen="android"></ion-icon>-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>问题标题</ion-label>\n      <ion-textarea type="text" rows="2" [(ngModel)]="title"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>问题内容</ion-label>\n<!--      多行文本的输入-->\n      <ion-textarea type="text" rows="5" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>问题tag(以空格隔开)</ion-label>\n      <!--      多行文本的输入-->\n      <ion-textarea type="text" rows="2" [(ngModel)]="tags"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="submitQuestion()">提 问</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/question/question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], QuestionPage);
    return QuestionPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_answer_add_answer__ = __webpack_require__(234);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnswerPage = /** @class */ (function (_super) {
    __extends(AnswerPage, _super);
    function AnswerPage(navCtrl, navParams, modalCtrl, viewCtrl, storage, alertCtrl, loadingCtrl, toastCtrl, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.alertCtrl = alertCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.http = http;
        _this.following_owner = false;
        _this.photo = [];
        _this.username = [];
        _this.following = [];
        return _this;
    }
    AnswerPage.prototype.ionViewDidLoad = function () {
        var question = this.navParams.get("item");
        this.id = question['objectId'];
        // this.questioner_id=question['questioner_id'];
        console.log("id", this.id, typeof (this.id));
    };
    AnswerPage.prototype.ionViewDidEnter = function () {
        this.loadQuestion(this.id);
    };
    AnswerPage.prototype.loadFollowing = function () {
        var _this = this;
        var temp_following = Array(this.answersArray.length).fill(false);
        var temp_following_owner = false;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query3 = Bmob.Query('follow');
        query3.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
        query3.equalTo('following_id', "==", this.owner_id);
        query3.find().then(function (res) {
            console.log('res', res.length);
            _this.following_owner = res.length != 0;
        });
        var _loop_1 = function (j) {
            feed1 = this_1.answersArray[j];
            // console.log('feed1',feed1);
            objectId = feed1['owner']['objectId'];
            if (Bmob.User.current()['objectId'] != objectId) {
                query = Bmob.Query('follow');
                query.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
                query.equalTo('following_id', "==", objectId);
                query.find().then(function (res) {
                    if (res.length != 0) {
                        temp_following[j] = true;
                    }
                });
            }
        };
        var this_1 = this, feed1, objectId, query;
        // this.following_owner=temp_following_owner;
        for (var j = 0; j < this.answersArray.length; j++) {
            _loop_1(j);
        }
        this.following = temp_following;
        // this.following_owner=temp_following_owner;
    };
    AnswerPage.prototype.loadQuestion = function (id) {
        // var Bmob = Bmobconfig.getBmob();
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中...");
                var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
                var query = Bmob.Query('post');
                query.get(id).then(function (todo) {
                    _this.question = todo;
                    console.log("here", id, _this.question);
                    // console.log("feed1", feed1)
                    var objectId = _this.question['questioner_id']['objectId'];
                    _this.owner_id = objectId;
                    // console.log(objectId);
                    // console.log(typeof(objectId));
                    var query0 = Bmob.Query('_User');
                    query0.equalTo('objectId', "==", objectId);
                    query0.find().then(function (res) {
                        var url = res[0]['headimage'];
                        // this.feeds[j]['username']=tmp['username'];
                        _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                            var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                            var imgData = 'data:image/jpeg;base64,' + base64String;
                            _this.owner_photo = imgData;
                            _this.owner_username = res[0]['username'];
                        });
                    });
                    _this.answers = todo['answer_id_list'];
                    var query2 = Bmob.Query('answer');
                    query2.containedIn('objectId', _this.answers);
                    return query2.find();
                }).then(function (todo) {
                    _this.answersArray = todo.reverse();
                    var i;
                    for (i = 0; i < _this.answersArray.length; i++) {
                        _this.answersArray[i]['index'] = i;
                    }
                    var todo1 = todo;
                    var query3 = Bmob.Query('follow');
                    query3.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
                    query3.equalTo('following_id', "==", _this.owner_id);
                    query3.find().then(function (res) {
                        if (res.length != 0) {
                            _this.following_owner = true;
                        }
                    });
                    _this.photo = Array(todo1.length).fill("");
                    _this.username = Array(todo1.length).fill("");
                    _this.following = Array(todo1.length).fill(false);
                    var _loop_2 = function (j) {
                        feed1 = todo1[j];
                        console.log('feed1', feed1);
                        objectId = feed1['owner']['objectId'];
                        if (Bmob.User.current()['objectId'] != objectId) {
                            query = Bmob.Query('follow');
                            query.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
                            query.equalTo('following_id', "==", objectId);
                            query.find().then(function (res) {
                                if (res.length != 0) {
                                    _this.following[j] = true;
                                }
                            });
                        }
                        query0 = Bmob.Query('_User');
                        query0.equalTo('objectId', "==", objectId);
                        query0.find().then(function (res) {
                            var url = res[0]['headimage'];
                            // this.feeds[j]['username']=tmp['username'];
                            _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                                var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                                var imgData = 'data:image/jpeg;base64,' + base64String;
                                _this.photo[j] = imgData;
                                _this.username[j] = res[0]['username'];
                            });
                        });
                    };
                    var feed1, objectId, query, query0;
                    for (var j = 0; j < todo1.length; j++) {
                        _loop_2(j);
                    }
                }).then(function () {
                });
                loading.dismiss();
            }
        });
    };
    AnswerPage.prototype.toFollow = function (id, index) {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        if (Bmob.User.current()['objectId'] == id) {
            _super.prototype.showToast.call(this, this.toastCtrl, "不能关注自己!");
            return;
        }
        var query = Bmob.Query('follow');
        query.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
        query.equalTo('following_id', "==", id);
        query.find().then(function (res) {
            console.log("check res", res.length);
            if (res.length == 0) {
                var answer = Bmob.Query('follow');
                answer.set('following_id', id);
                answer.set('owner_id', Bmob.User.current()['objectId']);
                answer.set('read', false);
                answer.save().then(function (res) {
                    _this.loadFollowing();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, "关注成功!");
                });
            }
            else {
                var answer0 = Bmob.Query('follow');
                answer0.destroy(res[0]['objectId']).then(function (res) {
                    _this.loadFollowing();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, "取消关注成功!");
                });
            }
        });
        console.log("following owner:", this.following_owner);
    };
    AnswerPage.prototype.showAddAnswerPage = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__add_answer_add_answer__["a" /* AddAnswerPage */], { "id": this.id });
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.loadQuestion(_this.id);
        });
        modal.present();
    };
    AnswerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-answer',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/answer/answer.html"*/'<!--\n  Generated template for the AnswerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Answer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card >\n    <ion-card-content class="question">\n      <div >\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-item class="question">\n                <ion-avatar item-start>\n                  <img  src="{{owner_photo}}">\n                </ion-avatar>\n                <p> {{owner_username}} 提出了该问题</p>\n              </ion-item>\n              <ion-card-content>\n\n\n                <strong>\n                  {{question ? question[\'title\'] : \'\'}}\n                </strong>\n\n\n              </ion-card-content>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <button ion-button small (click)="toFollow(owner_id,-1)">\n              <ion-icon name="Heart" ></ion-icon>&nbsp;{{following_owner==false ? "关注Ta" : "取消关注"}}</button>&nbsp;\n          </ion-row>\n        </ion-grid>\n\n      </div>\n      <div>\n        &nbsp;\n      </div>\n      <div>\n        {{question ? question[\'context\'] : \'\'}}\n      </div>\n\n      <div>\n        &nbsp;\n      </div>\n<!--      <p>{{question?.LikeCount}}&nbsp;个关注&nbsp;&nbsp;&nbsp;&nbsp;{{question?.CommentCount}}&nbsp;个回答</p>-->\n      <div>\n        <button style=" float:right; " ion-button small (click)="showAddAnswerPage()">\n          <ion-icon name="add" ></ion-icon>&nbsp;回答</button>&nbsp;\n      </div>\n&nbsp;\n<!--      <button ion-button small color="secondary"  >-->\n<!--        &nbsp;{{question?.isFavourite ? \'取消关注\' : \'关注\'}}</button>-->\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let a of answersArray">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{photo[a[\'index\']]}}">\n      </ion-avatar>\n      <p>{{a[\'username\']}}\n\n        <button ion-button small style=" float:right; " (click)="toFollow(a[\'owner\'][\'objectId\'],a[\'index\'])">\n        <ion-icon name="Heart" ></ion-icon>&nbsp;{{following[a[\'index\']]==false ? "关注Ta" : "取消关注"}}</button>&nbsp;\n      </p>\n    </ion-item>\n\n    <ion-card-content>\n      <p>{{a[\'content\']}}</p>\n      <p style=" float:right; " class="answer_date">{{a[\'createdAt\']}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/answer/answer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], AnswerPage);
    return AnswerPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_getBmob__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAnswerPage = /** @class */ (function (_super) {
    __extends(AddAnswerPage, _super);
    function AddAnswerPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.id = navParams.get('id');
        return _this;
    }
    AddAnswerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAnswerPage');
    };
    AddAnswerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddAnswerPage.prototype.submit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var Bmob = __WEBPACK_IMPORTED_MODULE_4__common_getBmob__["a" /* Bmobconfig */].getBmob();
                var username = Bmob.User.current()['username'];
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "Answering...");
                _this.Questionid = _this.id;
                _this.Ownerid = val;
                var pointer1 = Bmob.Pointer('_User');
                var OwnerpoiID_1 = pointer1.set(_this.Ownerid);
                var pointer2 = Bmob.Pointer('post');
                var postpoiID_1 = pointer2.set(_this.Questionid);
                var answer = Bmob.Query('answer');
                var query = Bmob.Query('_User');
                query.equalTo('objectId', "==", val);
                query.find()
                    .then(function (res) {
                    console.log(res[0]['headimage']);
                    var url = res[0]['headimage'];
                    answer.set('headimage', url);
                    answer.set('username', username);
                    answer.set('content', _this.content);
                    answer.set('owner', OwnerpoiID_1);
                    answer.set('post', postpoiID_1);
                    return answer.save();
                }).then(function (todo) {
                    _this.Answerid = todo['objectId'];
                    var Question = Bmob.Query('post');
                    return Question.get(_this.Questionid);
                }).then(function (todo) {
                    todo.add('answer_id_list', [_this.Answerid]);
                    todo.save();
                }).then(function () {
                    loading.dismiss();
                    _this.dismiss();
                });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "Please Login first...");
            }
        });
    };
    AddAnswerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-answer',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/add-answer/add-answer.html"*/'<!--\n  Generated template for the AddAnswerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>回答</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" >取消</span>\n<!--        <ion-icon name="md-close" showWhen="android"></ion-icon>-->\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="submit()">\n        <span ion-text color="primary" >发布</span>\n<!--        <ion-icon name="md-add-circle" showWhen="android"></ion-icon>-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>请输入回答内容</ion-label>\n      <ion-textarea type="text" rows="20" style="height:100%;" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/add-answer/add-answer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AddAnswerPage);
    return AddAnswerPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=add-answer.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_message__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__likes_likes__ = __webpack_require__(236);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var NotificationPage = /** @class */ (function (_super) {
    __extends(NotificationPage, _super);
    function NotificationPage(navCtrl, navParams, modalCtrl, viewCtrl, storage, alertCtrl, loadingCtrl, toastCtrl, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.alertCtrl = alertCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.http = http;
        return _this;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
        // this.getNotification();
    };
    NotificationPage.prototype.gotoDetails = function (questionId) {
    };
    NotificationPage.prototype.gotoMessagePage = function () {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var currentUser = Bmob.User.current();
        // console.log(currentUser);
        if (currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__message_message__["a" /* MessagePage */]);
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    NotificationPage.prototype.gotoLikesPage = function () {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var currentUser = Bmob.User.current();
        // console.log(currentUser);
        if (currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__likes_likes__["a" /* LikesPage */]);
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar style="opacity: 0.6" no-border-bottom >\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content text-center>\n  <br><br>\n  <h1 > Read messages! </h1>\n  <br><br><br>\n  <div class="buttons">\n\n\n    <div padding>\n      <button ion-button  (click)="gotoLikesPage()">likes\n<!--        <ion-icon name="heart"></ion-icon>-->\n      </button>\n    </div>\n    <br><br><br>\n    <div padding>\n      <button ion-button  (click)="gotoMessagePage()">comments\n\n      </button>\n    </div>\n\n<!--    <br><br><br>-->\n<!--    <div padding>-->\n<!--      <button ion-button  (click)="getNotification()">get Notifications-->\n\n<!--      </button>-->\n<!--    </div>-->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], NotificationPage);
    return NotificationPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__one_moment_one_moment__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LikesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var LikesPage = /** @class */ (function (_super) {
    __extends(LikesPage, _super);
    function LikesPage(navCtrl, navParams, modalCtrl, viewCtrl, storage, alertCtrl, loadingCtrl, toastCtrl, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.alertCtrl = alertCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.http = http;
        return _this;
    }
    // ionViewDidEnter(){
    //   console.log('ionViewDidLoad LikesPage');
    //   this.getlikes();
    //   console.log('feeds',this.feeds);
    // }
    LikesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LikesPage');
        this.getlikes();
        console.log('feeds', this.feeds);
    };
    LikesPage.prototype.getlikes = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                console.log('here', val);
                var query = Bmob.Query('like');
                query.equalTo('moment_owner', "==", val);
                query.equalTo('owner', "!=", val);
                query.find().then(function (todo) {
                    _this.feeds = todo.reverse();
                    console.log('feeds', _this.feeds);
                    for (var i = 0; i < _this.feeds.length; i++) {
                        _this.feeds[i]['index'] = i;
                    }
                });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, 'Please Login first...');
            }
        });
    };
    LikesPage.prototype.set_read = function (like_id) {
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('like');
        query.set('id', like_id);
        query.set('read', true);
        query.save();
    };
    LikesPage.prototype.gotoOneMomentPage = function (id, like_id) {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        this.set_read(like_id);
        var currentUser = Bmob.User.current();
        // console.log(currentUser);
        if (currentUser) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__one_moment_one_moment__["a" /* OneMomentPage */], { id: id });
            //关闭后的回调
            modal.onDidDismiss(function () {
                _this.getlikes();
            });
            modal.present();
            // this.navCtrl.push(OneMomentPage, { id: id ,like_id: like_id});
        }
        else {
            _super.prototype.showToast.call(this, this.toastCtrl, 'Please Login first...');
        }
    };
    LikesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-likes',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/likes/likes.html"*/'<!--\n  Generated template for the LikesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>likes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card class="card" *ngFor="let f of feeds" (click)="gotoOneMomentPage(f[\'moment\'], f[\'objectId\'])">\n\n    <ion-item>\n      <p>{{f[\'owner_name\']}}<i class="i" [hidden]="f[\'read\']==true"></i></p>likes your moment!\n    </ion-item>\n\n\n<!--    <ion-card-content>-->\n<!--      <p>{{f[\'content\']}}</p>-->\n<!--    </ion-card-content>-->\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/likes/likes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], LikesPage);
    return LikesPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=likes.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user__ = __webpack_require__(240);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {HttpClient, HttpResponse} from '@angular/common/http';


/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = /** @class */ (function (_super) {
    __extends(MorePage, _super);
    function MorePage(navCtrl, navParams, modalCtrl, storage, loadingCtrl, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.http = http;
        _this.loginStatus = false;
        _this.notLogin = true;
        return _this;
    }
    MorePage.prototype.showModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        modal.onDidDismiss(function () {
            _this.loadUserPage();
        });
        modal.present();
    };
    MorePage.prototype.ionViewDidEnter = function () {
        this.loadUserPage();
    };
    // ionViewDidLoad() {
    //   this.loadUserPage();
    // }
    MorePage.prototype.loadUserPage = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_5__common_getBmob__["a" /* Bmobconfig */].getBmob();
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                // var loading=super.showLoading(this.loadingCtrl, "Loading...")
                _this.loginStatus = true;
                _this.notLogin = false;
                var currentUser = Bmob.User.current();
                var query = Bmob.Query('_User');
                query.equalTo('objectId', "==", val);
                query.find().then(function (list) {
                    console.log(list[0]['headimage']);
                    if (list[0] != null && list[0]['headimage'] != "" && list[0]['headimage'] != null) {
                        var head = list[0]['headimage'];
                        _this.http.get(head, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                            // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                            var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                            // var imgData='data:image/jpeg;base64,'+ base64String;
                            _this.headface = 'data:image/jpeg;base64,' + base64String;
                        });
                    }
                    else {
                        console.log("no headimage!");
                        // console.log(list[0])
                    }
                });
                _this.nickname = currentUser['username'];
                // loading.dismiss();
            }
            else {
                _this.loginStatus = false;
                _this.notLogin = true;
            }
        });
    };
    MorePage.prototype.gotoUserPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_user__["a" /* UserPage */]);
    };
    MorePage.prototype.logout = function () {
        this.loginStatus = false;
        this.notLogin = true;
        this.storage.remove("UserId");
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/more/more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div [hidden]="notLogin==false">\n    <ion-card>\n      <ion-card-header text-center>\n        Login and experience more functions!\n      </ion-card-header>\n      <ion-card-content text-center>\n        <button ion-button outline small (click)="showModal()">Login</button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div [hidden]="loginStatus==false">\n  <ion-list>\n    <button ion-item (click)="gotoUserPage()">\n      <ion-avatar item-start>\n        <img src="{{headface}}" />\n<!--        <img [hidden]="headface!=null" src="https://s1.ax1x.com/2020/05/10/Y3RiDg.jpg" />-->\n      </ion-avatar>\n      <h2>{{nickname}}</h2>\n      <p>view personal page</p>\n    </button>\n\n    <div padding>\n      <button ion-button color="primary" block (click)="logout()">Log out</button>\n    </div>\n  </ion-list>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/more/more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], MorePage);
    return MorePage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(239);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl, modalCtrl, 
        // public rest: RestProvider,
        storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        return _this;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "Loading...");
        var bmob = __WEBPACK_IMPORTED_MODULE_3__common_getBmob__["a" /* Bmobconfig */].getBmob();
        if (this.name == "" || this.name == null || this.password == "" || this.password == null) 
        // if(this.name=="" || this.password=="")
        {
            loading.dismiss();
            _super.prototype.showToast.call(this, this.toastCtrl, "input necessary information first!");
            return;
        }
        else {
            // console.log(typeof this.name);
            bmob.User.login(this.name, this.password).then(function (res) {
                console.log(res);
                //loading succeeded!
                _this.storage.set('UserId', bmob.User.current()['objectId']);
                console.log('current', bmob.User.current());
                _this.storage.set('UserName', bmob.User.current()['username']);
                loading.dismiss();
                // let tabs = this.modalCtrl.create(TabsPage);
                // tabs.present();
                _this.dismiss();
            }).catch(function (err) {
                console.log(err);
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, err['error']);
            });
        }
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Login</ion-title>\n    <ion-buttons>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n\n    <ion-grid>\n      <ion-row color="primary" justify-content-center>\n        <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n          <div padding>\n<!--            <ion-item>-->\n<!--              <ion-input  name="name" type="text" placeholder="Name" ngModel required></ion-input>-->\n<!--            </ion-item>-->\n            <ion-item>\n              <ion-input name="name" type="name" placeholder="Name"  ngModel required [(ngModel)]="name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name="password" type="password" placeholder="Password"  ngModel required [(ngModel)]="password"></ion-input>\n            </ion-item>\n<!--            <ion-item>-->\n<!--              <ion-input name="confirm" type="password" placeholder="Password again" ngModel required></ion-input>-->\n<!--            </ion-item>-->\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n  <div padding>\n    <button ion-button color="primary" block (click)="login()">Login</button>\n  </div>\n  <div padding text-center>\n    <button ion-button color="primary" outline (click)="register()">New to here? Create an account!</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(navCtrl, navParams, viewCtrl, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    RegisterPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "Loading...");
        var bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        //前台验证表单数据的正确性
        if (!(/^1[34568]\d{9}$/.test(this.phone))) {
            loading.dismiss();
            _super.prototype.showToast.call(this, this.toastCtrl, "wrong phone format!");
            return;
        }
        else if (this.password != this.confirm) {
            loading.dismiss();
            _super.prototype.showToast.call(this, this.toastCtrl, "the passwords don't match!");
            return;
        }
        else if (this.name == "" || this.name == null || this.password == "" || this.password == null || this.mail == "" || this.mail == null
            || this.phone == "" || this.phone == null || this.confirm == "" || this.confirm == null) {
            loading.dismiss();
            _super.prototype.showToast.call(this, this.toastCtrl, "input necessary information first!");
            return;
        }
        else {
            var params = {
                username: this.name,
                password: this.password,
                email: this.mail,
                phone: this.phone,
                headimage: ""
            };
            bmob.User.register(params).then(function (res) {
                console.log(res);
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, "register succeeded!");
                _this.navCtrl.pop();
            }).catch(function (err) {
                loading.dismiss();
                console.log(err);
                _super.prototype.showToast.call(_this, _this.toastCtrl, err['error']);
            });
        }
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n\n    <ion-grid>\n      <ion-row color="primary" justify-content-center>\n        <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n          <div padding>\n            <!--            <ion-item>-->\n            <!--              <ion-input  name="name" type="text" placeholder="Name" ngModel required></ion-input>-->\n            <!--            </ion-item>-->\n            <ion-item>\n              <ion-input name="phone" type="phone" placeholder="Phone Number"  ngModel required [(ngModel)]="phone"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name="mail" type="mail" placeholder="your@exmaple.com"  ngModel required [(ngModel)]="mail"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name="name" type="name" placeholder="Name"  ngModel required [(ngModel)]="name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name="password" type="password" placeholder="Password"  ngModel required [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name="confirm" type="password" placeholder="Confirm"  ngModel required [(ngModel)]="confirm"></ion-input>\n            </ion-item>\n            <!--            <ion-item>-->\n            <!--              <ion-input name="confirm" type="password" placeholder="Password again" ngModel required></ion-input>-->\n            <!--            </ion-item>-->\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n  <div padding>\n    <button ion-button color="primary" block (click)="register()">Register</button>\n  </div>\n  <div padding text-center>\n    <button ion-button color="primary" outline (click)="dismiss()">Have an account? Login!</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headface_headface__ = __webpack_require__(241);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {HttpClient, HttpResponse} from '@angular/common/http';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var UserPage = /** @class */ (function (_super) {
    __extends(UserPage, _super);
    function UserPage(navCtrl, navParams, modalCtrl, storage, loadingCtrl, http, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.http = http;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    UserPage.prototype.ionViewDidEnter = function () {
        this.loadUserPage();
    };
    // ionViewDidLoad() {
    //   this.loadUserPage();
    // }
    UserPage.prototype.loadUserPage = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "Loading...");
                // console.log(val);
                var currentUser = Bmob.User.current();
                var query = Bmob.Query('_User');
                query.equalTo('objectId', "==", val);
                query.find().then(function (list) {
                    console.log(list);
                    if (list[0] != null && list[0]['headimage'] != null) {
                        console.log("show the headimage", list[0]['headimage']);
                        var head = list[0]['headimage'];
                        _this.http.get(head, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                            // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                            var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                            _this.headface = 'data:image/jpeg;base64,' + base64String;
                        });
                    }
                    else {
                        console.log("headimage not found!");
                        // console.log(list[0])
                    }
                });
                _this.nickname = currentUser['username'];
                var queryinfo = Bmob.Query("_User");
                queryinfo.equalTo('objectId', "==", val);
                queryinfo.find().then(function (res) {
                    if (res[0] != null) {
                        _this.nickname = res[0]['username'];
                        _this.email = res[0]['email'];
                        _this.phone = res[0]['phone'];
                        // console.log(res[0]);
                    }
                    else {
                        console.log("email not found!");
                        // console.log(res[0])
                    }
                });
                loading.dismiss();
            }
        });
    };
    UserPage.prototype.gotoHeadfacePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__headface_headface__["a" /* HeadfacePage */]);
    };
    UserPage.prototype.changeInfo = function () {
        var _this = this;
        this.storage.get('UserId').then(function (objectId) {
            var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
            //query oldinfo
            var queryinfo = Bmob.Query('_User');
            queryinfo.equalTo('objectId', "==", objectId);
            queryinfo.find().then(function (res) {
                if (res[0] != null) {
                    _this.old_nickname = res[0]['username'];
                    _this.old_email = res[0]['email'];
                    _this.old_phone = res[0]['phone'];
                }
                else {
                    console.log("email not found!");
                    console.log(res[0]);
                }
            });
            var query = Bmob.Query('_User');
            console.log(objectId);
            query.get(objectId).then(function (res) {
                if (_this.old_email != _this.email || _this.old_phone != _this.phone || _this.old_nickname != _this.nickname) {
                    console.log(_this.old_email, _this.email);
                    res.set('phone', _this.phone);
                    res.set('email', _this.email);
                    res.set('username', _this.nickname);
                    res.save();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, "save succeeded!");
                    _this.navCtrl.pop();
                }
                else {
                    _super.prototype.showToast.call(_this, _this.toastCtrl, "no change!");
                }
            }).catch(function (err) {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "error in choosing a photo!");
                console.log(err);
            });
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>user</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-list class="marginTop" >\n<!--    <ion-item>-->\n\n    <div >\n      <button ion-item (click)="gotoHeadfacePage()">\n<!--    <ion-item (click)="gotoHeadfacePage()">-->\n      <ion-avatar item-start>\n        <img src="{{headface}}" />\n      </ion-avatar>\n      <h2>modify avatar</h2>\n      </button>\n      </div>\n<!--    </ion-item>-->\n    <div >\n      <ion-item>\n        <ion-label>name    </ion-label>\n        <ion-input type="text"   ngModel required [(ngModel)]="nickname"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>email  </ion-label>\n        <ion-input type="text"   ngModel required [(ngModel)]="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>phone</ion-label>\n        <ion-input type="text"   ngModel required [(ngModel)]="phone"></ion-input>\n      </ion-item>\n    </div>\n\n    <div padding>\n      <button ion-button color="primary" block (click)="changeInfo()">Save</button>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], UserPage);
    return UserPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// const jsdom = require("@types/jsdom");

//
// import * as $ from 'jquery';
// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
/**
 * Generated class for the HeadfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var HeadfacePage = /** @class */ (function (_super) {
    __extends(HeadfacePage, _super);
    function HeadfacePage(navCtrl, navParams, modalCtrl, storage, loadingCtrl, http, camera, transfer, file, platform, filePath, actionSheetCtrl, toastCtrl, viewCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.http = http;
        _this.camera = camera;
        _this.transfer = transfer;
        _this.file = file;
        _this.platform = platform;
        _this.filePath = filePath;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.toastCtrl = toastCtrl;
        _this.viewCtrl = viewCtrl;
        _this.lastImg = null;
        _this.blob2Base64 = function (blob, callback) {
            var reader = new FileReader();
            reader.onload = function () {
                var dataUrl = reader.result;
                var base64 = dataUrl.split(',')[1];
                callback(base64);
            };
            reader.readAsDataURL(blob);
        };
        return _this;
    }
    HeadfacePage.prototype.ionViewDidLoad = function () {
        if (this.platform.is('android'))
            this.device = 'android';
        else
            this.device = 'web';
    };
    HeadfacePage.prototype.showToast = function (toastCtrl, message) {
        var toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    };
    HeadfacePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose a photo',
            buttons: [
                {
                    text: 'Choose from albums',
                    handler: function () {
                        // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        console.log('Choose from albums clicked');
                    }
                },
                {
                    text: 'Take a photo',
                    handler: function () {
                        // this.takePicture(this.camera.PictureSourceType.CAMERA);
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                        console.log('Take a photo clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HeadfacePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.lastImg = imageData;
            // If base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.path = base64Image;
        }, function (err) {
            // Handle error
            _super.prototype.showToast.call(_this, _this.toastCtrl, err + "error!");
        });
    };
    HeadfacePage.prototype.loadImageFromDevice = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            var blob = new Blob([new Uint8Array(reader.result)]);
            _this.blob2Base64(blob, function (base64String) {
                document.getElementById('show')['src'] = 'data:image/jpeg;base64,' + base64String;
            });
            // this.img_count++;
        };
    };
    ;
    HeadfacePage.prototype.web_chooseFromFile = function () {
        var _this = this;
        var uploadsFile = document.getElementById("profilePhotoFileUpload");
        var resultFile = uploadsFile.files[0];
        if (resultFile == null) {
            _super.prototype.showToast.call(this, this.toastCtrl, "图片为空。");
            return;
        }
        console.log('here');
        console.log(resultFile);
        var FileSaver = __webpack_require__(360);
        var filename = this.createFileName();
        FileSaver.saveAs(resultFile, filename);
        var headurl = 'http://localhost:8080/photo/' + filename;
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        this.storage.get('UserId').then(function (objectId) {
            var query = Bmob.Query('_User');
            query.get(objectId).then(function (res) {
                res.set('headimage', headurl);
                res.save();
                _super.prototype.showToast.call(_this, _this.toastCtrl, "save succeeded!");
            });
        }).catch(function (err) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "error in choosing a photo!");
            console.log(err);
        });
    };
    HeadfacePage.prototype.upload2tomcat = function () {
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var objectId = Bmob.User.current()['objectId'];
        console.log("objectId", objectId);
        var toastCtrl = this.toastCtrl;
        var uploadsFile = document.getElementById("profilePhotoFileUpload");
        var resultFile = uploadsFile.files[0];
        var formData = new FormData();
        if (resultFile) {
            formData.append('file', resultFile);
            __WEBPACK_IMPORTED_MODULE_10_jquery__["ajax"]({
                url: "http://localhost:8088/firstWeb/uploadImg",
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function (result) {
                    // alert("upload succeeded!");
                    var message = "upload succeeded!";
                    var toast = toastCtrl.create({
                        message: message,
                        duration: 3000,
                        position: 'bottom'
                    });
                    var headurl = 'http://localhost:8080/photo/' + resultFile.name;
                    var query = Bmob.Query('_User');
                    query.get(objectId).then(function (res) {
                        res.set('headimage', headurl);
                        res.save();
                    }).then(function (res) {
                        toast.present();
                    });
                }
            });
        }
    };
    HeadfacePage.prototype.uploadImg = function () {
        var _this = this;
        if (this.lastImg == null) {
            _super.prototype.showToast.call(this, this.toastCtrl, "图片为空。");
            return;
        }
        // var loading = super.showLoading(this.loadingCtrl, "UPLoading...");
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        // Bmob.debug(true);
        var objectId = Bmob.User.current()['objectId'];
        _super.prototype.showToast.call(this, this.toastCtrl, objectId);
        // var Bmob = Bmobconfig.getBmob();
        var upload = {
            'img': this.path
        };
        // super.showToast(this.toastCtrl, "before upload to bmob!");
        var filename = "avatar.jpg";
        _super.prototype.showToast.call(this, this.toastCtrl, filename);
        var file_ = Bmob.File(filename, upload);
        _super.prototype.showToast.call(this, this.toastCtrl, "file created!");
        file_.save().then(function (obj) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "after upload to bmob!");
            _this.img = obj[0]['url'];
            var query = Bmob.Query('_User');
            return query.get(objectId);
        }).then(function (res) {
            res.set('headimage', _this.img);
            return res.save();
        }).then(function () {
            // loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "success!");
        });
    };
    HeadfacePage.prototype.takePicture_0 = function (sourceType) {
        var _this = this;
        //定义相机的一些参数
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true //是否纠正拍摄的照片的方向
        };
        //获取图片的方法
        this.camera.getPicture(options).then(function (imagePath) {
            //特别处理 android 平台的文件路径问题
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath) //获取 android 平台下的真实路径
                    .then(function (filePath) {
                    //获取正确的路径
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    //获取正确的文件名
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                //获取正确的路径
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                //获取正确的文件名
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
        });
    };
    //将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
    HeadfacePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        //copyFile(path: string, fileName: string, newPath: string, newFileName: string)
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImg = newFileName;
        }, function (error) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "存储图片到本地图库出现错误。");
        });
    };
    //为文件生成一个新的文件名
    HeadfacePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg"; //拼接文件名
        return newFileName;
    };
    //处理图片的路径为可以上传的路径
    HeadfacePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* normalizeURL */])(cordova.file.dataDirectory + img);
        }
    };
    HeadfacePage.prototype.uploadImage_0 = function () {
        var _this = this;
        console.log(this.lastImg);
        if (this.lastImg == null) {
            _super.prototype.showToast.call(this, this.toastCtrl, "图片为空。");
            return;
        }
        var targetPath = this.pathForImage(this.lastImg);
        var filename = this.userId + ".jpg"; //定义上传后的文件名
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "上传中...");
        //开始正式地上传
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var file_ = Bmob.File(filename, targetPath);
        file_.save().then(function (data) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传成功。");
            //在用户看清弹窗提示后进行页面的关闭
            setTimeout(function () {
                _this.viewCtrl.dismiss();
            }, 3000);
        }, function (err) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传发生错误，请重试。");
        });
    };
    HeadfacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-headface',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/headface/headface.html"*/'<!--\n  Generated template for the HeadfacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!--  <script>-->\n<!--    function change_pic() {-->\n<!--      const uploadsFile =document.getElementById("profilePhotoFileUpload");-->\n<!--      const resultFile = uploadsFile.files[0];-->\n<!--      var preview = document.getElementById("show");-->\n<!--      var reads= new FileReader();-->\n<!--      reads.readAsDataURL(resultFile);-->\n<!--      if(resultFile){-->\n<!--        reads.readAsDataURL(resultFile);-->\n<!--        //转换成功后-->\n<!--        reads.onloadend = function ()-->\n<!--        {-->\n<!--          preview.src=reads.result;-->\n<!--          console.log(reads.result);-->\n<!--        };-->\n<!--      }-->\n<!--    }-->\n<!--  </script>-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Set Avatar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h4 [hidden]="lastImg !== null">please upload a photo.</h4>\n<!--  <img id="show" [hidden]="lastImg === null" [src]="path" style="width:60%;height:60%;" >-->\n  <img id="show"   src="http://localhost:8080/photo/blank.png"  >\n  <ion-footer padding-bottom>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n<!--          <button [hidden]="device!=\'android\'" ion-button icon-left (click)="presentActionSheet()">-->\n<!--            <ion-icon name="camera"></ion-icon>Choose a photo-->\n<!--          </button>-->\n<!--          <button [hidden]="device==\'android\'" ion-button>-->\n<!--            <input type="file" id="profilePhotoFileUpload"  accept="image/*">-->\n<!--          </button>-->\n                    <button  ion-button>\n                      <input type="file" (change)="loadImageFromDevice($event)" id="profilePhotoFileUpload"  accept="image/*">\n                    </button>\n        </ion-col>\n        <ion-col>\n<!--          <button [hidden]="device!=\'android\'" ion-button icon-left (click)="uploadImage_0()">-->\n<!--            <ion-icon name="cloud"></ion-icon>Upload it...-->\n<!--          </button>-->\n<!--          <button [hidden]="device==\'android\'" ion-button icon-left (click)="web_chooseFromFile()">-->\n<!--            <ion-icon name="cloud"></ion-icon>Upload it...-->\n<!--          </button>-->\n<!--                    <button  ion-button icon-left (click)="web_chooseFromFile()">-->\n                    <button  ion-button icon-left (click)="upload2tomcat()">\n                      <ion-icon name="cloud"></ion-icon>Upload it...\n                    </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/headface/headface.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], HeadfacePage);
    return HeadfacePage;
}(__WEBPACK_IMPORTED_MODULE_5__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=headface.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(263);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_discovery_discovery__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_more_more__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_headface_headface__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_user__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_question_question__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_answer_answer__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_answer_add_answer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_moment_moment__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_write_write__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_moments_my_moments__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_comment_comment__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_likes_likes__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_message_message__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_one_moment_one_moment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_rest_rest__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_transfer__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_path__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__directives_directives_module__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_discovery_discovery__["a" /* DiscoveryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_headface_headface__["a" /* HeadfacePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_answer_answer__["a" /* AnswerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_answer_add_answer__["a" /* AddAnswerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_moment_moment__["a" /* MomentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_write_write__["a" /* WritePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_my_moments_my_moments__["a" /* MyMomentsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_likes_likes__["a" /* LikesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_one_moment_one_moment__["a" /* OneMomentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/discovery/discovery.module#DiscoveryPageModule', name: 'DiscoveryPage', segment: 'discovery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/one-moment/one-moment.module#OneMomentPageModule', name: 'OneMomentPage', segment: 'one-moment', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_27__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33__directives_directives_module__["a" /* DirectivesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_discovery_discovery__["a" /* DiscoveryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_headface_headface__["a" /* HeadfacePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_answer_answer__["a" /* AnswerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_answer_add_answer__["a" /* AddAnswerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_moment_moment__["a" /* MomentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_write_write__["a" /* WritePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_my_moments_my_moments__["a" /* MyMomentsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_likes_likes__["a" /* LikesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_one_moment_one_moment__["a" /* OneMomentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_getBmob__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
        var Bmob = __WEBPACK_IMPORTED_MODULE_2__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var BmobSocketIo = new Bmob.Socket("3a8d5ede11cbbdfc304094a29052a867");
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autosize_autosize__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__autosize_autosize__["a" /* AutosizeDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__autosize_autosize__["a" /* AutosizeDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(element) {
        this.element = element;
        console.log('Hello AutosizeDirective Directive');
    }
    AutosizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutosizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    AutosizeDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutosizeDirective.prototype, "onInput", null);
    AutosizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[autosize]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AutosizeDirective);
    return AutosizeDirective;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneMomentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_getBmob__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OneMomentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OneMomentPage = /** @class */ (function (_super) {
    __extends(OneMomentPage, _super);
    function OneMomentPage(navCtrl, navParams, modalCtrl, viewCtrl, loadingCtrl, toastCtrl, storage, http) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.http = http;
        return _this;
    }
    OneMomentPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get("id");
        // this.like_id = this.navParams.get("like_id");
        // this.set_read();
        console.log('ionViewDidLoad OneMomentPage');
        this.getFeeds();
    };
    OneMomentPage.prototype.loadlikes = function () {
        var _this = this;
        this.likes = Array(this.feeds.length).fill(false);
        var Bmob = __WEBPACK_IMPORTED_MODULE_3__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var _loop_1 = function (i) {
            query = Bmob.Query('like');
            feed = this_1.feeds[i];
            query.equalTo('moment', "==", feed['objectId']);
            query.equalTo('owner', "==", Bmob.User.current()['objectId']);
            query.find().then(function (res) {
                if (res.length != 0)
                    _this.likes[i] = true;
            });
        };
        var this_1 = this, query, feed;
        for (var i = 0; i < this.feeds.length; i++) {
            _loop_1(i);
        }
    };
    OneMomentPage.prototype.like = function (feed) {
        this.likes[feed['index']] = true;
        this.feeds[feed['index']]['likes']++;
        var Bmob = __WEBPACK_IMPORTED_MODULE_3__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var like = Bmob.Query('like');
        like.set('moment', feed['objectId']);
        like.set('moment_owner', feed['ownerId']);
        like.set('owner', Bmob.User.current()['objectId']);
        like.set('owner_name', Bmob.User.current()['username']);
        like.set('read', false);
        like.save();
        var moment1 = Bmob.Query('moments');
        moment1.set('id', feed['objectId']);
        moment1.set('likes', feed['likes']);
        moment1.save();
    };
    OneMomentPage.prototype.notlike = function (feed) {
        console.log("notlike!");
        this.likes[feed['index']] = false;
        this.feeds[feed['index']]['likes']--;
        var Bmob = __WEBPACK_IMPORTED_MODULE_3__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('like');
        query.equalTo('owner', "==", Bmob.User.current()['objectId']);
        query.equalTo('moment', "==", feed['objectId']);
        query.find().then(function (res) {
            var answer0 = Bmob.Query('like');
            answer0.destroy(res[0]['objectId']).then(function (res) {
                var moment1 = Bmob.Query('moments');
                moment1.set('id', feed['objectId']);
                moment1.set('likes', feed['likes']);
                moment1.save();
            });
        });
    };
    OneMomentPage.prototype.getFeeds = function () {
        this.todoGetFeeds();
    };
    OneMomentPage.prototype.todoGetFeeds = function () {
        var _this = this;
        var Bmob = __WEBPACK_IMPORTED_MODULE_3__common_getBmob__["a" /* Bmobconfig */].getBmob();
        var query = Bmob.Query('moments');
        query.equalTo('objectId', "==", this.id);
        query.order('-updateAt');
        query.find().then(function (todo) {
            // this.feeds = todo.reverse();
            _this.feeds = todo;
            _this.loadlikes();
            _this.headface = Array(_this.feeds.length).fill("");
            _this.username = Array(_this.feeds.length).fill("");
            _this.picture = Array(_this.feeds.length).fill([]);
            _this.comment = Array(_this.feeds.length).fill([]);
            var _loop_2 = function (i) {
                _this.feeds[i]['index'] = i;
                feed1 = _this.feeds[i];
                objectId = feed1['owner']['objectId'];
                urls = feed1['urls'];
                var pic = [];
                for (var j = 0; j < urls.length; j++) {
                    _this.http.get(urls[j], { responseType: 'arraybuffer' }).subscribe(function (ab) {
                        // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                        var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                        pic.push('data:image/jpeg;base64,' + base64String);
                    });
                }
                _this.picture[i] = pic;
                comment = Bmob.Query('comment');
                comment.equalTo("moment", "==", feed1['objectId']);
                comment.order('updateAt');
                var comment_list = [];
                comment.find().then(function (res) {
                    for (var j = 0; j < res.length; j++) {
                        comment_list.push(res[j]);
                    }
                });
                _this.comment[i] = comment_list;
                query0 = Bmob.Query('_User');
                query0.equalTo('objectId', "==", objectId);
                query0.find().then(function (res) {
                    var url = res[0]['headimage'];
                    _this.http.get(url, { responseType: 'arraybuffer' }).subscribe(function (ab) {
                        // let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
                        var base64String = btoa([].reduce.call(new Uint8Array(ab), function (p, c) { return p + String.fromCharCode(c); }, ''));
                        var imgData = 'data:image/jpeg;base64,' + base64String;
                        _this.headface[i] = imgData;
                        _this.username[i] = res[0]['username'];
                    });
                });
            };
            var feed1, objectId, urls, comment, query0;
            for (var i = 0; i < _this.feeds.length; i++) {
                _loop_2(i);
            }
            console.log(_this.picture);
        });
    };
    OneMomentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OneMomentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-one-moment',template:/*ion-inline-start:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/one-moment/one-moment.html"*/'<!--\n  Generated template for the OneMomentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>oneMoment</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" >取消</span>\n        <!--        <ion-icon name="md-close" showWhen="android"></ion-icon>-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager="true">\n    <div *ngFor="let f of feeds">\n      <ion-slide>\n        <ion-card>\n          <ion-item>\n\n          </ion-item>\n          <ion-card-content>\n            <p>\n              {{f[\'content\']}}\n            </p>\n\n          </ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img  src="{{picture[f[\'index\']][0]}}" >\n\n              </ion-col>\n              <ion-col>\n                <img  src="{{picture[f[\'index\']][1]}}" >\n\n              </ion-col>\n              <ion-col>\n                <img  src="{{picture[f[\'index\']][2]}}" >\n\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n          <ion-item>\n            <div>\n              <ion-icon  [hidden]="likes[f[\'index\']]==true" name="heart" (click)="like(f)"></ion-icon>\n              <ion-icon  [hidden]="likes[f[\'index\']]==false" color=\'danger\' name="heart" (click)="notlike(f)"></ion-icon>\n              &nbsp;{{f[\'likes\']}} like\n            </div>\n          </ion-item>\n          <div *ngFor="let c of comment[f[\'index\']]" class="note-content">\n            <div>\n              <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{c[\'owner_name\']}}:&nbsp;{{c[\'content\']}}</p>\n            </div>\n          </div>\n        </ion-card>\n\n\n      </ion-slide>\n\n    </div>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xinsu/A_Courses/sofeware_engineer_development/moviegoer/src/pages/one-moment/one-moment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], OneMomentPage);
    return OneMomentPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=one-moment.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map