angular.module("appExpedientes")
    .service("areaService", function () {
        this.areas = [];
        this.addArea = function (area) {
            this.areas.push(area);
            console.log(this.areas);
        }
        this.listAreas = function () {
            return this.areas;
        }
        this.removeArea = function (area) {
            console.log(this.areas);
            console.log(area);
            var i = this.areas.findIndex(a => {
                // console.log(a.nombre);
                return (a.nombre === area.nombre);
            });
            console.log("Elemento a borrar es: " + area.nombre + " Con indice: " + i);
            if (i >= 0) {
                this.areas.splice(i, 1);
                console.log("Elemento con indice: " + i + " borrado.");
            }
            else {
                console.log("No se borró ningun elemento");
            }
        }
    }).factory("areaServiceREST", function ($http, $q) {
        var servicioRest = {};
        var deferred = $q.defer();
        // agregar al objeto metodos de negocio
        // agregar método para hacer un POST rest
        servicioRest.agregarArea = function (unArea) {
            $http.post("http://localhost:3000/areas", unArea).then(
                function (result) {
                    deferred.resolve(result);
                },
                function (e) {
                    deferred.reject("ERROR");
                    console.error("ERROR ")
                }
            );
            return deferred.promise;
        };
        // agregar método para BUSCAR TODOS
        servicioRest.listarAreas = function () {
            $http.get("http://localhost:3000/areas").then(
                function (result) {
                    deferred.resolve(result.lista);
                },
                function (e) {
                    deferred.reject("ERROR");
                    console.error("ERROR ")
                }
            );
            return deferred.promise;
        };
        // agregar método para BUSCAR POR ID
        servicioRest.buscarPorID = function (id) {
            $http.get("http://localhost:3000/areas/" + id).then(
                function (result) {
                    deferred.resolve(result.unArea);
                },
                function (e) {
                    deferred.reject("ERROR");
                    console.error("ERROR ")
                }
            );
            return deferred.promise;
        }
        // agregar método para ACTUALIZAR UN AREA
        servicioRest.actualizar = function (unArea) {
            $http.put("http://localhost:3000/areas/" + unArea.id, unArea).then(
                function (result) {
                    deferred.resolve(result.data);
                },
                function (e) {
                    deferred.reject("ERROR");
                    console.error("ERROR ");
                }
            );
            return deferred.promise;
        };
        // retornar el objeto servicio construido
        return servicioRest;
    });