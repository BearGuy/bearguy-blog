import React from 'react'
import './footer.css'

import 'font-awesome/css/font-awesome.min.css';

const Footer = () => (
  <div className="footerContainer">
    <div className="footerWrapper">
      {/* <p>Connect with me on
        <i class="fa fa-linkedin-square"></i>
        <a href="https://linkedin.com/in/stephen-peterkins" target="_blank">LinkedIn</a>
        and on
        <a href="https://github.com/Bearguy" target="_blank">GitHub</a>
      </p> */}
      <p className="footerText">© Stephen Peterkins — Ottawa, ON, Canada</p>
      <div className="contactIconsFooter">
        <a href="https://linkedin.com/in/stephen-peterkins" style={{ color: "#868e96"}}>
        <i style={{fontSize: "2em"}} className="fa fa-linkedin"></i></a>
        <a href="https://github.com/BearGuy" style={{ color: "#868e96"}}>
        <i style={{fontSize: "2em"}} className="fa fa-github"></i></a>
        <a href="https://instagram.com/s.peterkins" style={{ color: "#868e96"}}>
        <i style={{fontSize: "2em"}} className="fa fa-instagram"></i></a>
        <a href="https://twitter.com/SPeterkins" style={{ color: "#868e96"}}>
        <i style={{fontSize: "2em"}} className="fa fa-twitter"></i></a>
      </div>
    </div>
  </div>
);

export default Footer;