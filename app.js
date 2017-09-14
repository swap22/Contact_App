var app = angular.module("ContactApp", []);

app.controller("ContactCtrl", Contact);

function Contact(){
    this.contact = [
        {
            "gender": "male",
            "name": {
                "title": "Mr.",
                "first": "Romain",
                "last": "Hoogmoed"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/83.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr.",
                "first": "John",
                "last": "Williams"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/84.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
            }
        }
    ];
    this.selectedUser = this.contact[0];
    this.selectUser = function(index){
        this.selectedUser = this.contact[index];
    }
}