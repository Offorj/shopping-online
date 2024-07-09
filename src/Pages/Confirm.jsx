import React from 'react'
import './Confirm.css'
import Conf from '../assets/1ad8b1f7-1d13-4a21-8035-550778021449 1.png'


const Confirm = () => {
  return (
    <div className='confirm'>
         <div className="nav">
            <div className='nav-mini'>
            <a href="/"><button className='button'>Shopping bag </button></a>
       <a href="Delivery"><button className='button'>Delivery</button></a>     
          <a href="Payment"><button className='button'>Payment</button></a>  
          <a href="Cartpage"></a>  <button className='button'>Check-out</button>
            </div>
           
        </div>

        <div className='con'>

    <h3 className='last'>You have successfully placed your order</h3>
    <br />
    <img src={Conf} alt=""/>

        </div>
        <footer>
    

    </footer> 
    </div>
  )
}

export default Confirm