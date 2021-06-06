const express = require('express');
const router = express.Router();

const colorController = require('./controllers/ColorController');
const sizeController = require('./controllers/SizeController');
const phoneCodeController = require('./controllers/PhoneCodeController');
const identificationTypeController = require('./controllers/IdentificationTypeController');
const orderStatusController = require('./controllers/OrderStatusController');
const clientController = require('./controllers/ClientController');
const productController = require('./controllers/ProductController');
const orderController = require('./controllers/OrderController');
const stampController = require('./controllers/StampController');

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
router.post('/client', clientController.addClient);
router.put('/client/', clientController.updateClient);
router.delete('/client', clientController.deleteClient);

router.get('/product', productController.getProducts);
router.get('/product/:id', productController.getProductById);
router.post('/product', productController.addProduct);
router.put('/product', productController.updateProduct);
router.delete('/product', productController.deleteProduct);

router.get('/order', orderController.getOrders);
router.get('/order/:id', orderController.getOrderById);
router.post('/order', orderController.addOrder);
router.put('/order', orderController.updateOrder);
router.delete('/order', orderController.deleteOrder);
router.post('/order/addproduct', orderController.addProductToOrder);
router.post('/order/removeproduct', orderController.deleteProductFromOrder);

router.get('/stamp', stampController.getAll);
router.post('/stamp', stampController.saveStamp);
router.delete('/stamp', stampController.deleteStamp);

module.exports = router;