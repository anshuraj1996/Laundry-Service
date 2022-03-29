import React from "react";
import "./Createmodal.css";
import tick from "../images/tick.svg";


function Createmodal({closemodal , closepopup,services1,price1,Type1,quantity,services2,price2,Type2,services3,price3,Type3,services4,price4,Type4,services5,price5,Type5,services6,price6,Type6,services7,price7,Type7}) {
  //console.log(services1) 
  const result1=price1+price2+price3+price4+price5+price6+price7
  const result2=result1+90
  return (
    <div className="summcss">
    <div className="summary-container">
      <div className="sumnav">
        <h4 className="sum">Summary</h4>
        <button className="close" onClick={() => closemodal(false)}>
          X
        </button>
      </div>
      <div className="navdown">
        <input type="text" placeholder="Store Location" className="loc" value="JP Nagar"></input>
        <p className="add">Store Address:</p>

        <p className="s1">{quantity.quantity1 ? `${services1}` : ''}</p>
        <p className="s">{quantity.quantity1 ? `${quantity.quantity1} * ${Type1}=${price1}` : '' }</p>

        <p className="s2">{quantity.quantity2 ? `${services2}` : ''}</p>
        <p className="t">{quantity.quantity2 ? `${quantity.quantity2} * ${Type2}=${price2}` : '' }</p>

        <p className="s3">{quantity.quantity3 ? `${services3}` : ''}</p>
        <p className="u">{quantity.quantity3 ? `${quantity.quantity3} * ${Type3}=${price3}` : '' }</p>

        <p className="s4">{quantity.quantity4 ? `${services4}` : ''}</p>
        <p className="v">{quantity.quantity4 ? `${quantity.quantity4} * ${Type4}=${price4}` : '' }</p>

        <p className="s5">{quantity.quantity5 ? `${services5}` : ''}</p>
        <p className="w">{quantity.quantity5 ? `${quantity.quantity5} * ${Type5}=${price5}` : '' }</p>

        <p className="s6">{quantity.quantity6 ? `${services6}` : ''}</p>
        <p className="x">{quantity.quantity6 ? `${quantity.quantity6} * ${Type6}=${price6}` : '' }</p>

        <p className="s7">{quantity.quantity7 ? `${services7}` : ''}</p>
        <p className="y">{quantity.quantity7 ? `${quantity.quantity7} * ${Type7}=${price7}` : '' }</p>
        
        <p className="s8">Sub</p>
        <p className="s9">total:{result1}</p>
        <p className="s10">Pickup</p>
        <p className="s11">Charges:90</p>
        
        
        
        


        <p className="hash1">Near Phone booth, 10th road</p>
        <p className="ph">Phone</p>
        <p className="hash2">+91-9996377267</p>
      </div>
      <p className="details">Order Details</p>
      
      <div className="table"></div>
      <div className="totalsum">
        <p className="tl">Total:</p>
        <p className="rs">RS {result2}</p>
      </div>
      <p className="addr">Address</p>
      <div className="addradd1">
        <p className="hm">Home</p>
        <img src={tick} alt="tick" className="imgtick"></img>
        <div className="hmeaddr">
          <p>#223, 10th road, Jp Nagar, Bangalore</p>
        </div>
      </div>
      <div className="addradd2">
          <p className="ot">Other</p>
          <p className="otaddr">#223, 10th road, Jp Nagar, Bangalore</p>
            
      </div>
      <button className="adn"><p>ADD NEW</p></button>
        <div className="btm">
            <button className="cn" onClick={() => { closemodal(false) ;closepopup(true)}} >Confirm</button>
          
        </div>
    </div>

    
    </div>
  );
}

export default Createmodal;
