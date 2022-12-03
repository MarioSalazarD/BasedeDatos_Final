import ReseñaRepository from '../repository/ReseñaRepository.js'

const create = async (req,res) => {
    
    const resultRes = await ReseñaRepository.create(req.body);

    return sendResponse(resultRes,res);
}

const findAll = async(req,res) => {

    const reseñas = await ReseñaRepository.findAll();

    return sendResponse(reseñas,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const reseña_usuario = await ReseñaRepository.findOne(id);

    return sendResponse(reseña_usuario,res);
}

const update = async(req,res) => {
    const reseña_usuario = await ReseñaRepository.update(req.body);

    return sendResponse(reseña_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const detalle_usuario = await Detalle_UsuarioRepository.remove(id);

    return sendResponse(detalle_usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ReseñasController = { create, findAll, findOne, update, remove }

export default ReseñasController



