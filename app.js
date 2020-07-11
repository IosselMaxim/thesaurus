const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const config = require('config');

const cors = require('cors');

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(compression());
app.use(require('morgan')('dev'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// app.use('/api/v1/auth', require('./routes/auth/auth.routes'));



module.exports = {app, path, express, mongoose, config}
