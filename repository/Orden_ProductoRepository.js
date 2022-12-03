import Orden_Producto from '../models/Orden_Producto.js'

const create = async (Orden_Producto) => {

    try {
        const newOrden_Producto = await Orden_Producto.create(Orden_Producto);
            
        return newOrden_Producto;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const Ordenes_ProductosRepository = { create, findAll, findOne, update, remove }

export default Ordenes_ProductosRepository