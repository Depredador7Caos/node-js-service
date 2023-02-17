const { Router }  = require ('express');
const { ping } = require ('../controllers/selects.js');
const { createPing } = require ('../controllers/inserts.js');

const router = Router();

/* Page started */
router.get('/', (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
});

/* Forms sing in */
router.get('/sign-in', (req, res) => {
    try {
        res.render('../view/sing-in/sing-in');
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
});

router.get('/sign-up', (req, res) => {
    try {
        res.render('../view/sign-up/sign-up');
    } catch (error) {
        console.log(error                                                                                                     );
    }
});

/* Midleware test */
router.get("/ping", ping);
router.get("/create", createPing);
 
/**==============================
 *        Parte del servidor
 * ============================*/
/*router.get("/store", async(req, res, next) => {
    res.render("../view/servidor/productos")
});*/

/**==============================
 *        Parte del cliente
 * ============================*/

/*router.get("/cliente", (req, res) => {
    try {
        res.render("../view/cliente/index");
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
});*/


module.exports = router;