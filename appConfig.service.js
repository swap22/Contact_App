//  Copyright (c) 2017 Swapnil R. Sharma 
//  Distributed under the MIT License (See accompanying file LICENSE or copy at https://opensource.org/licenses/MIT)

(function(){
    var app = angular.module("ContactApp");
    app.service("AppNameServiceSvc", function(AppNameSvc){
        this.name = AppNameSvc;
        this.author = "Anuj Sharma";
        this.company = "XYZ Labs";
    });
})();
