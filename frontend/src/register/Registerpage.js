import React from "react";
import './Registerpage.css'

import Navbarloginandregister from '../components/Navbarloginandregister';
import Footertop from '../components/Footertop';
import Footermid from '../components/Footermid';
import Commonfooter from '../components/Commonfooter';
import Registermid from "../components/Registermid";



const Registerpage = () => {
  return (
    <div className="registercss">
      <div><Navbarloginandregister/></div>
      <div><Registermid/></div>
      <div><Footertop  /></div>
      <div><Footermid /></div>
      <div><Commonfooter/></div>
    </div>
  );
};

export default Registerpage;
