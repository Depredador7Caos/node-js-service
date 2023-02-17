const  Router = require('express');
const inserts = require('../controllers/inserts.js');
const selects = require('../controllers/selects.js');
const update  = require('../controllers/update.controllers.js');
const deleted = require('../controllers/delete.controllers.js');

const router = Router();

/**==================================
 *     Registers new's clientes
====================================*/
/* Selector of datas table clients */
router.get('/clientes', selects.selectClients)
/* insert datas of cliente a table clients */
router.post('/registro', inserts.clientes);



/**==============================
 *        Parte del servidor
 * ============================*/
/*------------ GET datos de producto ----------------*/
router.get("/store",selects.selectProducts);

router.get('/edit/:id', selects.selectProductById);

router.get('/delete/:id', deleted.deleteProduct);

router.post('/update-producto', update.updateProduct);
/* Ruta para agregar productos */
router.post('/register-product', inserts.productos);


/**==============================
 *        Parte del Cliente
 * ============================*/
router.get('/cliente', selects.selectProductsCliente);



module.exports = router;