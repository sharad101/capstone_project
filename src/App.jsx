import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import OrderSummary from './components/OrderSummary/OrderSummary';


function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order-summary" element={<OrderSummary/>} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;

