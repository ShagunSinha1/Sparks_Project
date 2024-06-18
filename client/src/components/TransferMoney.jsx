import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft, FaMoneyCheckAlt } from 'react-icons/fa';


const TransferMoney = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
    const [receiverId, setReceiverId] = useState('');
    const [customers, setCustomers] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/customers')
        .then(response => setCustomers(response.data))
        .catch(error => console.error(error));
    }, []);
    

    useEffect(() => {
        if (customers.length > 0) {
            const firstReceiver = customers.find(customer => customer._id !== id);
            if (firstReceiver) {
                setReceiverId(firstReceiver._id);
            }
        }
    }, [customers, id]);

    const handleTransfer = () => {
        axios.post('http://localhost:5000/api/customers/transfer', {
            senderId: id,
            receiverId,
            amount,
        })
            .then(() => {
                alert(`Transferred $${amount} from Customer ${id} to Customer ${receiverId}`);
                navigate('/customers');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-300 to-indigo-50 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
                <Link to={`/customer/${id}`} className="text-purple-500 flex items-center mb-6 hover:text-purple-700 transition">
                    <FaArrowLeft className="mr-2" /> Back to Customer Details
                </Link>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Transfer Money from {id}</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-8">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">Select Customer to Transfer To:</label>
                    <select
                        value={receiverId}
                        onChange={(e) => setReceiverId(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {customers
                            .filter((customer) => customer._id !== parseInt(id))
                            .map((customer) => (
                                <option key={customer._id} value={customer._id}>
                                    {customer.name}
                                </option>
                            ))}
                    </select>
                </div>
                <button
                    onClick={handleTransfer}
                    className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center"
                >
                    <FaMoneyCheckAlt className="mr-2" /> Transfer
                </button>
            </div>
        </div>
    );
};

export default TransferMoney;
