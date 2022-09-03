const { Schema, model, SchemaTypes } = require('mongoose');

const cartSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;
