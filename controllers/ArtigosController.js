class Artigos {
    consultarArtigos (_, res) { //callback funcion dentro de otra funcion
        res.send('Todos los artículos')
    }

    crearArtigo  (_, res) {
        res.send('Crear un artigo')
    }

    verDetalleArtigo (req, res) {
        const {codigo} = req.params //desestructuración
        res.json({
            message: 'Detalle dun artigo',
            codigo
        })
    }
    
    actualizarArtigo (req, res) {
        const {codigo} = req.params
        res.json({
            message: 'Actualizar artigo',
            codigo
        })
    }

    elimarArtigo (req, res) {
        const {codigo} = req.params
        res.json({
            message: 'Eliminar artigo',
            codigo
        })
    }


}


export default new Artigos()