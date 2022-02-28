const prompt = require("prompt-sync")({ sigint: true });

//proueba Math.ramdom
console.log(Math.random());

//funcion saludar

function saludar(nom){
    console.log("Hola " + nom +  " como estas?");
}
let nombre = "Pato";
saludar(nombre);

//funcion saludar con prompt
function saludarP(){
    let nom = prompt("Escriba su nombre: ");
    console.log("Hola " + nom +  " como estas?");
    console.log(`Hola ${nom} como andas?`);
}
saludarP();

//pasar pulgadas a cm
const pulgadasACm = pulgadas => pulgadas * 2.54;
let pul = prompt("Ingrese la cantidad de pulgadas: ");
console.log("Su pantalla mide: " + pulgadasACm(pul) + " centimetros");

//completar el dominio
const dominio = nomPagina =>  `http://${nomPagina}.com.ar`;
let pagina = prompt("Ingrese el nombre de su pagina: ");
console.log(dominio(pagina));

//frase con exclamacion
const agregaExclamacion = frase => `${frase}!!!`;
let frase1 = prompt("Ingrese una frase: ");
console.log(agregaExclamacion(frase1));

//edad de un perro
const edadDePerro = edadPerro => edadPerro * 7;
console.log(edadDePerro(prompt("Ingrese la edad de su perro: ")));

//sueldo por hora
const sueldoPorHora = sal => sal / 40;
let sueldo = prompt("Ingrese su sueldo: ");
console.log("Sueldo por hora semanal es de " + sueldoPorHora(sueldo));

//indice de masa corporal
const calcIMC = (peso, altura) => peso / altura ^2;
let peso = prompt("Ingrese su peso en Kg: ");
let altura = prompt("Ingrese su altura en M: ");
console.log("Su indice de masa corporal es: " + calcIMC(peso, altura)); 

//pasar texto a Mayuscula
function aMayuscula(texto){
    return texto.toUpperCase();
}
console.log( aMayuscula(prompt("Ingrese una frase: ")));

//pasar a Minuscula
const aMinuscula = t => t.toLowerCase();
console.log( aMinuscula(prompt("Ingrese una frase: ")));

//tipo de dato
const tipoDeDato = dato => typeof(dato);
console.log(tipoDeDato(prompt("Ingrese un dato cualquiera: ")));







