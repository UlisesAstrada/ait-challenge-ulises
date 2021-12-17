import React from "react";
import axios from "axios"
import Swal from 'sweetalert2'

import { useForm } from "react-hook-form";
import {Button} from 'react-bootstrap' 


const Form = (props) => {
  const { register, handleSubmit, reset, clearErrors, formState, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const {itemsPrice, iva, totalPrice, products} = props
  
  const onSubmit = (data) => console.log(data)

  const handleRequest = () => {
    axios.post('https://ait-tesapi.herokuapp.com/sales', {
      itemsPrice: itemsPrice.toFixed(2),
      iva: iva.toFixed(2),
      totalPrice: totalPrice.toFixed(2),
      products: products
    })
    .then(function(response) {
      console.log(response)
    })
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Yay!',
        text: 'Venta completada!'
      })
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La venta no se pudo concretar, probá nuevamente'
      })
    })
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="d-flex flex-column">
        <h3>Datos del cliente</h3>
        <input {...register("firstName", {required: true})} placeholder="Nombre" className="mb-1" />
        {errors.firstName && <span className="bg-danger mb-2">El nombre es requerido</span>}

        <input {...register("lastName", {required: true})} placeholder="Apellido" className="mb-1"/>
        {errors.lastName && <span className="bg-danger mb-2">El apellido es requerido</span>}

        <input {...register("address", {required: true})} placeholder="Domicilio (calle, localidad, provincia)" className="mb-1" />
        {errors.address && <span className="bg-danger mb-2">El domicilio es requerido</span>}

        <input type="number" {...register("cuil", {required: true, minLength: 11, maxLength: 11, pattern: /^[0-9]*$/})} placeholder="CUIL/CUIT" className="mb-1" />
        {errors.cuil && <span className="bg-danger mb-2">El CUIT/CUIL es requerido, sin espacios ni guiones</span>}
      </div>
      <Button 
        type="submit" 
        className="bg-success" 
        onClick={() => {handleRequest(); clearErrors(); reset({
          keepErrors: false
        })}}
        disabled={!formState.isValid}
      >
        Completar compra
      </Button>
    </form>
  );
}

export default Form;