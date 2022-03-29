import React, { useEffect, useState } from 'react';
import Createtopnav from '../components/createtopnav';
import Createsidebar from '../components/Createsidebar';
import './createorder.css'
import {useNavigate} from 'react-router-dom';

function Createorder() {
  const navigate=useNavigate();
  const[token,settoken]=useState(localStorage.getItem('token'));
  useEffect(()=>{
    if(token==null){
      alert('please log in to continue');
      navigate('/',{ replace: true });
    }
    
  },[token])
  console.log("hello",localStorage.getItem('token'));
  // if(localStorage.getItem('token')==null){
  //   console.log('nav');
  //   settoken('not set')
  //   return(<></>);
  // }
  return(
    <div className='createordercss'>
      <Createsidebar/>
      <Createtopnav/>
      
    </div>
    
  );
}

export default Createorder;
