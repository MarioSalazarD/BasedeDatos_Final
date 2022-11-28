import Reporte from '../models/Reporte.js'

const create = async (Reporte) => {

    try {
        const newReporte = await Reporte.create(Reporte);
            
        return newReporte;

    } catch(error) {
        console.error(error)

        return null;
    }

}