const express = require("express");
const path = require("path");
const fs = require("fs");
const HomeCategory = require("../../Backend/models/Categories");

const router = express.Router();

const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

router.use("/uploads", express.static(uploadDir));

router.get("/", async (req, res) => {
    try {
        const homeCategories = await HomeCategory.getHomeCategories();
        res.status(200).json(homeCategories); 
    } catch (err) {
        res.status(500).send("Error fetching categories: " + err.message); 
    }
});

module.exports = router;
