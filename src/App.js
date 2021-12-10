import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';

import './App.css';

function App() {

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])

  const [stock, setStock] = useState()


  useEffect(() =>
  fetch('https://ait-tesapi.herokuapp.com/products')
    .then(response => response.json())
    .then((res) => setProducts(res.products))
    .catch(err => new Error(err))
  ,[])

  return (
    <div className="App bg-info">
      <header><h1>Productos</h1></header>
      <div className='container'>
      {products.map((item) => 
        <ul key={item._id}  >
          <li className='bg-primary'>
            <h4>{item.name}</h4>
            <img src={item.image} alt={item.name}></img>
            <b>Stock: {item.stock} unidades</b>
            <h5>Precio: {item.price}</h5>
            {item.stock === 0 ? 
              <button 
                type='button' 
                className='btn btn-success' 
                disabled
              >
                Añadir
              </button>
              :
              <button
                type='button' 
                className='btn btn-success'
              >
                Añadir
              </button>
            }
          </li>
        </ul>
      )}
      </div>
      <footer className='d-flex bg-primary justify-content-center py-3'>
        <Button 
          variant="success"
        >
          Ver carrito
        </Button>

      </footer>
    </div>
  );
}

export default App;