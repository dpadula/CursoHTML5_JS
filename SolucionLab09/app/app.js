angular.module("appExpedientes", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/area/', {
                templateUrl: 'views/datosArea.html',
                controller: 'areaController'
            })
            .when('/area/lista', {
                templateUrl: 'views/listaAreas.html',
                controller: 'listaAreaController'
            })            
            .when('/area/:idArea', {
                templateUrl: 'views/datosArea.html',
                controller: 'areaController'
            })            
            .otherwise({ redirectTo: '/area' })
    })
    .controller("listaAreaController", function ($scope, $location, areaServiceREST) {
        // el controlador cuando se inicia carga la lista de áreas
        areaServiceREST.listarAreas().then(
            function (lista) {
                console.log(lista);
                $scope.listaAreas = lista;
            }
        );
    })
    .controller("areaController", function ($scope, areaServiceREST) {
        $scope.titulo = "Gestión de Areas";
        // $scope.listaAreas = areaService.listAreas();
        $scope.area = undefined;
        //$scope.deshabilitarGuardar = true;
        $scope.deshabilitarInput = true;

        // resto del controlador con funciones de control de la vista
        $scope.cancelar = function () {
            $scope.area = undefined;
            console.log($scope.area);
        }
        $scope.editar = function (unArea) {
            $scope.area = unArea;
            console.log($scope.area);
        }
        $scope.guardar = function () {
            console.log($scope.area);
            console.log($scope.area.nombre); //Este nombre viene de ng-model declarativo en HTML
            console.log($scope.listaAreas);
            if ($scope.area && $scope.area.nombre) {
                areaServiceREST.agregarArea($scope.area)
                    .then(
                    function (resultado) {
                        $scope.mensaje = "Se guardo el dato exitosamente";
                    },
                    function (error) {
                        $scope.mensaje = "No se guardo el dato";
                    },
                );
                $scope.area = undefined;
                //$scope.deshabilitarGuardar = (typeof $scope.area === 'undefined' ? true : false);                
                $scope.deshabilitarInput = true;
            } else {
                $scope.mensaje = "Hubo un problema, el área no puede tener nombre nulo";
                console.log($scope.mensaje);
            }
        }
        $scope.nueva = function () {
            // asigna a $scope.area un objeto vacio 
            $scope.area = {};
            console.log($scope.area);
            //$scope.deshabilitarGuardar = (((typeof $scope.area === 'undefined') || !$scope.area.nombre) ? true : false);
            $scope.deshabilitarInput = false;
            // console.log($scope.deshabilitarGuardar);
        }
        $scope.borrar = function (unArea) {
            // implementa el método findIndex para encontra el indice para un objeto que tenga el atributo nombre 
            // con el mismo nombre del área recibida como parámetro. Cuando lo encuentra lo utiliza en el arreglo con 
            // el método splice para eliminar un elemento
            console.log($scope.listaAreas);
            var borrar = confirm("Esta a punto de borrar el elemento: " + unArea.nombre + " Está seguro?");
            if (borrar) {
                areaService.removeArea(unArea);
                console.log("Se borró el elemento: " + unArea.nombre);
            } else {
                console.log("NO se borró el elemento: " + unArea.nombre);
            }
        }
    });