import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Menu() {
  const [foodItems, setFoodItems] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  

  const APP_ID = '5d11a4f0';
  const API_KEY = 'e001c655866b989099d22fde19bbafcc';

  let URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`;

  /*
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const goToCart = () => {
    history.push('/cart', { cart });
  };
  */

  const fetchRecipes = async () => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => setRecipes(data.hits));
  }
  const searchRecipe = async (input) => {
   // e.preventDefault();
    const res =  await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${input}`);
    const data = await res.json()
    console.log(data.hits) 
    setRecipes(data.hits)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e)
    searchRecipe(input);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div>
    <h1>Menu</h1>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button type="submit">Search</button>
    </form>
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <h2>{recipe.recipe.label}</h2>
          <p>{recipe.recipe.source}</p>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </li>
      ))}
    </ul>
    <button onClick={goToCart} style={{ marginTop: '1em' }}>
        Go to Cart
      </button>
  </div>
);
}

export default Menu;
