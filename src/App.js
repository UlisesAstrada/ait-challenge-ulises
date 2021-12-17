import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';

import Product from './Product.jsx'
import CenteredModal from './CenteredModal.jsx';

import './App.css';



function App() {
  
  useEffect(() =>
  fetch('https://ait-tesapi.herokuapp.com/products')
    .then(response => response.json())
    .then((res) => setProducts(res.products))
    .catch(err => new Error(err))
  ,[])

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])
  

  const onAdd = (item) => {
    const exists = cart.find(x => x._id === item._id)
    if(exists) {
      setCart(
        cart.map((x) => 
          x._id === item._id ? 
            {...exists, stock: exists.stock + 1} 
            : 
            x
        )
      )
    } else {
      setCart([...cart, {...item, stock: 1}])
    }
  }

  const onRemove = (item) => {
    const exists = cart.find((x) => x._id === item._id)
    if(exists.stock === 1) {
      setCart(cart.filter((x) => x._id !== item._id))
    } else {
      setCart(
        cart.map((x) => 
          x._id === item._id ? 
            {...exists, stock: exists.stock - 1} 
            : 
            x
        )
      )
    }
  }

  const [modalShow, setModalShow] = React.useState(false);

  console.log(cart)

  return (
    <div className="App bg-info">
      <header><h1>Productos</h1></header>
      <div className='container'>
      {products.map((item) => 
        <Product key={item._id} item={item} onAdd={onAdd}/>
      )}
      </div>
      <footer className='d-flex bg-primary justify-content-center py-3'>

      
        <div className="d-flex justify-content-center rounded">
            <Button 
              variant="success"
              onClick={() => setModalShow(true)}
            >
              Ver carrito - {cart.length} productos
            </Button>
        </div>  


      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cart={cart}
        onAdd={onAdd}
        onRemove={onRemove}
      />

      </footer>
    </div>
  );
}

export default App;



