import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Usuario from './Usuario.js'

const Orden = sequelize.define('ordenes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    monto: {
        type: DataTypes.FLOAT
    },
    direccion: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
    idUsuario: {
        type: DataTypes.INTEGER
    }
})

Usuario.hasMany(Orden,{
    foreignKey: 'idUsuario',
    sourceKey: 'id'
})

Orden.belongsTo(Usuario,{
    foreignKey: 'idUsuario',
    targetId: 'id'
})

export default Orden;