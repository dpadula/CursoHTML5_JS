console.log("inicio prueba de aplicación");

var emp1 = new Empleado("E1","e1@mail.com","123","202223334441","1000.10");
var emp2 = new Empleado("E2","e2@mail.com","123","272223336669","1030.10");
var emp3 = new Empleado("E3","e3@mail.com","123","274423334441","1500.99");
var emp4 = new Empleado("E4","e4@mail.com","123","201123338881","1000.10");
var emp5 = new Empleado("E5","e5@mail.com","123","202223335551","2050.10");

console.log(emp1);
console.log("El empleado e1 es : "+emp1);

var area1 = new Area("area 1");
var area2 = new Area("area 2");
var area3 = new Area("area 3");

area1.agregarEmpleado(emp1);
area1.agregarEmpleado(emp2);
area2.agregarEmpleado(emp3);
area2.agregarEmpleado(emp4);
area3.agregarEmpleado(emp5);
area3.agregarEmpleado(emp1);

//tipos de expedientes
var tipoLicitacion = {id:1,tipo:"Licitacion"};
var tipoPagos = {id:2,tipo:"Pagos"};
var tipoConcursos = {id:3,tipo:"Concursos"};

//Paso 2 y 3 !!!!
// crear 6 expedientes
var expediente1 = new Expediente(tipoLicitacion,"licitar Q","20/01/2017",3);
var expediente2 = new Expediente(tipoConcursos,"Ingresar mm","23/01/2017",1);
var expediente3 = new Expediente(tipoPagos,"Pago x","18/01/2017",5);
var expediente4 = new Expediente(tipoPagos,"Pago z","04/01/2017",2);
var expediente5 = new Expediente(tipoConcursos,"Concurso n","29/01/2017",4);
var expediente6 = new Expediente(tipoLicitacion,"licitar W","32/01/2017",1);
var listaExpedientes =
[expediente1,expediente2,expediente3,expediente4,expediente5,expediente6];
console.log(listaExpedientes);

//Paso 3b
listaExpedientes.forEach(corregirExpedientes);
console.log(listaExpedientes);

expediente1.pasar(99,area1);
expediente2.pasar(88,area3);
expediente3.pasar(44,area3);
expediente4.pasar(31,area2);
expediente5.pasar(9,area1);
expediente6.pasar(6,area2);
//verificar cuantos expedientes hay en cada área
console.log(area1);//[1,5]
console.log(area2);//[4,6]
console.log(area3);//[2,3]
console.log(listaExpedientes);

expediente1.pasar(100,area2);
expediente2.pasar(89,area1);
expediente3.pasar(54,area2);
expediente5.pasar(19,area2);
//verificar cuantos expedientes hay en cada área
console.log(area1);//[2]
console.log(area2);//[1,3,4,5,6]
console.log(area3);//[]
console.log(listaExpedientes);

expediente5.archivar();//Lo archiva y lo remueve del listado de Expedientes del area
expediente5.pasar(19,area3);//No pasa. Da error
// verificar que el pase no se ejecutó porque el pase está en archivo
console.log(area1);//[2]
console.log(area2);//[1,3,4,6]
console.log(area3);//[]
console.log(listaExpedientes);