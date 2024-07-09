import React from 'react'
import './Cartpage.css'
import REC5 from '../assets/Group 13 E45.png'
import REC6 from '../assets/Group 8 GLOW ESSENTIALS.png'
import REC7 from '../assets/Group 5 M & H.png'


const Cart = () => {
  return (
    <>
       <div className='main-cart'>
        <div className="nav">
            <div className='nav-mini'>
             <a href="/"><button className='button'>Shopping bag </button></a>
       <a href="Delivery"><button className='button'>Delivery</button></a>     
          <a href="Payment"><button className='button'>Payment</button></a>  
          <a href="Cartpage"></a>  <button className='button'>Check-out</button>
            </div>
           
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
      
        
     <a href="/"><h1 className='h1'>CLEAR CART</h1></a>
          
        </div>
        <div className='check-in'>
<div className='sum'>
    <p>TOTAL</p>
    <h3>$53,660.00</h3>
</div>
<div className='Checked'>
  <a href="Delivery"><span>CHECK OUT</span></a> 
</div>
        </div>
        <footer>
    

    </footer> 
    </div>

   
    
    
    </>
  )
}

export default Cart