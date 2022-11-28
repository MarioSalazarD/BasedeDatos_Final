import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Producto from './Producto.js'
import Pre_Armado from './Pre_Armado.js'

const Pre_Armado_Producto = sequelize.define('pre_armados_productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idProductos: {
        type: DataTypes.INTEGER
    },
    idPre_armado:{
        type: DataTypes.INTEGER
    }
})

Pre_Armado.hasMany(Pre_Armado_Producto,{
    foreignKey: 'idPre_armado',
    sourceKey: 'id'
})

Pre_Armado_Producto.belongsTo(Pre_Armado,{
    foreignKey: 'idPre_armado',
    targetId: 'id'
})

Producto.hasMany(Pre_Armado_Producto,{
    foreignKey: 'idProducto',
    sourceKey: 'id'
})

Pre_Armado_Producto.belongsTo(Producto,{
    foreignKey: 'idProducto',
    targetId: 'id'
})

export default Orden_Producto;