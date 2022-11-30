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
const CategoriasRepository = { create, findAll, findOne, update, remove }

export default CategoriasRepository
