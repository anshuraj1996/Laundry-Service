import React from 'react';
import './Footermid.css';
import fb from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import lkdn from "../images/linkedin.svg";

function footermid() {
  return <div className='hellooo'>
          <p className="aboutuss">ABOUT US</p>
          <p className="doorstepp">Doorstep Wash & Dryclean Service</p>
          <p className="homee">Home</p>
          <p className="signinn">Sign In</p>
          <p className="registerr">Register</p>
          <p className="pricingg">Pricing</p>
          <p className="careerr">Carrer</p>
          <p className="blogss">Blogs</p>
          <p className="createe">Create</p>
          <p className="cccontact">Contact</p>
          <p className="socialmediaaa">SOCIAL MEDIA</p>
          <img src={fb} alt="fb" className="fbb" />
          <img src={insta} alt="insta" className="instaa" />
          <img src={lkdn} alt="lkdn" className="lkdnn" />
      
  </div>;
}

export default footermid;
