import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaMoneyCheckAlt } from 'react-icons/fa';

const CustomerDetails = () => {
    console.log()
    const { id } = useParams(); // Extract customer ID from URL
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/customers/${id}`);
                setCustomer(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching customer:', error);
                setLoading(false);
                
            }
        };

        if (id) {
            fetchCustomer();
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!customer) {
        return <div>Customer not found</div>;
    }
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-300 to-indigo-50 flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
                <Link to="/customers" className="text-purple-500 flex items-center mb-6 hover:text-purple-700 transition">
                    <FaArrowLeft className="mr-2" /> Back to Customers
                </Link>
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{customer.name}</h1>
                    <p className="text-2xl text-gray-700 mb-4"><span className='font-bold'>Phone Number: </span>{customer.phone_no}</p>
                    <p className="text-2xl text-gray-700 mb-4"><span className='font-bold'>Email Id: </span>{customer.email}</p>
                    <p className="text-2xl text-gray-700 mb-8"><span className='font-bold'>Balance: </span>${customer.balance}</p>
                    <Link to={`/transfer/${customer._id}`} className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition">
                        <FaMoneyCheckAlt className="mr-2" /> Transfer Money
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;
