var myApp = angular.module('myContactListApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/contactlist').then(function(response){
        console.log("Recibi los datos");
        console.log(response.data);
        $scope.contactlist = response.data;
    });

    //Esto se movio al servidor (server.js) y se pide a traves de una solicitud GET que esta arriba.
    // person1 = {
    //     name: "Tim",
    //     email: "tim@email.com",
    //     phone: "111-111-111"
    // };

    // person2 = {
    //     name: "Emily",
    //     email: "emy@email.com",
    //     phone: "222-222-222"
    // };

    // person3 = {
    //     name: "John",
    //     email: "john@email.com",
    //     phone: "333-333-333"
    // };

    // contactlist = {person1, person2, person3};
    // $scope.contactlist = contactlist;
}]);