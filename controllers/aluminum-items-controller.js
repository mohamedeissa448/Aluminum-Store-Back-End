const multer = require('multer');
var AluminumItem=require("../models/lut-aluminum-item-model");
var storage = multer.diskStorage({
    //multers disk storage settings
    destination: function(req, file, cb) {
      cb(null, "./public/images");
    },
    filename: function(req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + "-" + datetimestamp + "." + file.originalname);
      console.log("fieldname", file.fieldname);
    }
  });
  var upload = multer({
    //multer settings
    storage: storage,
    fileFilter: function(req, file, callback) {
      //file filter
      if (
        ["jpg", "jpeg", "png", "PNG", "GIF", "JPEG"].indexOf(
          file.originalname.split(".")[file.originalname.split(".").length - 1]
        ) === -1
      ) {
        return callback(new Error("Wrong extension type"));
      }
      callback(null, true);
    }
  }).single("image");

module.exports={
    addAluminumItem:(req,res)=>{

         upload(req, res, function(err) {
            console.log("boooooodyxx", req.body);
            if (err) {
                res.status(422).json({ error_code: 1, err_desc: err });
                return;
            }
            /** Multer gives us file info in req.file object */
            if (!req.file) {
                res.json({ error_code: 1, err_desc: "No file passed" });
                return;
            }
            let nextCode = 1 ;
            AluminumItem.findOne({}, (err,item)=>{
                if(err) return res.status(500).send({err : err})
                else if(item) nextCode = item.AI_Seri + 1;
                let newItem=new AluminumItem();
                newItem.AI_Seri = nextCode;
                newItem.AI_MasterNo = req.body.AI_MasterNo;
                newItem.AI_ArabicName = req.body.AI_ArabicName
                newItem.AI_HebrewName = req.body.AI_HebrewName;
                newItem.AI_PictureNo = req.file.filename
            
                newItem.save((err,document)=>{
                    if(err){
                        return res.status(500).send({
                            message:err
                        })
                    }else {
                        return res.send({
                            message:true
                        })
                    }
                });
    
            }).sort({ AI_Seri: -1 });
            
        })
    },

    editAluminumItem:(req,res)=>{
        upload(req, res, function(err) {
            console.log("boooooodyxx", req.body);
            if (err) {
                res.status(422).json({ error_code: 1, err_desc: err });
                return;
            }
            /** Multer gives us file info in req.file object */
            if (!req.file) {
                res.json({ error_code: 1, err_desc: "No file passed" });
                return;
            }
            
            var updatedItem={}
            updatedItem.AI_MasterNo = req.body.AI_MasterNo;
            updatedItem.AI_ArabicName=req.body.AI_ArabicName;
            updatedItem.AI_HebrewName=req.body.AI_HebrewName;
            updatedItem.AI_PictureNo = req.file.filename;

            AluminumItem.findByIdAndUpdate(req.body['_id'],updatedItem,{new: true},
            (err,item)=>{
                if(err){
                    return res.status(500).send({
                        message:err
                    })
                }else if(item) {
                    return res.send({
                        message:true,
                        data:{ newItem:item }
                    })
                }else{
                    return res.send({
                        message:"updated item is null"
                    })
                }
            })

        });    
        
        
    },

    getAll:(req,res)=>{
        AluminumItem.find({})
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
        AluminumItem.findById(req.body['_id'])
        .exec((err,item)=>{
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