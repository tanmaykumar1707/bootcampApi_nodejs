const  express = require('express');
const {getBootcamps,getBootcamp,updateBootcamp,deleteBootcamp,createBootcamp} = require('../controllers/bootcamps');

const router = express.Router();


router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

//No need belows route because controller created and router routed on those route
// router.get('/',(req,res)=>{
//     res.status(200).json({success:true, msg: "Show all Bootcamps"});
// });

// router.get('/:id',(req,res)=>{
//     res.send("Show Bootcamp of id ="+req.params.id);
// });


// router.post('/',(req,res)=>{
//     res.send("Save Single Bootcamp");
// });

// router.put('/:id',(req,res)=>{
//     res.send("Update Bootcamp with id :" + req.params.id);
// });

module.exports = router;