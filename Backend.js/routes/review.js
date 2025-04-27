const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
const Review = require("../models/Review");  // Import the model

const router = express.Router();

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ironcore.gym.1@gmail.com",
        pass: "whhy issm gytp uyoz"  // Make sure to use your actual password here (consider using environment variables)
    }
});

// ✅ Serve uploaded images statically
router.use("/uploads", express.static(uploadDir));

// 🟢 GET: Fetch approved reviews
router.get("/", async (req, res) => {
    try {
        const reviews = await Review.getApprovedReviews(); // Call the static method on the model
        res.json(reviews); // Return the reviews as JSON
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🟢 POST: Submit a new review
router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { name, rating, message } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        // Create a new review document
        const review = new Review({
            name,
            rating: parseInt(rating),
            message,
            imageUrl,
            approved: false,
            createdAt: new Date()
        });

        // Save the review to the database
        const result = await review.save(); // Use save() to insert the new review

        // Send email to admin
        const mailOptions = {
            from: "ironcore.gym.1@gmail.com",
            to: "ironcore.gym.1@gmail.com",
            subject: "New Review Submission",
            html: `
                <h2>New Review Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Rating:</strong> ${rating} stars</p>
                <p><strong>Message:</strong> ${message}</p>
                <p><strong>Review ID:</strong> ${result._id}</p>
                <p>
                  <a href="http://localhost:3006/reviews/approve/${result._id}">Click here to approve</a>
                </p>
            `
        };

        await transporter.sendMail(mailOptions); // Send email to the admin

        res.status(201).json({ message: "Review submitted successfully and pending approval" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🟢 GET: Approve a review
router.get("/approve/:id", async (req, res) => {
    try {
        await Review.approveReview(req.params.id); // Call the static method on the model
        res.send("Review approved successfully");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
