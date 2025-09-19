// const { MongoClient, ObjectId } = require("mongodb");
// require("dotenv").config();

// const uri = process.env.MONGO_URI || "mongodb+srv://kiranchaudharycg:IW0hS0AUPz9Ojy4w@cluster0.dglen.mongodb.net/";
// const dbName = "smallcategory";

// let db, stippling;

// // Initialize MongoDB Connection
// async function connectDB() {
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
//         stippling = db.collection("stippling");
//     } catch (err) {
//         console.error("❌ MongoDB Connection Error:", err);
//         process.exit(1);
//     }
// }

// // Fetch all stippling tattoo offers
// async function getAllStipplingOffers() {
//     return await stippling.find().toArray();
// }

// // Add a new stippling tattoo offer
// async function addStipplingOffer(data) {
//     return await stippling.insertOne(data);
// }

// // Like a tattoo
// async function likeTattoo(id) {
//     return await stippling.updateOne(
//         { _id: new ObjectId(id) },
//         { $inc: { likes: 1 }, $set: { liked: true } }
//     );
// }

// module.exports = { connectDB, getAllStipplingOffers, addStipplingOffer, likeTattoo, ObjectId };

const mongoose = require('mongoose');

const stipplingSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  description: String,
  likes: {
    type: Number,
    default: 0
  },
  liked: {
    type: Boolean,
    default: false
  }
});

const Stippling = mongoose.model('Stippling', stipplingSchema, 'stippling'); // ✅ Ensure collection name

module.exports = Stippling;
