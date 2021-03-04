var express = require('express');
var router = express.Router();
var sysSetupController=require('../controllers/sys-setup-controller');

/**************   code number routes           ********** */

router.post('/codeNumbers/addCodeNumber',async function(req, res, next) {
    await(sysSetupController.addCodeNumber(req, res));
});

router.post('/codeNumbers/editCodeNumberById',async function(req, res, next) {
    await(sysSetupController.editCodeNumberById(req, res));
});

router.get('/codeNumbers/getAllCodeNumbers',async function(req, res, next) {
    await(sysSetupController.getAllCodeNumbers(req, res));
});
router.post('/codeNumbers/getOneCodeNumberById',async function(req, res, next) {
    await(sysSetupController.getOneCodeNumberById(req, res));
});
/**************   category routes        ********** */
router.post('/categories/addCategory',async function(req, res, next) {
    await(sysSetupController.addCategory(req, res));
});

router.post('/categories/editCategoryById',async function(req, res, next) {
    await(sysSetupController.editCategoryById(req, res));
});

router.get('/categories/getAllCategories',async function(req, res, next) {
    await(sysSetupController.getAllCategories(req, res));
});


router.post('/categories/getOneCategoryById',async function(req, res, next) {
    await(sysSetupController.getOneCategoryById(req, res));
});

/**************   types routes           ********** */
router.post('/types/addType',async function(req, res, next) {
    await(sysSetupController.addType(req, res));
 ;
});

router.post('/types/editTypeById',async function(req, res, next) {
    await(sysSetupController.editTypeById(req, res));
});

router.get('/types/getAllTypes',async function(req, res, next) {
    await(sysSetupController.getAllTypes(req, res));
 
});


router.post('/types/getOneTypeById', async function(req, res, next) {
  await(sysSetupController.getOneTypeById(req, res));
});


/**************   category type routes           ********** */

router.post('/categoryTypes/addCategoryType',async function(req, res, next) {
    await(sysSetupController.addCategoryType(req, res));
});

router.post('/categoryTypes/editCategoryTypeById',async function(req, res, next) {
    await(sysSetupController.editCategoryTypeById(req, res));
});

router.get('/categoryTypes/getAllCategoryTypes',async function(req, res, next) {
    await(sysSetupController.getAllCategoryTypes(req, res));
});


router.post('/categoryTypes/getOneCategoryTypeById',async function(req, res, next) {
    await(sysSetupController.getOneCategoryTypeById(req, res));
});


/**************   product materials routes           ********** */

router.post('/factoryNames/addFactoryName',async function(req, res, next) {
    await(sysSetupController.addFactoryName(req, res));
});

router.post('/factoryNames/editFactoryNameById',async function(req, res, next) {
    await(sysSetupController.editFactoryNameById(req, res));
});

router.get('/factoryNames/getAllFactoryNames',async function(req, res, next) {
    await(sysSetupController.getAllFactoryNames(req, res));
});

router.post('/factoryNames/getOneFactoryNameById',async function(req, res, next) {
    await(sysSetupController.getOneFactoryNameById(req, res));
});



/**************   Country routes           ********** */

router.post('/countries/addCountry',async function(req, res, next) {
    await(sysSetupController.addCountry(req, res));
});

router.post('/countries/editCountryById',async function(req, res, next) {
    await(sysSetupController.editCountryById(req, res));
});

router.get('/countries/getAllCountries',async function(req, res, next) {
    await(sysSetupController.getAllCountries(req, res));
});

router.get('/countries/getAllCountriesActive',async function(req, res, next) {
    await(sysSetupController.getAllCountriesActive(req, res));
});

router.post('/countries/getOneCountryById',async function(req, res, next) {
    await(sysSetupController.getOneCountryById(req, res));
});

/**************   payment methods routes           ********** */

router.post('/payments/addPayment',async function(req, res, next) {
    await(sysSetupController.addPayment(req, res));
});

router.post('/payments/editPaymentById',async function(req, res, next) {
    await(sysSetupController.editPaymentById(req, res));
});

router.get('/payments/getAllPayments',async function(req, res, next) {
    await(sysSetupController.getAllPayments(req, res));
});

router.get('/payments/getAllPaymentsActive',async function(req, res, next) {
    await(sysSetupController.getAllPaymentsActive(req, res));
});

router.post('/payments/getOnePaymentById',async function(req, res, next) {
    await(sysSetupController.getOnePaymentById(req, res));
});

/**************   ways of delivery routes           ********** */

router.post('/deliveries/addDelivery',async function(req, res, next) {
    await(sysSetupController.addDelivery(req, res));
});

router.post('/deliveries/editDeliveryById',async function(req, res, next) {
    await(sysSetupController.editDeliveryById(req, res));
});

router.get('/deliveries/getAllDeliveries',async function(req, res, next) {
    await(sysSetupController.getAllDeliveries(req, res));
});

router.get('/deliveries/getAllDeliveriesActive',async function(req, res, next) {
    await(sysSetupController.getAllDeliveriesActive(req, res));
});

router.post('/deliveries/getOneDeliveryById',async function(req, res, next) {
    await(sysSetupController.getOneDeliveryById(req, res));
});

/**************   province routes           ********** */

router.post('/provinces/addProvince',async function(req, res, next) {
    await(sysSetupController.addProvince(req, res));
});

router.post('/provinces/editProvinceById',async function(req, res, next) {
    await(sysSetupController.editProvinceById(req, res));
});

router.get('/provinces/getAllProvinces',async function(req, res, next) {
    await(sysSetupController.getAllProvinces(req, res));
});

router.get('/provinces/getAllProvincesActive',async function(req, res, next) {
    await(sysSetupController.getAllProvincesActive(req, res));
});

router.post('/provinces/getOneProvinceById',async function(req, res, next) {
    await(sysSetupController.getOneProvinceById(req, res));
});

/**************   reason of return orders routes           ********** */

router.post('/return-reasons/addReturnReason',async function(req, res, next) {
    await(sysSetupController.addReturnReason(req, res));
});

router.post('/return-reasons/editReturnReasonById',async function(req, res, next) {
    await(sysSetupController.editReturnReasonById(req, res));
});

router.get('/return-reasons/getAllReturnReasons',async function(req, res, next) {
    await(sysSetupController.getAllReturnReasons(req, res));
});

router.get('/return-reasons/getAllReturnReasonsActive',async function(req, res, next) {
    await(sysSetupController.getAllReturnReasonsActive(req, res));
});

router.post('/return-reasons/getOneReturnReasonById',async function(req, res, next) {
    await(sysSetupController.getOneReturnReasonById(req, res));
});

/**************   reason of cancel orders routes           ********** */

router.post('/cancel-reasons/addCancelReason',async function(req, res, next) {
    await(sysSetupController.addCancelReason(req, res));
});

router.post('/cancel-reasons/editCancelReasonById',async function(req, res, next) {
    await(sysSetupController.editCancelReasonById(req, res));
});

router.get('/cancel-reasons/getAllCancelReasons',async function(req, res, next) {
    await(sysSetupController.getAllCancelReasons(req, res));
});

router.get('/cancel-reasons/getAllCancelReasonsActive',async function(req, res, next) {
    await(sysSetupController.getAllCancelReasonsActive(req, res));
});

router.post('/cancel-reasons/getOneCancelReasonById',async function(req, res, next) {
    await(sysSetupController.getOneCancelReasonById(req, res));
});

module.exports = router;
