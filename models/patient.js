const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PatientSchema = new schema({
    name:{
        type:String,
        required:[true,'Name Field is required']
    },
    email:String,
    HeartBeat:Number,
    oxygonRate:Number,
    temp:Number
});

const Patient = mongoose.model('patients' , PatientSchema);
module.exports = Patient;