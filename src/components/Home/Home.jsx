import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Food Delivery App</h1>
      <Link to="/menu">Go to Menu</Link>
    </div>
  );
}

export default Home;
