import Orden_Producto from '../models/Orden_Producto.js'

const create = async (Detalle_Usuario) => {

    try {
        const newOrden_Producto = await Orden_Producto.create(Orden_Producto);
            
        return newOrden_Producto;

    } catch(error) {
        console.error(error)

        return null;
    }

}