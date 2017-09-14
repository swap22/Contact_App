(function(){
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", Contact);

    function Contact(ContactDataSvc, $http) {
        var self = this;

        $http.get('http://localhost:3000/contacts')
        .then(function(response){
            self.contact = response.data;
        });

         this.selectUser = function (index) {
            this.selectedUser = this.contact[index];
        }
    }
})();