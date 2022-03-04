const prompt = require("prompt-sync")({ sigint: true });

let edad = -19;

    
function entradaBar(anios){
    if(anios < 0){
        console.log("Error, edad inválida. Por favor ingrese un número válido.");
        edad = 2;
    } else if (anios < 18 ){
        console.log("No puede pasar al bar");
    } else if(anios < 21){
        console.log("Puede pasar al bar pero no puede tomar alcohol");
    }else if(edad == 21){
        console.log("Felicitaciones! Erer mayor de edad! Puede pasar y tomar alcohol");
    } else {
        console.log("Puedes pasar al bar y tomar alcohol");
    }
}

function impar(anios){
    if(anios % 2 != 0){
        console.log("¿Sabías que tu edad es impar?");
    }
}
entradaBar(edad);
impar(edad);

///////////////////////////

function totalAPagar(auto, litros){
    let precioLitro;
    switch(auto){
        case "coche":
            precioLitro = 86;
            break;
        case "moto":
            precioLitro = 70;
            break;
        case "autobus":
            precioLitro = 55;
            break;
        default:
            console.log("Introduzca un vehiculo valido");;
            break;    
    }
    if(litros >= 0 && litros <= 25){
        console.log("Total a pagar: " + (litros * precioLitro + 50));
    } else {
        console.log("Total a pagar: " + (litros * precioLitro + 25));
    }
}

totalAPagar("moto", 100)

/////////////////////////////////// sandwich

function costoSandwich(tipo, pan, ques, tom, lechu, ceb, mayo, mosta ){
    base = 0;
    switch(tipo){
        case "pollo":
            base = 150;
            break;
        case "carne":
            base = 200;
            break;
        case "beggie":
            base = 100;
            break;
        default:
            console.log("Tipo de sandwich incorreco");              
    }
    switch(pan){
        case "blanco":
            base = base + 50;
            break;
        case "negro":
            base = base + 60;
            break;
        case "s/gluten":
            base = base + 75;
            break;
        default:
            console.log("Tipo de pan incorreco");              
    }

    console.log("Precio: " + (base + (ques? 20:0) + (tom? 15:0) + (lechu? 10:0) 
    + (ceb? 15:0) + (mayo? 5:0) + (mosta? 5:0)));
}

costoSandwich("pollo", "blanco", true, false, false, false,false, true)

//////////////////////////numero secreto

function numSecreto(num){
    let numSec = Math.floor((Math.random()*9)+1);
    if(num == numSec){
        console.log("Felicitaciones! El numero era el: " + numSec);
    } else{
        console.log("Perdiste! el numero era el: " + numSec);
    }
}

numSecreto(5)


/////////////////paracaidas

function abrirParacaidas(velocidad, altura){
    if(velocidad < 1000 && (altura >= 1000 && altura <= 3000)){
        console.log("Abrir Paracaidas");
    }
}
abrirParacaidas(400, 5000)

////////////////traductor

//Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
//"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
//inglés.
//En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
//informe que la palabra ingresada es incorrecta.

let palabra = prompt("Ingrese una palabra: casa, perro, pelota, arbol, genio> ");

switch(palabra){
    case "casa":
        console.log(palabra + " ---> huose");
        break;
    case "perro":
        console.log(palabra + " ---> dog");
        break;
    case "pelota":
        console.log(palabra + " ---> ball");
        break;
    case "arbol":
        console.log(palabra + " ---> tree");
        break;
    case "genio":
        console.log(palabra + " ---> genius");
        break; 
    default:
        console.log("Palabra incorrecta");       
}

