/**Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”
 * 
 **/

function loopDePares(num){
    for(i = 0; i <= 100; i++){
        if( (i + num) % 2 == 0){
            console.log(`El numer ${i + num} es par`);
        }else{
            console.log(i + num);
        }
    }
} 

/** Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.  */
function loopDeIpares(num, palabra){
    for(i = 0; i <= 100; i++){
        if( (i + num) % 2 != 0){
            console.log(palabra);
        }else{
            console.log(i + num);
        }
    }
} 

/**Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3) */
function sumatoria(num){
    let sum = 0;
    for(i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}

/**Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */
function nuevoArreglo(num){
    let arre = [];
    for(i = 1; i <= num; i++){
        arre.push(i);
    }
    return arre;
}

/**Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */
function splitsss(palabra){
    let array = [];
    for(i = 0; i < palabra.length; i++){
        array.push(palabra[i]);
    }
    return array;
}

/**Deberás crear una función llamada caracterDelMedio que reciba un string por parámetro y devuelva sus caracteres del medio. Ejemplo:
caracterDelMedio(“Digital House”) debe retornar “l”
caracterDelMedio(“hola”) debe retornar “ol”
caracterDelMedio(“cosas”) debe retornar “s” */
function caracterDelMedio(palabra){
    let mitad = palabra.length /2;
    let medio;
    if(mitad % 2 == 0){
        medio = palabra[mitad] + palabra[mitad + 1];
    }else{
        medio = palabra[Math.trunc(mitad)];
    }
    return medio;
}

/**Deberás crear una función llamada moverCeros que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final. Ejemplo:
moverCeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moverCeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] */
function moverCeros(array){
    for(i = 0; i < array.length; i++){
        if(array[i] === 0){
            array.push(array[i]);
            array.splice(i, 1); 
        }
    }
    return array;
}

/**Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a */
function arrayHandler(a1, a2){
    for(i = 0; i < a1.length; i++){
        console.log(`Soy ${a1[i]} y yo soy ${a2[i]}`);  
    }
}

/**Deberás crear una función que convierta de snake_case o kebab-case a camelCase. La primera letra del resultado debe estar en mayúsculas solo si en el string original estaba en mayúscula. Ejemplo:
“el-guerrero-silencioso” debería convertirse en “elGuerreroSilencioso”
“El_guerrero_silencioso” debería convertirse en “ElGuerreroSilencioso” */
function camelCase(palabra){
    let cam;
    for(i = 0; i < palabra.length; i++){
        if(palabra[i] === "_" || palabra[i] === "-"){
            palabra.splice(i,1);
            cam = cam + palabra[i + 1].toUpperCase();
        }else{
            cam = cam + palabra[i];
        }
    }
    return cam;
}

function aCamelCase(sting) {
    sting = sting.split('');
    console.log(sting);
    for (let i = 0; i < sting.length; i++) {
        let mayuscula = ''
        if (sting[i] === '_' || sting[i] === '-') {
            sting.splice(i, 1);
            mayuscula = sting[i].toUpperCase();
            sting.splice(i, 0, mayuscula);
            sting.splice(i + 1, 1);
        }
    }
    return sting.join('');
}

/**Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
palindromo(“anilina”) debe retornar true
palindromo(“Ana”) debe retornar true
palindromo(“Enrique”) debe retornar false */
function palindromo(palabra){
    for(i = 0; i < palabra.length; i++){
        if(palabra[i] != palabra[(palabra.length - 1)  - i]){
            return false
        }
    }
    return true;
}


//loopDePares(6);
//loopDeIpares(5, "hola");
console.log(sumatoria(100));
console.log(nuevoArreglo(5));
//console.log("hola como va".split(" "));
console.log(splitsss("hola como va"));
console.log(caracterDelMedio("cosa"));
console.log(moverCeros([1,2,0,1,0,1,0,3,0,1]));
arrayHandler([1,2,3,4], ["h","o","l","a"]);
console.log(aCamelCase("El_guerrero_silencioso"));
console.log(palindromo("anillmina"));