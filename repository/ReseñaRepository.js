import Reseña from '../models/Reseña.js'

const create = async (Reseña) => {

    try {
        const newReseña = await Reseña.create(Reseña);
            
        return newReseña;

    } catch(error) {
        console.error(error)

        return null;
    }

}