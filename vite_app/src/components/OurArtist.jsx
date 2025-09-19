// import React,{useEffect} from 'react';
// import "./artist.css";
// import "./Home.css";
// import { Link } from "react-router-dom";
// const OurArtist = () => {

  
//     useEffect(() => {    
//         window.scrollTo(0, 0);
//     }, []);



//   return (
//     <>
//       <div className='tattoo-artist'>
//          <div className='tattoo-artist-header'>

//               <h2 className='tattoo-artist-title'>OUR TALENTED AND EXPERIENCED ARTISTS</h2>
//               <p className='tattoo-artist-description'>Feel free to check out the awesome work in our portfolios. If you have 
//                 any questions or want to set up a consultation, reach out to us. We're excited to help you bring your next tattoo idea to life. Let's start this creative journey together!</p>
              
//         <div className='tattoo-artist-check'>
//   <video autoPlay loop muted className="tattoo-artist-video">
//     <source
//       src="https://alphatattooindia.com/wp-content/uploads/2024/05/import_61c082d6899921.13979377.webm"
//       type="video/webm"
//     />
//     Your browser does not support the video tag.
//   </video>


//   <h2 className='tattoo-artist-checkout'>CHECK OUT OUR ARTIST</h2>

  
// </div>

//          </div>


// <div className='tattoo-artist-flex'>
//          <div className='tattoo-artist-profiles'>

//           <img className="tattoo-artist-parth" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738815718/th_id_OIP_12_nlojdd.png"/>

//           <h2 className='tattoo-artist-eric'>Eric D`suza</h2>
//          </div>

        
//          <div className='tattoo-artist-profiles1'>

//          <img className="tattoo-artist-parth" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738780221/par-1_1_n107sg.png"/>
//            <h2 className='tattoo-artist-parth-text'>PARTH SAVANI</h2>
//          </div>
//         </div>

//          <div className='tattoo-artist-pro-but'>
//             <p className='tattoo-artist-pro'>PORTFOLIO</p>
//          </div>

//          <div className='tattoo-artist-pro-but1'>
//             <p className='tattoo-artist-pro1'>PORTFOLIO</p>
//          </div>


//         <div className='tattoo-artist-profiles2'>

//         <img className="tattoo-artist-parth" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738815384/IMG_3884_1_n7nhl2.png"/>
//          <h2 className='tattoo-artist-poufa-text'>POUFA</h2>
//         </div>

//         <div className='tattoo-artist-pro-but'>
//             <p className='tattoo-artist-pro'>PORTFOLIO</p>
//          </div>



//       </div>
//     </>
//   );
// }

// export default OurArtist;









import React, { useEffect } from 'react';
import "./artist.css";
import { Link } from "react-router-dom";

const OurArtist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='tattoo-artist'>
        <div className='tattoo-artist-header'>
          <h2 className='tattoo-artist-title'>OUR TALENTED AND EXPERIENCED ARTISTS</h2>
          <p className='tattoo-artist-description'>
            Feel free to check out the awesome work in our portfolios. If you have
            any questions or want to set up a consultation, reach out to us. We're excited to help you
            bring your next tattoo idea to life. Let's start this creative journey together!
          </p>
          <div className='tattoo-artist-check'>
            <video autoPlay loop muted className="tattoo-artist-video">
              <source
                src="https://alphatattooindia.com/wp-content/uploads/2024/05/import_61c082d6899921.13979377.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
            <h2 className='tattoo-artist-checkout'>CHECK OUT OUR ARTIST</h2>
          </div>
        </div>

        <div className='tattoo-artist-flex'>
          <div className='tattoo-artist-profiles'>
            <img
              className="tattoo-artist-parth"
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738815718/th_id_OIP_12_nlojdd.png"
              alt="Eric D`suza"
            />
            <h2 className='tattoo-artist-eric'>Eric D`suza</h2>
            <div className='tattoo-artist-pro-but'>
              <Link to="/portfolio/eric" className='tattoo-artist-pro'>PORTFOLIO <span className="arrow-icon">→</span></Link>
            </div>
          </div>

          <div className='tattoo-artist-profiles1'>
            <img
              className="tattoo-artist-parth"
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738780221/par-1_1_n107sg.png"
              alt="Parth Savani"
            />
            <h2 className='tattoo-artist-parth-text'>PARTH SAVANI</h2>
            <div className='tattoo-artist-pro-but1'>
              <Link to="/portfolio/parth" className='tattoo-artist-pro1'>PORTFOLIO <span className="arrow-icon">→</span></Link>
            </div>
          </div>
        </div>

        <div className='tattoo-artist-profiles2'>
          <img
            className="tattoo-artist-parth"
            src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738815384/IMG_3884_1_n7nhl2.png"
            alt="Poufa"
          />
          <h2 className='tattoo-artist-poufa-text'>POUFA</h2>
          
        </div>
        <div className='tattoo-artist-pro-but2'>
            <Link to="/portfolio/poufa" className='tattoo-artist-pro'>PORTFOLIO <span className="arrow-icon">→</span></Link>
          </div>
      </div>
    </>
  );
}

export default OurArtist;