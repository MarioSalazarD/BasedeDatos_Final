import CategoriaRepository from '../repository/CategoriaRepository.js'

const create = async (req,res) => {
    
    const result = await CategoriaRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const categorias = await CategoriaRepository.findAll();

    return sendResponse(categorias,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const categoria_usuario = await CategoriaRepository.findOne(id);

    return sendResponse(categoria_usuario,res);
}

const update = async(req,res) => {
    const categoria_usuario = await CategoriaRepository.update(req.body);

    return sendResponse(categoria_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const categoria_usuario = await CategoriaRepository.remove(id);

    return sendResponse(categoria_usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const CategoriaController = { create, findAll, findOne, update, remove }

export default CategoriaController




