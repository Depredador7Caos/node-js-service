import  {Router}  from 'express';
import { pool } from "../src/db.js"

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
router.get('/sing', (req, res) => {
    try {
        res.render('../view/sing-in/sing-in');
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
});

/* Called a db */
router.get("/ping", async (req, res, next) => {
    try {
        const result = await pool.query(`SELECT * FROM users`);
        res.json(result[0]);
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
})

router.get("/create", async (req, res, next) => {
    try {
        const result = await pool.query(
            ` INSERT INTO users(name) VALUES ("jonh") `
        )
        res.json(result);
    } catch (error) {
        res.redirect("/error");
    }
});

export default router;