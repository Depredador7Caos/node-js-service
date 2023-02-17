const conexion = require('../db.js');

exports.deleteProduct = (req, res) => {
    try {
        const id = req.params.id;

        conexion.query(`DELETE FROM products WHERE id = ?`, [id], (error, results) =>{
            if (error) {
                res.status(404).json({ message: 'Product not deleted' });
            } else {
                res.redirect('/store');
            }
        });
    } catch (error) {
        req.status(500),json({ message: error});
    }
}