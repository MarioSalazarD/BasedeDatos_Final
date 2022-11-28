import Usuario from '../models/Usuario.js'

const create = async (Usuario) => {

    try {
        const newUsuario = await Usuario.create(Usuario);
            
        return newUsuario;

    } catch(error) {
        console.error(error)

        return null;
    }

}