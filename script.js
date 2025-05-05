function init(){
    var card = document.getElementById("card1")
    card = card.innerHTML=`
    <div id="producto">
        <h1>lista de productos...</h1>
        <h2 id="nombre"> Productos B: </h2>
        <input type="number" id="num">
        <button type="button" class="btn-warning boton" onclick="agregarCarrito()" >Agregar</button>
    </div>
    `
}

function agregarCarrito(){
    var carrito = document.getElementById("carrito")
    var cantidad = document.getElementById("num").value
    var nombre = document.getElementById("nombre")
    carrito = carrito.innerHTML=`<h1>${cantidad}${nombre}</h1>`
}