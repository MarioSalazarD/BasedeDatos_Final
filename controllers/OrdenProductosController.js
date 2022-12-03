import Orden_ProductoRepository from '../repository/Orden_ProductoRepository.js'

const create = async (req,res) => {
    
    const result = await Orden_ProductoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const ordenesproductos = await Orden_ProductoRepository.findAll();

    return sendResponse(ordenesproductos,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const ordenproducto_usuario = await Orden_ProductoRepository.findOne(id);

    return sendResponse(ordenproducto_usuario,res);
}

const update = async(req,res) => {
    const ordenproducto_usuario = await Orden_ProductoRepository.update(req.body);

    return sendResponse(ordenproducto_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const ordenproducto_usuario = await Orden_ProductoRepository.remove(id);

    return sendResponse(ordenproducto_usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const OrdenProductoController = { create, findAll, findOne, update, remove }

export default OrdenProductoController