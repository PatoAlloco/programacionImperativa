
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let banco = {
    cliente: arrayCuentas,
    consultarCliente: function(nombre){       
        for(let i = 0; i <= this.cliente.length -1; i++){
            if(this.cliente[i].titularCuenta == nombre){
                console.log(this.cliente[i]);
                return this.cliente[i];
            } 
        }
    
        console.log("Cliente no encontrado");
        return false;
    }, 
    deposito: function(nombre, dinero){
        for(let i = 0; i <= this.cliente.length -1; i++){
            if(this.cliente[i].titularCuenta == nombre){
                console.log("Saldo: " + this.cliente[i].saldoEnPesos);
                this.cliente[i].saldoEnPesos += dinero;
                console.log("Saldo acualizado: " + this.cliente[i].saldoEnPesos);
            } 
        }        
    },
    extraccion: function(nombre, dinero){
        for(let i = 0; i <= this.cliente.length -1; i++){
            if(this.cliente[i].titularCuenta == nombre){
                console.log("Saldo: " + this.cliente[i].saldoEnPesos);
                if(this.cliente[i].saldoEnPesos < dinero){
                    console.log("Saldo Insuficiente");
                }else{
                    this.cliente[i].saldoEnPesos -= dinero;
                console.log("Saldo acualizado: " + this.cliente[i].saldoEnPesos);
                }               
            } 
        }   
    }
};

banco.consultarCliente("Jack Shurmer");
banco.deposito("Jacki Shurmer", 2000);
banco.extraccion("Jacki Shurmer", 20000);


/////////////////////EXTRAS////////////////////////
/**
 * camelCase = function(kcase) {
//     let result = "";
//     for (let i = 0; i < kcase.length; i++) {
//         if (kcase[i] == '-' || kcase[i] == '_') {
//             result += kcase[i + 1].toUpperCase();
//             i++
//         } else {
//             result += kcase[i]
//         }
//     }
//     return result;

 * 
 * 
 * 
 * 
 * 
 * Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ] */

let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49}, {nombres: "Juan", edad: 50} ];

function propiedadUnica(lista, propiedad){  
  let listPropiedad = [];
  for(i = 0; i <= lista.length -1; i++){
    if(Object.keys(lista[i]).includes(propiedad)){
      listPropiedad.push(lista[i]);
    }
  }
  return listPropiedad;
}

console.log(propiedadUnica(array, "nombres")) ;

/**Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
● Nombre
● Número de legajo
● Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
correctamente de la manera solicitada. */
let alumno = {
  nombre: "Juan",
  numLegajo: 165486,
  notas:[8,9,10,7,4,5,8,6,4,9]
}

function aprobar(alum, notaMin){
  let sum = 0;
  for(i = 0; i < alum.notas.length; i++){
    sum += alum.notas[i];    
  }
  let prom = sum / alum.notas.length;
  if(prom >= notaMin){
    console.log("APROBADO. Promedio: " + prom + " Nota Minima: " + notaMin);
  }else{
    console.log("DESAPROBADO. Promedio: " + prom + " Nota Minima: " + notaMin);
  }
}

aprobar(alumno, 7);







