const express = require ('express');
const router = express.Router();
const model = require('../models/patient');



// router.get('/api' , (req,res,next)=>{
//      console.log("get");
//     model.find({}).then(function(patients){
//         res.send(patients);
//     });
   
// });

router.post('/api' , (req,res,next)=>{
   console.log("post");
   console.log(req.body);
    const data = { ...req.body , date: new Date() }
    model.create(data).then(function(patient){
        res.send(patient); 
    }).catch(next);
     router.get('/api' , (req,res,next)=>{
     console.log("get");
    model.find({}).then(function(patients){
        res.send(patients);
    });
   
});
});

router.put('/api/:id' , (req,res)=>{
        console.log(req.body);
        console.log("put");
    console.log(req.params.id);
    model.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        model.findOne({_id:req.params.id}).then(function(patient){
            res.send(patient);
        });
    });
});

router.delete('/api/:id' , (req,res)=>{
        console.log("delete");
    console.log(req.params.id);
    model.findByIdAndRemove({_id:req.params.id}).then(function(patient){
        res.send('Deleted Successfully!');
    })
});

module.exports=router;
