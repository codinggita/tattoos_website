import React from 'react'
import { Link } from "react-router-dom";

import './footer.css'

const footer = () => {
  return (
    <div>
       <div className='footer'>
               {/* <div>
                 <img className='studio-dreamers' src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738673259/dreamers_ryrags.png" alt="Dreamers" />
               </div>
               <div>
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
                   <img className="icon-1" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734578/location-icon-vector_qrxo2q.png" alt="Location Icon" />
                 </div>
                 <p className="p1">A Wing 101, 1st Floor, Samadhan Tower by Asshna Developer, Swami Vivekananda Rd, opposite IndusInd Bank, Maharashtra Housing and Area Development Authority Colony, Best Nagar, Goregaon West, Mumbai, Maharashtra 400104</p>
       
                 <div className="circle-1">
                   <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734738/th_id_OIP_7_sziayt.png" alt="Email Icon" />
                 </div>
                 <p className="p2">work@tattoodreamers.com</p>
       
                 <div className="circle-2">
                   <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734988/th_id_OIP_8_mdh0ga.png" alt="Phone Icon" />
                 </div>
                 <p className="p3">+91 9106003382</p>
               </div>
       
               <ul className="links">
                 <li><Link to="/" className="footer-route">Home</Link ></li>
                 <li>Academy</li>
                 <li><Link to="/our-artist" className="footer-route">our Artist</Link ></li>
                 <li><Link to="/our-categories/small" className="footer-route">Our Categories</Link ></li>
                 <li>Home</li>
                 <li>Pricing</li>
               </ul>
       
               <ul className="links-1">
                 <li>Terms</li>
                 <li><Link to="/about" className="footer-route">About</Link></li>
                 <li>Privacy Policy</li>
                 <li><Link to="/blog" className="footer-route">Blog</Link></li>
               </ul>
       
               <div className="circle-3">
                        <Link to="https://github.com/kiranchaudhary18"  target="_blank">
                        <img className="icon-3" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740680431/th_id_OIP_21_qktu4l.png" alt="Social Icon" />
                        </Link>
                      </div>
              
                      <div className="circle-4">
                      <Link to="https://x.com/home?lang=en-in"  target="_blank">
                        <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738738668/th_id_OIP_10_dsd5bt.png" alt="Social Icon" />
                        </Link>
                      </div>
              
                      <div className="circle-5">
                      <Link to="https://www.instagram.com/chaudhary_kiran_022/?next=%2F"  target="_blank">
                        <img className="icon-2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738738751/th_id_OIP_11_rzyiqj.png" alt="Social Icon" />
                        </Link>
                      </div>
               <div className="row"></div> */}

                <div>
                <img className='footer-image' src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738673259/dreamers_ryrags.png" alt="Dreamers" />
               </div> 

               <div>
                 <ul className='footer-2'>
                   <li className="location">LOCATION</li>
                   <li className="use">USEFUL LINKS</li>
                   <li className="quick">QUICK LINKS</li>
                   <li className="follow">FOLLOW US</li>
                 </ul>
               </div>
                
                <div className='footer-2-line'>
               <div className="footer-3"></div>
                <div className="footer-4"></div>
                <div className="footer-5"></div>
                <div className="footer-6"></div>
                </div>
              
              <div className="location-cir">
                   <img className="location-ic" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734578/location-icon-vector_qrxo2q.png" alt="Location Icon" />
                 </div>
                 <p className="location-p">A Wing 101, 1st Floor, Samadhan Tower by Asshna Developer, Swami Vivekananda Rd, opposite IndusInd Bank, Maharashtra Housing and Area Development Authority Colony, Best Nagar, Goregaon West, Mumbai, Maharashtra 400104</p>
              
              <div className="location-cir1">
                   <img className="location-ic1" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734738/th_id_OIP_7_sziayt.png" alt="Email Icon" />
                 </div>
                 <p className="location-p1">work@tattoodreamers.com</p>
               
                <div className="location-cir2">
                   <img className="location-ic2" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738734988/th_id_OIP_8_mdh0ga.png" alt="Phone Icon" />
                 </div>
                 <p className="location-p2">+91 91********</p>

                 <div>
                <ul className="use-links">
                 <li><Link to="/" className="footer-home">Home</Link ></li>
                 <li>Academy</li>
                 <li><Link to="/our-artist" className="footer-home">our Artist</Link ></li>
                 <li><Link to="/our-categories/small" className="footer-home">Our Categories</Link ></li>
                 <li>Pricing</li>
               </ul>
                 </div>
                 
                 <div>
                 <ul className="quick-links">
                 <li>Terms</li>
                 <li><Link to="/about" className="footer-home">About</Link></li>
                 <li>Privacy Policy</li>
                 <li><Link to="/blog" className="footer-home">Blog</Link></li>
               </ul>
               </div>

                 <div className="follow-cir">
                        <Link to="https://github.com/kiranchaudhary18"  target="_blank">
                        <img className="follow-git" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740680431/th_id_OIP_21_qktu4l.png" alt="Social Icon" />
                        </Link>
                      </div>

                      <div className="follow-cir1">
                      <Link to="https://x.com/home?lang=en-in"  target="_blank">
                        <img className="follow-x" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738738668/th_id_OIP_10_dsd5bt.png" alt="Social Icon" />
                        </Link>
                      </div>

                      <div className="follow-cir2">
                      <Link to="https://www.instagram.com/chaudhary_kiran_022/?next=%2F"  target="_blank">
                        <img className="follow-insta" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738738751/th_id_OIP_11_rzyiqj.png" alt="Social Icon" />
                        </Link>
                      </div>

                      <div className="footer-row"></div>
             </div>
    </div>
  )
}

export default footer
