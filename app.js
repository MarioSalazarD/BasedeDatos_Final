import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

import usuariosRoutes from './routes/usuarios.js'
import detalles_usuariosRoutes from './routes/detalles_usuarios.js'
import reporteRoutes from './routes/reporte.js'
import Usuario from './models/Usuario.js';


var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/usuario", usuariosRoutes)
app.use("/detalle_usuario", detalles_usuariosRoutes)
app.use("/reporte" , reporteRoutes)

export default app