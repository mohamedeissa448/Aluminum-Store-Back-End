var mongoose = require('mongoose');

var FactroryItem =new mongoose.Schema({
    
    AFI_Seri                           : Number        ,
    AFI_AFN_Seri                       : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'lut_factory_name'
    },
    AFI_OriginalNumber                 : String, 
    AFI_ACT_Seri                       : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'lut_category_type'
    },
    AFI_AI_Seri                        : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'lut_aluminum_item'
    },
});

FactroryItem = module.exports = mongoose.model('aluminum_factory_item',FactroryItem);
