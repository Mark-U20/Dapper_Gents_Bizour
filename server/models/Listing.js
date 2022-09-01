const { Schema, model, SchemaTypes } = require('mongoose');

const listingSchema = new Schema({
  item_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  listing_author: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Review",
    },
  ],
});

const Listing = model("Listing", listingSchema);

module.exports = Listing;
