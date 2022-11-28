import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Categoria = sequelize.define('categorias', {
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


export default Categoria;