import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import './nature.css';
import {  Link } from "react-router-dom";
const NatureTattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    window.scrollTo(0, 0);
    fetch('https://tattoos-website-r5za.onrender.com/api/stippling')
      .then((response) => response.json())
      .then((data) => {
        setTattoos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tattoos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="nature-tattoo">
      {/* Hero Section */}
      <section className="na-section">
        <div className="na-content">
          <h2>NATURE TATTOOS</h2>
          <p className="p2">Nature tattoos capture the beauty of the earth, 
            from towering trees to flowing rivers. Each design connects the soul to the wild and free spirit of nature.</p>

            <p className="p2">Our artists specialize in creating intricate designs that bring the essence of nature to your skin. From delicate 
              flowers to majestic trees, we can help you find the perfect nature tattoo to express your connection with the natural world.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="na-gallery-section">
        <h2>OUR NATURE TATTOOS</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="na-tattoo-grid">
            {tattoos.map((tattoo) => (
              <div key={tattoo.id} className="na-tattoo-card">
                <img src={tattoo.imageurl} alt={`Nature tattoo design ${tattoo.id}`} />
                <div className="na-tattoo-overlay">
                    
                      <img className="na-stippling-hover" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740117582/logo_white_text_no_bg_change_fyg7cz.png" alt="Logo"  />
                      <span className="na-text-stippling">POUFA</span>
                  
                  </div>
          
              </div>
            ))}
          </div>
        )}
      </section>

     
      
    </div>
  );
};

export default NatureTattoo;
