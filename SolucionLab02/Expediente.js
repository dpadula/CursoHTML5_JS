//Paso 2 y 3
var NRO_EXPEDIENTE = 1000;

function Expediente(pTipo, pTitulo, pFechaInicio, pPrioridad, pIniciador) {
    this.tipo = pTipo;
    this.titulo = pTitulo;
    this.prioridad = pPrioridad;
    this.iniciador = pIniciador;
    this.nroExpediente = ++NRO_EXPEDIENTE;
    this.enArchivo = false;
    this.esInvalido = true;
    if (moment(pFechaInicio, "DD/MM/YYYY").isValid()) {
        this.fechaInicio = moment(pFechaInicio, "DD/MM/YYYY").toDate();
        this.esInvalido = false;
    } else
        this.fechaInicio = null;
    this.ultimoPase = null;
    this.historialPases = []; //Para almacenar la historia de pases
}

Expediente.prototype.imprimirFicha = function () {
    console.log(this);
}

Expediente.prototype.imprimirFichaDetallada = function () {
    this.imprimirFicha();
    console.log(this.ultimoPase);
}

Expediente.prototype.archivar = function () {
    this.enArchivo = true;
    this.ultimoPase.area.pasarExpte(this);//Eliminas el expte del area
}

Expediente.prototype.pasar = function (pHojas, pArea) {
    if (!this.enArchivo) {
        //this.ultimoPase.area.pasarExpte(this);
        var paseAnterior = this.ultimoPase;
        if(paseAnterior!=null)
        {
            paseAnterior.area.pasarExpte(this);
        }
        var nuevoPase = new Pase(pHojas, pArea);
        nuevoPase.area.recibirExpte(this);
        this.ultimoPase = nuevoPase;
        this.historialPases.push(nuevoPase);
		console.log("Expte: "+this.titulo+", pasó al \""+pArea.nombre+"\" con "+pHojas+" hojas.");
	}else{
		console.error("Expte: "+this.titulo+", no se puede pasar porque se encuentra en archivo.");
	}
}

Expediente.prototype.pases = function () {
    console.log(this.historialPases);
}

//Paso 3b
function corregirExpedientes(element, array) {
    if (element.esInvalido) {
        element.esInvalido = false;
        element.fechaInicio = moment().toDate();
    }
}