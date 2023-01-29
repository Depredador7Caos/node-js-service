/* called of frameworks */
import express from "express";
import path from "path";

/* called sources */
import { PORT } from "./config/config.js";
import { router} from "./routes/route.js";	

const app = express();

app.set('views', path.join('view'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));

app.get("/", router);

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});