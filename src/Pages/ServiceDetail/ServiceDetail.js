import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>Welcome yayyyy to detail: {service.name}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;