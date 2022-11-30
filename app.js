import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

import usuariosRoutes from './routes/usuarios.js'

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/usuario", usuariossRoutes)

export default app