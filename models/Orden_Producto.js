import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Orden from './Orden.js'
import Producto from './Producto.js'

const Orden_Producto = sequelize.define('ordenes_productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idOrden: {
        type: DataTypes.INTEGER
    },
    idProducto:{
        type: DataTypes.INTEGER
    }
})

Orden.hasMany(Orden_Producto,{
    foreignKey: 'idOrden',
    sourceKey: 'id'
})

Orden_Producto.belongsTo(Orden,{
    foreignKey: 'idOrden',
    targetId: 'id'
})

Producto.hasMany(Orden_Producto,{
    foreignKey: 'idProducto',
    sourceKey: 'id'
})

Orden_Producto.belongsTo(Producto,{
    foreignKey: 'idProducto',
    targetId: 'id'
})

export default Orden_Producto;