import Detalle_Usuario from '../models/Detalle_Usuario.js'

const create = async (Detalle_Usuario) => {

    try {
        const newDetalle_Usuario = await Detalle_Usuario.create(Detalle_Usuario);
            
        return newDetalle_Usuario;

    } catch(error) {
        console.error(error)

        return null;
    }

}
const Detalles_UsuariosRepository = { create, findAll, findOne, update, remove }

export default Detalles_UsuariosRepository