import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"

export const Add = () => {

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (newForm) => {
    axios.post('http://localhost:3000/api/', newForm)
    .then(res=> console.log(res.data))
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <label>Name: <input {...register("name")} />
      </label>
     <label> Price <input type='number' {...register("price", { required: true })} /> </label>
       
   
      {errors.exampleRequired && <span>This field is required</span>}


      <button type="submit">Add item</button>
    </form>
  )
}
