var myApp = angular.module('myContactListApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function () {
        $http.get('/contactlist').then(function (response) {
            console.log("Recibi los datos");
            console.log(response.data);
            $scope.contactlist = response.data;
            $scope.contact = {};
        });
    };

    refresh();

    $scope.addContact = function () {
        console.log("Agregar Contacto");
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).then(function (response) {
            console.log(response);
            refresh();
            //TODO: agregar que solamente se habilite el boton cuando algun input tenga datos
        });
    };

    $scope.removeContact = function (id) {
        console.log("Quitar Contacto");
        console.log(id);
        $http.delete('/contactlist/' + id).then(function (response) {
            console.log(response);
            refresh();
        });

    };

    $scope.editContact = function (id) {
        console.log("Editar Contacto");
        console.log(id);
        $http.get('/contactlist/' + id).then(function (response) {
            console.log(response);
            $scope.contact = response.data;
            //TODO: agregar que cuando selecciones para editar, no se pueda agregar nuevo
            // y cuando modifiques con update si se pueda
        });
    };

    $scope.updateContact = function () {
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function (response) {
            refresh();
        })
    };

    $scope.deselect = function () {
        $scope.contact = {};
    }

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