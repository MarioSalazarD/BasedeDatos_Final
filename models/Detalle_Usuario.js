import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Usuario from './Usuario.js'

const Detalle_Usuario = sequelize.define('Detalles_Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    codigoPostal: {
        type: DataTypes.INTEGER
    },
    telefono: {
        type: DataTypes.INTEGER
    },
    idUsuario: {
        type: DataTypes.INTEGER
    }
})

Usuario.hasMany(Detalle_Usuario,{
    foreignKey: 'idUsuario',
    sourceKey: 'id'
})

Detalle_Usuario.belongsTo(Usuario,{
    foreignKey: 'idUsuario',
    targetId: 'id'
})

export default Detalle_Usuario;