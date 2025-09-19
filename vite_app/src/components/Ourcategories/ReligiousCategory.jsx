import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import "./religious.css";
import { Link } from "react-router-dom";
const ReligiousTattoo = () => {
  const [tattoos, setTattoos] = useState([]); // Store fetched tattoos
  const [loading, setLoading] = useState(true); // Loading state
  const [likedTattoos, setLikedTattoos] = useState({}); // Store liked tattoos

  // Fetch tattoos from API
  useEffect(() => { 
    window.scrollTo(0, 0);
    const fetchTattoos = async () => {
      try {
        const response = await fetch(" https://tattoos-website-r5za.onrender.com/api/stippling");
        if (!response.ok) {
          throw new Error("Failed to fetch tattoos");
        }
        const data = await response.json();
        setTattoos(data);

        // Load liked tattoos from localStorage
        const savedLikes = JSON.parse(localStorage.getItem("likedTattoos")) || {};
        setLikedTattoos(savedLikes);
      } catch (error) {
        console.error("Error fetching tattoos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTattoos();
  }, []);

  // Handle like button click
  const handleLike = async (tattooId) => {
    try {
      const isLiked = likedTattoos[tattooId] || false;

      // Send request to API
      const response = await fetch(`http://localhost:3011/stippling/like/${tattooId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ like: !isLiked }), // Toggle like status
      });

      if (!response.ok) {
        throw new Error("Failed to update like");
      }

      const updatedTattoo = await response.json();

      // Update state with new like count
      setTattoos((prevTattoos) =>
        prevTattoos.map((tattoo) =>
          tattoo.id === tattooId ? { ...tattoo, likes: updatedTattoo.likes } : tattoo
        )
      );

      // Toggle like status in state
      setLikedTattoos((prevLikedTattoos) => {
        const updatedLikes = {
          ...prevLikedTattoos,
          [tattooId]: !isLiked,
        };

        localStorage.setItem("likedTattoos", JSON.stringify(updatedLikes));
        return updatedLikes;
      });
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  return (
    <div className="religious-tattoo">
      {/* Hero Section */}
      <section className="re-section">
        <div className="re-content">
          <h2>RELIGIOUS TATTOOS</h2>
          <p className="p2">"Religious tattoos symbolize faith and devotion, marking a spiritual 
            journey on the skin. Each design holds deep meaning, reflecting belief and inner strength."</p>
          <p className="p2-1">Our artists specialize in creating sacred and symbolic tattoos that reflect your beliefs. From crosses
             and rosaries to mandalas and om symbols, we can help you find the perfect religious tattoo to honor your spirituality.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="re-gallery-section">
        <h2>OUR RELIGIOUS TATTOOS</h2>

        {loading ? (
          <p>Loading tattoos...</p>
        ) : (
          <div className="re-tattoo-grid">
            {tattoos.length > 0 ? (
              tattoos.map((tattoo) => (
                <div key={tattoo.id} className="re-tattoo-card">
                  <img src={tattoo.imageurl} alt={`Tattoo ${tattoo.id}`} />
                  <div className="re-tattoo-overlay">
                    
                    <img className="re-stippling-hover" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740117582/logo_white_text_no_bg_change_fyg7cz.png" alt="Logo"  />
                    <span className="re-text-stippling">POUFA</span>
                
                </div>
                </div>
              ))
            ) : (
              <p>No tattoos found.</p>
            )}
          </div>
        )}
      </section>
       
      
    </div>
  );
};

export default ReligiousTattoo;
