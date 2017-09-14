//  Copyright (c) 2017 Swapnil R. Sharma 
//  Distributed under the MIT License (See accompanying file LICENSE or copy at https://opensource.org/licenses/MIT)

(function(){
    var app = angular.module("ContactApp");
    app.service("ContactDataSvc", function($http){
        var self = this;

        self.getContacts = function(){
            var promise1 = $http.get('http://localhost:3000/contacts')
            var promise2 = promise1.then(function(response){
                return response.data;
            });
            return promise2;
        }

        self.saveUser = function(userData){
            var url = "http://localhost:3000/contacts/" + userData.id;
            return $http.put(url, userData)
            .then(
                function(response){
                    console.log(response);
                }
            )
        }

        self.addUser = function(userData){
            var url = "http://localhost:3000/contacts/";
            return $http.post(url, userData)
            .then(
                function(response){
                    console.log(response);
                }
            )
        }
    });
})();
