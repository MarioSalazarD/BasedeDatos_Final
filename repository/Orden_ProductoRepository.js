import Orden_Producto from '../models/Orden_Producto.js'
import Producto from '../models/Producto.js';

const create = async (Orden_Producto) => {

    try {
        const newOrden_Producto = await Orden_Producto.create(Orden_Producto);
            
        return newOrden_Producto;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAllWithProducto = async() => {

    try {
        return await Orden_Producto.findAll( {include: Producto });
    } catch(error) {
        console.error(error)
        return null
    }

}


const findAll = async() => {

    try {
        return await Orden_Producto.findAll( {include: Producto });
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Orden_Producto.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(orden_producto) => {
    try {
        const foundusuario = await Orden_Producto.findOne({
            where: {
                id: orden_producto.id
            }
        })

        foundusuario.set(orden_producto);

        await foundusuario.save();

        return foundusuario;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Orden_Producto.destroy({
            where: {
                id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const Ordenes_ProductosRepository = { create, findAll, findOne, update, remove, findAllWithProducto}

export default Ordenes_ProductosRepository