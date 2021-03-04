var mongoose = require('mongoose');

var AluminumTypesSchema = mongoose.Schema({
    
    AT_Number                     : Number,
    AT_Desc                       : String,
});


const Type = mongoose.model('lut_type', AluminumTypesSchema);
module.exports = Type;
