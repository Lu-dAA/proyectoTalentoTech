/*document.addEventListener("DOMContentLoaded", () => 
    {
    const productos = document.getElementById("productos");
    const cards = ['rueda', 'llave', 'perro', "yo", 'manzana', 'pautau'];
    
    for (let i=0; i < cards; i++){
    
    }
    console.log("productos disponibles:", cards);
    });
document.addEventListener("DOMContentLoaded",()=>
{
var prodCont=document.querySelector("#prod-cont");

fetch("https://dummyjson.com/products?limit=6")
.then(Response=>Response.json())
.then((data)=>{
  var producto = data.products;

  prodCont.innerHTML = "";
  producto.forEach((product) => 
    {
    
  })
})

});*/
async function obtenerProductos() {
  try {
      // Realizar una petición GET a la API
      const response = await fetch('https://dummyjson.com/products?limit=6');
      const data = await response.json();

      // Acceder al array de productos
      const productos = data.products;
      console.log(productos); // Para ver en la consola los productos

      // Seleccionamos el contenedor donde se mostrarán los productos
      const contenedorProductos = document.getElementById('prod-cont');
      
      // Limpiamos el contenedor antes de agregar los nuevos productos
      contenedorProductos.innerHTML = '';

      // Recorremos los productos y los agregamos al contenedor
      productos.forEach(producto => {
          // Crear un nuevo div para cada producto
          const productoDiv = document.createElement('div');
          productoDiv.classList.add('col');  // Añadir clases de Bootstrap para diseño

          // Crear el contenido del producto
          productoDiv.innerHTML = `
              <div class="col">
                <div class="card" id="card1">
                  <img src="imagenes/rueda.png" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">ruedA</h5>
                    <p class="card-text">Apreciala que se esta yendo</p><br><b>27$</b>
                    <button class="botones2">conprame dale</button>
                  </div>
                </div>
              </div>
          `
          ;
          
          // Agregar el nuevo producto al contenedor
          contenedorProductos.appendChild(productoDiv);
          const botonAgregar = productoDiv.querySelector("button");

          botonAgregar.addEventListener("click", () =>
          {
              agregarAlCarrito(producto);

          })

});
  } catch (error) {
      console.error('Error al obtener los productos:', error);
  }
}

// Llamamos a la función para obtener y mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', obtenerProductos);

function agregarAlCarrito(producto){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(producto);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${producto.title} te lo llevas a tu casa que no lo aguanto masss`)
}



