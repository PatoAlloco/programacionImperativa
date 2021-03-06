//EJERCICIO-1
//1- a. ¿Qué tipo de dato contiene la variable ‘alumnos’?
/**La variable alumnos contiene un array de objetos literales donde cada objeto tiene la propiedades id y 
 * legajo del tipo number, nombre y apellido del tipo string y notas del tipo array. */

/**1- b. ¿Qué propiedades tiene la estructura definida en el archivo final.js? 
 * Las propiedades que tiene son id, nombre, apellido, legajo y notas.
  */

const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
      promedio: promedioNotas,
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
      promedio: promedioNotas,
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
      promedio: promedioNotas,
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
      promedio: promedioNotas,
    },
    {
      id: 5,
      nombre: "Javier",
      apellido: "Riera",
      legajo: 20220125,
      notas: [],
      promedio: promedioNotas,
    },
  ];

// 1- c. Completa las notas de cada alumno con números enteros positivos (5 por alumno)
function llenarNotas(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < 5; j++) {
            array[i].notas.push(Math.floor(Math.random() * (11 - 1)) + 1);
        }        
    }
    return array;
}
console.log("Llenar notas");
console.log(llenarNotas(alumnos));

/** 2- Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de 
 * forma ascendente. */
function ordenLegajo(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].legajo > array[j + 1].legajo){
                let ayuda = array[j + 1];
                array[j + 1] = array[j];
                array[j] = ayuda;
            }
        }        
    }
    return array;
}
console.log("Ordenar por legajos ascendentes");
console.log(ordenLegajo(alumnos));

/** 3- Crear una función que ordene las notas de cada estudiante de forma ascendente.  */
function notasAscendentes(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].notas.length; j++) {
            for (let k = 0; k < array[i].notas.length - 1; k++) {
                if(array[j].notas[k] > array[j].notas[k + 1]){
                    let ayuda = array[j].notas[k];
                    array[j].notas[k] = array[j].notas[k + 1];
                    array[j].notas[k + 1] = ayuda;
                }                
            }            
        }        
    }
    return array;
}
console.log("Notas en Orden Ascendente");
console.log(notasAscendentes(alumnos));

/** 4- Crear un método para cada objeto literal que retorne el promedio de notas de un alumno. */
function promedioNotas(){
    let suma = 0;
    for (let i = 0; i < this.notas.length; i++) {
        suma+= this.notas[i];        
    }
    return suma / this.notas.length;
}
console.log("Promedio de notas 1: " + alumnos[0].promedio());
console.log("Promedio de notas 2: " + alumnos[1].promedio());
console.log("Promedio de notas 3: " + alumnos[2].promedio());
console.log("Promedio de notas 4: " + alumnos[3].promedio());
console.log("Promedio de notas 5: " + alumnos[4].promedio());

/** 5- Crear una función que retorne un array con todos los estudiantes que tengan promedio de nota menor a 7. */
function mayorASiete(array){
    let aprobados = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].promedio() > 7){
            aprobados.push(array[i]);
        }        
    }
    return aprobados;
}
console.log("Alumnos con promedio Mayor a 7");
console.log(mayorASiete(alumnos));

//EJERCICIO-2
/** A- Crea una matriz de 3x3 con números enteros positivos en cada una de sus posiciones. */
let matriz = [
    [6,12,5],
    [4,14,5],
    [2,6,11]
]
console.log("Matriz de 3x3");
console.table(matriz);

/** B- Crear una función que retorne la suma de las diagonales de la matriz.  */
function sumaDiagonales(array){
    let sumDiagonalA = 0;
    let sumDiagonalB = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(i === j){
                sumDiagonalA+= array[i][j];
            }
            if(i === array[i].length - 1 - j){
                sumDiagonalB+= array[i][j]; 
            }
        }        
    }
    console.log("Diagonal A: " + sumDiagonalA);
    console.log("Diagonal B: " + sumDiagonalB);
    return sumDiagonalA + sumDiagonalB;

}
console.log("Suma de las Diagonales: ");
console.log("Total: " + sumaDiagonales(matriz))

/** C- Crear una función que retorne la suma de todos los números dentro de la matriz que sean pares. */
function sumaPares(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i][j]%2 == 0){
                suma+= array[i][j];
            }
        }        
    }
    return suma;
}
console.log("Suma de los numeros pares de la Matriz");
console.log(sumaPares(matriz));

/** D- Crear una función que retorne la suma de todos los valores de la matriz. */
function sumaValores(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
                sum+= array[i][j];
        }        
    }
    return sum;
}
console.log("Suma de todos los Valores de la Matriz");
console.log(sumaValores(matriz));

/** E- Crear una función que reciba una matriz y retorne la matriz transpuesta.  */
function transpuesta(array) { 
    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < i; j++) { 
            let ayuda = array[i][j]; 
            array[i][j] = array[j][i]; 
            array[j][i] = ayuda; 
        } 
    }
    return array; 
}
console.log("Matriz transpuesta");
console.table(transpuesta(matriz));



