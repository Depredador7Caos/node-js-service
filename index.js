/* called of frameworks */
import express from "express";

/* called sources */
import { pool } from "./src/db.js";
import { PORT } from "./config/config.js";	

const app = express();

app.get("/", (req, res, next) => {
    res.send("hello world!");
})

app.get("/ping", async (req, res, next) => {
    const result = await pool.query(`SELECT * FROM users`);
    res.json(result[0]);
})

app.get("/create", async (req, res, next) => {
    const result = await pool.query(
        ` INSERT INTO users(name) VALUES ("jonh") `
    )

    res.json(result);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});