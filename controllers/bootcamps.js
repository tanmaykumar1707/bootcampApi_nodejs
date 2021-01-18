const BootcampModel = require('../models/BootcampModel')
const ErrorClass = require('../utils/ErrorClass')
//@route /api/v1/bootcamp
exports.getBootcamps = (req,res,next)=>{

    BootcampModel.find().then( data=>{
        res.status(200).json({success:true, count:data.length , msg: data });
    }).catch(err=>{
        res.status(400).json({success:false,msg:"Erro occured"+err})
    })
   
   
};

exports.createBootcamp=  (req,res,next)=>{
    BootcampModel.create(req.body).then((res1)=>{
        console.log("Database Entered"+res1);
        res.status(200).json({success:true, msg: res1});
    }).catch((err)=>{
       next(err);
       // res.status(400).json({success:false});
    })
}

exports.getBootcamp =async (req,res,next)=>{
    try{
        var data = await BootcampModel.findById(req.params.id);
        if(!data)
           return  next(new ErrorClass(`No Bootcamp found with id ${req.params.id}`,404));
        res.status(200).json({success:true, msg: data });
    } 
    catch(err){
        next(err);
        // next(new ErrorClass(`No Bootcamp found with id ${req.params.id}`,404));
        //res.status(400).json({success:false,msg:"Erro occured"});
    }
   
};

exports.updateBootcamp =  async (req,res,next)=>{
    //, runValidators:true 
    try{    
            const data = await BootcampModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            if(!data)
                next(err);
            res.status(200).json({success:true, msg: res1});
    }catch(err){
        next(err);
    }
};

exports.deleteBootcamp = (req,res,next) =>{
    BootcampModel.findByIdAndDelete(req.params.id).then(message=>{
        res.status(200).json({status:true,msg:message});
    });
    // res.status(200).json({success:true, msg: "Delete single Bootcamp id:"+req.params.id});
};