// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// const uri = process.env.MONGO_URI || "mongodb+srv://kiranchaudharycg:IW0hS0AUPz9Ojy4w@cluster0.dglen.mongodb.net/?retryWrites=true&w=majority&tls=true";
// const dbName = "blog";

// let db, blog;

// async function initializeDatabase() {
//     try {
//         const client = new MongoClient(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             tls: true,
//             serverSelectionTimeoutMS: 5000,
//         });

//         await client.connect();
//         console.log("✅ Connected to MongoDB");

//         db = client.db(dbName);
//         blog = db.collection("blog");
//     } catch (err) {
//         console.error("❌ Error connecting to MongoDB:", err);
//         process.exit(1);
//     }
// }

// // Function to get the blog collection
// function getBlogCollection() {
//     if (!blog) throw new Error("Database not initialized");
//     return blog;
// }

// module.exports = { initializeDatabase, getBlogCollection };



const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: 'Anonymous'
  },
  imageUrl: {
    type: String
  },
  tags: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  published: {
    type: Boolean,
    default: false
  }
});

// Optional: Middleware to update `updatedAt` field automatically
blogSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
