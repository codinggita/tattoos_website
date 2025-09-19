import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import "./cover.css";
import {  Link } from "react-router-dom";

const CoverUpTattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch images from API
  useEffect(() => {

    window.scrollTo(0, 0);
    const fetchTattoos = async () => {
      try {
        const response = await fetch("https://tattoos-website-r5za.onrender.com/api/stippling");
        const data = await response.json();
        setTattoos(data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tattoo images:", error);
        setLoading(false);
      }
    };
    fetchTattoos();
  }, []);

  return (
    <div className="cover-up-tattoo">
      {/* Hero Section */}
      <section className="co-section">
        <div className="co-content">
          <h2>COVER-UP TATTOOS</h2>
          <p className="p2">Cover tattoos turn old memories into new masterpieces, blending creativity with fresh ink. They transform past regrets into art that tells a new story.</p>
          <p className="p2">Our experienced artists specialize in creating stunning cover-up designs that not only hide unwanted tattoos but also add a new layer of art to your skin. Whether you want to cover a small mistake or a large piece, we can help you achieve the perfect cover-up.</p>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="co-gallery-section">
        <h2>OUR COVER-UP TATTOOS</h2>
        {loading ? (
          <p>Loading tattoos...</p>
        ) : (
          <div className="co-tattoo-grid">
            {tattoos.map((tattoo) => (
              <div key={tattoo.id} className="co-tattoo-card">
                <img src={tattoo.imageurl} alt="Tattoo" />
                <div className="co-tattoo-overlay">
                  <button className="co-like-button">
                    <Heart size={20} />
                    <span>{tattoo.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      
      
     
    </div>
  );
};

export default CoverUpTattoo;
