import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';

const CustomersList = () => {
    const [customers, setCustomers] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:5000/api/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="py-12 bg-gradient-to-br from-indigo-300 to-indigo-50 min-h-screen">
            <h1 className="text-5xl tracking-wider font-bold text-white text-center mb-8">Our Valued Customers</h1>
            <Link to="/add-customer" className="block w-48 mx-auto mb-6 py-2 px-4 bg-green-500 text-white text-center rounded-md hover:bg-green-600 transition">
                Add New Customer
            </Link>
            <ul className="max-w-lg mx-auto">
                {customers.map((customer) => (
                    <li key={customer._id} className="flex items-center cursor-pointer justify-between bg-white p-4 mb-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                        <FaUserCircle className="text-blue-500 mr-4" size={24} />
                        <Link to={`/customer/${customer._id}`} className="text-blue-600 hover:text-blue-800 transition">
                            {customer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomersList;
