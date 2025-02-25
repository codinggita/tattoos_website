import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import "./religious.css";

const ReligiousTattoo = () => {
  const [tattoos, setTattoos] = useState([]); // Store fetched tattoos
  const [loading, setLoading] = useState(true); // Loading state
  const [likedTattoos, setLikedTattoos] = useState({}); // Store liked tattoos

  // Fetch tattoos from API
  useEffect(() => { 
    window.scrollTo(0, 0);
    const fetchTattoos = async () => {
      try {
        const response = await fetch(" http://localhost:3011/stippling");
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
      <section className="hero-section">
        <div className="hero-content">
          <h2>RELIGIOUS TATTOOS</h2>
          <p className="p2">"Religious tattoos symbolize faith and devotion, marking a spiritual 
            journey on the skin. Each design holds deep meaning, reflecting belief and inner strength."</p>
          <p className="p2">Our artists specialize in creating sacred and symbolic tattoos that reflect your beliefs. From crosses
             and rosaries to mandalas and om symbols, we can help you find the perfect religious tattoo to honor your spirituality.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>OUR RELIGIOUS TATTOOS</h2>

        {loading ? (
          <p>Loading tattoos...</p>
        ) : (
          <div className="tattoo-grid">
            {tattoos.length > 0 ? (
              tattoos.map((tattoo) => (
                <div key={tattoo.id} className="tattoo-card">
                  <img src={tattoo.imageurl} alt={`Tattoo ${tattoo.id}`} />
                  <div className="tattoo-overlay">
                    <button className="like-button" onClick={() => handleLike(tattoo.id)}>
                      <Heart size={20} color={likedTattoos[tattoo.id] ? "red" : "black"} />
                      <span>{tattoo.likes}</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No tattoos found.</p>
            )}
          </div>
        )}
      </section>
       
      <div className='small-footer'>
      <div>
      <img className='dreamers' src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738673259/dreamers_ryrags.png"/>
      </div>
      <div>
        {/* <img className='dreamers-1' src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738673783/footer-1_sxmzys.png"/> */}

        <ul className='footer-2'>
          <li className="location">LOCATION</li>
          <li className="use">USEFUL LINKS</li>
          <li className="quick">QUICK LINKS</li>
          <li className="follow">FOLLOW US</li>
        </ul>
        
          
         <div className="footer-3"></div>
         <div className="footer-4"></div>
         <div className="footer-5"></div>
         <div className="footer-6"></div>

      <div className="circle">
         <img className="icon-1" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734578/location-icon-vector_qrxo2q.png"/>
        </div>
         <p className="p1">A Wing 101, 1st Floor, Samadhan Tower by Asshna Developer, Swami Vivekananda Rd, opposite IndusInd Bank, Maharashtra Housing
           and Area Development Authority Colony, Best Nagar, Goregaon West, Mumbai, Maharashtra 400104</p>

        <div className="circle-1">
         <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734738/th_id_OIP_7_sziayt.png"/>
        </div>
        <p className="p2">work@tattoodreamers.com</p>

        <div className="circle-2">
         <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734988/th_id_OIP_8_mdh0ga.png"/>
        </div>
        <p className="p3">+91 9106003382</p>
      </div>

      <ul className="links">
        <li>Home</li>
        <li>Academy</li>
        <li>our Artist</li>
        <li>Our Categories</li>
        <li>Home</li>
        <li>Pricing</li>
      </ul>

      <ul className="links-1">
        <li>Terms</li>
        <li>About</li>
        <li>Privacy Policy</li>
        <li>Blog</li>
        
      </ul>

      <div className="circle-3">
         <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738738596/th_id_OIP_9_ixrdwx.png"/>
        </div>

        <div className="circle-4">
         <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738738668/th_id_OIP_10_dsd5bt.png"/>
        </div>

        <div className="circle-5">
         <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738738751/th_id_OIP_11_rzyiqj.png"/>
        </div>
        <div className="row"></div>
    </div>

    </div>
  );
};

export default ReligiousTattoo;
