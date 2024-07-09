import React from 'react';
import './Navbar.css'
import Menu from '../assets/menu.png'
import User from '../assets/Vector.png'
import Cart from  '../assets/Cart.png'
import Magnifier from '../assets/Magnifier.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="box1">
       <img src={Menu} alt="" className='menu'/> <p className='buy'>BUYRITE</p>
        </div>

        <div className='box2'>
        <img src={Magnifier} alt="" className='search-icon'/>
        <input name="Search Field"  placeholder='Search over 50 brands and 2000 products of your choice...' className='input'/>
        </div>

        <div className="user">
      <img src={User} alt="" className='profile'/>  
   <Link to="Cartpage"><img src={Cart} alt="" className='carticon'/></Link> 
      
         
    
   
      
     </div>

    </div>
  )
}

export default Navbar