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