var mongoose = require('mongoose');

var AluminumItemSchema = mongoose.Schema({
    
    AI_Seri              	        : Number,
    AI_MasterNo                     : Number,
    AI_ArabicName                   : String,
    AI_HebrewName                   : String,
    AI_PictureNo                    : String
});

const AluminumItem = mongoose.model('lut_aluminum_item', AluminumItemSchema);
module.exports = AluminumItem;
