/* called of frameworks */
const express = require ("express");
const path = require ("path");

/* called sources */
const { PORT } = require ("./config/config.js");
const indexRouter = require ("./src/routes/index.routes.js");	
const employeesRouter = require ("./src/routes/employees.routes.js");

const app = express();

app.set('views', path.join('view'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));

/// Routeo
app.use(indexRouter);
app.use(employeesRouter);


app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not found"
    });
})

/// server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});