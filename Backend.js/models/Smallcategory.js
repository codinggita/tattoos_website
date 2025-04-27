const mongoose = require('mongoose');

const smallCategorySchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  liked: {
    type: Boolean,
    default: false
  }
});

smallCategorySchema.methods.like = function () {
  this.likes += 1;
  this.liked = true;
  return this.save();
};

const SmallCategory = mongoose.model('SmallCategory', smallCategorySchema, 'smallcategory'); // ✅ Use correct collection name

module.exports = SmallCategory;
