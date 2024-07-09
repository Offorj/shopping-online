import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage'
import Cartpage from './Pages/Cartpage'
import Confirm from './Pages/Confirm'
import Delivery from './Pages/Delivery'
import Payment from './Pages/Payment'



const App = () => {
  return (
    <div>
      
     <Router>
      <Routes>
      
         <Route path="" element={<Homepage />} />
         <Route path="/Cartpage" element={<Cartpage />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Payment" element={<Payment />} />
         <Route path="/Confirm" element={<Confirm />} />
       </Routes>
       </Router>
      
  
    </div>
  );
}

export default App


