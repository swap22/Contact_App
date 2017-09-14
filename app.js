var app = angular.module("ContactApp", []);

app.controller("ContactCtrl", Contact);
app.controller("HeaderCtrl", Header);
app.controller("FooterCtrl", Footer);

//Creting service
app.value("AppNameSvc", {
    "name":"My Contact App",
    "author":"Anuj Sharma",
    "Company":"SAP Labs"
}
);

app.value("LoggingSvc", function(){
    console.log("From Function of Value service");
});

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

function Header(AppNameSvc, LoggingSvc){
    this.appName = AppNameSvc.name;
    LoggingSvc();
}

function Footer(AppNameSvc, LoggingSvc){
    this.appName = AppNameSvc.name;
    LoggingSvc();
}
