
import OrdenRepository from '../repository/OrdenRepository.js'

const create = async (req,res) => {
    
    const result = await OrdenRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const ordenes = await OrdenRepository.findAll();

    return sendResponse(ordenes,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const ordenes_usuario = await OrdenRepository.findOne(id);

    return sendResponse(ordenes_usuario,res);
}

const update = async(req,res) => {
    const ordenes_usuario = await OrdenRepository.update(req.body);

    return sendResponse(ordenes_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const ordenes_usuario = await OrdenRepository.remove(id);

    return sendResponse(ordenes_usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const OrdenController = { create, findAll, findOne, update, remove }

export default OrdenController









