const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const SmallCategory = require("../../Backend/models/Smallcategory"); 

const router = express.Router();


const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.use("/uploads", express.static(uploadDir));

router.get("/", async (req, res) => {
  try {
    const categories = await SmallCategory.find(); 
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).send("Error fetching small categories: " + err.message);
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newCategory = new SmallCategory({
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null
    });

    const result = await newCategory.save(); 
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send("Error saving small category item: " + err.message);
  }
});

module.exports = router;
