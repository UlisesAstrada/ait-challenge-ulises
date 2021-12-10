import React, {useState} from "react";

import { useForm } from "react-hook-form";
import {Button} from 'react-bootstrap' 


const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data)
   
  const [answer, setAnswer] = useState(false)
  const toggleAnswer = () => setAnswer(!answer)

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <h3>Medios de pago</h3>
      <div className="d-flex justify-content-center">
        
          <input type="radio" value={false} onChange={toggleAnswer}>Efectivo</input>
          <input type="radio" value={true} onChange={toggleAnswer}>Tarjeta</input>

      </div>
      <div>
        {answer ? 
        (
          <div>
            <h3>Datos de la tarjeta</h3>
            <input {...register("card-owner")} placeholder="Nombre y apellido" />
            <input {...register("card-number")} placeholder="16 dígitos" />
            <input {...register("card-expiry")} placeholder="Vencimiento" />
            <input type="password" {...register("cvv")} placeholder="Código de seguridad" />
          </div>
        ) 
        : 
        ""}
      </div>
      <div className="d-flex flex-column">
        <h3>Datos del cliente</h3>
        <input {...register("firstName")} placeholder="Nombre" />
        <input {...register("lastName")} placeholder="Apellido" />
        <input {...register("address")} placeholder="Domicilio (calle, localidad, provincia)" />
        <input {...register("cuil")} placeholder="CUIL" />
      </div>
      <Button type="submit" className="bg-success">Completar compra</Button>
    </form>
  );
}

export default Form;