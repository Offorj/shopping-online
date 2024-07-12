import React from 'react'
import './Confirm.css'
import Conf from '../assets/1ad8b1f7-1d13-4a21-8035-550778021449 1.png'
import { Link } from 'react-router-dom'


const Confirm = () => {
  return (
    <div className='confirm'>
      <div className="nav">
           
           <Link to="/"><button className='button'>Shopping bag </button></Link>
    <Link to="/Delivery"><button className='button'>Delivery</button> </Link>
      <Link to="/Payment"><button className='button'>Payment</button></Link>
      <button className='button'>Check-out</button>
      
       
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