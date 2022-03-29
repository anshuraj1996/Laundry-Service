import React from 'react'
import home from '../images/home.svg';
import more from '../images/more.svg';
import list from '../images/list.svg';
import './Createorderside.css'

export default function Createorderside() {
  return (
    <div className='create-mm'>
        <img src={home} alt="home" className='homeo'/>
        <div className='innerboxxx'>
            <img src={more} alt="plus" className='plusss'></img>
        </div>
        <img src={list} alt="list" className='listtt'/>
        <h2 className='ordersss'>create order</h2>
        <input type="text" name="search" className='searchbarrr'></input>
        <div className='orderfooterrr'>
            <p className="orderparaaa">2021&#169;Laundry</p>
      </div>
       
    </div>
  )
}
