import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import lock from "../images/padlock.svg";
import './Loginmid.css';

function Loginmid() {
  const[erremail,seterrmail]=useState('');
  const navigate=useNavigate();
  const [user,setUser]=useState({email:"",password:""})
  let name,value;
  const changes=(e)=>{
    e.preventDefault();
    console.log(e);
      name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value})
  }
  const handlechanges=async(e)=>{
    e.preventDefault();
    const{email,password}=user;
    const users=await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password  
      })
  });
  if(users.status===200){
    const data=await users.json()
    console.log(data.token);
    localStorage.setItem('token',data.token)
    console.log(localStorage.getItem('token'))
    alert('success');

    navigate('/createorderpage',{ replace: true });
    
  }
  else if(users.status===401){
    alert('invalid crendentials');
  }else if(users.status===500){
    seterrmail('please enter a valid email/Phone Number');
  }else if(users.status===400){
    alert('user not exists')
    seterrmail('please enter a valid email/Phone Number');
  }
  
};
  return (
    <div className="lm">
      <div className="lp">
        <h1 className="lp1">Laundry Service</h1>
        <br />
        <br />
        <p className="lp2">Doorstep Wash & Dryclean Service</p>
        <br />
        <br />
        <p className="lp3">Don't Have An Account?</p>
        <br />
        <br />
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button className="lp4">Register</button>
        </Link>
      </div>
      <div className="rp">
        <div className="rp1">
          <h4>SIGN IN</h4>
        </div>
        <form method='POST'>
          <label className="ll1">Mobile/Email</label>
          <br />
          <input type="text" name="email" className="eml" value={user.email} onChange={changes}  />
          <p className='errmsg'>{erremail}</p>
          <br />

          <label className="ll2">password</label>
          <br />

          <input type="password"  name="password" className="pw" value={user.password} onChange={changes} />
          <img src={lock} alt="lock" />
  

          <h6>forgot password?</h6>
          <button type="submit" className="sibtn" onClick={handlechanges}>sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Loginmid;
