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
const findAll = async() => {

    try {
        return await Detalle_Usuario.findAll();
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
        const foundusuario = await Detalle_Usuario.findOne({
            where: {
                id: detalle_usuario.id
            }
        })

        foundusuario.set(detalle_usuario);

        await foundusuario.save();

        return foundusuario;

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
const Detalles_UsuariosRepository = { create, findAll, findOne, update, remove }

export default Detalles_UsuariosRepository