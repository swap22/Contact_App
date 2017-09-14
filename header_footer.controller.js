(function () {
    var app = angular.module("ContactApp");
    app.controller("HeaderCtrl", Header);
    app.controller("FooterCtrl", Footer);

    function Header(AppNameServiceSvc) {
        this.appName = AppNameServiceSvc.name;
    }

    function Footer(AppNameServiceSvc) {
        this.appName = AppNameServiceSvc.name;
    }
})();
