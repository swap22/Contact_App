(function(){
    var app = angular.module("ContactApp");
    app.service("AppNameServiceSvc", function(AppNameSvc){
        this.name = AppNameSvc;
        this.author = "Anuj Sharma";
        this.company = "SAP Labs";
    });
})();