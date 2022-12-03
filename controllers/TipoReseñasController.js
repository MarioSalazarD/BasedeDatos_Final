import Tipo_ReseñaRepository from '../repository/Tipo_ReseñaRepository.js'

const create = async (req,res) => {
    
    const result = await Tipo_ReseñaRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const tiporeseñas = await Tipo_ReseñaRepository.findAll();

    return sendResponse(tiporeseñas,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const tiporeseña_usuario = await Tipo_ReseñaRepository.findOne(id);

    return sendResponse(tiporeseña_usuario,res);
}

const update = async(req,res) => {
    const tiporeseña_usuario = await Tipo_ReseñaRepository.update(req.body);

    return sendResponse(tiporeseña_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const tiporeseña_usuario = await Tipo_ReseñaRepository.remove(id);

    return sendResponse(tiporeseña_usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const TipoReseñasController = { create, findAll, findOne, update, remove }

export default TipoReseñasController






