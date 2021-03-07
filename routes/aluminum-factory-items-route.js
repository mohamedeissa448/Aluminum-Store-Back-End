var express = require('express');
var router = express.Router();
var aluminumFactoryItemController=require('../controllers/aluminum-factory-items-controller');

router.post('/addFactoryItem',async function(req, res, next) {
    await aluminumFactoryItemController.addFactoryItem(req, res);
});

router.post('/editFactoryItemById',async function(req, res, next) {
    await aluminumFactoryItemController.editFactoryItemById(req, res); 
});

router.get('/getAll',async function(req, res, next) {
    await aluminumFactoryItemController.getAll(req, res);
});

router.post('/getOneById',async function(req, res, next) {
    await aluminumFactoryItemController.getOneById(req, res);
});

module.exports = router;
