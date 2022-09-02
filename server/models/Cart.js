const { Schema, model, SchemaTypes } = require('mongoose');

const cartSchema = new Schema({
  title: {
    type: SchemaTypes.ObjectId,
    ref: 'Listing',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;
