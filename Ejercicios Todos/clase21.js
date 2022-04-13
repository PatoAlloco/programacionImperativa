/**
 * Crear una función que imprima todos los dígitos decimales, del 0 al 9, usando un ciclo For.*/

 function mostrarDecimales() {
	for (let i = 0; i <= 9; i++) {

        console.log();
        
    }
}

// invoca tu funcion aqui
console.log(mostrarDecimales());

/**Crear una función que imprima los números entre el 5 y el 20, saltando de tres en tres. */
function saltaTres(){
    for (let i = 5; i < 21; i+= 3) {
        console.log(i);
 }
}
saltaTres();

/**Crear una función que imprima la sumatoria de todos los números entre el 0 y el 100. */
function sumaCien(){
    let suma = 0;
    for (let i = 0; i < 101; i++) {
        suma+=i        
    }
    console.log(suma);
}
sumaCien();

/**Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase. */
function vocales(frase){
    let suma = 0;
    let minuscula = frase.toLowerCase();
    for (let i = 0; i < minuscula.length; i++) {
        if(minuscula[i] === 'a' || minuscula[i] === 'e' || minuscula[i] === 'i' || minuscula[i] === 'o' || minuscula[i] === 'u'){
            suma++
        }        
    }
    console.log('La frase "' + frase + '" tiene ' + suma + ' voacles');
}
vocales('aaaaa');

/**Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma : */

function piramide(){
    for (let i = 1; i < 10; i++) {
        let fila = "";
        for (let j = 0; j < i; j++) {
            fila += i;          
        }        
        console.log(fila);
    }
}
piramide();