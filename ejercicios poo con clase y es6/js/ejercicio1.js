class Auto {
    constructor(color, marca, modelo, anio) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        
    }

    apagar() {
        this.encendido = false;
    }
}

var autos = [];
var i = 0;
nuevoauto = () => {
    i = i + 1;
    let color = document.getElementById("color").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let anio = document.getElementById("anio").value;
    autos[i] = new Auto(color, marca, modelo, anio);
    console.log(autos[i]);
    
}

encendido = () =>{
    autos[i].encendido;
    console.log(`Encendido: ${autos[i].encendido}`);
}

apagado = () =>{
    autos[i].apagado;
    console.log(`Encendido: ${autos[i].encendido}`);
}