(function(){
    var app = angular.module("ContactApp");
    app.service("ContactDataSvc", function(){
        this.contacts = [
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
    });
})();