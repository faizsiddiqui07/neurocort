const express = require('express')
const dotenv = require('dotenv')
const db_connect = require('./utils/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require("path")

dotenv.config()

const app = express()
const port = process.env.port;

app.use(express.json());
app.use(cookieParser())
app.use("/files", express.static("files"));


app.use(cors({
    origin: "*",
    credentials: true,
}))

app.use(session({
    secret: "erjgqrg5ergwgwt2hw5twjgh534BjugKJ", //Random key
    resave: false,
    saveUninitialized: true,
}))

db_connect()


app.use('/', require('./routes/authRoutes'))
app.use('/', require('./routes/serviceRoutes'))
app.use('/', require('./routes/userRoutes'))
app.use('/', require('./routes/blogRoutes'))


const _dirname = __dirname; 
const buildpath = path.join(_dirname, "../Website/dist");
app.use(express.static(buildpath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildpath, 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}!`))