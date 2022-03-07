const prompt = require("prompt-sync")({ sigint: true });

/*1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.*/
function siguienteDiez(num){
    for(i = num + 1; i <= num + 10; i++){
        console.log(i);
    }
}
siguienteDiez(0);

//2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
function tresEnTRes(){
    for(i = 5; i <= 20; i+=3){
        console.log(i);
    }
}
tresEnTRes();

//3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
function sumaDeCeroACien(){
    let suma = 0;
    for(i = 0; i <= 100; i++){
        suma = suma + i;
    }
    console.log(suma);
}
sumaDeCeroACien();

/*4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.*/
function factorial(num){
    fac = 1;
    for(i = 1; i <= num; i++){
        fac *= i;
    }
    console.log(fac);
}
factorial(4);

/*5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro. */
function fibonacci(num){
    let a = 0;
    let b = 1;
    let sum = 0;
    for(i = 2; i <= num; i++){        
        sum = a + b;
        a = b;
        b = sum;
        console.log(sum);
    }
}
fibonacci(10);

/**Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para 
escribir en la consola debés utilizar el método console.log(). */
//let palabra = prompt("Ingrese una palabra: ");
//console.log(palabra);

/**Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de
exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!". */
//let nombre = prompt("Ingresa tu nombre: ");
//console.log(`Hola ${nombre}!`);

/**Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, e imprima en 
la consola la suma de los dos números que ingresó el usuario. */
//let num1 = parseInt(prompt("Ingrese el primer numero de la suma: ")); 
//let num2 = parseInt(prompt("Ingrese el segundo numero de la suma: ")) ;
//console.log(`${num1} + ${num2} = ` + (num1 + num2));

/**Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la 
frase "Tienes X años" (siendo X la cantidad de años). Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes 20 años”. */
//let anio = parseInt(prompt("Ingrese su anio de nacimiento: "));
let actual = new Date().getFullYear();
//console.log("Tiene: " + (actual - anio) + " anios");

/**Escribí un programa que piense un número de forma aleatoriadel 1 al 10 y le pida al usuario que lo trate de 
adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario, 
debe imprimir "Lo siento, intenta nuevamente!" */

let numSec = Math.floor((Math.random()*9)+1);
let numIntento = parseInt(prompt("Adivine el numero: "));
    if(numIntento == numSec){
        console.log("Felicitaciones! El numero era el: " + numSec);
    } else{
        console.log("Perdiste! el numero era el: " + numSec);
    }

/**Escribí un programa que imprima los números pares del 0 al 100. */   
for(i = 0; i <= 100; i++){
    if(i % 2 == 0){
     //   console.log(i);
    }
    
}  

/**Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"]; */
let arregloNombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];
for(i = 0; i < arregloNombres.length; i++){
    console.log(arregloNombres[i]);
}

/**Construí un pseudocódigo que permita ingresar un número, siel número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este. */
//let n1 = parseInt(prompt("Ingrese un numero: "));
/*if(n1 > 500){
    console.log(`El 18% de ${n1} es ${n1 * 0.18}`);
}

/**Escribí una función llamada elemento que recibe un arreglocomo parámetro. La función debe devolver el valor que 
se encuentra en la tercera posición. Si el arreglo no tiene al menos 3 elementos deberá retornar -1. */
function elemento(arreglo){
    if(arreglo.length >= 3){
        return arreglo[3];
    }else{
        return -1;
    }
}
console.log( elemento(["Pedro","Pablo", "Maria", "Juan", "Diana"]));

/**Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra que muestre lo mínimo que le 
falta para ser un número de 2 cifras; de lo contrario, que muestre lo mínimo que le falta para ser un número de 3 
cifras. Considerar que el usuario ingresa números de hasta dos cifras. */
/*let n2 = parseInt(prompt("Ingrese un numero de 2 cifras: "));
if(n2 < 10){
    console.log(`Te faltan ${10 - n2} para que sea un numero de dos digitos`);
}else{
    console.log(`Te faltan ${100 - n2} para que sea un numero de tres digitos`);
}*/

/**Hacer un algoritmo que muestre el promedio de varias notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar. */
function promedio(){
    let cantDeNotas = parseInt(prompt("Ingrese la cantidad de notas a calcular: "));
    let suma = 0;
    for(i = 1; i <= cantDeNotas; i++){
        let nota = parseInt(prompt(`Ingrese la nota ${i}: `));
        suma += nota;
    }
console.log(`Promedio = ${suma / cantDeNotas}`);
}
//promedio();

/**Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado 
por teclado. */
function sumaNaturales(){
    let sum = 0;
    let num = parseInt(prompt("Ingrese un numero: "));
    for(i = 0; i <= num; i++){
        sum += i;
    }
    console.log(sum);
}
sumaNaturales();


















