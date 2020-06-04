const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let pintoresSchema = new Schema({
    username:{
        type: String,
        required: [true, 'Quiero el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Quiero la corriente'],
    },
    nacionalidad:{
        type:String},
    pntura:{
        type: String},
    email:{type: String}
});

module.exports = mongoose.model('pintores',PintoresSchema);
