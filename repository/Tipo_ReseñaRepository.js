import Tipo_Reseña from '../models/Tipo_Reseña.js'

const create = async (Tipo_Reseña) => {

    try {
        const newTipo_Reseña = await Tipo_Reseña.create(Tipo_Reseña);
            
        return newTipo_Reseña;

    } catch(error) {
        console.error(error)

        return null;
    }

}