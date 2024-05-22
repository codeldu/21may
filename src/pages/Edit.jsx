import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import axios from 'axios'


export const Edit = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [info, setinfo] = useState({});
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/' + id)
            .then(res => {
                setinfo(res.data)
                setImage(res.data.photo)
            })
    }, [])

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
    } = useForm({
        defaultValues: async () => {

            let response = await axios.get('http://localhost:3000/api/' + id)
            return response.data;
        }
    });

    const onSubmit = (newForm) => {
        axios.patch('http://localhost:3000/api/' + id, newForm)
            .then(res =>{
                toast.error('🦄 Wow so easy!', {
                    position: "bottom-right",
                    autoClose: 5000,
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


    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <label>Name: <input {...register("name", { required: true })} defaultValue={info.name} />
                {console.log(errors)}
                {errors.name && <p>Name elave edilmeyib</p>}
            </label>
            <label> Price <input type='number' {...register("price", { required: true })} defaultValue={info.price} />
                {errors.price && <p>Qiymet elave edilmeyib</p>}
            </label>

            <label> Image : <input type="file" onInput={(e) => convertToBase64(e.target.files[0])} />
                {!image && <span>Shekil elave edilmeyib</span>}
                </label>
            {image && <img src={image} style={{ width: '100px', height: '100px' }} />}

            <button type="submit">Edit item</button>
        </form>
    )
}
