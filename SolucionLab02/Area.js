function Area(pNombre){
	this.nombre=pNombre;
	this.empleados=[];
	this.expedientes = [];
}

Area.prototype.agregarEmpleado= function(emp){
	if(emp.area === undefined){
		this.empleados.push(emp);
		emp.asignarArea(this);
		console.log("empleado "+emp.nombre+" agregado al area exitosamente");
	}else{
		console.error("No se puede agregar un empleado que trabaja en otra área");
	}
}

Area.prototype.recibirExpte= function(e){
	// agrega el expediente a la lista de expedientes
	this.expedientes.push(e);
}

Area.prototype.pasarExpte= function(e){
	var i = this.expedientes.indexOf(e);
	if(i != -1) {
		this.expedientes.splice(i, 1);
	}	
}

Area.prototype.buscarExptePorTipo = function(tipoExpte){
		return this.expedientes.filter(darTipo(tipoExpte));	
}

Area.prototype.buscarExpteDormidos = function(dias){
		return this.expedientes.filter(masDe(dias));	
}

function darTipo(tipo) {
    return function(element) {
        return element.tipo === tipo;
    }
}

function masDe(dias) {
    return function(element) {
		var calcDias = moment().diff(element.fechaInicio, 'days');
		// console.log(calcDias);
		return calcDias >= dias; 
    }
}