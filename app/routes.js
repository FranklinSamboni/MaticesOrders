const express = require('express');
const router = express.Router();

const orderController = require('./controllers/OrderController');
const colorController = require('./controllers/ColorController');
const sizeController = require('./controllers/SizeController');
const phoneCodeController = require('./controllers/PhoneCodeController');
const identificationTypeController = require('./controllers/IdentificationTypeController');
const orderStatusController = require('./controllers/OrderStatusController');
const clientController = require('./controllers/ClientController');

router.get('/orders', orderController.getOrders);

router.get('/color', colorController.getAvailableColors);
router.post('/color', colorController.saveColor);
router.delete('/color', colorController.deleteColor);

router.get('/size', sizeController.getAvailableSizes);
router.post('/size', sizeController.saveSize);
router.delete('/size', sizeController.deleteSize);

router.get('/phoneCode', phoneCodeController.getAvailablePhoneCodes);
router.post('/phoneCode', phoneCodeController.savePhoneCode);
router.delete('/phoneCode', phoneCodeController.deletePhoneCode);

router.get('/identificationType', identificationTypeController.getIdentificationTypes);
router.post('/identificationType', identificationTypeController.saveIdentificationType);
router.delete('/identificationType', identificationTypeController.deleteIdentificationType);

router.get('/orderStatus', orderStatusController.getOrderStatus);
router.post('/orderStatus', orderStatusController.saveOrderStatus);
router.delete('/orderStatus', orderStatusController.deleteOrderStatus);

router.get('/client', clientController.getClients);
router.get('/client/:id', clientController.getClientById);
router.post('/client', clientController.saveClient);
router.delete('/client', clientController.deleteClient);

module.exports = router;