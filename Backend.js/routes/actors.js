const express = require("express");
const Actor = require("../models/Actors"); 

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      
        const actors = await Actor.find({}, { imageurl: 1, _id: 0 }); 
        res.status(200).json(actors);
    } catch (err) {
        console.error("Error fetching actor images:", err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;

