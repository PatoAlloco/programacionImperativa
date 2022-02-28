const prompt = require("prompt-sync")({ sigint: true });

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

//suma
console.log("Suma")
let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));

console.log(`${num1} + ${num2} =  ${suma(num1, num2)}`);

//Resta
console.log("Resta")
let num3 = parseInt(prompt("Ingrese el primer numero: "));
let num4 = parseInt(prompt("Ingrese el segundo numero: "));

console.log(`${num3} + ${num4} =  ${resta(num3, num4)}`);

//Multiplicacion
console.log("Multiplicacion")
let num5 = parseInt(prompt("Ingrese el primer numero: "));
let num6 = parseInt(prompt("Ingrese el segundo numero: "));

console.log(`${num5} + ${num6} =  ${multiplicacion(num5, num6)}`);

//Division
console.log("Division")
let num7 = parseInt(prompt("Ingrese el primer numero: "));
let num8 = parseInt(prompt("Ingrese el segundo numero (no puede ser 0): "));

console.log(`${num7} + ${num8} =  ${division(num7, num8)}`);

/////////////////EXTRAS/////////////////

const cuadradoDeUnNumero = a => multiplicacion(a,a);
function promedioDeTresNumeros(a, b, c){
    let sum = a + b + c;
    return division(a + b + c, 3);
};
function calcularPorcentaje(a, b){
    return division((a * b), 100);
};
const generadorDePorcentaje = (a, b) => division((a * 100), b);

//Cuadrado de un Numero
console.log("Cuadrado de un Numero")
let n1 = parseInt(prompt("Ingrese el numero: "));

console.log(`${n1}² =  ${cuadradoDeUnNumero(n1)}`);

//Promedio de tres Numeros
console.log("Promedio de tres Numeros")
let n2 = parseInt(prompt("Ingrese el primer numero: "));
let n3 = parseInt(prompt("Ingrese el segundo numero: "));
let n4 = parseInt(prompt("Ingrese el tercer numero: "));

console.log(` El promedio de ${n2}, ${n3} y ${n4} es  =  ${promedioDeTresNumeros(n2, n3, n4)}`);

//Calcular Porcentaje
console.log("Calcular Porcentaje")
let n5 = parseInt(prompt("Ingrese el primer numero: "));
let n6 = parseInt(prompt("Ingrese el segundo numero: "));

console.log(`${n6} es el ${calcularPorcentaje(n5, n6)}% de ${n5}`);

//Generador de Procentaje
console.log("Generador de Procentaje")
let n7 = parseInt(prompt("Ingrese el primer numero: "));
let n8 = parseInt(prompt("Ingrese el segundo numero: "));

console.log(`${n7} es el ${generadorDePorcentaje(n7, n8)}% de ${n8}`);

