import express from 'express'
const router = express.Router()

import provedoresController from '../controllers/ProvedoresController.js'


router.get(
    '/',
    provedoresController.consultarProvedores
)

router.post(
    '/',
    provedoresController.crearProvedores
)

router.route('/:codigo')
    .get(provedoresController.verDetalleprovedor)
    .delete(provedoresController.elimarProvedor)
    .put(provedoresController.actualizarProvedor)




export default router