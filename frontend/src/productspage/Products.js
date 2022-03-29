import React from 'react';
import Createorderside from './Createorderside';
import Createtopnav from '../components/createtopnav';
import Productlist from './Productlist';

import './Products.css';

export default function Products() {
  return (
    <div className='productlistcss'>
    <Createtopnav/>
    <Createorderside/>
    <Productlist/>
    </div>
  );
}
