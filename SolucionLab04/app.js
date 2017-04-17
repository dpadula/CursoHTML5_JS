angular.module("labo04app", [])
    .controller("labo04Controller",
        function ($scope) {
            $scope.total = 2 + 1;            
            $scope.mitadValor = $scope.total / 2;
            $scope.refresh = function () {
                $scope.total += Math.random();
                $scope.mitadValor = $scope.total / 2;
            }
        }
    );