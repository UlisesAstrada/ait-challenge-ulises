import React from 'react'

import {Modal, Button} from 'react-bootstrap'

import Form from './Form'

import './App.css'

const CenteredModal = (props) =>  {

  const {cart, onAdd, onRemove} = props
  console.log(cart)

  const itemsPrice = cart.reduce((acc, curr) => acc + curr.price.substring(1) * curr.stock, 0);
  const iva = itemsPrice * 0.21;
  const totalPrice = itemsPrice + iva;
  const products = cart.map((item) => `${item._id} x ${item.stock}`)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Productos añadidos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tu compra</h4>
        <div>
          {cart.length === 0 && <div>Carrito vacío</div>}
          {cart.map((item) => (
            <div key={item._id} className="d-flex justify-content-center rounded">
              <div className="d-flex bg-dark text-white justify-content-center mt-1 product-card">
                <div>
                  <div>{item.name}</div>
                    <button 
                      className="button btn-success mr-2 py-1 px-2" 
                      onClick={() => onAdd(item)}
                    >
                      +
                    </button>
                    <button 
                      className="button btn-danger mr-2 py-1 px-2" 
                      onClick={() => onRemove(item)}
                    >
                      -
                    </button>
                  {item.stock} x {item.price}
                </div>
              </div>
              <div>
              </div>
            </div>
          ))}
          {cart.length !== 0 && (
            <>
              <hr/>
              <div className="bg-primary mt-1 d-flex justify-content-center text-white">
                <div>
                  <b>Precio sin IVA:</b>
                </div>
                <div className="ml-2">
                   <i>${itemsPrice.toFixed(2)}</i>
                </div>
              </div>

              <div className="bg-primary mt-1 d-flex justify-content-center text-white">
                <div>
                  <b>IVA:</b>
                </div>
                <div className="ml-2">
                  <i>${iva.toFixed(2)}</i>
                </div>  
              </div>

              <div className="bg-primary mt-1 d-flex justify-content-center text-white">
                <div>
                  <b>Total: </b>
                </div>
                <div className="ml-2">
                  <i>${totalPrice.toFixed(2)}</i>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2 flex-column">
              <Form 
                itemsPrice={itemsPrice} 
                iva={iva} 
                totalPrice={totalPrice}
                products={products}
              />
              </div>
            </>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
          <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal