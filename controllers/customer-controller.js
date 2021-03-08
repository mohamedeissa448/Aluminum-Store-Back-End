var Customer=require("../models/customer-model");
var Order =require("../models/order-model");
var passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");
const passport = require("passport");
var passwordHash = require("password-hash");

module.exports={
    addCustomer:(req,res)=>{
        Customer.getLastCode(function(err, customer) {
            if (customer) InsertIntoCustomer(customer.Customer_Code + 1);
            else InsertIntoCustomer(1);
          });
          function InsertIntoCustomer(NextCode) {
            let newCustomer=new Customer();
            newCustomer.Customer_Code=NextCode
            newCustomer.Customer_Name=req.body.Customer_Name;
            newCustomer.Customer_DisplayName= req.body.Customer_DisplayName;
            newCustomer.Customer_Email=req.body.Customer_Email;
            newCustomer.Customer_Phone=req.body.Customer_Phone;
            newCustomer.Customer_Address=req.body.Customer_Address;
            newCustomer.Customer_Password=passwordHash.generate(req.body.Customer_Password);
            newCustomer.Customer_Status=req.body.Customer_Status
            newCustomer.save((err,document)=>{
                if(err){
                    return res.send({
                        status:false,
                        message:err
                    })
                }else {
                    return res.send({
                        message:true,
                        CustomerID:document._id
                    })
                }
            })   
        }  
        
  },

  editCustomer:(req,res)=>{
       let updatedCustomer={};
        updatedCustomer.Customer_Name=req.body.Customer_Name;
        updatedCustomer.Customer_DisplayName= req.body.Customer_DisplayName;
        updatedCustomer.Customer_Email=req.body.Customer_Email;
        updatedCustomer.Customer_Phone=req.body.Customer_Phone;
        updatedCustomer.Customer_Address=req.body.Customer_Address;
        var newvalues={
            $set:updatedCustomer
        }
            Customer.findByIdAndUpdate(req.body['_id'],newvalues,{new: true},
            (err,customer)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(customer) {
                    return res.send({
                        message:true,
                        data:{ newCustomer:customer }
                    })
                }else{
                    return res.send({
                        message:"updated Customer is null"
                    })
                }
            })
    },

    getAll:(req,res)=>{
        Customer.find({})
        .exec((err,customers)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(customers) {
                return res.send(customers)
            }else{
                return res.send({
                    message:"customers are null"
                })
            }

        })
    },

    getAllActive:(req,res)=>{
        Customer.find({Customer_Status: 1})
        .exec((err,activeCustomers)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(activeCustomers) {
                return res.send(activeCustomers)
            }else{
                return res.send({
                    message:"activeCustomers are null"
                })
            }

        })
    },

    getOneById:(req,res)=>{
        Customer.findById(req.body['_id'])
        .exec((err,customer)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(customer) {
                return res.send(customer)
            }else{
                return res.send({
                    message:"customer is null"
                })
            }

        })
    }
    ,    
    
    changeCustomerStatus : (req,res)=>{
        let updatedCustomer={};
        updatedCustomer.Customer_Status=req.body.Customer_Status;
        var newvalues={
            $set:updatedCustomer
        }
            Customer.findByIdAndUpdate(req.body['_id'],newvalues,{new: true},
            (err,customer)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(customer) {
                    return res.send({
                        message:true
                    })
                }else{
                    return res.send({
                        message:"updated Customer is null"
                    })
                }
            })
    },

    login: function(req, res, next) {
        console.log("login start")
          passport.authenticate("customerLogin", function(err, user, info) {
            if (err) {
              return next(err);
            }
            if (!user) {
              console.log("No such user")
              return res.send({status: false});
            }
            req.logIn(user, function(err) {
              if (err) {
                return next(info);
              }
              else{
                return res.send(user);
              }
              
            });
          })(req, res, next);
    },

    changeMyPassword: function(request, res) {
        Customer.findById( request.body._id , function(err, user) {
          console.log("body",request.body._id)
          console.log("xx",1+1)
          if (err) {
            res.send({ message: err });
          } else if (user) {
            if (!user.verifyPassword(request.body.old_password)) {

              res.send({ message: false });
            } else {
              user.updatePassword(request.body.new_password);

              res.send({ message: true });
            }
          } else {
            res.send({ message: "Error" });
          }
        });
      },
  
      changeDisplayName: function(req, res) {
        var updated ={
          $set:{
            Customer_DisplayName :req.body.Customer_DisplayName
          }
        }
        Customer.findByIdAndUpdate(req.body.id ,updated, function(err, user) {
          if (err) {
            res.send({ message: err });
          } else if (user) {
            res.send({ message: true });
          } else {
            res.send({ message: "unknown Error" });
          }
        });
      },
      
      changeEmail: function(req, res) {
        var updated ={
          $set:{
            Customer_Email :req.body.Customer_Email
          }
        }
        Customer.findByIdAndUpdate(req.body.id ,updated, function(err, user) {
          if (err) {
            res.send({ message: err });
          } else if (user) {
            res.send({ message: true });
          } else {
            res.send({ message: "unknown Error" });
          }
        });
      },

    getAllOrdersForAspecificCustomer : (req,res)=>{
      Order.find({ Order_Customer : req.body.customerId })
      .populate({path:"Order_Customer",select:"Customer_Code Customer_Name Customer_ShippingAddress Address"})
        .populate({path:"Order_ShippingCompany"})
        .populate({path:"Order_Products.Product"})
        .populate({path:"Order_Products.Size_Variant"})
        .populate({path:"Order_Products.Color_Variant"})
        .populate({path:"Order_AffiliateSeller", select: "AffiliateSeller_Name AffiliateSeller_Phone"})
      .exec((err,orders)=>{
        if(err) return res.json({ message :err })
        else  (orders)
          res.json({message : true ,orders : orders})
      })
    } ,

    /************* reports */
    getNumOfAllCustomers : (req,res)=>{
      Customer.find()
      .countDocuments(function(err, count){
          if(err){
              return res.json({
                  message: false
              })
          }else  {
              return res.json({ count:count ,message : true })
          }
      });   
    },

    getNumOfAllActiveCustomers : (req,res)=>{
      Customer.find( { Customer_Status : 1 })
      .countDocuments(function(err, count){
          if(err){
              return res.json({
                  message: false
              })
          }else  {
              return res.json({ count:count ,message : true })
          }
      });   
    } ,

    getNumOfAllRiskyCustomers : (req,res)=>{
      Customer.find( { Customer_Status : 0 })
      .countDocuments(function(err, count){
          if(err){
              return res.json({
                  message:false
              })
          }else {
              return res.json({ count:count ,message : true })
          }
      });   
    } ,

    getNumOfAllBlockedCustomers : (req,res)=>{
      Customer.find( { Customer_Status : 2 })
      .countDocuments(function(err, count){
          if(err){
              return res.json({
                  message:false
              })
          }else  {
              return res.json({ count:count ,message : true })
          }
      });   
    } ,

    /*********second report */

    getNumOfAllCustomersWithOnlyOneOrder  : (req,res) => {
      Customer.find( { Customer_Num_Of_Orders : 1 })
      .countDocuments(function(err, count){
          if(err){
              return res.json({
                  message:false
              })
          }else  {
              return res.json({ count:count ,message : true })
          }
      });   
    },
    getNumOfAllCustomersWithOnlyTwoOrders : (req,res) => {
        Customer.find( { Customer_Num_Of_Orders : 2 })
      .countDocuments(function(err, count){
          if(err){
              return res.json({
                  message:false
              })
          }else  {
              return res.json({ count:count ,message : true })
          }
      });  
    },
    getNumOfAllCustomersWithThreeOrdersOrMore: (req,res) => {
        Customer.find( { Customer_Num_Of_Orders : { $gte: 3 } })
      .countDocuments(function(err, count){
          if(err){
              return res.json({
                  message:false
              })
          }else  {
              return res.json({ count:count ,message : true })
          }
      });  
    },

    /************ third report  */
    getCustomerNamesWithAspecificNumOfOrders : (req,res)=>{
        Customer.find( { Customer_Num_Of_Orders : req.body.NumberOfOrders })
        .exec(function(err, customers){
            if(err){
                return res.json({
                    message:false
                })
            }else  {
                return res.json({ customers:customers ,message : true })
            }
        }); 
    }
}