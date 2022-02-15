require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')

const app = express();

app.set('port', process.env.SERVER_PORT || 3000)

//__Middlewares
app.use(morgan('dev')); // only dev to see request in console
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());

module.exports = app;