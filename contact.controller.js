(function(){
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", Contact);

    function Contact(ContactDataSvc) {
        var self = this;

        ContactDataSvc.getContacts()
        .then(function(data){
            self.contact = data;
        });

         this.selectUser = function (index) {
            this.selectedUser = this.contact[index];
        }
    }
})();