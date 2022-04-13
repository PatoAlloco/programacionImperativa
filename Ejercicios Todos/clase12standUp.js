const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso = {
    etapa1: "",
    etapa2: "",
    etapa3: "",
    ganador: "",
    encontrarGanador: function (a,b){
        let puntosA = 0;
        let puntosB = 0;
        let cuentaEtapas = 0;
        for(i = 0; i < a.length; i++){
            if(cuentaEtapas == 0){
                if(a[i] > b[i]){
                    puntosA++
                    this.etapa1 = "Ganador etapa 1 participante A";
                    this.cuentaEtapas++
                }else{
                    puntosB++
                    this.etapa1 = "Ganador etapa 1 participante B";
                    this.cuentaEtapas++
                }
            }else if(cuentaEtapas == 1){
                if(a[i] > b[i]){
                    puntosA++
                    this.etapa2 = "Ganador etapa 2 participante A";
                    this.cuentaEtapas++
                }else{
                    puntosB++
                    this.etapa2 = "Ganador etapa 2 participante B";
                    this.cuentaEtapas++
                }
            }else{
                if(a[i] > b[i]){
                    puntosA++
                    this.etapa3 = "Ganador etapa 3 participante A";
                    this.cuentaEtapas++
                }else{
                    puntosB++
                    this.etapa3 = "Ganador etapa 3 participante B";
                    this.cuentaEtapas++
                }
            }
            this.ganador = puntosA > puntosB? "Participante A":"Participante B";            
        }    
    },
    exportarResultados: function(){
        return JSON.stringify(this.etapa1, this.etapa2, this.etapa3);
    }    
}

console.log(concurso.encontrarGanador(alicia, bob));
console.log(concurso.ganador);
console.log(concurso.etapa1);
console.log(concurso.etapa2);
console.log(concurso.etapa3);


/**Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
siguientes criterios:
● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
mostrar el string “Digital” en lugar del número.
● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
mostrar el string “House” en su lugar del número.
● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
“Digital House” en lugar del número. */
function digitalHouse(n1, n2){
    for(i = 1; i <= 100; i++){
        if(i % n1 == 0 && i % n2 == 0){
            console.log("Digital House");
        }else if(i % n1 == 0){
            console.log("Digital");
        }else if(i % n2 == 0){
            console.log("House");
        }else{
            console.log(i);
        }
    }
}
digitalHouse(5,2);
