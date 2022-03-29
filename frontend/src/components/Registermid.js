import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Registermid.css';


function Registermid() {
  const navigate=useNavigate();
  const [user,setUser]=useState({name:"",phone:"",district:"",pincode:"",email:"",state:"",address:"",password:""})
  let name,value;
  const handleinputs=(e)=>{
    e.preventDefault();
    console.log(e);
      name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value})
  }
  const Postdata = async(e)=>{
    e.preventDefault();
    
      const{name,phone,district,pincode,email,state,address,password}=user;

      const data=await fetch("/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,phone,district,pincode,email,state,address,password  
            // name:name,phone:phone (if key and value are same no need to write like this we can write like above line) 
        })
      });
      console.log(data);
      if(data.status===400){
        window.alert('user exists');
        console.log('user exists');
      }
      else if(data.status===401){
        window.alert('password incorrect');
        console.log('password incorrect');
      }else if(data.status===403){
        window.alert('Invalid details');
        console.log('Invalid details');
      }else if(data.status===200){
        window.alert('success');
        console.log('success');
      navigate('/',{ replace: true });
      }
      else if(data.status===500){
        window.alert('server error');
        console.log('server error');
      };
      
      
    };

 

  return (<div className="mid-container">
  <div className="m1">
    <h1 className="m11">Laundry Service</h1>
    <p className="m12">Doorstep Wash & Dryclean Service</p>
    <p className="m13">Already Have Account</p>
    <Link to="/">
      <button className="m14">
        <p className="m141">Sign In</p>
      </button>
    </Link>
  </div>
  <div className="m2">
    <h1>REGISTER</h1>
    <form method='POST'>
      <div className="m2left">
        <label>Name</label>
        <br></br>
        <input type="text" className='inputregister' name="name" value={user.name} onChange={handleinputs}></input>
        <br></br>
        <br></br>
        <label>Phone</label>
        <br></br>
        <input type="tel" className='inputregister' name="phone" value={user.phone} onChange={handleinputs}></input>
        <br></br>
        <br></br>
        <label>District</label>
        <br></br>
        <input type="text" className='inputregister' name="district" value={user.district} onChange={handleinputs}></input>
        <br></br>
        <br></br>
        <label>Pincode</label>
        <br></br>
        <input type="number" className='inputregister' name="pincode" value={user.pincode} onChange={handleinputs}></input>
      </div>
      <div className="m2right">
        <label>Email</label>
        <br></br>
        <input type="email" className='inputregister' name="email" value={user.email} onChange={handleinputs}></input>
        <br></br>
        <br></br>
        <label>State</label>
        <br></br>
        <input type="text" className='inputregister' name="state" value={user.state} onChange={handleinputs}></input>
        <br></br>
        <br></br>
        <label>Address</label>
        <br></br>
        <input type="text" className='inputregister' name="address" value={user.address} onChange={handleinputs}></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" className='inputregister' name="password" value={user.password} onChange={handleinputs}></input>
      </div>
  
    <div className="checkbox">
      <input type="checkbox" name="checkbox"></input>
      <label>
        I agree to Terms & Condition receiving marketing and promotional
        materials
      </label>
    </div>
    <div className="m2button">
        <button type="submit" onClick={Postdata} className="m2btn" >Register</button>
    </div>
    </form>
  </div>
</div>
  );}

export default Registermid;
