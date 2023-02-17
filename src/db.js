const mysql = require('mysql2');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require('../config/config.js');


const conexion = mysql.createConnection({ 
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
});

conexion.connect((error) => {
    if (error) {
        console.log('El error de conexion es ' + error);
    } else {
        console.log("¡Conectado a DB!");
    }
})

module.exports = conexion;
