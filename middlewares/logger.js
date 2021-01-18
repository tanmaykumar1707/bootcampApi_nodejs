
//req.method  GET POST PUT DELETE
//req.protocol http / https
//req.get('host')  localhost:3000
//req.originalUrl /api/v1/bootcamp
var logger = (req,res,next)=>{
    req.hello= "Hello world";
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}

module.exports = logger;