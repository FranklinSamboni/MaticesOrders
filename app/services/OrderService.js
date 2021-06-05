
const orderRepository = require("../repositories/OrderRepository");
const orderStatusRepository = require("../repositories/OrderStatusRepository");
const clientRepository = require("../repositories/ClientRepository");
const productRepository = require("../repositories/ProductRepository");

module.exports.getOrders = function () {
    return orderRepository.getAll();
};

module.exports.getOrderById = function (params) {
    let id = params.id;
    if (id) {
        return orderRepository.getById(id);
    } else {
        return Promise.reject({ statusCode: 400, message: "'id' field is required" });
    }
};

module.exports.deleteOrder = function (body) {
    let id = body._id;
    if (id) {
        var orderDeleted = {}
        return orderRepository.deleteOrder({ _id: body._id }).then((order) => {
            if (order != null) {
                orderDeleted = order;
                let client = order.client;
                return clientRepository.deleteClient(client);
            } else {
                return Promise.reject({ statusCode: 404, message: "Orden no encontrada" });
            }

        }).then(client => {
            let orderProducts = orderDeleted.products;
            let ids = orderProducts.map(function(product) {
                return product._id;
              });
            return productRepository.deleteAllProduct(ids);
        }).then(products => {
            return orderDeleted;
        });
    } else {
        return Promise.reject({ statusCode: 400, message: "'_id' field is required" });
    }
};

module.exports.addOrder = function (body) {
    return isValidOrder(body)
        .then(order => {
            order.dateCreated = Date.now();
            return orderRepository.createOrder(order);
        });
};

module.exports.updateOrder = function (body) {
    var updateOrder = {}
    return isValidOrder(body)
        .then(order => {
            let id = body._id;
            if (!id) {
                return Promise.reject({ statusCode: 400, message: "'_id' field of order is required" });
            } else {
                updateOrder._id = id;
                if (order.status) updateOrder.status = order.status;
                if (order.dateSent) updateOrder.dateSent = order.dateSent;
                if (order.client) updateOrder.client = order.client;
                if (order.shipper) updateOrder.shipper = order.shipper;
                if (order.shippingAddress) updateOrder.shippingAddress = order.shippingAddress;
                return orderRepository.updateOrder(updateOrder);
            }
        });
};

module.exports.addProductToOrder = function (body) {

    const order = {};
    const product = {};
    order._id = body.orderId;
    product._id = body.productId;

    if (!order._id) {
        return Promise.reject({ statusCode: 400, message: "'orderId' field is required" });
    }

    if (!product._id) {
        return Promise.reject({ statusCode: 400, message: "'productId' field is required" });
    }

    return orderRepository.addProductToOrder(order, product);
}

module.exports.deleteProductFromOrder = function (body) {

    const order = {};
    const product = {};
    order._id = body.orderId;
    product._id = body.productId;

    if (!order._id) {
        return Promise.reject({ statusCode: 400, message: "'orderId' field is required" });
    }

    if (!product._id) {
        return Promise.reject({ statusCode: 400, message: "'productId' field is required" });
    }

    return orderRepository.deleteProductFromOrder(order, product);
}

async function isValidOrder(body) {

    const order = {};

    if (!body.clientId) {
        return Promise.reject({ statusCode: 400, message: "'clientId' field is required" });
    }

    if (body.dateSent && typeof body.dateSent !== "number") {
        return Promise.reject({ statusCode: 400, message: "'dateSent' cannot be read, be sure is timestamp number type" });
    }

    if (body.status) {
        var statusFound = await orderStatusRepository.getByName(body.status);
        if (!statusFound) {
            return Promise.reject({ statusCode: 400, message: "the 'status' provided was not found" });
        } else {
            order.status = statusFound._id;
        }
    }

    var client = await clientRepository.getById(body.clientId);
    if (!client) {
        return Promise.reject({ statusCode: 400, message: "client not found" });
    }

    order.client = client._id;
    order.shipper = body.shipper ? body.shipper : "";
    order.shippingAddress = body.shippingAddress ? body.shippingAddress : "";
    if (body.dateSent) order.dateSent = body.dateSent;

    return order;
};