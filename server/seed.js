const mongoose = require('mongoose');
const Customer = require('./src/models/Customer'); 

const mongoURI = 'mongodb+srv://shagun:shagun22@trial.mk7by6y.mongodb.net/'; 

mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    seedDB().then(() => {
        mongoose.connection.close();
    });
});

const customers = [
    {
        name: "Amit Sharma",
        phone_no: "+91-9876543210",
        email: "amit.sharma@example.com",
        balance: 1500.50
    },
    {
        name: "Priya Singh",
        phone_no: "+91-8765432109",
        email: "priya.singh@example.com",
        balance: 2200.75
    },
    {
        name: "Ravi Kumar",
        phone_no: "+91-7654321098",
        email: "ravi.kumar@example.com",
        balance: 3200.00
    },
    {
        name: "Anjali Mehta",
        phone_no: "+91-6543210987",
        email: "anjali.mehta@example.com",
        balance: 1200.20
    },
    {
        name: "Vikram Patel",
        phone_no: "+91-5432109876",
        email: "vikram.patel@example.com",
        balance: 4500.00
    },
    {
        name: "Neha Gupta",
        phone_no: "+91-4321098765",
        email: "neha.gupta@example.com",
        balance: 1750.50
    },
    {
        name: "Rajesh Desai",
        phone_no: "+91-3210987654",
        email: "rajesh.desai@example.com",
        balance: 2550.75
    },
    {
        name: "Kavita Joshi",
        phone_no: "+91-2109876543",
        email: "kavita.joshi@example.com",
        balance: 1850.00
    },
    {
        name: "Arun Nair",
        phone_no: "+91-1098765432",
        email: "arun.nair@example.com",
        balance: 2950.20
    },
    {
        name: "Pooja Reddy",
        phone_no: "+91-0987654321",
        email: "pooja.reddy@example.com",
        balance: 3050.10
    },
    {
        name: "Pooja Sharma",
        phone_no: "+91-0987654393",
        email: "pooja.sharma@example.com",
        balance: 3850.10
    }
];

const seedDB = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany(customers);
    console.log('Database seeded with dummy data');
};
