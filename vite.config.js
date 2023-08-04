import {resolve} from 'node:path'

export default {
  css: {
    devSourcemap: true,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        carrito: resolve('pages/carrito.html'),
        contacto: resolve('pages/contacto.html'),
        nosotros: resolve('pages/nosotros.html'),
        inicio: resolve('index.html')
        
      }
    }
     
  }
};
