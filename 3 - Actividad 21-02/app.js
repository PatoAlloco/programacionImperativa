const prompt = require("prompt-sync")({ sigint: true });


let nombre = prompt("Ingrese su Nombre: ");
console.log(`Hola ${nombre}!!!`);

let temp = 20;
let llueve = false;
let piAscensor = 3;
let hora = Number;
let horApertura = prompt("Ingrese la hora de apertura: ");
let horaCierre = prompt("Ingrese la hora de cierre: ");
let cantQueso = 100;
let deuda = Number;

console.log("Temperatura: " + temp, "Esta LLoviendo: " +
 llueve, "Hora apertura: " + horApertura );

let cajonRemeras = "pantalones";
let cajonPantalones = "remeras";
let ayuda;

ayuda = cajonPantalones;
cajonPantalones = cajonRemeras;
cajonRemeras = ayuda;

function tengoClases(dia) {
	switch (dia) {
    	case "lunes":
		case "miércoles":
		case "viernes":
			console.log("tenés clases");
			break;
			
		default:
			console.log("no tenés clases");
			break;	
	}
}
tengoClases("jueves");

