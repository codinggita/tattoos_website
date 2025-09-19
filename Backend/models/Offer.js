const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  imageurl: {
    type: String,
    required: true,
    trim: true
  }
});

offerSchema.statics.getOffers = function () {
  return this.find();
};

const Offer = mongoose.model('Offer', offerSchema, 'offer'); 

module.exports = Offer; 
