import React from 'react';
import useServices from '../../useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const haddleDelete = id => {
        const proceed = window.confirm('Are you sure??');
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainning = services.filter(service => service._id !== id);
                    setServices(remainning)
                })
        }
    }
    return (
        <div className=' w-50 mx-auto'>
            <h1>Manage Services</h1>
            {
                services.map(service => <div key={service._id}>

                    <h4>{service.name} <button onClick={() => haddleDelete(service._id)}>x</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices;