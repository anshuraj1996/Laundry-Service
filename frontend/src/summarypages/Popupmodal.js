import React from 'react';
import './Popupmodal.css';
import tick from '../images/tick.svg';
import {Link} from 'react-router-dom';


function Popupmodal({close}) {

  return (
    <div className="container-18" >
    <img className="circle" src={tick} width="30px" height="30px" alt="tick"></img> 
     <p className="successful">Your order is</p>
     <p className="successful1">successfully.</p>
 
     <p className="paragaraph-success">You can track the deliver in the</p>
     <p className="paragaraph-success1">"Orders" section</p>
     <Link to='/Pastorders'><button className="violetbutton"><p className="text-on-button"> Go to orders</p></button></Link>
 </div>
  );
}

export default Popupmodal;
