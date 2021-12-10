import React from 'react'

import {Modal, Button} from 'react-bootstrap'

const CenteredModal = (props) =>  {

  const {cart, onAdd, onRemove} = props

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
            <div key={item._id}>
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
              </div>
              <div>
                {item.stock} x ${item.price}
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal