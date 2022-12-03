
import ProductoRepository from '../repository/ProductoRepository.js'

const create = async (req,res) => {
    
    const result = await ProductoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const usuarios = await ProductoRepository.findAll();

    return sendResponse(usuarios,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const productos_usuario = await ProductoRepository.findOne(id);

    return sendResponse(productos_usuario,res);
}

const update = async(req,res) => {
    const productos_usuario = await ProductoRepository.update(req.body);

    return sendResponse(productos_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const productos_usuario = await ProductoRepository.remove(id);

    return sendResponse(productos_usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ProductoController = { create, findAll, findOne, update, remove }

export default ProductoController