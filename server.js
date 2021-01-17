const express = require('express');
const dotenv = require('dotenv');
//Load env variable
dotenv.config({path:'./config/config.env'});

const app = express();
const PORT = process.env.PORT || 5000;

var bootcamps = require('./modules/bootcamps');

app.use('/api/v1/bootcamps',bootcamps);

app.listen(PORT, console.log (`Server running ${PORT} in ${process.env.NODE_ENV}`));