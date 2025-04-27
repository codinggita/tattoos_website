const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { getBlogCollection } = require("../models/blogModel");

const router = express.Router();

// ✅ Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Configure multer for file uploads
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

// ✅ Serve uploaded images statically
router.use("/uploads", express.static(uploadDir));

// 🟢 GET: List all blogs
router.get("/", async (req, res) => {
    try {
        const blog = getBlogCollection();
        const allBlogs = await blog.find().toArray();
        res.status(200).json(allBlogs);
    } catch (err) {
        res.status(500).send("Error fetching blogs: " + err.message);
    }
});

// 🟢 POST: Upload a blog with an image
router.post("/", upload.single("image"), async (req, res) => {
    try {
        const blog = getBlogCollection();
        const newBlog = {
            name: req.body.name,
            price: req.body.price,
            imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
        };

        const result = await blog.insertOne(newBlog);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).send("Error saving blog: " + err.message);
    }
});

module.exports = router;
