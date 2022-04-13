const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

/**Obtener en un nuevo array las edades menores a 18. */
function menores18(array){
    let menores = [];
    for(i = 0; i < array.length; i++){
        if(array[i] < 18){
            menores.push(array[i]);
        }
    }
    return menores;
}

/**Obtener en un nuevo array las edades mayor o igual a 18. */
function mayorOIgual18(array){
    let mayores = [];
    for(i = 0; i < array.length; i++){
        if(array[i] >= 18){
            mayores.push(array[i]);
        }
    }
    return mayores;
}

/**Obtener en un nuevo array las edades igual a 18. */
function igual18(array){
    let iguales = [];
    for(i = 0; i < array.length; i++){
        if(array[i] == 18){
            iguales.push(array[i]);
        }
    }
    return iguales;
}

/**Obtener el menor. */
function menor(array){
    let numMenor = array[0];
    for(i = 0; i < array.length; i++){
        if(array[i] < numMenor){
            numMenor = array[i];
        }
    }
    return numMenor;
}

/**Obtener el mayor.  */
function mayor(array){
    let numMayor = array[array.length -1];
    for(i = 0; i < array.length; i++){
        if(array[i] > numMayor){
            numMayor = array[i];
        }
    }
    return numMayor;
}

/**Obtener el promedio de edades. */
function promedio(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}

/*Incrementar en 1 todas las edades.*/
function incrementar1(array){
    for(i = 0; i < array.length; i++){
       array[i]++;
    }
    return array;
}

/*console.log(menores18(edades));
console.log(mayorOIgual18(edades));
console.log(igual18(edades));
console.log(menor(edades));
console.log(mayor(edades));
console.log(promedio(edades));
console.log(incrementar1(edades));*/

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

/*Obtener un nuevo array de cuentas cuyas edades sean menores a 30.*/
function menor30(array){
    let menoresDe30 = [];
    for(i = 0; i < array.length; i++){
        if(array[i].edadTitular < 30){
            menoresDe30.push(array[i]);
        }
    }
    return menoresDe30;
}
/**Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30. */
function mayorOIgual30(array){
    let mayores30 = [];
    for(i = 0; i < array.length; i++){
        if(array[i].edadTitular >= 30){
            mayores30.push(array[i]);
        }
    }
    return mayores30;
}

/**Obtener un nuevo array de cuentas cuyas edades sean igual a 30. */
function igual30(array){
    let iguales30 = [];
    for(i = 0; i < array.length; i++){
        if(array[i].edadTitular == 30){
            iguales30.push(array[i]);
        }
    }
    return iguales30;
}

/**Obtener la cuenta con el titular de la misma más joven. */
function masJoven(array){
    let joven = array[0];
    for(i = 0; i < array.length; i++){
        if(array[i].edadTitular < joven.edadTitular){
            joven = array[i];
        }
    }
    return joven;
}

/**Obtener un nuevo array por cada tipo de cuenta. */
function tipoDeCuenta(array){
    let corriente = [];
    let sueldo = [];
    for(i = 0; i < array.length; i++){
        if(array[i].tipoCuenta == "corriente"){
            corriente.push(array[i]);
        }else{
            sueldo.push(array[i]);
        }
    }
    console.log("Cuentas Corrientes:");
    console.log(corriente);
    console.log("Cuentas Sueldo:");
    console.log(sueldo);
}

/**Obtener un nuevo array con las cuentas habilitadas. */
function habilitadas(array){
    let habi = [];
    for(i = 0; i < array.length; i++){
        if(array[i].estaHabilitada == true){
            habi.push(array[i]);
        }
    }
    return habi;
}

/**Obtener un nuevo array con las cuentas deshabilitadas. */
function deshabilitadas(array){
    let deshabi = [];
    for(i = 0; i < array.length; i++){
        if(array[i].estaHabilitada == false){
            deshabi.push(array[i]);
        }
    }
    return deshabi;
}

/**Obtener la cuenta con el mayor saldo. */
function mayorSaldo(array){
    let dinero = array[0];
    for(i = 0; i < array.length; i++){
        if(array[i].saldo > dinero.saldo){
            dinero = array[i];
        }
    }
    return dinero;
}

/**Obtener la cuenta con el menor saldo. */
function menorSaldo(array){
    let dinero = array[0];
    for(i = 0; i < array.length; i++){
        if(array[i].saldo < dinero.saldo){
            dinero = array[i];
        }
    }
    return dinero;
}

console.log(menor30(arrayCuentas));
console.log(mayorOIgual30(arrayCuentas));
console.log(igual30(arrayCuentas));
console.log(masJoven(arrayCuentas));
tipoDeCuenta(arrayCuentas);
console.log(habilitadas(arrayCuentas));
console.log(deshabilitadas(arrayCuentas));
console.log(mayorSaldo(arrayCuentas));
console.log(menorSaldo(arrayCuentas));