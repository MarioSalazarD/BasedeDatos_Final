import Pre_ArmadoRepository from '../repository/Pre_ArmadoRepository.js'

const create = async (req,res) => {
    
    const result = await Pre_ArmadoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const prearmados = await Pre_ArmadoRepository.findAll();

    return sendResponse(prearmados,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const preArmado_usuario = await Pre_ArmadoRepository.findOne(id);

    return sendResponse(preArmado_usuario,res);
}

const update = async(req,res) => {
    const preArmado_usuario = await Pre_ArmadoRepository.update(req.body);

    return sendResponse(preArmado_usuario,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const preArmado_usuario = await Pre_ArmadoRepository.remove(id);

    return sendResponse(preArmado_usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const PreArmadosController = { create, findAll, findOne, update, remove }

export default PreArmadosController