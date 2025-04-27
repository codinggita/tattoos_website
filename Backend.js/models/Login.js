const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  },
  designPreference: {
    type: [String], // Example: ["yes", "no"]
    default: [],
  },
  appointment: {
    type: [String], // Example: ["this weekend", "specific date"]
    default: [],
  },
}, {
  timestamps: true
});

const Login = mongoose.model("login", userSchema); // Collection name: 'login'

module.exports = Login;
