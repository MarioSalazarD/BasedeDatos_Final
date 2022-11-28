import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Reseña from './Reseña.js'

const Tipo_Reseña = sequelize.define('tipos_reseñas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    comentario: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

Reseña.hasMany(Tipo_Reseña,{
    foreignKey: 'idReseña',
    sourceKey: 'id'
})

Tipo_Reseña.belongsTo(Usuario,{
    foreignKey: 'idReseña',
    targetId: 'id'
})

export default Tipo_Reseña;