import Categoria from '../models/Categoria.js'

const create = async (Categoria) => {

    try {
        const newCategoria = await Categoria.create(Categoria);
            
        return newCategoria;

    } catch(error) {
        console.error(error)
        return null;
    }


}

const findAll = async() => {

    try {
        return await Categoria.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Categoria.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(Categoria) => {
    try {
        const foundcategoria = await Categoria.findOne({
            where: {
                id: Categoria.id
            }
        })

        foundcategoria.set(Categoria);

        await foundcategoria.save();

        return foundcategoria;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Categoria.destroy({
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
const CategoriasRepository = { create, findAll, findOne, update, remove }

export default CategoriasRepository
