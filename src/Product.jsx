import React from 'react'

const Product = (props) => {
  
  const {item, onAdd} = props;
  
  return (
    <div className="bg-primary m-3 d-flex flex-column justify-content-center align-items-center rounded pb-2">
      <h3>{item.name}</h3> 
      <img src={item.image} alt={item.name} />
      <div><b>Stock: {item.stock}</b></div>
      <div>Precio: {item.price}</div>
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
                onClick={() => onAdd(item)}
              >
                Añadir
              </button>
            }
      </div>
    </div>
  )
}

export default Product
