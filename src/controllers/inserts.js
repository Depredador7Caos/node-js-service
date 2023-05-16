const conexion = require('../db.js');
const bcrypt = require('bcrypt');

const path = require('path');



exports.createPing = async (req, res, next) => {
    try {
        const result = await conexion.query(
            ` INSERT INTO users(name) VALUES ("jonh") `
        )
        res.json(result);
    } catch (error) {
        res.redirect("/error");
    }
};

/**==================================
 *     Registers new's clientes
====================================*/
exports.clientes =  async (req, res) => {
    try {
        //const password = await bcrypt.hash(req.body.password, 10);
        const { user, email, password} = req.body;

        conexion.query (` INSERT INTO clients SET ? `, {
            name: user,
            email: email,
            password: password
        }, (error, results) =>{
            if (error) {
                throw error;
            } else {
                
                res.redirect('/cliente');
            }
        });
    } catch (error) {
        res.status(404).json({ message: "Acount not send!!!"})
    }
};

/**==================================
 *     Parte del servidor
====================================*/
exports.productos = (req, res) => {
    const {product_name, price, product_url, cant_existente, product_category} = req.body;

     conexion.query(` INSERT INTO products SET ? `, {
        name: product_name,
        url: product_url,
        precio: price,
        cantidad: cant_existente,
        categoria: product_category
    }, (error, results) => {
        if (error) {
            res.status(404).json({message: "Producto no registrado"});
        } else {
            //res.send(results);
            //console.log(results);
            res.redirect('/store');
            console.log(results);
        }
    });
};

