class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    set setIngresar(dinero) {
        this.saldo = this.saldo + dinero;
        console.log(`saldo:${this.saldo}`);
    }

    set setExtraer(cant) {
        this.saldo = this.saldo - cant;
        console.log(`saldo resultante ${this.saldo}`);
    }

    get getInformar() {
        console.log(`estado de la cuenta: ${this.saldo}`);
    }

}

var clientes = [];
var i = 0;

nuevaCuenta = () => {
    i = i + 1;
    let nombre = document.getElementById("titular").value;
    let saldos = document.getElementById("saldo").value;
    clientes[i] = new Cuenta(nombre, saldos)
    console.log(clientes[i]);
}

ingreso = () =>{
    let money = document.getElementById("ingresar").value;
    clientes[i].setIngresar=money;
    console.log(clientes[i].saldo);
}


extraigo = () =>{
    let guita = document.getElementById("extraer").value;
    clientes[i].setExtraer=guita;
    console.log(clientes[i].saldo);
}

informo = () =>{
     clientes[i].getInformar;
    
}