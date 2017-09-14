(function(){
    var app = angular.module("ContactApp");
    app.service("ContactDataSvc", function($http){
        var self = this;

        self.contacts = [];

        $http.get('http://localhost:3000/contacts')
        .then(function(response){
            self.contacts = response.data;
        });


    });
})();