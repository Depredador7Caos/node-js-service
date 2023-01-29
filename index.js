/* called of frameworks */
import express from "express";
import path from "path";

/* called sources */
import { PORT } from "./config/config.js";
import indexRouter from "./routes/index.routes.js";	
import employeesRouter from "./routes/employees.routes.js";

const app = express();

app.set('views', path.join('view'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));

app.use(indexRouter);
app.use(employeesRouter);

//app.get("/", indexRouter);



app.listen(PORT, () => {
    console.log('listening on port', PORT);
});