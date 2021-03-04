var mongoose = require('mongoose');

var FactoryNameSchema = mongoose.Schema({
    
    AFN_Seri     	                    : Number,
    AFN_Desc                            : String,
   
});


const FactoryName = mongoose.model('lut_factory_name', FactoryNameSchema);
module.exports = FactoryName;
