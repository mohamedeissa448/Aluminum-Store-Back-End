var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    
    ACat_ACN_Seri               : {
      type : mongoose.Schema.Types.ObjectId ,
      ref : "lut_code-number"
    },
    ACat_Desc         	        : String,
  
});


const Category = mongoose.model('lut_category', CategorySchema);
module.exports = Category;
