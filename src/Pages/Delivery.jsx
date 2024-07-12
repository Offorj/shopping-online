import React from 'react'
import './Delivery.css'
import { Link } from 'react-router-dom'



const Delivery = () => {
  return (
    <div className='delivery'>
      <div className="nav">
           
           <Link to="/"><button className='button'>Shopping bag </button></Link>
    <Link to="/Delivery"><button className='button'>Delivery</button> </Link>
      <Link to="/Payment"><button className='button'>Payment</button></Link>
      <button className='button'>Check-out</button>
      
       
    </div>
        <div className='mini'>
            <div className='mini1'>
            <h2>
            HOME DELIVERY 
          </h2>
          <form>
            <label htmlFor="">Nearest Landmark:</label>
            <input type="text"  className='in'/>
            <br />
            <br />
            <label htmlFor="" >State residence:</label>
            <input type="text"  className='in'/>
            <br />
            <br />
            <label htmlFor="">phone contact:</label>
            <input type="numeber"  className='in'/>
            <br />
            <br />
            <label htmlFor="">Fee:</label>
            <input type="text" className='ins' placeholder='location-dependent'/>
          </form>
            </div>
         <br />
         <br />

          <div className='mini2'>
            <h2>Pick-up-points</h2>
            <p>States: </p>
            <ul>
                <li>Lagos</li>
                <li>Abuja</li>
                <li>Portharcourt</li>
                <li>Benin city</li>
                
                
                </ul>
          </div>
          <p className='fee'>Fee: <span className='span'>$2,500.00</span></p>
        </div>
        <div className='checks'>
<div className='sum'>
    <p>TOTAL</p>
    <h3>$53,660.00</h3>
</div>
<div className='Checked'>
<Link to="/Payment"><span>Continue</span></Link> 
</div>
        </div>

        <footer>
    

    </footer> 
    </div>
  )
}

export default Delivery