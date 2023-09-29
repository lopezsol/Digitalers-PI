import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import './css/custom.css'
import './css/style.css'
import { comprarProducto } from './src/carrito'


const productos = document.querySelector("#lista-productos")
cargarEventos()


function cargarEventos() {
    productos.addEventListener('click', (e) => comprarProducto(e))
}