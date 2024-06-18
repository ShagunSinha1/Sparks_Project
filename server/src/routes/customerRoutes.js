const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific customer
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Transfer money
router.post('/transfer', async (req, res) => {
    const { senderId, receiverId, amount } = req.body;

    try {
        const sender = await Customer.findById(senderId);
        const receiver = await Customer.findById(receiverId);

        if (!sender || !receiver) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        if (sender.balance < amount) {
            return res.status(400).json({ message: 'Insufficient funds' });
        }

        sender.balance -= amount;
        receiver.balance += amount;

        await sender.save();
        await receiver.save();

        res.json({ message: 'Transfer successful' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new customer
router.post('/', async (req, res) => {
    const { name, balance, email, phone_no} = req.body;

    if (!name || !balance || !email || !phone_no) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const customer = new Customer({
        name,
        balance,
        email,
        phone_no
    });

    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
