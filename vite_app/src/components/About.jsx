import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const workspaceRef = useRef(null);
  const aboutContentRef = useRef(null);
  const containerRef = useRef(null);
  const visionMissionRef = useRef(null);
  const team1Ref = useRef(null);
  const team2Ref = useRef(null);
  const team3Ref = useRef(null);
  const team4Ref = useRef(null);

  useEffect(() => {
    if (workspaceRef.current) {
      workspaceRef.current.classList.add('fade-in');
    }

    const handleScroll = () => {
      const sections = [
        { ref: aboutContentRef, className: 'enter-right' },
        { ref: containerRef, className: 'enter-left' },
        { ref: visionMissionRef, className: 'enter-right' },
        { ref: team1Ref, className: 'enter-left' },
        { ref: team2Ref, className: 'enter-right' },
        { ref: team3Ref, className: 'enter-left' },
        { ref: team4Ref, className: 'enter-right' },
      ];

      sections.forEach(section => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.ref.current.classList.add(section.className);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-container">
      {/* Workspace Section */}
      <div className="workspace">
        <h2 className="section-title">OUR WORKSPACE</h2>
        <img
          ref={workspaceRef}
          className="studio-image"
          src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738603822/studio-image-1_vnwgso.png"
          alt="Tattoo Studio"
        />
      </div>

      {/* About Intro Section (Text + Image) */}
      <div className="about-intro-section">
        <div className="about-content" ref={aboutContentRef}>
          <h2 className="section-title-dark">ABOUT OUR STUDIO</h2>
          <p>
            Welcome to Tattoo Dreamers Studio, your creative tattoo hub in Ahmedabad, Gujarat. We are a team of passionate artists dedicated to transforming your ideas into beautiful body art.
          </p>
          <p>
            We prioritize your safety and hygiene. With our state-of-the-art equipment and strict safety protocols, you can relax knowing you are in good hands.
          </p>
          <p>
            Whether it's your first tattoo or you're adding to your collection, we are here to make it a memorable experience. Let's create something amazing together!
          </p>
        </div>
        <div className="image-comparison-container" ref={containerRef}>
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738608090/before-pic-on-client_pfnocx.png"
              alt="Before Tattoo"
            />
          </div>
          <img
            className="overlay-image"
            src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738609202/after-work-pic-on-client_e2ryw1.png"
            alt="After Tattoo"
          />
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="vision-mission" ref={visionMissionRef}>
        <div className="vision-mission-content">
            <h2 className="subsection-title">OUR VISION</h2>
            <p>
              We dream of a world where tattoos are more than just designs. They're like personal badges that speak to your soul, showing off your uniqueness. At Alpha Tattoo Studio, we want to make getting a tattoo a meaningful and empowering experience.
            </p>
            <h2 className="subsection-title">OUR MISSION</h2>
            <p>
              To make sure you feel safe, comfortable, and excited about your tattoo journey. We're here to create art that tells your story. We want you to leave our studio not just with a tattoo, but with a piece of art that truly represents you.
            </p>
        </div>
      </div>
      
        {/* Team Video Section */}
       <div className="team-video-section">
        <video autoPlay loop muted className="team-video">
          <source
            src="https://alphatattooindia.com/wp-content/uploads/2024/05/import_61c082d6899921.13979377.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h2 className="section-title1">OUR TEAM MEMBERS</h2>
        </div>
      </div>

      {/* Team Display Section */}
      <div className="team-display-section">
        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-card" ref={team1Ref}>
            <img
              className="team-member-image"
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738815718/th_id_OIP_12_nlojdd.png"
              alt="Eric D'suza"
            />
            <h3 className="team-member-name">Eric D'suza</h3>
            <p className="team-member-title">ARTIST</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-card" ref={team2Ref}>
            <img
              className="team-member-image"
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738780221/par-1_1_n107sg.png"
              alt="Parth Vasani"
            />
            <h3 className="team-member-name">PARTH VASANI</h3>
            <p className="team-member-title">ARTIST</p>
          </div>
          </div>

          <div className='team-grid2'>
          <div className="team-card" ref={team3Ref}>
            <img
              className="team-member-image"
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738815384/IMG_3884_1_n7nhl2.png"
              alt="Poufa"
            />
            <h3 className="team-member-name">POUFA</h3>
            <p className="team-member-title">ARTIST</p>
          </div>

          {/* Team Member 4 */}
          <div className="team-card" ref={team4Ref}>
            <img
              className="team-member-image"
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738820859/th_id_OIP_4_lw9bgz.png"
              alt="Sammy"
            />
            <h3 className="team-member-name">SAMMY</h3>
            <p className="team-member-title">MANAGER</p>
          </div>
        </div>
      </div>
      
      {/* CTA Button Section */}
      <div className="cta-section">
        <Link className="cta-button" to="/contact">
          REACH OUR STUDIO
        </Link>
      </div>
      {/* Your Footer can go here */}
    </div>
  );
};

export default About;