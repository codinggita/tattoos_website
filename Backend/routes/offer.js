const express = require("express");
const router = express.Router();
const Offer = require("../../Backend/models/Offer");

router.get("/", async (req, res) => {
    try {
        const offers = await Offer.getOffers();  
        console.log("Offers in DB:", offers); 
        res.json(offers); 
    } catch (err) {
        console.error("❌ Error fetching offers:", err.message);
        res.status(500).json({ error: err.message }); 
    }
});



module.exports = router;
