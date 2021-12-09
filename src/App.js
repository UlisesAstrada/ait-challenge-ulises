import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() =>
  fetch('https://ait-tesapi.herokuapp.com/products')
    .then(response => response.json())
    .then((res) => setProducts(res.products))
  ,[])

  return (
    <div className="App bg-info">
      <header><h1>Productos</h1></header>
      <div className='container'>
      {products.map((item) => 
        <ul>
          <li className='bg-primary'>
            <h4>{item.name}</h4>
            <img src={item.image} alt={item.name}></img>
          </li>
        </ul>
      )}
      </div>
    </div>
  );
}

export default App;