const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

// Import routes
const stipplingRoutes = require("./routes/stippling");
const smallcategoryRoutes = require("./routes/smallcategory");
const categoriesRoutes = require("./routes/categories");
const actorsRoutes = require("./routes/actors");
const loginRoutes = require("./routes/login");
const offerRoutes = require("./routes/offer");
const reviewRoutes = require("./routes/review"); 
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 3000;

// MongoDB URI from environment variables
const uri = process.env.MONGODB_URI || 'mongodb+srv://kiranchaudharycg:IW0hS0AUPz9Ojy4w@cluster0.dglen.mongodb.net/';

// Ensure the URI is correctly loaded
if (!uri) {
    console.error('❌ MongoDB URI is missing in .env file');
    process.exit(1);
}

// Log URI for debugging (optional)
console.log("MongoDB URI:", uri);

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/stippling", stipplingRoutes);
app.use("/api/smallcategory", smallcategoryRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/actors", actorsRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/offer", offerRoutes);
app.use("/api/reviews1", reviewRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("✅ TattooDreamers Server is Running!");
});

// Connect to MongoDB
mongoose.connect(uri, { dbName: 'tattoodreamers', useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1);
    });
