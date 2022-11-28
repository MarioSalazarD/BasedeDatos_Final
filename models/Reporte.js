import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Usuario from './Usuario.js'

const Reporte = sequelize.define('reportes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.INTEGER
    },
    asunto: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.INTEGER
    }
})

Usuario.hasMany(Reporte,{
    foreignKey: 'idUsuario',
    sourceKey: 'id'
})

Reporte.belongsTo(Usuario,{
    foreignKey: 'idUsuario',
    targetId: 'id'
})

export default Reporte;