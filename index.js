/* called of frameworks */
const express = require ("express");
const path = require ("path");
const morgan = require ("morgan");
const multer   = require('multer');

/* called sources */
const { PORT } = require ("./config/config.js");
const indexRouter = require ("./src/routes/index.routes.js");	
const employeesRouter = require ("./src/routes/employees.routes.js");

const app = express();

app.use(morgan('dev', (req, res) => {
    skip: (req, res) => {return res.statusCode < 400}
}));

app.set('views', path.join('view'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));

/// Routeo
app.use("/index", indexRouter);
app.use('/', employeesRouter);

// midlewhere for the called one image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    }, 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
console.log(upload);

app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not found"
    });
})

/// server
app.listen(`${PORT}`, (error) => {
    if (error) {
        console.log(`Your server not funcion: ${error}`);        
    } else {
        console.log(`listening on port: ${PORT}`);
    }
});