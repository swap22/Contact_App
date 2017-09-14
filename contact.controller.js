//  Copyright (c) 2017 Swapnil R. Sharma 
//  Distributed under the MIT License (See accompanying file LICENSE or copy at https://opensource.org/licenses/MIT)

(function () {
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", Contact);

    function Contact(ContactDataSvc) {
        var self = this;
        self.editMode = false;
        self.addMode = false;

        ContactDataSvc.getContacts()
            .then(function (data) {
                self.contact = data;
            });

        self.selectUser = function (index) {
            self.selectedUser = self.contact[index];
            self.successMessage = undefined;
            self.errorMessage = undefined;
        }

        self.toggleEditMode = function () {
            self.editMode = !self.editMode;
        }

        self.saveUser = function () {
            self.toggleEditMode();
            var userData = self.selectedUser;
            if(!self.addMode){
                ContactDataSvc.saveUser(userData)
                .then(function () {
                    self.successMessage = "Data Successfully Saved";
                },
                function () {
                    self.errorMessage = "There was an error. Please Try again."
                }
                );
            }else{
                ContactDataSvc.addUser(userData)
                .then(function () {
                    self.successMessage = "Data Successfully Saved";
                },
                function () {
                    self.errorMessage = "There was an error. Please Try again."
                }
                );
            }  
        }

        self.addContact = function(){
            self.addMode = true;
            self.selectedUser = {
                //Ideally we should take ID from server and not generate here.
                "id":new Date().toTimeString()
            }
            self.editMode = true;
        }
    }
})();
