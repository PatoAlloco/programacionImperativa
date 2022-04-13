//Ordenar lista de numeros con sort
let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

for (let i = 0; i < numeros.length; i++) {
	for (let j = 0; j < numeros.length; j++) {
		if (numeros[j] > numeros[j + 1]) {
			let temp = numeros[j];
			numeros[j] = numeros[j + 1];
			numeros[j + 1] = temp;
		}
	}
}

console.log(numeros);
/* Desarrollar una función que ordene internamente de forma ascendente
las edades, la misma deberá retornar él array ordenado,
es decir deberíamos obtener resultado como él siguiente: [25, 27, 30, 33, 34, 34] */
let edades = [33, 27, 34, 30, 34, 25];
function oredenAscendente(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j + 1]){
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }        
    }
    return array;
}
console.log(oredenAscendente(edades));

/* Desarrollar una función que ordene internamente de forma descendente
las edades, la misma deberá retornar él array ordenado,
es decir deberíamos obtener resultado como él siguiente: [34, 34, 33, 30, 27, 25] */
function oredenDescendente(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] < array[j + 1]){
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }        
    }
    return array;
}
console.log(oredenDescendente(numeros));

const nombres = [
    "Arlene Barr",
    "Roslyn Torres",
    "Cleo Lopez",
    "Daniel Malone",
    "Ethel Leon",
    "Harding Mitchell"
  ];
  
  /* Desarrollar una función que ordene internamente de forma ascendente los nombres alfabéticamente,
  la misma deberá retornar él array ordenado,
  es decir deberíamos obtener resultado como él siguiente:
  [
    'Roslyn Torres',   
    'Harding Mitchell',
    'Ethel Leon',      
    'Daniel Malone',   
    'Cleo Lopez',      
    'Arlene Barr'
  ] */
console.log(oredenDescendente(nombres)); 

/* Desarrollar una función que ordene internamente de forma descendente los nombres alfabéticamente,
la misma deberá retornar él array ordenado,
es decir deberíamos obtener resultado como él siguiente.
[
  'Arlene Barr',     
  'Cleo Lopez',      
  'Daniel Malone',   
  'Ethel Leon',      
  'Harding Mitchell',
  'Roslyn Torres'  
] */

console.log(oredenAscendente(nombres));

const arrayCuentas = [
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.4,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ];
  
  /* Desarrollar una función que ordene internamente de forma ascendente
  según el saldo de cada cuenta, la misma deberá retornar él array ordenado. */
  
  function saldoAscendente(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].saldo > array[j + 1].saldo){
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }        
    }
    return array;
}
console.log(saldoAscendente(arrayCuentas));

/* Desarrollar una función que ordene internamente de forma ascendente
según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado. */

function edadAscendente(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].edadTitular > array[j + 1].edadTitular){
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }        
    }
    return array;
}
console.log(edadAscendente(arrayCuentas));

/* Desarrollar una función que ordene internamente de forma ascendente
según el titular de cada cuenta, es decir, él nombre del titular, la misma deberá retornar él array ordenado. */

function titularAscendente(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].titular > array[j + 1].titular){
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }        
    }
    return array;
}
console.log(titularAscendente(arrayCuentas));







