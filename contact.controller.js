(function () {
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", Contact);

    function Contact(ContactDataSvc) {
        var self = this;
        self.editMode = false;

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
            ContactDataSvc.saveUser(userData)
                .then(function () {
                    self.successMessage = "Data Successfully Saved";
                },
                function () {
                    self.errorMessage = "There was an error. Please Try again."
                }
                );
        }
    }
})();