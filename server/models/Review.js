const { Schema, model, SchemaTypes } = require('mongoose');

const reviewSchema = new Schema({
  review_text: {
    type: String,
    required: true,
  },
  review_author: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
  },
});

const Review = model('Review', reviewSchema);

module.exports = Review;
