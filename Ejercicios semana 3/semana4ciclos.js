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
//sumaNaturales();



//////////ARRAYS

/**A partir de un array de correos, recorrerlo para corroborar si son válidos. Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y agregar aquellos que lo tengan al array de correos admitidos. En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
Mostrar por pantalla la cantidad y los elementos de cada array.
 */

let correosPendiente = ['patoalloco@hotmail.com','soneonf%hotmail.com','ndfnefnb@flkvgmflomv.com', 'dmjfdjk@ddkdjk.com', 'sjsdjsjs$vcjsj.com'];
function verificarCorreos(lista){
    let validos = [];
    let invalidos = [];
    for(i = 0; i <= lista.length - 1; i++){
        if(lista[i].indexOf('@') == -1){
            invalidos.push(lista[i]);
        }else{
            validos.push(lista[i]);
        }
    }
    console.log('Validos: ' + validos);
    console.log('Invalidos: ' + invalidos);
}
//verificarCorreos(correosPendiente);

/**Queremos que un usuario pueda ingresar su correo y el sistema lo valide directamente, para luego agregarlo al array de correos admitidos o bien que devuelva un mensaje diciendo que no es correcto, con la posibilidad de que lo ingrese nuevamente. */

/*let correo = prompt('Ingrese su correo: ');
while(correo.indexOf('@') == -1){
    correo = prompt('Correo invalido! Ingrese nuevamente: ');
}*/


//////////////////  clase array y string jueves 10  /////////////////////

//pagina 1
/**A. Acceder a elementos específicos de un array.
B. Modificar cada uno de sus elementos e imprimirlos.
C. Agregar elementos a un array.
D. Extraer elementos de un array.
E. Comparar elementos de un array con los elementos de otro. */

let colec = [0,1,2,36,58,456,745,2];
let aaa = colec[4];
colec.push(4,5);
let ultimo = colec.pop();
colec.shift();
colec.unshift(5);

//pagina 2
/** 1 - devielve undefined xq esta mal declarado el length
 * 2 - ironman
 * 3 - un string cualquiera
 */

//pagina 3
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
console.log(peliculas[4]);

function pasarMayuscula(lista){
    let peliEnMayuscula = [];
    for(i = 0; i <= lista.length -1; i++){
        peliEnMayuscula.push(lista[i].toUpperCase());
    }
    return peliEnMayuscula;
}

let juego = animadas.pop();
function unirArrays(uno, dos){    
    for(i = 0; i <= dos.length -1; i++){
        uno.push(dos[i]);
    }
    return pasarMayuscula(uno);
}
console.log(unirArrays(peliculas, animadas));

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compara(uno, dos){
    let suma = 0;
    for(i = 0; i <= dos.length -1; i++){
        if(uno[i] == dos[i]){
            console.log('En Asia y Europa coinciden. Calificacion: ' + uno[i]);
        }else{
            suma++;
            console.log('En Asia y Europa No coinciden. Clificaciones: ' + uno[i] + ' y ' + dos[i]);
        }        
    }
    if(suma != 0){
        return true;
    }else{
        return false;
    }
}

compara(asiaScores, euroScores);



























