import Usuario from '../models/Usuario.js'
import { Op } from "sequelize";

const create = async (usuario) => {

    try {
        const newUsuario = await Usuario.create(usuario);
            
        return newUsuario;

    } catch(error) {
        console.error(error)

        return null;
    }

}
const findAll = async() => {

    try {
        return await Usuario.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}
const login = async (correo, password) => {

    try {
        return await Usuario.findAll({
            where: {
                [Op.and]: [
                    { correo: correo },
                    { password: password }
                ]
            }
        });
    } catch (error) {
        console.error(error)
        return null
    }

}

const findOne = async(correo, password) => {

    try {
        return await Usuario.findOne({
            where: {
                correo,
                password
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(usuario) => {
    try {
        const foundusuario = await Usuario.findOne({
            where: {
                id: usuario.id
            }
        })

        foundusuario.set(usuario);

        await foundusuario.save();

        return foundusuario;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Usuario.destroy({
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
const UsuariosRepository = { create, findAll, findOne, update, remove, login }

export default UsuariosRepository