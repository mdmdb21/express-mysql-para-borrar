import mysql from "mysql2"
import { DATABASE } from "./constants.js"

export const db = mysql.createConnection(
    DATABASE

)