/**
 * Escribir una función que reciba un array de elementos e indique si se encuentran ordenados
 *  de menor a mayor o no. La función debe retornar un booleano: true si el array esta 
 * ordenado, false, si no.
 */

 let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
 let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];
 
 // Comprueba tu función con los 2 arrays en dos llamadas 
 //independientes
 
 function ordenadosMenorAMayor(array){
   let orden = true;
   for (let i = 0; i < array.length; i++) {
     if(array[i] > array[i + 1]){
       orden = false;
       return orden;
     }    
   }
   return orden;
 }
 
 console.log(ordenadosMenorAMayor(pruebaA));


 /**
 * Escribir una función que reciba un array con nombres, y para cada nombre imprima el mensaje:
 *  Estimado (nombre) , vote por mí. */

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

function votePorMi(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Estimado " + array[i] + ", vote por mi");
  }
}
votePorMi(nombres);

/**
 * Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la 
 * siguiente forma : (suponiendo que indica 6). 
666666 
55555 
4444 
333 
22
1 
 */

function piramideInvertida(num){
    for (let i = num; i > 0; i--) {
      let piso = '';
       for (let j = 0; j < i; j++) {
         piso += i        
       }
      console.log(piso);     
    }
  }
  piramideInvertida(8);

/**
 * Teniendo 3 arrays:

Cargarlos en una matriz y luego, hacer la suma de los valores horizontales de cada fila, los 
verticales de cada columna y las 2 diagonales, e imprimirlas por consola. */
let fila1 = [4, 9, 2];
let fila2 = [1, 3, 5];
let fila3 = [8, 1, 45];

let matriz = [];
matriz.push(fila1, fila2, fila3);

function sumas(matrix){  
  let sumaDiago = 0;
  let sumaDiagoInvertida = 0;
  for (let i = 0; i < matrix.length; i++) {
    let sumaFila = 0;
    for (let j = 0; j < matrix[0].length; j++) {      
      if(i == j){
        sumaDiago += matrix[i][j]; 
      } 
      if(i == matrix[0].length - 1 - j) {
        sumaDiagoInvertida+= matrix[i][j];
      }
      sumaFila+= matrix[i][j];
    }
    console.log('Fila ' + (i + 1) + ': ' + sumaFila);    
  }
    console.log('Diagonal: ' + sumaDiago);
    console.log('Diagonal invertida: ' + sumaDiagoInvertida);

    for (let x = 0; x < matrix[0].length; x++) {
        let sumaColum = 0;
        for (let y = 0; y < matrix[x].length; y++) {
            sumaColum+= matrix[y][x];            
        }
        console.log('Columna ' + (x + 1) + ': ' + sumaColum);            
    }
}

sumas(matriz);

