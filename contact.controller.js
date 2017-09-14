(function(){
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", Contact);

    function Contact(ContactDataSvc) {
        var self = this;

        self.contact = ContactDataSvc.contacts;
        
         this.selectUser = function (index) {
            this.selectedUser = this.contact[index];
        }
    }
})();