const conexion = require ('../db.js');

exports.ping = (req, res, next) => {
    try {
        conexion.query(`SELECT * FROM users`, (error, users) => {
            if (error) {
                res.json({message: "Page not found", error: error});
            } else {
                res.json(users);
            }
        });
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
};

/**==================================
 *     Registers new's clientes
====================================*/
exports.selectClients = (req, res, next) => {
    try {
        conexion.query(`SELECT * FROM clients`, (error, results) => {
            if (error) {
                res.status(404).json({ message: "Clientes not getting"});
            } else {
                //res.render('../view/servidor/productos', {clientes: results[0]});
                res.render('../view/servidor/lista_clientes/lista_clientes', {result: results});
            }

        });
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }

};

/**==================================
 *     Parte del servidor
====================================*/
exports.selectProducts = (req, res, next) =>{
    try {
        conexion.query(`SELECT * FROM products`, (error, results) => {
            if (error) {
                res.status(404).json({ message: "Productos not send"});
            } else {
                res.render('../view/servidor/views/lista_productos/lista_existencias', {result: results});
            }
        });
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};
// Datos que osn pasados a al tabla productos
exports.selectProductsTable = (req, res, next) =>{
    try {
        conexion.query(`SELECT * FROM products`, (error, results) => {
            if (error) {
                res.status(404).json({ message: "Productos not send"});
            } else {
                res.render('../view/servidor/views/lista_productos/tabla_productos', {product: results});
            }
        });
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};

exports.selectProductById = (req, res) => {
    const id = req.params.id;

    conexion.query('SELECT * FROM products WHERE id = ?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            //res.json(results);
            res.render('../view/servidor/views/upload_productos/upload_productos', {productos: results[0]})
        }
    });
};

/**==================================
 *     Parte del cliente
====================================*/
exports.selectProductsCliente = (req, res, next) =>{
    try {
        conexion.query(`SELECT * FROM products`, (error, results) => {
            if (error) {
                res.status(404).json({ message: "Productos not send"});
            } else {
                res.render('../view/cliente/index', {result: results});
            }
        });
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};
