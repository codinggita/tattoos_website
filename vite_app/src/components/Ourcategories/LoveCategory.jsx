import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import "./love.css";
import { Link } from "react-router-dom";
const LoveTattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch images from API
  useEffect(() => {

    window.scrollTo(0, 0);
    const fetchTattoos = async () => {
      try {
        const response = await fetch("https://tattoos-website-r5za.onrender.com/api/stippling"); // Replace with the actual API URL
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
    <div className="love-tattoo">
      {/* Hero Section */}
      <section className="lo-section">
        <div className="lo-content">
          <h2>LOVE TATTOOS</h2>
          <p className="p4"> Love tattoos are more than just ink—they're symbols of deep emotions, memories, and connections
             that last forever. Whether it's a heart, a name, or a meaningful design, each piece tells a unique love story.</p>
          <p className="p4">Our artists specialize in creating heartfelt and romantic tattoos that symbolize your love. From
             delicate hearts to intricate couple designs, we can help you find the perfect love tattoo to express your emotions.</p>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="lo-gallery-section">
        <h2>OUR LOVE TATTOOS</h2>
        {loading ? (
          <p>Loading tattoos...</p>
        ) : (
          <div className="lo-tattoo-grid">
            {tattoos.map((tattoo) => (
              <div key={tattoo.id} className="lo-tattoo-card">
                <img src={tattoo.imageurl} alt="Tattoo" />
                <div className="lo-tattoo-overlay">
                  <button className="lo-like-button">
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

export default LoveTattoo;
