const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Stippling = require("../models/Stippling"); // ✅ Import the model directly

const router = express.Router();

// ✅ Ensure 'uploads' folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Multer setup
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// ✅ Serve uploaded files
router.use("/uploads", express.static(uploadDir));

// 🟢 GET: Fetch all stippling tattoos
router.get("/", async (req, res) => {
  try {
    const tattoos = await Stippling.find(); // ✅ Correct Mongoose method
    res.status(200).json(tattoos);
  } catch (err) {
    res.status(500).send("Error fetching stippling tattoos: " + err.message);
  }
});

// 🟢 POST: Upload a new stippling tattoo
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newTattoo = new Stippling({
      imageUrl,
      description
    });

    const result = await newTattoo.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send("Error uploading stippling tattoo: " + err.message);
  }
});

module.exports = router;
