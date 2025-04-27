const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  imageurl: {
    type: String,
    required: true
  }
});

const Actor = mongoose.model('Actor', actorSchema, 'actors'); 

module.exports = Actor;
