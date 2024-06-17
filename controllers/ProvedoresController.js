import {db} from "../connect.js"


class Provedores{

    consultarProvedores (_,res) {
     // try {
        db.query(
            `SELECT * 
            FROM provedores;`,
            (err, result ) => {
                if (err) {
                    return res.status(500).json(err)
                }
            
            
                if (!result.legth) {
                    return res.status(404).json({
                        error: true, //primero mensajes de error
                        message: "No hay registros en la tabla provedores"
                    })
                }

               return res.status(201).json(result)

            }
        )

     //}catch (error) {
        // res.json(error)
       // }
    }

    crearProvedores (_, res) {
        const {id, nome} = req.body
         db.query(
            `INSERT INTO tendabd.provedores
            (prv_id, prv_nome)
            VALUES(${id}, ${nome});`,
            (err, result ) => {
                if (err) {
                    return res.status(500).json(err)
                }

                const {affectedRows = 0} = result   
                    
                if (affectedRows > 0) 
                return res.status(201).json({
                 message: "provedor insertado correctamente",
                 id,
                 nome
               })
               else
            return res.status(201).json(result)      
            }
           
        )   
                        
         
    }          
    


    verDetalleprovedor (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Detalle dun provedor',
            cod: id
        })
    }
    
    actualizarProvedor (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Actualizar provedor',
            cod: id
        })
    }

    elimarProvedor (req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Eliminar provedor',
            cod: id
        })
    }

}


export default new Provedores()