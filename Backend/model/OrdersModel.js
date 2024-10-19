const {model} = require ("mongoose");

const {OrderSchema} = require("../schema/OrdersSchema");

const OrdersModel = new model("order", "OrdersSchema");

module.exports = {OrdersModel};