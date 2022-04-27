import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/services`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }

    return (
        <div className=' w-50 mx-auto'>
            <h1>please add a service</h1>
            <form className=' d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className=' mb-3' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' text className=' mb-3' {...register("description")} />
                <input placeholder='price' className=' mb-3' type="number" {...register("price")} />
                <input placeholder='photo url' className=' mb-3' type="text" {...register("img")} />
                <input value='Add Services' type="submit" />
            </form>
        </div>
    );
};

export default AddService;