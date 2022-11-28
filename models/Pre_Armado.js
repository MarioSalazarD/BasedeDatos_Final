import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Pre_Armado = sequelize.define('pre_armados', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
})


export default Pre_Armado;