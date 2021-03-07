var mongoose = require('mongoose');
var AddressSchema = require('./general-schemas/address-schema'); 

var CustomerSchema = mongoose.Schema({
    
    Customer_Code     	         : Number, // auto increment 
    Customer_Name                : String,
    Customer_Email              : String,
    Customer_Phone              : String,
    Customer_Address            : String,
    Customer_Password          : String ,
    Customer_Status               : {
        type : Number,
        default : 1    // 1 = active , 0 = Risky , 2 = blocked
    } ,
    Customer_Num_Of_Orders :  {
        type : Number ,
        default : 0
    },
    Customer_CreatedSysDate      : { // automatic record the insert date
        type:Date,
        default:    new Date(),
    }
});


const customer = mongoose.model('customer', CustomerSchema);
module.exports = customer;
module.exports.getLastCode = function(callback) {
    customer.findOne({}, callback).sort({ Customer_Code: -1 });
  };
  