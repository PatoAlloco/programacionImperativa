function dobleTripleRaiz(num){
    console.log("Doble: " + num * 2);
    console.log("Triple: " + num * 3);
    console.log("Raiz: " + Math.sqrt(num));
}
dobleTripleRaiz(9);

function eureka(palabra){
    if(palabra === "eureka"){
        console.log('correcto');
    }else{
        console.log('incorrecto');
    }
}
eureka('eureka');

function escalera(num){
    for (let i = 1; i <= num; i++) {
        let ayuda = "";
        for (let j = 1; j <= i; j++) {
            ayuda+=j            
        }
        console.log(ayuda);
    }
}
escalera(4);

function cuadradoAsteriscos(num){
    for (let i = 0; i < num; i++) {
        let ayuda = "";
        for (let j = 0; j < num; j++) {
            if(i == 0 || i == num -1){
                ayuda+= "*"
            }else if(j == 0 || j == num -1){
                ayuda+= "*"
            }else{
                ayuda+= " "
            }            
        }
        console.log(ayuda);
    }
}
cuadradoAsteriscos(7);

function sumaDiagonales(array){
    let sumDiagonalA = 0;
    let sumDiagonalB = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(i == j){
                sumDiagonalA+= array[i][j];
            }
            if(i === array[j].length - 1 - i){
                sumDiagonalB+= array[i][j]; 
            }
        }        
    }
    console.log("Diagonal A: " + sumDiagonalA);
    console.log("Diagonal B: " + sumDiagonalB);
    return sumDiagonalA + sumDiagonalB;

}
console.log("Suma de las Diagonales: ");
console.log(sumaDiagonales(matriz));