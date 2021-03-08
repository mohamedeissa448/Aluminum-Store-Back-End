var mongoose = require('mongoose');
var passwordHash = require("password-hash");

var CustomerSchema = mongoose.Schema({
    
    Customer_Code     	         : Number, // auto increment 
    Customer_Name                : String,
    Customer_DisplayName         : String,
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

CustomerSchema.methods.verifyPassword = function(password) {
    if (passwordHash.verify(password, this.Customer_Password) == 1) 
        return 1;
    else return 0;
  };
  
  CustomerSchema.methods.updatePassword = function(password) {
    this.Customer_Password = passwordHash.generate(password);
    this.save();
  };
  

const customer = mongoose.model('customer', CustomerSchema);
module.exports = customer;
module.exports.getLastCode = function(callback) {
    customer.findOne({}, callback).sort({ Customer_Code: -1 });
  };
  