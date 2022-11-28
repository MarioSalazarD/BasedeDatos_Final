import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Categoria from './Categoria.js'

const Producto = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCategoria: {
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
})

Categoria.hasMany(Producto,{
    foreignKey: 'idCategoria',
    sourceKey: 'id'
})

Producto.belongsTo(Categoria,{
    foreignKey: 'idCategoria',
    targetId: 'id'
})

export default Producto;