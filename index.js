const express = require ('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Patients');
mongoose.Promise=global.Promise;

app.use(express.static('../Frontend'));

app.use(bodyParser.json());
app.use(routes);
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(404).send({error:err.message});

});

app.listen(process.env.port || 4013 , function(){
    console.log('now listining to port num 4013');
});