angular.module("appExpedientes", []).
controller("areaController", function ($scope) {
    $scope.titulo = "Gestión de Areas";
    $scope.listaAreas = [];
    $scope.area = undefined;

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
        if ($scope.area && $scope.area.nombre) {
            $scope.listaAreas.push($scope.area);
            console.log($scope.area);
            console.log($scope.area.nombre);//Este nombre viene de ng-model declarativo en HTML
            console.log($scope.listaAreas);
        } else {
            $scope.mensaje = "Hubo un problema, el área no puede tener nombre nulo";
            console.log($scope.mensaje);
        }
    }
    $scope.nueva = function () {
        // asigna a $scope.area un objeto vacio 
        $scope.area = {};
        console.log($scope.area);
    }
    $scope.borrar = function (unArea) {
        // implementa el método findIndex para encontra el indice para un objeto que tenga el atributo nombre 
        // con el mismo nombre del área recibida como parámetro. Cuando lo encuentra lo utiliza en el arreglo con 
        // el método splice para eliminar un elemento
    }
});