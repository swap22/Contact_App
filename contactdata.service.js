(function(){
    var app = angular.module("ContactApp");
    app.service("ContactDataSvc", function(){
        this.contacts = [];
    });
})();