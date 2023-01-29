import  express  from "express";
import { pool } from "../src/db.js"

export const router = express.Router();

router.get('/', function(req, res) {
    try {
        res.render('index');
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
});

router.get("/ping", async (req, res, next) => {
    try {
        const result = await pool.query(`SELECT * FROM users`);
        res.json(result[0]);
    } catch (error) {
        res.json({message: "Page not found", error: error});
    }
})

router.get("/create", async (req, res, next) => {
    const result = await pool.query(
        ` INSERT INTO users(name) VALUES ("jonh") `
    )

    res.json(result);
});