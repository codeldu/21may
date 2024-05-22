import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { toast ,Bounce } from 'react-toastify';


export const Add = () => {

  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [imgErr, setImgErr] = useState(false);

  const convertToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result)
    }
  }

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (newForm) => {

    if (image) {
      axios.post('http://localhost:3000/api/', { ...newForm, photo: image })
        .then(res => {
          toast.success('Mehsul ugurla elave edildi!', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          navigate('/admin')})
    }
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      <label>Name: <input {...register("name", { required: true })} />
        {errors.name && <p>Name elave edilmeyib</p>}
      </label>
      <label> Price : <input type='number' {...register("price", { required: true })} />
        {errors.price && <p>Qiymet elave edilmeyib</p>}
      </label>
      <label> Image : <input type="file" onInput={(e) => convertToBase64(e.target.files[0])} />
        {!image && <span>Shekil elave edilmeyib</span>}</label>
      {image && <img src={image} style={{ width: '100px', height: '100px' }} />}


      <button type="submit">Add item</button>
    </form>
  )
}
