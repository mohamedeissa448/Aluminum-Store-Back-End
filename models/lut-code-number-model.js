var mongoose = require('mongoose');

var CodeNumberSchema = mongoose.Schema({
    
    ACN_Numbers             : Number,
   
});


const CodeNumber = mongoose.model('lut_code-number', CodeNumberSchema);
module.exports = CodeNumber;

