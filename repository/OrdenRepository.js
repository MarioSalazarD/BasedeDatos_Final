import Orden from '../models/Orden.js'

const create = async (Orden) => {

    try {
        const newOrden = await Orden.create(Orden);
            
        return newOrden;

    } catch(error) {
        console.error(error)

        return null;
    }

}