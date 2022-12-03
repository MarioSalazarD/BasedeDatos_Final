import UsuarioRepository from '../repository/UsuarioRepository.js'
//El controlador interactua directamente con los request del usuario y maneja directamente con la ruta
const create = async (req,res) => {
    
    const result = await UsuarioRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const usuarios = await UsuarioRepository.findAll();

    return sendResponse(usuarios,res);
}


const findOne = async(req,res) => {
    const correo = req.params.correo;
    const password = req.params.password;
    const usuario = await UsuarioRepository.findOne(correo, password);

    return sendResponse(usuario,res);
}

const login = async (req, res) => {
    const result = await UsuarioRepository.login(req.params.correo, req.params.password)

    return sendResponse(result, res)
}

const update = async(req,res) => {
    const usuario = await UsuarioRepository.update(req.body);

    return sendResponse(usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const usuario = await UsuarioRepository.remove(id);

    return sendResponse(usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result) //Correcto
else
    return res.status(500).json({message: 'An error has ocurred.'}) //error
}

const UsuariosController = { create, findAll, findOne, update, remove, login}

export default UsuariosController