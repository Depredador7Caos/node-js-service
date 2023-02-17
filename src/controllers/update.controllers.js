const conexion = require('../db.js');

exports.updateProduct = (req, res) => {
    try {
        const {id, product_name, product_url, price, cant_existente, product_category} = req.body;
        
        conexion.query('UPDATE products SET ? WHERE id = ?', 
            [
                {
                    name: product_name,
                    url: product_url,
                    precio: price,
                    cantidad: cant_existente,
                    categoria: product_category
                }, id,
            ], (error, results) => {
                if (error) {
                    throw error;
                } else {
                    res.redirect('/store');
                }
            }
        )
    } catch (error) {
        res.status(500).json({ message: "wrong error" });
    }
}