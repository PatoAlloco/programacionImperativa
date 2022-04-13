const numeros = [5, 12, 2, 40, 330, 2, 8];
function mayor(num) {
  let may = num[0];
  for (let i = 0; i < num.length; i++) {
    if (may < num[i]) {
      may = num[i];
    }
  }
  return may;
}
console.log(mayor(numeros));

function numAlReves(num) {
  let a = String(num);
  console.log(a);
  let array = a.split("");
  let arrayNuevo = [];
  for (let i = array.length; i >= 0; i--) {
    arrayNuevo.push(array[i]);
  }
  let numNuevo = arrayNuevo.join("");
  return parseInt(numNuevo);
}
console.log(numAlReves(5021548));

/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.
 * */

let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
function repetidos(lista) {
  let arrayRepetidos = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista.indexOf(lista[i]) !== i) {
      arrayRepetidos.push(lista[i]);
    }
  }
  return arrayRepetidos;
}
console.log(repetidos(array));



//////////////////////ejercicio mesas clase 18 o 19 por ahi///////////////////////////////////
/**
 * Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos
 Luego, escribe un algoritmo para sumar todos los numeros en la matriz. */

 let matriz = [
    [5, 58, 96, 6, 10],
    [54, 7, 7, 95, 12],
    [15, 22, 25, 96, 3],
    [9, 58, 83, 1, 2],
    [19, 63, 44, 58, 6]
  ];
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[0].length; j++) {
      suma += matriz[i][j];
    }
  }
  console.log(suma);


/**Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 números. 
 * La matriz debe verse así:  */

function matrizDeCien() {
    let matriz = [];
  let sum = 1;
  for (let i = 0; i < 10; i++) {
      matriz.push([]);
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = sum;
      sum++;
    }
  }
  return matriz;
}
console.log(matrizDeCien());

/**Por último, vamos a generar dos funciones:
Una va a sumar los valores en la diagonal marcada en rojo.
La otra va a marcar los valores de la diagonal marcada en verde.
	Ambas funciones deben devolver un resultado único.
 */

    function diagonales(matriz){
        let diagonalA = [];
        for( let i = 0; i < matriz.length; i++){
            diagonalA.push([]);
            for( let j = 0; j < matriz[0].length; j++){
                if(i == j || i == matriz[0].length - j -1){
                    diagonalA[i][j] = "x";
                }else{
                    diagonalA[i][j] = matriz[i][j];
                }
            }
        }
        return diagonalA;
    }
    let matriz100 = matrizDeCien();
    console.log(diagonales(matriz100));





    // escribe tu codigo aqui!
let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
  ];
  
  //a)  Lo que nos solicitan es dar el total de gastos en una semana
  function gastosSemana(mes, semana) {
    let suma = 0;
    for (let j = 0; j < 7; j++) {
      suma += mes[semana - 1][j];
    }
    return suma;
  }
  console.log(gastosSemana(gastos, 3));
  
  /**b) La aplicación también tendrá una parte de estadísticas,
   * para esto nos solicitan dar el total de un día en particular */
  function gastosDia(mes, dia) {
    let suma = 0;
    for (let j = 0; j < mes.length; j++) {
      suma += mes[j][dia - 1];
    }
    return suma;
  }
  console.log(gastosDia(gastos, 3));
  
  /**c) Por último, es necesario tener el total de gastos
   * realizados en el mes. */
  function gastosMes(mes) {
    let suma = 0;
    for (let i = 0; i < mes.length; i++) {
      for (let j = 0; j < mes[0].length; j++) {
        suma += mes[i][j];
      }
    }
    return suma;
  }
  console.log(gastosMes(gastos));
  /**Obtener cuál fue la semana que más gastos se realizaron.
   * Indicar el día que más gastos se realizaron. */
  function semanaMasGastos(gastos) {
    let gastoSemana = gastosSemana(gastos, 1);
    let semana = 0;
    for (let i = 1; i <= gastos.length; i++) {
      let comparativa = gastosSemana(gastos, i);
      if (comparativa > gastoSemana) {
        gastoSemana = comparativa;
        semana = i;
      }
    }
    return semana;
  }
  console.log('La semana con mas gastos fue la: ' + semanaMasGastos(gastos));