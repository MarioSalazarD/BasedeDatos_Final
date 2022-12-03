import Pre_Armado from '../models/Pre_Armado.js'

const create = async (Pre_Armado) => {

    try {
        const newPre_Armado = await Pre_Armado.create(Pre_Armado);
            
        return newPre_Armado;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Pre_Armado.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Pre_Armado.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(Pre_Armado) => {
    try {
        const foundPre_Armado = await Pre_Armado.findOne({
            where: {
                id: Pre_Armado.id
            }
        })

        foundPre_Armado.set(Pre_Armado);

        await foundPre_Armado.save();

        return foundPre_Armado;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Pre_Armado.destroy({
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

const Pre_ArmadosRepository = { create, findAll, findOne, update, remove }

export default Pre_ArmadosRepository