import React from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = (props) => {
  
  const {item, onAdd} = props;

  const addNotification = () => toast.success("😎 Producto añadido!", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })
  
  return (
    <div className="bg-primary m-3 d-flex flex-column justify-content-center align-items-center rounded pb-2">
      <h3>{item.name}</h3> 
      <img src={item.image} alt={item.name} />
      <div><b>Stock: {item.stock}</b></div>
      <div>Precio: ${item.price.substring(1)}</div>
      <div>
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
                onClick={() => {onAdd(item); addNotification()}}
              >
                Añadir
              </button>
            }
      </div>
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
      />
    </div>
  )
}

export default Product
