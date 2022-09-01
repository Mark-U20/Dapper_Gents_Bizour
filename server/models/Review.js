const { Schema, model, SchemaTypes } = require("mongoose");

const reviewSchema = new Schema(
    {
        review_rating: {
            type: Number,
            required: [true, 'You must give a score between 0 and 10'],
            min: 0,
            max: 10,

        },
        review_title: {
            type: String,
            required: true,
        },
        review_text: {
            type: String,
            required: true,
        },
        review_author: {
            type: SchemaTypes.ObjectId,
            ref: 'User'
        },
    }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
