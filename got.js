class Vino{
    constructor(id, nombre, tipo, precio, imagen){
        this.id = id
        this.nombre = nombre,
        this.tipo = tipo,
        this.precio = precio
        this.imagen = imagen
    }
    mostrarData(){
        console.log(`el vino se llama ${this.nombre}, su aroma es ${this.tipo}, y el precio esta ${this.precio} `)
    }
}

const Vino1 = new Vino(1 , "Siempre tengo un plan B" , "Malbec"  , 780 , "Stupb.png" )
const Vino2 = new Vino(2 , "Privado" , "Malbec" , 1250 , "privado-malbec.png" )
const Vino3 = new Vino(3, "Pokhara" , "Blanco" , 900 , "polkhara.png")
const Vino4 = new Vino(4 , "Mil Vientos" , "Malbec" , 800 , "milvientos.png")
const Vino5 = new Vino(5 , "Tucumen"  ,  "Malbec" , 980 , "TucumenJoven-malbec.png")
const Vino6 = new Vino(6 , "Estancia Mendoza" , "Chardonnay" , 1500 , "EstanciaMendoza-chardonnay.jpeg" )

const stock = []
stock.push(Vino1, Vino2, Vino3, Vino4, Vino5, Vino6)

let divProductos = document.getElementById("productos")
stock.forEach((vino)=>{
  let nuevoProducto = document.createElement("div")
nuevoProducto.innerHTML = `<div id="${vino.id}"class="card" style="width: 18rem;">
<img src="../img/${vino.imagen}" class="card-img-top img-fluid" alt="...">
<div class="card-body">
  <h5 class="card-title">${vino.nombre}</h5>
 
  <p class="tipo">${vino.tipo}.</p>
  <p class="precio"> ${vino.precio} </p>
  <a href="#" id="carrito"  class="btn btn-primary carrito">Agregar al carrito</a>
</div>
</div>`
divProductos.append(nuevoProducto)
})

let carrito = document.getElementById("carrito")
carrito.addEventListener("click", ()=>{
  agregarAlCarrito
})

function agregarAlCarrito(){
  let bebidaAgregada = productosEnCarrito.find((elem)=>(elem.id == bebida.id))
  if(bebidaAgregada == undefined){ 
    productosEnCarrito.push(bebida)
}else{


}
}












