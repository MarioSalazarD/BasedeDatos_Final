import Tipo_Reseña from '../models/Tipo_Reseña.js'

const create = async (Tipo_Reseña) => {

    try {
        const newTipo_Reseña = await Tipo_Reseña.create(Tipo_Reseña);
            
        return newTipo_Reseña;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Tipo_Reseña.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Tipo_Reseña.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(Tipo_Reseña) => {
    try {
        const foundReseña = await Tipo_Reseña.findOne({
            where: {
                id: Tipo_Reseña.id
            }
        })

        foundReseña.set(Tipo_Reseña);

        await foundReseña.save();

        return foundReseña;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Tipo_Reseña.destroy({
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

const Tipos_ReseñasRepository = { create, findAll, findOne, update, remove }

export default Tipos_ReseñasRepository