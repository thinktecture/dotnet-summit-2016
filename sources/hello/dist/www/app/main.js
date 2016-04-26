System.register(['jquery', 'bootstrap/js/bootstrap', 'admin-lte/js/app', 'hammerjs/hammer', 'jquery/jquery.hammer', 'jquery/jquery.slimscroll', 'fastclick/fastclick', 'angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx', './app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, http_1, app_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_8) {},
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_1.HelloApp, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
            ]);
        }
    }
});

//# sourceMappingURL=main.js.map
