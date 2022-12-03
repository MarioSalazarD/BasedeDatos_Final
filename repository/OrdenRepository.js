import Orden from '../models/Orden.js'

const create = async (Orden) => {

    try {
        const newOrden = await Orden.create(Orden);
            
        return newOrden;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Orden.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Orden.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(orden) => {
    try {
        const foundorden = await orden.findOne({
            where: {
                id: orden.id
            }
        })

        foundorden.set(orden);

        await foundorden.save();

        return foundorden;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Orden.destroy({
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

const OrdenesRepository = { create, findAll, findOne, update, remove }

export default OrdenesRepository