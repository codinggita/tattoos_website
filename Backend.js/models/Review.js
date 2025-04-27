const mongoose = require('mongoose');

// Define the schema for reviews
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    default: null
  },
  approved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Static method to get approved reviews
reviewSchema.statics.getApprovedReviews = function () {
  return this.find({ approved: true }).sort({ createdAt: -1 });
};

// Static method to approve a review by ID
reviewSchema.statics.approveReview = function (id) {
  return this.findByIdAndUpdate(id, { approved: true }, { new: true });
};

// Use the correct collection name 'reviews1' (matching your MongoDB collection)
const Review = mongoose.model('Review', reviewSchema, 'reviews1');

module.exports = Review;
