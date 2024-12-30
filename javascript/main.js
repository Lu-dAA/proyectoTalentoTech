
const infoProductos = [
  {
    imag: "imagenes/rueda.png",
    tit: "ruedA",
    descrip: "Apreciala que se esta yendo",
    pre: "$27",
  },
  {
    imag: "imagenes/llave.png",
    tit: "la LLave de mi CASA",
    descrip: "NO, PARÁ NO USES TU IMPRESORA 3D",
    pre: "$1,67",
  },
  {
    imag: "imagenes/perrito.png",
    tit: "mi PErro",
    descrip: "es mi perrito",
    pre: "$999",
  },
  {
    imag: "imagenes/yo.png",
    tit: "yo",
    descrip: "Soy yo, me queres?",
    pre: "$1111",
  },
  {
    imag: "imagenes/manzana.png",
    tit: "Manzana",
    descrip: "dame 3 litros",
    pre: "$3",
  },
  {
    imag: "imagenes/Roberta.png",
    tit: "Pautau",
    descrip: "en realidad el de arriba no es mi perro",
    pre: "$2,3323,4",
  },
];

function mostrarProductos() {
  const contenedorProductos = document.getElementById('prod-cont');
  contenedorProductos.innerHTML = '';

  infoProductos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('col');

    productoDiv.innerHTML = `
      <div class="col">
        <div class="card" id="card1">
          <img src="${producto.imag}" class="card-img-top" alt="${producto.tit}">
          <div class="card-body">
            <h5 class="card-title">${producto.tit}</h5>
            <p class="card-text">${producto.descrip}</p><br><b>$${producto.pre}</b>
            <button class="botones2">conprame dale</button>
          </div>
        </div>
      </div>
    `;

    contenedorProductos.appendChild(productoDiv);
    const botonAgregar = productoDiv.querySelector("button");

    botonAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });
  });
}

document.addEventListener('DOMContentLoaded', mostrarProductos);

function agregarAlCarrito(producto){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(producto);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${producto.tit} te lo llevas a tu casa que no lo aguanto masss`);
}

