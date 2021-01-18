const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./modules/bootcamps');
// const logger = require('./middlewares/logger')
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./db.js');
const errorMiddleware  = require('./middlewares/error')

//Load env variable
dotenv.config({path:'./config/config.env'});
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
//dev logging middleware
if(process.env.NODE_ENV==='development'){
    // app.use(morgan('dev'));
} 

app.use(express.json());
app.use('/api/v1/bootcamp',bootcamps);
app.use(errorMiddleware)

app.listen(PORT, console.log (`Server running ${PORT} in ${process.env.NODE_ENV}`.yellow));

//Handling uncaugh promise rejection
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error : ${err.message}`);
    server.close(()=>{process.exit(1)})
});