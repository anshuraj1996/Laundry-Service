import React from 'react';
import './Createsidebar.css';
import home from '../images/home.svg';
import more from '../images/more.svg';
import list from '../images/list.svg';
import { Link } from 'react-router-dom';

function Createsidebar() {
  // const navigate=useNavigate();
  // console.log("hello",localStorage.getItem('token'));
  // if(localStorage.getItem('token')==null){
  //   navigate('/',{ replace: true });
  //   return(<></>);
  // }

  return (
    <div className='create-m1'>
        <img src={home} alt="home" className='homeoo'/>
        <div className='innerboxxxi'>
            <img src={more} alt="plus" className='plusssp'></img>
        </div>
        <img src={list} alt="list" className='listttl'/>
        <h2 className='orderssso'>Orders | 0</h2>
        <input type="text" name="search" className='searchbarrrs'></input>
        <h6 className='norderrrn'>No Orders avaialble</h6>
        <Link to='/Productspage'><button className='orderbtnnno'><p className='Orderpppo'>Create</p></button></Link>
        <div className='orderfooterrro'>
            <p className="orderparaaao">2021&#169;Laundry</p>
      </div>
       
    </div>
  );
}

export default Createsidebar;
