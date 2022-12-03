import Reseña from '../models/Reseña.js'

const create = async (Reseña) => {

    try {
        const newReseña = await Reseña.create(Reseña);
            
        return newReseña;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Reseña.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Reseña.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(Reseña) => {
    try {
        const foundReseña = await Reseña.findOne({
            where: {
                id: Reseña.id
            }
        })

        foundReseña.set(Reseña);

        await foundReseña.save();

        return foundReseña;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Reseña.destroy({
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

const ReseñasRepository = { create, findAll, findOne, update, remove }

export default ReseñasRepository