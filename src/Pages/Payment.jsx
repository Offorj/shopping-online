import React from 'react'
import './Payment.css'
import MASTA from '../assets/Master card.png'
import VISA from '../assets/visa.png'
import QR from '../assets/scan.png'
import SCAN from '../assets/Scan to pay.png'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className='payment'>

<div className="nav">
           
           <Link to="/"><button className='button'>Shopping bag </button></Link>
    <Link to="/Delivery"><button className='button'>Delivery</button> </Link>
      <Link to="/Payment"><button className='button'>Payment</button></Link>
      <button className='button'>Check-out</button>
      
       
    </div>
        
        <div className='pay'>
           <div className='wait'>
           <h2>Waiting for Transfer</h2>
           <p>Your order will be saved and waiting for payment</p>
           </div>
        </div>
        <div className='pay'>
            <h2>Card Payments ( Pay U)</h2>
            <div className='ima'>
            <img src={MASTA} alt="" className='masta'/>
            <img src={VISA} alt="" className='visa'/>
            </div>
           
        </div>
        <div className='pay'>
            <h2>Card Payment ( Bud Pay)</h2>
            <div className='ima'>
            <img src={MASTA} alt="" className='masta'/>
            <img src={VISA} alt="" className='visa'/>
            </div>
        </div>
        <div className='pay'>
            <h2>Scan QR to pay ( Pay U)</h2>
           <div className='ima'>
           <img src={QR} alt="" className='qr'/>
           <img src={SCAN} alt="" className='scan'/>
           </div>
        </div>
        <div className='dev'>
<div className='sum'>
    <p>TOTAL</p>
    <h3>$53,660.00</h3>
</div>
<div className='Checked'>
   <Link to="/Confirm"><span>FINALISE ORDER</span></Link>
</div>
        </div>
        <footer>
    

    </footer> 
    </div>
  )
}

export default Payment