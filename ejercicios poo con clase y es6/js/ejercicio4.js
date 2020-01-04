class Producto{
    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }

    get getDatos(){
        console.log(`codigo:${this.codigo} `);
        console.log(`nombre:${this.nombre} `);
        console.log(`precio:${this.precio} `);
    }
}

var array = [];
var i=0;

productos = () =>{
    let inputCodigo = document.getElementById("codigo").value;
    let inputNombre = document.getElementById("nombre").value;
    let inputPrecio = document.getElementById("precio").value;
    array[i]=new Producto(inputCodigo,inputNombre,inputPrecio);
    console.log(array[i]);
    array[i].getDatos;
}