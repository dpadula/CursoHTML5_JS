angular.module("labo04app", [])
    .controller("labo04Controller",
        function ($scope) {
            $scope.total = 2 + 1;
            $scope.valorActual = Math.floor($scope.total / 2);
            $scope.paridad = ($scope.valorActual % 2) == 0;
            $scope.textoParidad = $scope.paridad ? ' - PAR' : ' - IMPAR';
            console.log($scope.paridad, $scope.textoParidad);
            $scope.mitadValor = $scope.total / 2;
            $scope.refresh = function () {
                $scope.total += Math.random();
                $scope.valorActual = Math.floor($scope.total / 2);
                $scope.paridad = ($scope.valorActual % 2) == 0;
                $scope.textoParidad = $scope.paridad ? ' - PAR' : ' - IMPAR';
                console.log($scope.paridad, $scope.textoParidad);
                $scope.mitadValor = $scope.total / 2;
            }
        }
    );