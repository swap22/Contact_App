(function(){
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", Contact);

    function Contact(ContactDataSvc) {
        this.contact = ContactDataSvc.contacts;
        this.selectedUser = this.contact[0];
        this.selectUser = function (index) {
            this.selectedUser = this.contact[index];
        }
    }
})();