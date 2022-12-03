import Reporte from '../models/Reporte.js'

const create = async (reporte) => {

    try {
        const newReporte = await Reporte.create(reporte);
            
        return newReporte;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Reporte.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Reporte.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(Reporte) => {
    try {
        const foundReporte = await Reporte.findOne({
            where: {
                id: Reporte.id
            }
        })

        foundReporte.set(Reporte);

        await foundReporte.save();

        return foundReporte;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Reporte.destroy({
            where: {
                id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const ReportesRepository = { create, findAll, findOne, update, remove }

export default ReportesRepository