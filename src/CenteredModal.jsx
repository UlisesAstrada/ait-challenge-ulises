import React from 'react'

import {Modal, Button} from 'react-bootstrap'

import './App.css'

const CenteredModal = (props) =>  {

  const {cart, onAdd, onRemove} = props

  const itemsPrice = cart.reduce((acc, curr) => acc + curr.price.substring(1) * curr.stock, 0);
  const iva = itemsPrice * 0.21;
  const totalPrice = itemsPrice + iva

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
                <div className="">
                  <img className="img-modal" src={item.image} alt={item.name} />
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
              <div className="bg-primary mt-1 d-flex justify-content-center">
                <div>
                  Precio sin IVA
                </div>
                <div>
                  {itemsPrice.toFixed(2)}
                </div>
              </div>

              <div className="bg-primary mt-1 d-flex justify-content-center">
                <div>
                  IVA
                </div>
                <div>
                  {iva.toFixed(2)}
                </div>  
              </div>

              <div className="bg-primary mt-1 d-flex justify-content-center">
                <div>
                  Total
                </div>
                <div>
                  {totalPrice.toFixed(2)}
                </div>
              </div>

            </>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal