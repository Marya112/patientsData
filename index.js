const express = require ('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect( "mongodb+srv://mariamagdy412:Apple1712112@cluster0.oe1ktgn.mongodb.net/patients-app");
mongoose.Promise=global.Promise;

app.use(express.static('../Frontend'));

app.use(bodyParser.json());
app.use(routes);
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(404).send({error:err.message});

});

app.listen(process.env.port || 4015 , function(){
    console.log('now listining to port num 4015');
});
