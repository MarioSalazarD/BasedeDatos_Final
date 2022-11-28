import Producto from '../models/Producto.js'

const create = async (Producto) => {

    try {
        const newProducto = await Producto.create(Producto);
            
        return newProducto;

    } catch(error) {
        console.error(error)

        return null;
    }

}