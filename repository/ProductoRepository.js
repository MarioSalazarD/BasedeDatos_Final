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

const findAll = async() => {

    try {
        return await Producto.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Producto.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(Producto) => {
    try {
        const foundProducto = await Producto.findOne({
            where: {
                id: Producto.id
            }
        })

        foundProducto.set(Producto);

        await foundProducto.save();

        return foundProducto;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Producto.destroy({
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

const ProductosRepository = { create, findAll, findOne, update, remove }

export default ProductosRepository