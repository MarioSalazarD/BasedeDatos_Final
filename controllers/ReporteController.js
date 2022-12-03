import ReporteRepository from '../repository/ReporteRepository'

const create = async (req,res) => {
    
    const result = await ReporteRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const usuarios = await ReporteRepository.findAll();

    return sendResponse(usuarios,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const reporte = await ReporteRepository.findOne(id);

    return sendResponse(reporte,res);
}

const update = async(req,res) => {
    const reporte = await ReporteRepository.update(req.body);

    return sendResponse(reporte,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const reporte = await ReporteRepository.remove(id);

    return sendResponse(reporte,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ReporteController = { create, findAll, findOne, update, remove }

export default ReporteController