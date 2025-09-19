// const { MongoClient, ObjectId } = require("mongodb");

// const dotenv = require("dotenv");

// dotenv.config();
// const uri = process.env.MONGODB_URI;
// const dbName = "userDB";

// let db, usersCollection;

// async function connectDB() {
//     if (!db) {
//         const client = new MongoClient(uri, { tls: true });
//         await client.connect();
//         console.log("✅ Connected to MongoDB");

//         db = client.db(dbName);
//         usersCollection = db.collection("users");
//     }
//     return { db, usersCollection };
// }

// module.exports = { connectDB, ObjectId };



const express = require("express");
const router = express.Router();
const Login = require("../../Backend/models/Login");

// 🟢 POST: Create a new user (without password)
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, designPreference, appointment } = req.body;

    const newUser = new Login({
      name,
      email,
      mobile,
      designPreference,
      appointment,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "User created successfully", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 GET: Get all users (optional)
router.get("/", async (req, res) => {
  try {
    const users = await Login.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
