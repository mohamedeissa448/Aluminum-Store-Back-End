var express = require('express');
var router = express.Router();
var AluminumItemController=require('../controllers/aluminum-items-controller');

router.post('/addAluminumItem',async function(req, res, next) {
    await(AluminumItemController.addAluminumItem(req, res));
});

router.post('/editAluminumItem',async function(req, res, next) {
    await(AluminumItemController.editAluminumItem(req, res));
});

router.get('/getAll',async function(req, res, next) {
    await(AluminumItemController.getAll(req, res));
});


router.post('/getOneById',async function(req, res, next) {
    await(AluminumItemController.getOneById(req, res));
});

module.exports = router;
