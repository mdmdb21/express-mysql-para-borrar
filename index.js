// const express = require('express') // commonjs
import express from 'express' // ES modules

import arti from './routers/artigosRouters.js'
import provedorRouter from './routers/provedoresRouters.js'
import { routerClientes } from './routers/clientesRouters.js'

import { PORT } from './constants.js'
const app = express()


// Rutas
app.get(
    '/',
    (_, res) => {
        res.status(200).send("Home")
    }   
)

app.use('/artigos',arti)
app.use('/provedores',provedorRouter)
app.use("/clientes",routerClientes)



app.listen(
    PORT,
    () => {
        console.log('Servidor abierto en puerto ' + PORT)
    }
)
