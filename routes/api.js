const express = require ('express');
const router = express.Router();
const model = require('../models/patient');

router.get('/api' , (req,res,next)=>{
    model.find({}).then(function(patients){
        res.send(patients);
    });
   
});

router.post('/api' , (req,res,next)=>{
    model.create(req.body).then(function(patient){
        res.send(patient); 
    }).catch(next);
});

router.put('/api/:id' , (req,res)=>{
    console.log(req.params.id);
    model.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        model.findOne({_id:req.params.id}).then(function(patient){
            res.send(patient);
        });
    });
});

router.delete('/api/:id' , (req,res)=>{
    console.log(req.params.id);
    model.findByIdAndRemove({_id:req.params.id}).then(function(patient){
        res.send('Deleted Successfully!');
    })
});

module.exports=router;