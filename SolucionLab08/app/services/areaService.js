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
        this.removeArea = function(area){
           console.log(this.areas);
           console.log(area);
           var i = this.areas.findIndex(a => {
                // console.log(a.nombre);
                return (a.nombre === area.nombre);
            });
            console.log("Elemento a borrar es: " + area.nombre + " Con indice: " + i);
            if(i >= 0)            
            {
                this.areas.splice(i, 1);
                console.log("Elemento con indice: " + i + " borrado.");
            }
            else
            {
                console.log("No se borró ningun elemento");
            }
        }
    });