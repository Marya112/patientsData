const express = require ('express');
const router = express.Router();
const model = require('../models/patient');

router.post('/new-reading' , (req,res,next) => {
    console.log("post");
    console.log(req.body);
    const sensorData= new Patient();
    res.send(sensorData);
});

router.get('/api' , (req,res,next)=>{
     console.log("gjnhuet");
    model.find({}).then(function(patients){
        res.send(patients);
    });
   
});

router.post('/api' , (req,res,next)=>{
        console.log(req.body);
        console.log("post");
    console.log(req.body);
    model.create(req.body).then(function(patient){
        res.send(patient); 
    }).catch(next);
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
