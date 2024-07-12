import React from 'react'
import './Homepage.css'
import DREETS from '../assets/Group 3 DR TEALS.png'
import DOVE from '../assets/Group 4 DOVE CARING BATH.png'
import MandH from '../assets/Group 5 M & H.png'
import BATH from '../assets/Group 6 BATH & SALT.png'
import NIVEA from '../assets/Group 7 NIVEA.png'
import GLOW from '../assets/Group 8 GLOW ESSENTIALS.png'
import LN from '../assets/Group 9 LN STRAWBERRY.png'
import MOIST from '../assets/Group 10 DOVE MOIST HAND.png'
import CERA from '../assets/Group 11 CERA VE.png'
import PAM from '../assets/Group 12 DOVE PAMPERING.png'
import E45 from '../assets/Group 13 E45.png'
import PALMERS from '../assets/Group 14 PALMERS COCO.png'
import ALPHA from '../assets/Group 15 ALPHA SKIN.png'
import BODY from '../assets/Group 16 BATH AND BODY.png'
import LOVE from '../assets/Group 17 LOVE NATURE SESAME.png'
import VAS from '../assets/Group 18 VASELINE.png'
import Navbar from '../Components/Navbar';

const Homepage = () => {
  return (
    
<div className='man1'>
  <Navbar />
 {/* Hero */}
<div className='Hero'>
      <div className='hero-bg1'>
        <h1 className='buyrite'>BUYRITE</h1>
        <div className='line-flex'>
        <i className='line1'></i>
        <p className='Every'>Every brand in one space</p>
        <i className='line2'></i>
        </div>
       
      </div>
      <div className='hero-bg2'>
    
      </div> 
      </div>

{/* categories */}

      <div className='categories'>

      <button className='b1'>SKINCARE</button>
      <button className='b2'>HAIR CARE</button>
      <button className='b3'>BATH & BODY</button>
      <button className='b4'>FRAGNACE</button>
      <button className='b5'>FEET CARE</button>
      <button className='b6'>KIDS & TEENS</button>
      <button className='b7'>WOMEN</button>
      <button className='b8'>MEN</button>
        
      </div>
       
  
    {/* Featured */}
     <div className='featured'>
        <img src={DREETS} alt="" /> 
        <img src={DOVE} alt="" />
        <img src={MandH} alt="" />
        <img src={BATH} alt="" />
        <img src={NIVEA} alt="" />
        <img src={GLOW} alt="" />
        <img src={LN} alt="" />
        <img src={MOIST} alt="" />
        <img src={CERA} alt="" />
        <img src={PAM} alt="" />
        <img src={E45} alt="" />
        <img src={PALMERS} alt="" />
        <img src={ALPHA} alt="" />
        <img src={BODY} alt="" />
        <img src={LOVE} alt="" />
        <img src={VAS} alt="" />

      
    </div>

  <footer>

  </footer>
    {/* <Cartpage /> */}
     {/* <Delivery /> */}
    {/* <Confirm /> */}
    {/* <Payment /> */}
    {/* <Confirm /> */}

</div>
    
    
    
   
     


  )
}

export default Homepage