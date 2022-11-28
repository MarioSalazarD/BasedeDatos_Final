import Pre_Armado_Producto from '../models/Pre_Armado_Producto.js'

const create = async (Pre_Armado_Producto) => {

    try {
        const newPre_Armado_Producto = await Pre_Armado_Producto.create(Pre_Armado_Producto);
            
        return newPre_Armado_Producto;

    } catch(error) {
        console.error(error)

        return null;
    }

}