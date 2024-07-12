import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Cartpage from './Pages/Cartpage';
import Delivery from './Pages/Delivery'
import Payment from './Pages/Payment'
import Confirm from './Pages/Confirm'


const App = () => {
  return (
    <Router>
    
      
        <div className='content'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Cartpage" element={<Cartpage />} />
            <Route path="/Delivery" element={<Delivery />} />
           <Route path="/Confirm" element={<Confirm />} />
            <Route path="/Payment" element={<Payment />} />
          </Routes>
        </div>
    
    </Router>
  );
};

export default App;
