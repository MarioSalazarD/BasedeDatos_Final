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
const Pre_ArmadosRepository = { create, findAll, findOne, update, remove }

export default Pre_ArmadosRepository