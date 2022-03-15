
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let banco = {
    cliente: arrayCuentas,
    consultarCliente: function(nombre){       
        for(let i = 0; i <= this.cliente.length; i++){
            if(this.cliente[i].titularCuenta == nombre){
                console.log(this.cliente[i]);
                return this.cliente[i];
            } 
        }
    
        console.log("Cliente no encontrado");
        return false;
    }, 
    deposito: function(nombre, dinero){
        for(let i = 0; i <= this.cliente.length; i++){
            if(this.cliente[i].titularCuenta == nombre){
                console.log("Saldo: " + this.cliente[i].saldoEnPesos);
                this.cliente[i].saldoEnPesos += dinero;
                console.log("Saldo acualizado: " + this.cliente[i].saldoEnPesos);
            } 
        }        
    },
    extraccion: function(nombre, dinero){
        for(let i = 0; i <= this.cliente.length; i++){
            if(this.cliente[i].titularCuenta == nombre){
                console.log("Saldo: " + this.cliente[i].saldoEnPesos);
                if(this.cliente[i].saldoEnPesos < dinero){
                    console.log("Saldo Insuficiente");
                }else{
                    this.cliente[i].saldoEnPesos -= dinero;
                console.log("Saldo acualizado: " + this.cliente[i].saldoEnPesos);
                }               
            } 
        }   
    }
};

banco.consultarCliente("Jacki Shurmer");
banco.deposito("Jacki Shurmer", 2000);
//banco.extraccion("Jacki Shurmer", 20000);
