import express from "express" // commonjs
import mysql from "mysql2"

const CONNECTION = {
    host: "localhost",
    user: "root",
    database: "testeo"
}

const con = mysql.createConnection(CONNECTION)


export const routerClientes = express.Router() // ES modules para exportar en commonjs, exportación nombrada
//module.exports([
 //   router
//])

routerClientes.get(
    "/",
    (_,res) => {
        con.query(
            "SELECT id, nombre FROM testeo.clientes;",
            function (err, results, fields) {
                console.log(results);
                console.log(fields);
                res.status(201).json(results)
            }
        )
    }
)

const gestionTodosClientes = (req,res) => {
    res.status("gestión de todos los clientes")
}

routerClientes.get( //listar todos los clientes
    "/clientes",
    (req, res) => {
        res.send("gestión de todos los clientes")
    }
    
)

routerClientes.get( //listar un solo cliente
    "/clientes/:id",
    (req, res) => {
        const{id} = req.params //destructuración
    res.json(
        {
            id,
            message:"información de un cliente"
        }
    )
  }  
)

routerClientes.post( //ruta de crear un cliente
    "/clientes",
    (req, res) => {
        res.send("crear un cliente")
    }

)

routerClientes.delete( //eliminar un cliente
    "/clientes/:id",
    (req, res) => {
        const{id} = req.params //destructuración
    res.json(
        {
            id,
            message:"eliminar un cliente"
        }
    )
  }  
)

routerClientes.put( //actualizar un cliente
    "/clientes/:id",
    (req, res) => {
        const{id} = req.params //destructuración
    res.json(
        {
            id,
            message:"actualizar un cliente"
        }
    )
  }  
)