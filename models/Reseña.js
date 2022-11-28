import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Usuario from './Usuario.js'

const Reseña = sequelize.define('reseñas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    puntaje: {
        type: DataTypes.INTEGER
    },
    comentario: {
        type: DataTypes.STRING
    },
    video: {
        type: DataTypes.INTEGER
    },
    link: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.INTEGER
    }
})

Usuario.hasMany(Reseña,{
    foreignKey: 'idUsuario',
    sourceKey: 'id'
})

Reseña.belongsTo(Usuario,{
    foreignKey: 'idUsuario',
    targetId: 'id'
})

export default Reseña;