System.register(['angular2/core', 'angular2/router', './components/dashboard/dashboard', './components/sidebar/sidebar', './components/header/header', './components/about/about'], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_1, sidebar_1, header_1, about_1;
    var HelloApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            }],
        execute: function() {
            HelloApp = (function () {
                function HelloApp() {
                }
                HelloApp.prototype.ngAfterViewInit = function () {
                    if (window.initAdminLTE) {
                        window.initAdminLTE();
                    }
                };
                HelloApp = __decorate([
                    core_1.Component({
                        selector: 'hello-app',
                        directives: [router_1.ROUTER_DIRECTIVES, sidebar_1.SidebarComponent, header_1.HeaderComponent],
                        templateUrl: 'app/app.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: dashboard_1.DashboardComponent, name: 'Dashboard', useAsDefault: true },
                        { path: '/about', component: about_1.AboutComponent, name: 'About' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HelloApp);
                return HelloApp;
            }());
            exports_1("HelloApp", HelloApp);
        }
    }
});

//# sourceMappingURL=app.js.map
