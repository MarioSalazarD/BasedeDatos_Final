import Pre_Armado from '../models/Pre_Armado.js';
import Pre_Armado_Producto from '../models/Pre_Armado_Producto.js'
import Producto from '../models/Producto.js';

const create = async (Pre_Armado_Producto) => {

    try {
        const newPre_Armado_Producto = await Pre_Armado_Producto.create(Pre_Armado_Producto);
            
        return newPre_Armado_Producto;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAllWithPreArmado = async() => {

    try {
        return await Pre_Armado_Producto.findAll({include: Pre_Armado});
    } catch(error) {
        console.error(error)
        return null
    }

}

const findAllWithProducto = async() => {

    try {
        return await Pre_Armado_Producto.findAll({include: Producto});
    } catch(error) {
        console.error(error)
        return null
    }

}


const findAll = async() => {

    try {
        return await Pre_Armado_Producto.findAll({include: Pre_Armado});
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Pre_Armado_Producto.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(Pre_Armado_Producto) => {
    try {
        const foundPre_Armado_Producto = await Pre_Armado_Producto.findOne({
            where: {
                id: Pre_Armado_Producto.id
            }
        })

        foundPre_Armado_Producto.set(Pre_Armado_Producto);

        await foundPre_Armado_Producto.save();

        return foundPre_Armado_Producto;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Pre_Armado_Producto.destroy({
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


const Pre_Armados_ProductosRepository = { create, findAll, findOne, update, remove, findAllWithPreArmado, findAllWithProducto}

export default Pre_Armados_ProductosRepository