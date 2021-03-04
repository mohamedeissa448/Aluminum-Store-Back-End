var mongoose = require('mongoose');

var CategoryTypeSchema = mongoose.Schema({
    
    ACT_ACat_Seri                : {
      type : mongoose.Schema.Types.ObjectId ,
       ref : "lut_category"
    },
    ACT_AT_Seri                  : {
      type : mongoose.Schema.Types.ObjectId ,
       ref : "lut_type"
    }
},{
    toJSON: { virtuals: true }
  });



const CategoryType = mongoose.model('lut_category_type', CategoryTypeSchema);
module.exports = CategoryType;
