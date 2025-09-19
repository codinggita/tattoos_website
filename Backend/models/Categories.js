const mongoose = require('mongoose');

const homeCategorySchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  }
});

homeCategorySchema.statics.getHomeCategories = function () {
  return this.find(); 
};

const HomeCategory = mongoose.model('HomeCategory', homeCategorySchema, 'homecategories'); 

module.exports = HomeCategory;
