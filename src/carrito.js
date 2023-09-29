const listaProductos = document.querySelector("#lista-carrito tbody");
//Añadir un producto al carrito
export function comprarProducto(e) {
  e.preventDefault(); //detener el comportamiento por defecto
  //delegar para agregar al carrito
  /* console.dir(e.target) */

  if (e.target.classList.contains("agregar-carrito")) {
    const producto = e.target.parentElement.parentElement; //accede al padre, del padre del elemento

    console.log(producto);
    leerDatosProducto(producto);
  }
}

function leerDatosProducto(producto) {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector("h5").textContent,
    precio: producto.querySelector(".precio").textContent,
    id: producto.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  //console.log(infoProducto)
  let productosLS;
  productosLS = obtenerProductosLS();

  productosLS.forEach(function (productoLS) {
    if (productoLS.id === infoProducto.id) {
      productosLS = productoLS.id;
    }
  });

  if (productosLS === infoProducto.id) {
    console.warn("El producto ya esta (en el carrito) LS");
  } else {
    insertarCarrito(infoProducto);
  }
}

//Comprobar si hay elementos en el LS
function obtenerProductosLS() {
  let productosLS;
  //Comprobar si hay algo en el LS
  if (localStorage.getItem("productos") === null) {
    productosLS = [];
  } else {
    productosLS = JSON.parse(localStorage.getItem("productos"));
  }
  return productosLS;
}

function insertarCarrito(producto) {
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>
            <img src="${producto.imagen}" alt="${producto.titulo}" width="100">
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
    `;

  listaProductos.appendChild(row);
  guardarProductosLS(producto);
}

//Guardar el nuevo producto en el LS
function guardarProductosLS(producto) {
  let productos;
  //tomar valor de un arreglo con datos del LS
  productos = obtenerProductosLS()
  //agrego el producto  al carrito
  productos.push(producto)
  //agrego al LS
  localStorage.setItem("productos", JSON.stringify(productos))  
}
