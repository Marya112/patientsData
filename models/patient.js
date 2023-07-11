const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PatientSchema = new schema({
    Dn:{
        type:Number,
        required:[true,'ID Field is required']
    },
    Name:String,
    Email:String,
    Address:String,
    HeartBeat:String,
    oxygonRate:String,
    temp:String,
    date:Date
});

const Patient = mongoose.model('patients' , PatientSchema);
module.exports = Patient;
