import Pre_Armado_ProductoRepository from '../repository/Pre_Armado_ProductoRepository.js'

const create = async (req,res) => {
    
    const result = await Pre_Armado_ProductoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const usuarios = await Pre_Armado_ProductoRepository.findAll();

    return sendResponse(usuarios,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const preArmadoprod_usuario = await Pre_Armado_ProductoRepository.findOne(id);

    return sendResponse(preArmadoprod_usuario,res);
}

const update = async(req,res) => {
    const preArmadoprod_usuario = await Pre_Armado_ProductoRepository.update(req.body);

    return sendResponse(preArmadoprod_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const preArmadoprod_usuario = await Pre_Armado_ProductoRepository.remove(id);

    return sendResponse(preArmadoprod_usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const PreArmadoProductoController = { create, findAll, findOne, update, remove }

export default PreArmadoProductoController



