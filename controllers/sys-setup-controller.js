var Category=require("../models/lut-category-model");
var CodeNumber=require("../models/lut-code-number-model");
var Type=require("../models/lut-type-model");
var CategoryType=require("../models/lut-category-type-model");
var FactoryName=require("../models/lut-factory-name-model");


module.exports={
       /*********** Code Numbers ************* */
       addCodeNumber:(req,res)=>{
        const newCodeNumber=new CodeNumber();
        newCodeNumber.ACN_Seri=req.body.ACN_Seri;
        newCodeNumber.ACN_Numbers=req.body.ACN_Numbers;
        newCodeNumber.save((err,document)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editCodeNumberById:(req,res)=>{
        var updatedCodeNumber={}
        updatedCodeNumber.ACN_Seri=req.body.ACN_Seri;
        updatedCodeNumber.ACN_Numbers=req.body.ACN_Numbers;

            CodeNumber.findByIdAndUpdate(req.body['_id'],updatedCodeNumber,{new: true},
            (err,CodeNumber)=>{
                if(err){
                    return resstatus(500).send({
                        message:err
                    })
                }else if(CodeNumber) {
                    return res.send({
                        message:true,
                        data:{ newCodeNumber:CodeNumber }
                    })
                }else{
                    return res.send({
                        message:"updated Code Number is null"
                    })
                }
            })
    },

    getAllCodeNumbers:(req,res)=>{
        CodeNumber.find({}).exec((err,CodeNumbers)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else if(CodeNumbers) {
                return res.send(CodeNumbers)
            }else{
                return res.send({
                    message:"CodeNumbers are null"
                })
            }

        })
    },


    getOneCodeNumberById:(req,res)=>{
        CodeNumber.findById(req.body['_id']).exec((err,CodeNumber)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(CodeNumber) {
                return res.send(CodeNumber)
            }else{
                return res.send({
                    message:"CodeNumber is null"
                })
            }

        })
    },


    /***********category Variant************* */
    addCategory:(req,res)=>{
        const newCategory=new Category();
        newCategory.ACat_Seri=req.body.ACat_Seri;
        newCategory.ACat_ACN_Seri=req.body.ACat_ACN_Seri;
        newCategory.ACat_Desc=req.body.ACat_Desc;
        newCategory.save((err,document)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editCategoryById:(req,res)=>{
        var updatedCategory={}
        updatedCategory.ACat_Seri=req.body.ACat_Seri;
        updatedCategory.ACat_ACN_Seri=req.body.ACat_ACN_Seri;
        updatedCategory.ACat_Desc=req.body.ACat_Desc;

            Category.findByIdAndUpdate(req.body['_id'],updatedCategory,{new: true},
            (err,category)=>{
                if(err){
                    return res.status(500).send({
                        message:err
                    })
                }else if(category) {
                    return res.send({
                        message:true,
                        data:{ newCategory:category }
                    })
                }else{
                    return res.send({
                        message:"updated category is null"
                    })
                }
            })
    },

    getAllCategories:(req,res)=>{
        Category.find({})
        .populate({path : "ACat_ACN_Seri" ,select :"ACN_Numbers"})
        .exec((err,categories)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else if(categories) {
                return res.send(categories)
            }else{
                return res.send({
                    message:"categories are null"
                })
            }

        })
    },

    getOneCategoryById:(req,res)=>{
        Category.findById(req.body['_id']).exec((err,category)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(category) {
                return res.send(category)
            }else{
                return res.send({
                    message:"category is null"
                })
            }

        })
    },


    /*********** Type ************* */
    addType:(req,res)=>{
        const newType=new Type();
        newType.AT_Seri=req.body.AT_Seri;
        newType.AT_Number=req.body.AT_Number;
        newType.AT_Desc=req.body.AT_Desc;//might needs modification in future 
        newType.save((err,document)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
           
        })
    },

    editTypeById:(req,res)=>{
        
            var updatedType={}
            updatedType.AT_Seri=req.body.AT_Seri;
            updatedType.AT_Number=req.body.AT_Number;
            updatedType.AT_Desc=req.body.AT_Desc;
            
            Type.findByIdAndUpdate(req.body['_id'],updatedType,{new: true},
            (err,color)=>{
                if(err){
                    return res.status(500).send({
                        message:err
                    })
                }else if(color) {
                    return res.send({
                        message:true,
                        data:{ newColor:color }
                    })
                }else{
                    return res.send({
                        message:"updated color is null"
                    })
                }
            })
    },

    getAllTypes:(req,res)=>{
        Type.find({}).exec((err,types)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else if(types) {
                return res.send(types)
            }else{
                return res.send({
                    message:"types are null"
                })
            }

        })
    },

    getOneTypeById: (req,res)=>{
        console.log("ccccccccccccccccccccc")
        Type.findById(req.body['_id']).exec((err,type)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else if(type) {
                return res.send(type)
            }else{
                return res.send({
                    message:"type is null"
                })
            }

        })
    },


    /***********category type************* */
    addCategoryType:(req,res)=>{
        const newCategoryType=new CategoryType();
        newCategoryType.ACT_Seri= req.body.ACT_Seri;
        newCategoryType.ACT_ACat_Seri= req.body.ACT_ACat_Seri;
        newCategoryType.ACT_AT_Seri= req.body. ACT_AT_Seri
        newCategoryType.save((err,document)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editCategoryTypeById:(req,res)=>{
        var updatedCategoryType={}
        updatedCategoryType.ACT_Seri=req.body.ACT_Seri;
        updatedCategoryType.ACT_ACat_Seri=req.body.ACT_ACat_Seri;
        updatedCategoryType.ACT_AT_Seri=req.body.ACT_AT_Seri;

            CategoryType.findByIdAndUpdate(req.body['_id'],updatedCategoryType,{new: true},
            (err,categoryType)=>{
                if(err){
                    return res.status(500).send({
                        message:err
                    })
                }else if(categoryType) {
                    return res.send({
                        message:true,
                        data:{ newCategoryType:categoryType }
                    })
                }else{
                    return res.send({
                        message:"updated categoryType is null"
                    })
                }
            })
    },

    getAllCategoryTypes:(req,res)=>{
        CategoryType.find({})
        .populate({path : "ACT_ACat_Seri" ,select :"ACat_ACN_Seri ACat_Desc"})
        .populate({path : "ACT_AT_Seri" ,select :"AT_Number AT_Desc"})

        .exec((err,categoryTypes)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else if(categoryTypes) {
                return res.send(categoryTypes)
            }else{
                return res.send({
                    message:"categoryTypes are null"
                })
            }

        })
    },

    getOneCategoryTypeById:(req,res)=>{
        CategoryType.findById(req.body['_id']).exec((err,categoryType)=>{
            if(err){
                return res.status(500).send({
                    message:err
                })
            }else if(categoryType) {
                return res.send(categoryType)
            }else{
                return res.send({
                    message:"categoryType is null"
                })
            }

        })
    },

    /***********Factory Name ************* */
    addFactoryName:(req,res)=>{
        const newFactoryName=new FactoryName();
        newFactoryName.AFN_Seri=req.body.AFN_Seri;
        newFactoryName.AFN_Desc=req.body.AFN_Desc;
        newFactoryName.save((err,document)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editFactoryNameById:(req,res)=>{
        var updatedFactoryName={}
        updatedFactoryName.AFN_Seri=req.body.AFN_Seri;
        updatedFactoryName.AFN_Desc=req.body.AFN_Desc;

        FactoryName.findByIdAndUpdate(req.body['_id'],updatedFactoryName,{new: true},
            (err,factoryName)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(factoryName) {
                    return res.send({
                        message:true,
                        data:{ newFactoryName:factoryName }
                    })
                }else{
                    return res.send({
                        message:"updated factoryName is null"
                    })
                }
            })
    },

    getAllFactoryNames:(req,res)=>{
        FactoryName.find({}).exec((err,factoryNames)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(factoryNames) {
                return res.send(factoryNames)
            }else{
                return res.send({
                    message:"factoryNames are null"
                })
            }

        })
    },

    getOneFactoryNameById:(req,res)=>{
        FactoryName.findById(req.body['_id']).exec((err,factoryName)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(factoryName) {
                return res.send(factoryName)
            }else{
                return res.send({
                    message:"factoryName is null"
                })
            }

        })
    },





    
  

     /*********** Countries ************* */
     addCountry:(req,res)=>{
        const newCountry=new Country();
        newCountry.Country_Name=req.body.Country_Name;
        newCountry.Country_ShortCode=req.body.Country_ShortCode;
        newCountry.save((err,document)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editCountryById:(req,res)=>{
        var updatedCountry={}
        updatedCountry.Country_Name=req.body.Country_Name;
        updatedCountry.Country_ShortCode=req.body.Country_ShortCode;
        updatedCountry.Country_IsActive=req.body.Country_IsActive;

            Country.findByIdAndUpdate(req.body['_id'],updatedCountry,{new: true},
            (err,country)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(country) {
                    return res.send({
                        message:true,
                        data:{ newCountry:country }
                    })
                }else{
                    return res.send({
                        message:"updated country is null"
                    })
                }
            })
    },

    getAllCountries:(req,res)=>{
        Country.find({}).exec((err,countries)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(countries) {
                return res.send(countries)
            }else{
                return res.send({
                    message:"countries are null"
                })
            }

        })
    },

    getAllCountriesActive:(req,res)=>{
        Country.find({Country_IsActive:true}).exec((err,activeCountries)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(activeCountries) {
                return res.send(activeCountries)
            }else{
                return res.send({
                    message:"Countries are null"
                })
            }

        })
    },

    getOneCountryById:(req,res)=>{
        Country.findById(req.body['_id']).exec((err,Country)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(Country) {
                return res.send(Country)
            }else{
                return res.send({
                    message:"Country is null"
                })
            }

        })
    },

     /*********** payment methods ************* */
     addPayment:(req,res)=>{
        const newPayment=new Payment();
        newPayment.PaymentMethod_Name=req.body.PaymentMethod_Name;
        newPayment.PaymentMethod_Description=req.body.PaymentMethod_Description;
        newPayment.save((err,document)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editPaymentById:(req,res)=>{
        var updatedPayment={}
        updatedPayment.PaymentMethod_Name=req.body.PaymentMethod_Name;
        updatedPayment.PaymentMethod_Description=req.body.PaymentMethod_Description;
        updatedPayment.PaymentMethod_IsActive=req.body.PaymentMethod_IsActive;

            Payment.findByIdAndUpdate(req.body['_id'],updatedPayment,{new: true},
            (err,payment)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(payment) {
                    return res.send({
                        message:true,
                        data:{ newPayment:payment }
                    })
                }else{
                    return res.send({
                        message:"updated payment is null"
                    })
                }
            })
    },

    getAllPayments:(req,res)=>{
        Payment.find({}).exec((err,payments)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(payments) {
                return res.send(payments)
            }else{
                return res.send({
                    message:"payments are null"
                })
            }

        })
    },

    getAllPaymentsActive:(req,res)=>{
        Payment.find({PaymentMethod_IsActive:true}).exec((err,activePayments)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(activePayments) {
                return res.send(activePayments)
            }else{
                return res.send({
                    message:"Payments are null"
                })
            }

        })
    },

    getOnePaymentById:(req,res)=>{
        Payment.findById(req.body['_id']).exec((err,payment)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(payment) {
                return res.send(payment)
            }else{
                return res.send({
                    message:"payment is null"
                })
            }

        })
    },

    /*********** ways of deliveries ************* */
    addDelivery:(req,res)=>{
        const newDelivery=new Delivery();
        newDelivery.WayOfDeliverySchema_Name=req.body.WayOfDeliverySchema_Name;
        newDelivery.WayOfDeliverySchema_Description=req.body.WayOfDeliverySchema_Description;
        newDelivery.save((err,document)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editDeliveryById:(req,res)=>{
        var updatedDelivery={}
        updatedDelivery.WayOfDeliverySchema_Name=req.body.WayOfDeliverySchema_Name;
        updatedDelivery.WayOfDeliverySchema_Description=req.body.WayOfDeliverySchema_Description;
        updatedDelivery.WayOfDeliverySchema_IsActive=req.body.WayOfDeliverySchema_IsActive;

            Delivery.findByIdAndUpdate(req.body['_id'],updatedDelivery,{new: true},
            (err,delivery)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(delivery) {
                    return res.send({
                        message:true,
                        data:{ newDelivery:delivery }
                    })
                }else{
                    return res.send({
                        message:"updated Delivery is null"
                    })
                }
            })
    },

    getAllDeliveries:(req,res)=>{
        Delivery.find({}).exec((err,deliveries)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(deliveries) {
                return res.send(deliveries)
            }else{
                return res.send({
                    message:"deliveries are null"
                })
            }

        })
    },

    getAllDeliveriesActive:(req,res)=>{
        Delivery.find({WayOfDeliverySchema_IsActive:true}).exec((err,activeDeliveries)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(activeDeliveries) {
                return res.send(activeDeliveries)
            }else{
                return res.send({
                    message:"deliveries are null"
                })
            }

        })
    },

    getOneDeliveryById:(req,res)=>{
        Delivery.findById(req.body['_id']).exec((err,delivery)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(delivery) {
                return res.send(delivery)
            }else{
                return res.send({
                    message:"delivery is null"
                })
            }

        })
    },
    
     /*********** Provinces ************* */
     addProvince:(req,res)=>{
        const newProvince=new Province();
        newProvince.Province_Name=req.body.Province_Name;
        newProvince.Province_ShortCode=req.body.Province_ShortCode;
        newProvince.save((err,document)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editProvinceById:(req,res)=>{
        var updatedProvince={}
        updatedProvince.Province_Name=req.body.Province_Name;
        updatedProvince.Province_ShortCode=req.body.Province_ShortCode;
        updatedProvince.Province_IsActive=req.body.Province_IsActive;

            Province.findByIdAndUpdate(req.body['_id'],updatedProvince,{new: true},
            (err,province)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(province) {
                    return res.send({
                        message:true,
                        data:{ newProvince:province }
                    })
                }else{
                    return res.send({
                        message:"updated province is null"
                    })
                }
            })
    },

    getAllProvinces:(req,res)=>{
        Province.find({}).exec((err,provinces)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(provinces) {
                return res.send(provinces)
            }else{
                return res.send({
                    message:"provinces are null"
                })
            }

        })
    },

    getAllProvincesActive:(req,res)=>{
        Province.find({Province_IsActive:true}).exec((err,activeProvinces)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(activeProvinces) {
                return res.send(activeProvinces)
            }else{
                return res.send({
                    message:"activeProvinces are null"
                })
            }

        })
    },

    getOneProvinceById:(req,res)=>{
        Province.findById(req.body['_id']).exec((err,province)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(province) {
                return res.send(province)
            }else{
                return res.send({
                    message:"province is null"
                })
            }

        })
    },

    /*********** Reasons of Returns ************* */
    addReturnReason:(req,res)=>{
        const newReason=new ReturnReason();
        newReason.ReasonOfReturn_Name=req.body.ReasonOfReturn_Name;
        newReason.ReasonOfReturn_Description=req.body.ReasonOfReturn_Description;
        newReason.save((err,document)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editReturnReasonById:(req,res)=>{
        var updatedReason={}
        updatedReason.ReasonOfReturn_Name=req.body.ReasonOfReturn_Name;
        updatedReason.ReasonOfReturn_Description=req.body.ReasonOfReturn_Description;
        updatedReason.ReasonOfReturn_IsActive=req.body.ReasonOfReturn_IsActive;

        ReturnReason.findByIdAndUpdate(req.body['_id'],updatedReason,{new: true},
            (err,reason)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(reason) {
                    return res.send({
                        message:true,
                        data:{ newReason:reason }
                    })
                }else{
                    return res.send({
                        message:"updated reason is null"
                    })
                }
            })
    },

    getAllReturnReasons:(req,res)=>{
        ReturnReason.find({}).exec((err,reasons)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(reasons) {
                return res.send(reasons)
            }else{
                return res.send({
                    message:"reasons are null"
                })
            }

        })
    },

    getAllReturnReasonsActive:(req,res)=>{
        ReturnReason.find({ReasonOfReturn_IsActive:true}).exec((err,activeReasons)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(activeReasons) {
                return res.send(activeReasons)
            }else{
                return res.send({
                    message:"activeReasons are null"
                })
            }

        })
    },

    getOneReturnReasonById:(req,res)=>{
        ReturnReason.findById(req.body['_id']).exec((err,reason)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(reason) {
                return res.send(reason)
            }else{
                return res.send({
                    message:"reason is null"
                })
            }

        })
    },

    /*********** Reasons of Cancel order ************* */
    addCancelReason:(req,res)=>{
        const newReason=new CancelReason();
        newReason.ReasonOfCalcelation_Name=req.body.ReasonOfCalcelation_Name;
        newReason.ReasonOfCalcelation_Description=req.body.ReasonOfCalcelation_Description;
        newReason.ReasonOfCalcelation_CanBeFollowedUp = req.body.ReasonOfCalcelation_CanBeFollowedUp
        newReason.save((err,document)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else {
                return res.send({
                    message:true
                })
            }
        })
    },

    editCancelReasonById:(req,res)=>{
        var updatedReason={}
        updatedReason.ReasonOfCalcelation_Name=req.body.ReasonOfCalcelation_Name;
        updatedReason.ReasonOfCalcelation_Description=req.body.ReasonOfCalcelation_Description;
        updatedReason.ReasonOfCalcelation_IsActive=req.body.ReasonOfCalcelation_IsActive;
        updatedReason.ReasonOfCalcelation_CanBeFollowedUp = req.body.ReasonOfCalcelation_CanBeFollowedUp

        CancelReason.findByIdAndUpdate(req.body['_id'],updatedReason,{new: true},
            (err,reason)=>{
                if(err){
                    return res.send({
                        message:err
                    })
                }else if(reason) {
                    return res.send({
                        message:true,
                        data:{ newReason:reason }
                    })
                }else{
                    return res.send({
                        message:"updated reason is null"
                    })
                }
            })
    },

    getAllCancelReasons:(req,res)=>{
        CancelReason.find({}).exec((err,reasons)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(reasons) {
                return res.send(reasons)
            }else{
                return res.send({
                    message:"reasons are null"
                })
            }

        })
    },

    getAllCancelReasonsActive:(req,res)=>{
        CancelReason.find({ReasonOfCalcelation_IsActive:true}).exec((err,activeReasons)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(activeReasons) {
                return res.send(activeReasons)
            }else{
                return res.send({
                    message:"activeReasons are null"
                })
            }

        })
    },

    getOneCancelReasonById:(req,res)=>{
        CancelReason.findById(req.body['_id']).exec((err,reason)=>{
            if(err){
                return res.send({
                    message:err
                })
            }else if(reason) {
                return res.send(reason)
            }else{
                return res.send({
                    message:"reason is null"
                })
            }

        })
    },
}