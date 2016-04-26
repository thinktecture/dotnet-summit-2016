System.register(['angular2/core', 'angular2/router', "../../models/navigationEntry"], function(exports_1, context_1) {
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
    var core_1, router_1, navigationEntry_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navigationEntry_1_1) {
                navigationEntry_1 = navigationEntry_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent() {
                    this.expanded = true;
                    this.navigationEntries = [];
                    this.navigationEntries.push(new navigationEntry_1.NavigationEntry(['Dashboard'], 'dashboard', 'Dashboard'));
                    this.navigationEntries.push(new navigationEntry_1.NavigationEntry(['About'], 'question', 'About'));
                }
                SidebarComponent.prototype.toggleSidebar = function () {
                    this.expanded = !this.expanded;
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'app-sidebar',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/components/sidebar/sidebar.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=sidebar.js.map
