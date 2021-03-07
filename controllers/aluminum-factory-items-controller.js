var FactoryItem = require('../models/aluminum-factory-item');

module.exports={
    addFactoryItem:(req,res)=>{
        let nextCode = 1 ;
        FactoryItem.findOne({}, (err,item)=>{
            if(err) return res.status(500).send({err : err})
            else if(item) nextCode = item.AFI_Seri + 1;

            const newFactoryItem = new FactoryItem();
            newFactoryItem.AFI_Seri=nextCode;
            newFactoryItem.AFI_AFN_Seri=req.body.AFI_AFN_Seri;
            newFactoryItem.AFI_OriginalNumber=req.body.AFI_OriginalNumber;
            newFactoryItem.AFI_ACT_Seri=req.body.AFI_ACT_Seri;
            newFactoryItem.AFI_AI_Seri=req.body.AFI_AI_Seri;

            newFactoryItem.save((err,document)=>{
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
        }).sort({ AFI_Seri: -1 })
        
},

editFactoryItemById:(req,res)=>{
    var updatedFactoryItem={}
    updatedFactoryItem.AFI_AFN_Seri=req.body.AFI_AFN_Seri;
    updatedFactoryItem.AFI_OriginalNumber=req.body.AFI_OriginalNumber;
    updatedFactoryItem.AFI_ACT_Seri=req.body.AFI_ACT_Seri;
    updatedFactoryItem.AFI_AI_Seri=req.body.AFI_AI_Seri;

    FactoryItem.findByIdAndUpdate(req.body['_id'],updatedFactoryItem,{new: true},
    (err,FactoryItem)=>{
        if(err){
            return res.status(500).send({
                message:err
            })
        }else if(FactoryItem) {
            return res.send({
                message:true,
                data:{ updatedFactoryItem: FactoryItem }
            })
        }else{
            return res.send({
                message:"updated FactoryItem is null"
            })
        }
    })
},

getAll:(req,res)=>{
    FactoryItem.find({})
    .populate({path : "AFI_AFN_Seri" ,select :"AFN_Desc"})
    .populate({path : "AFI_ACT_Seri" ,select :"ACT_ACat_Seri ACT_AT_Seri",
                populate : {path: 'ACT_ACat_Seri',model:'lut_category'},
                populate : {path: 'ACT_AT_Seri',model:'lut_type'}
            })
    .populate({path : "AFI_AI_Seri" ,select :"AI_Ser AI_ArabicName"})
        

    .exec((err,items)=>{
        if(err){
            return res.status(500).send({
                message:err
            })
        }else if(items) {
            return res.send(items)
        }else{
            return res.send({
                message:"items are null"
            })
        }

    })
},

getOneById:(req,res)=>{
    FactoryItem.findById(req.body['_id']).exec((err,item)=>{
        if(err){
            return res.status(500).send({
                message:err
            })
        }else if(item) {
            return res.send(item)
        }else{
            return res.send({
                message:"item is null"
            })
        }

    })
},
}