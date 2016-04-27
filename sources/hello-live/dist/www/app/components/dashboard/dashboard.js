System.register(['angular2/core', "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_http) {
                    this._http = _http;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // TODO: Refactor ;(
                    this._http.get("http://10.211.55.3:7777/api/games/list")
                        .subscribe(function (result) { return _this._games = result.json(); }, function (error) { return console.log(error.toJSON()); });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/dashboard/dashboard.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=dashboard.js.map
