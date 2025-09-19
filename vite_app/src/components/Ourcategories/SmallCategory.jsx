import React, { useEffect, useState } from 'react';
import './small.css';
import { Link } from "react-router-dom";
const TattooStudio = () => {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  
    fetch(' https://tattoos-website-r5za.onrender.com/api/smallcategory')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); 
        setTattoos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  

  return (
    <div className="tattoo-studio">
      <section className="sm-section">
        <div className="sm-content">
          <h2>SMALL TATTOOS, BIG STORIES</h2>
          <p className="p1">Hey, minimal tattoo lovers, we believe that a small tattoo can make a big statement. Our experienced artists are skilled at creating beautiful, minimalistic designs with expertise.</p>
          <p className="p1">Whether it is a small symbol that carries a special meaning for you or a simple design that appeals to your senses, we're here to help bring your vision to life.</p>
        </div>
        {/* <div className="wave-divider"></div> */}
      </section>

      <section className="gallery-section">
        <h2>OUR SMALL TATTOOS</h2>
        {loading && <p>Loading tattoos...</p>}
        {error && <p>Error: {error}</p>}
        <div className="tattoo-grid">
  {tattoos.length > 0 ? (
    tattoos.map((tattoo, index) => (
      <div key={tattoo.id || index} className="tattoo-card">
        <div className="tattoo-image-container">
          <img src={tattoo.imageUrl} alt={`Tattoo design ${index + 1}`} className="tattoo-image" />
          
          {/* Apply hover effect for the first three images */}
          {index < 9 && (
            <div className="hover-overlay">
              <img src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740117582/logo_white_text_no_bg_change_fyg7cz.png" alt="Artist Logo" className="artist-logo" />
              <p className="artist-name">PARTH SAVANI</p>
            </div>
          )}

          {/* Apply hover effect for the 4th, 7th, and 8th images */}
          {[3, 6, 7].includes(index) && (
            <div className="hover-overlay1">
              <img src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740117582/logo_white_text_no_bg_change_fyg7cz.png" alt="Artist Logo" className="artist-logo" />
              <p className="artist-name1">Eric D'suza</p>
            </div>
          )}
        </div>
        {tattoo.name && <p className="tattoo-name">{tattoo.name}</p>}
      </div>
    ))
    ) : (
    !loading && <p>No tattoos found.</p>
   )}
   </div>



      </section>

     

    </div>
  );
};

export default TattooStudio;
