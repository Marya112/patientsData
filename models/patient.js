const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PatientSchema = new schema({
    id:{
        type:Number,
        required:[true,'ID Field is required']
    },
    HeartBeat:String,
    oxygonRate:String,
    temp:String,
    date:Date
});

const Patient = mongoose.model('patients' , PatientSchema);
module.exports = Patient;
