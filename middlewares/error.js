const ErrorClass  = require('../utils/ErrorClass');

const errorHandler = (err,req,res,next)=>{
    // console.log(err.name);  //Gives the error name
    let error = {...err};
    // console.log(err.message);
    error.message = err.message; //changing default to custom message
    // console.log(error);
    if(err.name==='CastError'){
        const message = `Resource not found with this id : ${error.value}`;
        error = new ErrorClass(message,404);
    }

    if(err.name==='ValidationError'){
        const message = "Error occured"+error.message;
        error = new ErrorClass(message,400);
    }
    // if(err.)
    // E11000

    // console.log("After change"+JSON.stringify(error));

    res.status(error.statusCode || 500).json({
        success:false,
        error: error.message || "Server Error"
    })
}

module.exports = errorHandler;