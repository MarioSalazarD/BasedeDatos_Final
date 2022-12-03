import Detalle_Usuario from '../models/Detalle_Usuario.js'
import Usuario from '../models/Usuario.js';

const create = async (Detalle_Usuario) => {

    try {
        const newDetalle_Usuario = await Detalle_Usuario.create(Detalle_Usuario);
            
        return newDetalle_Usuario;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAllWithUsuario = async() => {

    try {
        return await Detalle_Usuario.findAll( {include: Usuario });
    } catch(error) {
        console.error(error)
        return null
    }

}


const findAll = async() => {

    try {
        return await Detalle_Usuario.findAll( {include: Usuario });
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Detalle_Usuario.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(detalle_usuario) => {
    try {
        const founddetalle_usuario = await Detalle_Usuario.findOne({
            where: {
                id: detalle_usuario.id
            }
        })

        founddetalle_usuario.set(detalle_usuario);

        await founddetalle_usuario.save();

        return founddetalle_usuario;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Detalle_Usuario.destroy({
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
const Detalles_UsuariosRepository = { create, findAll, findOne, update, remove, findAllWithUsuario}

export default Detalles_UsuariosRepository