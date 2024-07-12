import React from 'react'
import './Cartpage.css'
import REC5 from '../assets/Group 13 E45.png'
import REC6 from '../assets/Group 8 GLOW ESSENTIALS.png'
import REC7 from '../assets/Group 5 M & H.png'
import { Link } from 'react-router-dom'


const Cart = () => {
  return (
    <>
       <div className='main-cart'>
        <div className="nav">
           
               <Link to="/"><button className='button'>Shopping bag </button></Link>
        <Link to="/Delivery"><button className='button'>Delivery</button> </Link>
          <Link to="/Payment"><button className='button'>Payment</button></Link>
          <button className='button'>Check-out</button>
          
           
        </div>

        <div className='add'>
       <div className='cream'>
    
        <img src={REC5} alt="" /><p className='e45'>E45 moisturing lotion</p>
        
        <h3>Price <br /><br /><br />$10,000.00</h3>
        <h3>Quantity <br /><br /><br /> + 1 -</h3>
        <h3>Total <br /><br /><br />$10,690.00</h3>
       </div>
       <br />
       <div className='cream'>
    
        <img src={REC6} alt="" /><p>Glow essential fairness <br /> body lotin</p>
        
        <h3>$10,000.00</h3>
        <h3> + 1 -</h3>
        <h3>$10,690.00</h3>
       </div>
       <br />
       <div className='cream'>
    
        <img src={REC7} alt="" /><p>Milk & honey gold sugar <br />
             smoothing scrub</p>
        
        <h3>$10,000.00</h3>
        <h3>+ 1 -</h3>
        <h3>$10,690.00</h3>
       </div>
      
        
     <h1 className='h1'>CLEAR CART</h1>
          
        </div>
        <div className='check-in'>
<div className='sum'>
    <p>TOTAL</p>
    <h3>$53,660.00</h3>
</div>
<div className='Checked'>
 <Link to="/Delivery"><span>CHECK OUT</span></Link> 
</div>
        </div>
        <footer>
    

    </footer> 
    </div>

   
    
    
    </>
  )
}

export default Cart