///////////Ejercicio 1/////////
let estudiante = {
    nombre: "Juan",
    apellido: "Perez",
    camada: 1,
    esParcial: true
}
console.log(estudiante);

function aprobarMateria(nota){
    let condicion = "";
    if(nota < 4){
        condicion = "DESAPROBADO";
    }else if(nota >= 4 && nota < 7){
        condicion = "FINAL";
    }else{
        condicion = "PROMOCIONADO"
    }
    return condicion;
}
let nota = 8;
console.log(`El alumno obtuvo una nota igual a ${nota} por lo tanto su condición es ${aprobarMateria(nota)}`);


/////////Ejercicio 2//////////////
let clase = [];

let compa1 = {
    nombre: "Esteban",
    apellido: "Piazza",
    bimestre: 1
}
let compa2 = {
    nombre: "Leandro",
    apellido: "Borelli",
    bimestre: 1
}
let compa3 = {
    nombre: "Martin",
    apellido: "Cejas",
    bimestre: 1
}

clase.push(compa1, compa2, compa3);
console.log(clase);

function siguienteCursada(array){
    for(let i = 0; i < array.length; i++){
        array[i].bimestre++
    }
}
siguienteCursada(clase);
console.log(clase);


///////////Ejercicio 3/////////////////
const asistenciaMinima = 23;

function materiaAprobada(asistencias, progreso){
    let condicion = "";
    if(asistencias >= asistenciaMinima && progreso == true){
        condicion = "APROBADO";
    }else{
        condicion = "DESAPROBADO";
    }
    return condicion;
}
console.log("El alumno esta: " + materiaAprobada(24, true));