import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCustomer = () => {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');
    const [phoneNo, setPhoneNo]= useState('');
    const [email,setEmail]= useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            
            // Perform API call to add new customer
            const response = await axios.post('http://localhost:5000/api/customers', {
                name,
                balance: Number(balance), // Ensure balance is converted to a number
                email,
                phone_no: phoneNo // Ensure balance is converted to a number
            });

            console.log(response.data); // Log response data for debugging

            alert('Customer added successfully');
            navigate('/customers'); // Navigate to customers list page after successful submission
        } catch (error) {
            console.error('Error adding customer:', error);
            alert('Failed to add customer. Please try again.'); // Display error message to user
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-300 to-indigo-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">Add New Customer</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-lg font-semibold mb-2">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-lg font-semibold mb-2">Phone Number:</label>
                        <input
                            type="text"
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-lg font-semibold mb-2">Email Address:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-gray-700 text-lg font-semibold mb-2">Balance:</label>
                        <input
                            type="number"
                            value={balance}
                            onChange={(e) => setBalance(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        
                    >
                        Add Customer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;
