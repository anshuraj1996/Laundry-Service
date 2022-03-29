import React,{useState,useEffect} from 'react';
import washingmachine from '../images/washing-machineplain.svg';
import wm from '../images/washing-machinecolor.svg'
import bleach from '../images/bleachplain.svg';
import bl from '../images/bleachcolor.svg';
import ironing from '../images/ironingplain.svg';
import ir from '../images/ironingcolor.svg';
import towel from '../images/towelplain.svg';
import to from '../images/towelcolor.png';
import shirt from '../images/shirt.jpg';
import tshirt from '../images/t-shirt.jpg';
import trousers from '../images/trousers.jpg';
import jeans from '../images/jeans.jpg';
import joggers from '../images/joggers.jpg';
import sarees from '../images/sarees.jpeg';
import boxers from '../images/boxers.jpg';
import './Productlist.css';

import Createmodal from '../summarypages/Createmodal';
import Popupmodal from '../summarypages/Popupmodal';
import {useNavigate} from 'react-router-dom';

const Productlist = () => {

  const navigate=useNavigate();
  const[token,settoken]=useState(localStorage.getItem('token'));
  useEffect(()=>{
    if(token==null){
      alert('please log in to continue');
      navigate('/',{ replace: true });
    }
    
  },[token])

const[createopen,setcreateopen]=useState(false);
const[popupopen,setpopupopen]=useState(false);
let name,value;
const[quantity,setQuantity]=useState({quantity1:0,quantity2:0,quantity3:0,quantity4:0,quantity5:0,quantity6:0,quantity7:0})
const handleprice=(e)=>{
  e.preventDefault();
  name=e.target.name;
  value=e.target.value;
  setQuantity({...quantity,[name]:value})

}
const[wash1,setwash1]=useState(false);
const[press1,setPress1]=useState(false);
const[fold1,setFold1]=useState(false);
const[pack1,setPack1]=useState(false);
const[price1,setPrice1]=useState('-');
const [Type1, setType1] = useState(0);

let services1=''
services1+='Shirts : '
if (wash1){
  services1+= '   washing'
}
if (press1){
  services1+='  , ironing'
}
if (fold1){
  services1+='  , fold'
}
if (pack1){
  services1+=' ,pack'
}




const[wash2,setwash2]=useState(false);
const[press2,setPress2]=useState(false);
const[fold2,setFold2]=useState(false);
const[pack2,setPack2]=useState(false);
const[price2,setPrice2]=useState('-');
const [Type2, setType2] = useState(0);

let services2=''
services2+='T-Shirts : '
if (wash2){
  services2+= '   washing'
}
if (press2){
  services2+='  , ironing'
}
if (fold2){
  services2+='  , fold'
}
if (pack2){
  services2+=' ,pack'
}



const[wash3,setwash3]=useState(false);
const[press3,setPress3]=useState(false);
const[fold3,setFold3]=useState(false);
const[pack3,setPack3]=useState(false);
const[price3,setPrice3]=useState('-');
const [Type3, setType3] = useState(0);
let services3=''
services3+='Trousers : '
if (wash3){
  services3+= '   washing'
}
if (press3){
  services3+='  , ironing'
}
if (fold3){
  services3+='  , fold'
}
if (pack3){
  services3+=' ,pack'
}

const[wash4,setwash4]=useState(false);
const[press4,setPress4]=useState(false);
const[fold4,setFold4]=useState(false);
const[pack4,setPack4]=useState(false);
const[price4,setPrice4]=useState('-');
const [Type4, setType4] = useState(0);
let services4=''
services4+='Jeans : '
if (wash4){
  services4+= '   washing'
}
if (press4){
  services4+='  , ironing'
}
if (fold4){
  services4+='  , fold'
}
if (pack4){
  services4+=' ,pack'
}

const[wash5,setwash5]=useState(false);
const[press5,setPress5]=useState(false);
const[fold5,setFold5]=useState(false);
const[pack5,setPack5]=useState(false);
const[price5,setPrice5]=useState('-');
const [Type5, setType5] = useState(0);

let services5=''
services5+='Joggers : '
if (wash5){
  services5+= '   washing'
}
if (press5){
  services5+='  , ironing'
}
if (fold5){
  services5+='  , fold'
}
if (pack5){
  services5+=' ,pack'
}


const[wash6,setwash6]=useState(false);
const[press6,setPress6]=useState(false);
const[fold6,setFold6]=useState(false);
const[pack6,setPack6]=useState(false);
const[price6,setPrice6]=useState('-');
const [Type6, setType6] = useState(0);

let services6=''
services6+='Boxers : '
if (wash6){
  services6+= '   washing'
}
if (press6){
  services6+='  , ironing'
}
if (fold6){
  services6+='  , fold'
}
if (pack6){
  services6+=' ,pack'
}


const[wash7,setwash7]=useState(false);
const[press7,setPress7]=useState(false);
const[fold7,setFold7]=useState(false);
const[pack7,setPack7]=useState(false);
const[price7,setPrice7]=useState('-');
const [Type7, setType7] = useState(0);

let services7=''
services7+='Others : '
if (wash7){
  services7+= '   washing'
}
if (press7){
  services7+='  , ironing'
}
if (fold7){
  services7+='  , fold'
}
if (pack7){
  services7+=' ,pack'
}




const costofwash=20;
const costofpress=15;
const costoffold=10;
const costofpack=25;


function subtotal1() {
  let cost = 0;
  let type = 0;

  if (wash1) {
    cost += quantity.quantity1 * costofwash;
    type += costofwash;
  }
  if (press1) {
    cost += quantity.quantity1 * costofpress;
    type += costofpress;
  }

  if (fold1) {
    cost += quantity.quantity1 * costoffold;
    type += costoffold;
  }
  if (pack1) {
    cost += quantity.quantity1 * costofpack;
    type += costofpack;
  }

  setPrice1(cost);
  setType1(type);
}

function subtotal2() {
  let cost = 0;
  let type = 0;

  if (wash2) {
    cost += quantity.quantity2 * costofwash;
    type += costofwash;
  }
  if (press2) {
    cost += quantity.quantity2 * costofpress;
    type += costofpress;
  }

  if (fold2) {
    cost += quantity.quantity2 * costoffold;
    type += costoffold;
  }
  if (pack2) {
    cost += quantity.quantity2 * costofpack;
    type += costofpack;
  }

  setPrice2(cost);
  setType2(type);
}

function subtotal3() {
  let cost = 0;
  let type = 0;

  if (wash3) {
    cost += quantity.quantity3 * costofwash;
    type += costofwash;
  }
  if (press3) {
    cost += quantity.quantity3 * costofpress;
    type += costofpress;
  }

  if (fold3) {
    cost += quantity.quantity3 * costoffold;
    type += costoffold;
  }
  if (pack3) {
    cost += quantity.quantity3 * costofpack;
    type += costofpack;
  }

  setPrice3(cost);
  setType3(type);
}

function subtotal4() {
  let cost = 0;
  let type = 0;

  if (wash4) {
    cost += quantity.quantity4 * costofwash;
    type += costofwash;
  }
  if (press4) {
    cost += quantity.quantity4 * costofpress;
    type += costofpress;
  }

  if (fold4) {
    cost += quantity.quantity4 * costoffold;
    type += costoffold;
  }
  if (pack4) {
    cost += quantity.quantity4 * costofpack;
    type += costofpack;
  }

  setPrice4(cost);
  setType4(type);
}

function subtotal5() {
  let cost = 0;
  let type = 0;

  if (wash5) {
    cost += quantity.quantity5 * costofwash;
    type += costofwash;
  }
  if (press5) {
    cost += quantity.quantity5 * costofpress;
    type += costofpress;
  }

  if (fold5) {
    cost += quantity.quantity5 * costoffold;
    type += costoffold;
  }
  if (pack5) {
    cost += quantity.quantity5 * costofpack;
    type += costofpack;
  }

  setPrice5(cost);
  setType5(type);
}

function subtotal6() {
  let cost = 0;
  let type = 0;

  if (wash6) {
    cost += quantity.quantity6 * costofwash;
    type += costofwash;
  }
  if (press6) {
    cost += quantity.quantity6 * costofpress;
    type += costofpress;
  }

  if (fold6) {
    cost += quantity.quantity6 * costoffold;
    type += costoffold;
  }
  if (pack6) {
    cost += quantity.quantity6 * costofpack;
    type += costofpack;
  }

  setPrice6(cost);
  setType6(type);
}

function subtotal7() {
  let cost = 0;
  let type = 0;

  if (wash7) {
    cost += quantity.quantity7 * costofwash;
    type += costofwash;
  }
  if (press7) {
    cost += quantity.quantity7 * costofpress;
    type += costofpress;
  }

  if (fold7) {
    cost += quantity.quantity7 * costoffold;
    type += costoffold;
  }
  if (pack7) {
    cost += quantity.quantity7 * costofpack;
    type += costofpack;
  }

  setPrice7(cost);
  setType7(type);
};
useEffect(() => {
  subtotal1();
  subtotal2();
  subtotal3();
  subtotal4();
  subtotal5();
  subtotal6();
  subtotal7();
});



  return (
    
    <div className='main-container'>
        <p className='product'>Product Types</p>
        <p className='quantity'>Quantity</p>
        <p className='washtype'>Wash Type</p>
        <p className='price'>Price</p>
        <div>
        <p className="image1"><img src={shirt} alt="shirt" height="50px" width="50px"></img></p>
        <p className="shirts" >Shirts</p>
        <p className="paragraph">Lorium ipsum is simply dummy text</p>
        <input className="quantity1" name="quantity1" value={quantity.quantity1} type="text" onChange={handleprice}></input>
        <img src={wash1?wm:washingmachine} alt="washingmachine" className="washing1" onClick={ ()=>{setwash1(!wash1)}}></img>
        <img src={press1?ir:ironing} alt="ironing" className="ironing1" onClick={()=>{setPress1(!press1)}}></img>
        <img src={fold1?to:towel} alt="towel" className="towel1" onClick={()=>{setFold1(!fold1)}}></img>
        <img src={pack1?bl:bleach} alt="bleach" className="bleach1" onClick={()=>{setPack1(!pack1)}}></img>
        <p className="price1">{quantity.quantity1 ? `${quantity.quantity1} * ${Type1}=${price1}` : 0 }</p>
        <button className='reset1' onClick={()=>{setwash1(false);setPress1(false);setFold1(false);setPack1(false);setQuantity({quantity1:0,quantity2:quantity.quantity2,quantity3:quantity.quantity3,quantity4:quantity.quantity4,quantity5:quantity.quantity5,quantity6:quantity.quantity6,quantity7:quantity.quantity7})}}>Reset</button>
        </div>

        <div>
        <p className="image2"><img src={tshirt} alt="tshirt" height="50px" width="50px"></img></p>
        <p className="tshirt" >TShirts</p>
        <p className="paragraph2">Lorium ipsum is simply dummy text</p>
        <input className="quantity2" name="quantity2" value={quantity.quantity2} type="text" onChange={handleprice}></input>
        <img src={wash2?wm:washingmachine} alt="washingmachine" className="washing2" onClick={ ()=>{setwash2(!wash2)}}></img>
        <img src={press2?ir:ironing} alt="ironing" className="ironing2"   onClick={()=>{setPress2(!press2)}}></img>
        <img src={fold2?to:towel}  alt="towel" className="towel2" onClick={()=>{setFold2(!fold2)}}></img>
        <img src={pack2?bl:bleach} alt="bleach" className="bleach2" onClick={()=>{setPack2(!pack2)}}></img>
        <p className="price2">{quantity.quantity2 ? `${quantity.quantity2} * ${Type2}=${price2}` : 0 }</p>
        <button className='reset2' onClick={()=>{setwash2(false);setPress2(false);setFold2(false);setPack2(false);setQuantity({quantity1:quantity.quantity1,quantity2:0,quantity3:quantity.quantity3,quantity4:quantity.quantity4,quantity5:quantity.quantity5,quantity6:quantity.quantity6,quantity7:quantity.quantity7})}} >Reset</button>
        </div>

        <div>
        <p className="image3"><img src={trousers}  alt="trousers" height="50px" width="50px"></img></p>
        <p className="trousers" >Trousers</p>
        <p className="paragraph3">Lorium ipsum is simply dummy text</p>
        <input className="quantity3" name="quantity3" value={quantity.quantity3} type="text" onChange={handleprice}></input>
        <img src={wash3?wm:washingmachine} alt="washingmachine" className="washing3" onClick={ ()=>{setwash3(!wash3)}}></img>
        <img src={press3?ir:ironing} alt="ironing" className="ironing3"   onClick={()=>{setPress3(!press3)}}></img>
        <img src={fold3?to:towel}  alt="towel" className="towel3" onClick={()=>{setFold3(!fold3)}}></img>
        <img src={pack3?bl:bleach} alt="bleach" className="bleach3" onClick={()=>{setPack3(!pack3)}}></img>
        <p className="price3">{quantity.quantity3 ? `${quantity.quantity3} * ${Type3}=${price3}` : 0 }</p>
        <button className='reset3' onClick={()=>{setwash3(false);setPress3(false);setFold3(false);setPack3(false);setQuantity({quantity1:quantity.quantity1,quantity2:quantity.quantity2,quantity3:0,quantity4:quantity.quantity4,quantity5:quantity.quantity5,quantity6:quantity.quantity6,quantity7:quantity.quantity7})}}>Reset</button>
        </div>

        <div>
        <p className="image4"><img src={jeans}  alt="jeans" height="55px" width="55px"></img></p>
        <p className="jeans" >Jeans</p>
        <p className="paragraph4">Lorium ipsum is simply dummy text</p>
        <input className="quantity4" name="quantity4" value={quantity.quantity4} type="text" onChange={handleprice}></input>
        <img src={wash4?wm:washingmachine} alt="washingmachine" className="washing4" onClick={()=>{setwash4(!wash4)}}></img>
        <img src={press4?ir:ironing} alt="ironing" className="ironing4"   onClick={()=>{setPress4(!press4)}}></img>
        <img src={fold4?to:towel}  alt="towel" className="towel4" onClick={()=>{setFold4(!fold4)}}></img>
        <img src={pack4?bl:bleach} alt="bleach" className="bleach4" onClick={()=>{setPack4(!pack4)}}></img>
        <p className="price4">{quantity.quantity4 ? `${quantity.quantity4} * ${Type4}=${price4}` : 0 }</p>
        <button className='reset4' onClick={()=>{setwash4(false);setPress4(false);setFold4(false);setPack4(false);setQuantity({quantity1:quantity.quantity1,quantity2:quantity.quantity2,quantity3:quantity.quantity3,quantity4:0,quantity5:quantity.quantity5,quantity6:quantity.quantity6,quantity7:quantity.quantity7})}}>Reset</button>
        </div>

        <div>
        <p className="image5"><img src={joggers} alt="joggers" height="80px" width="80px"></img></p>
        <p className="joggers" > Joggers</p>
        <p className="paragraph5">Lorium ipsum is simply dummy text</p>
        <input className="quantity5" name="quantity5" value={quantity.quantity5} type="text" onChange={handleprice}></input>
        <img src={wash5?wm:washingmachine} alt="washingmachine" className="washing5" onClick={()=>{setwash5(!wash5)}}></img>
        <img src={press5?ir:ironing} alt="ironing" className="ironing5"  onClick={()=>{setPress5(!press5)}}></img>
        <img src={fold5?to:towel}  alt="towel" className="towel5" onClick={()=>{setFold5(!fold5)}}></img>
        <img src={pack5?bl:bleach} alt="bleach" className="bleach5" onClick={()=>{setPack5(!pack5)}}></img>
        <p className="price5">{quantity.quantity5 ? `${quantity.quantity5} * ${Type5}=${price5}` : 0 }</p>
        <button className='reset5' onClick={()=>{setwash5(false);setPress5(false);setFold5(false);setPack5(false);setQuantity({quantity1:quantity.quantity1,quantity2:quantity.quantity2,quantity3:quantity.quantity3,quantity4:quantity.quantity4,quantity5:0,quantity6:quantity.quantity6,quantity7:quantity.quantity7})}}>Reset</button>
        </div>

        <div>
        <p className="image6"><img src={boxers} alt="" height="80px" width="80px"></img></p>
        <p className="boxers" >Boxers </p>
        <p className="paragraph6">Lorium ipsum is simply dummy text</p>
        <input className="quantity6" name='quantity6' value={quantity.quantity6} type="text" onChange={handleprice}></input>
        <img src={wash6?wm:washingmachine} alt="washingmachine" className="washing6" onClick={ ()=>{setwash6(!wash6)}}></img>
        <img src={press6?ir:ironing} alt="ironing" className="ironing6"  onClick={()=>{setPress6(!press6)}}></img>
        <img src={fold6?to:towel}  alt="towel" className="towel6" onClick={()=>{setFold6(!fold6)}} ></img>
        <img src={pack6?bl:bleach} alt="bleach" className="bleach6" onClick={()=>{setPack6(!pack6)}}></img>
        <p className="price6">{quantity.quantity6 ? `${quantity.quantity6} * ${Type6}=${price6}` : 0 }</p>
        <button className='reset6' onClick={()=>{setwash6(false);setPress6(false);setFold6(false);setPack6(false);setQuantity({quantity1:quantity.quantity1,quantity2:quantity.quantity2,quantity3:quantity.quantity3,quantity4:quantity.quantity4,quantity5:quantity.quantity5,quantity6:0,quantity7:quantity.quantity7})}}>Reset</button>
        </div>

        <div>
        <p className="image7"><img src={sarees} alt="sarees" height="60px" width="60px"></img></p>
        <p className="sarees" >Others </p>
        <p className="paragraph7">Lorium ipsum is simply dummy text</p>
        <input className="quantity7" name='quantity7' value={quantity.quantity7} type="text" onChange={handleprice}></input>
        <img src={wash7?wm:washingmachine} alt="washingmachine" className="washing7" onClick={ ()=>{setwash7(!wash7)}}></img>
        <img src={press7?ir:ironing} alt="ironing" className="ironing7"   onClick={()=>{setPress7(!press7)}}></img>
        <img src={fold7?to:towel}  alt="towel" className="towel7" onClick={()=>{setFold7(!fold7)}}></img>
        <img src={pack7?bl:bleach} alt="bleach" className="bleach7" onClick={()=>{setPack7(!pack7)}}></img>
        <p className="price7">{quantity.quantity7 ? `${quantity.quantity7} * ${Type7}=${price7}` : 0 }</p>
        <button className='reset7' onClick={()=>{setwash7(false);setPress7(false);setFold7(false);setPack7(false);setQuantity({quantity1:quantity.quantity1,quantity2:quantity.quantity2,quantity3:quantity.quantity3,quantity4:quantity.quantity4,quantity5:quantity.quantity5,quantity6:quantity.quantity6,quantity7:0})}}>Reset</button>
        </div>


        
        <button className="closebtn">Cancel</button>
        <button className="proceedbtn"  onClick={()=>{setcreateopen(true)}}>Proceed</button>
        {createopen && <Createmodal closemodal={setcreateopen} services1={services1} price1={price1} Type1={Type1} quantity={quantity} services2={services2} price2={price2} Type2={Type2} services3={services3} price3={price3} Type3={Type3} services4={services4} price4={price4} Type4={Type4} services5={services5} price5={price5} Type5={Type5} services6={services6} price6={price6} Type6={Type6} services7={services7} price7={price7} Type7={Type7} closepopup={setpopupopen}/>}
        {popupopen && <Popupmodal closemodal={setpopupopen}/>}

        

    </div>
 
        
  );
 }

export default Productlist;
