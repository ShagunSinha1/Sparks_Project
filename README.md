Banking Application
This is a simple banking application built using React for the frontend, Node.js with Express for the backend, and MongoDB for the database. The application allows users to perform basic banking operations such as viewing all customers, viewing details of a specific customer, transferring money between customers, and adding new customers.

Features
    View all customers
    View details of a specific customer
    Transfer money between customers
    Add new customers

Technologies Used
    Frontend: React, Axios, Tailwind CSS
    Backend: Node.js, Express.js, Mongoose
    Database: MongoDB

Installation
1. Clone the repository:
git clone https://github.com/yourusername/banking-app.git
cd banking-app

2. Install backend dependencies:
cd server
npm install

3. Install frontend dependencies:
cd ../client
npm install

4. Set up MongoDB:
Ensure MongoDB is installed and running on your machine or use a MongoDB Atlas connection string. Update the connection string in server/src/server.js
const mongoURI = 'mongodb://localhost:27017/banking-app'; // Adjust with your database name

5. Seed the database with dummy data:
Run the following command to seed the database:
node server/seed.js

6. Run the backend server:
cd server
npm start

7. Run the frontend application:
cd ../client
npm start

Usage
Home Page: Displays the main page of the banking application.
View All Customers: Navigate to /customers to see a list of all customers.
View Customer Details: Click on a customer to view their details.
Transfer Money: Click on "Transfer Money" to transfer funds between customers.
Add Customer: Navigate to /add-customer to add a new customer.

API Endpoints
GET /api/customers: Retrieve all customers.
GET /api/customers/:id: Retrieve details of a specific customer.
POST /api/customers: Add a new customer.
POST /api/customers/transfer: Transfer money between customers.

Project Structure
banking-app/
├── client/                   # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── AddCustomer.jsx
│       │   ├── CustomerDetails.jsx
│       │   ├── CustomersList.jsx
│       │   ├── TransferMoney.jsx
│       ├── App.js
│       ├── index.js
│       └── ...
├── server/                   # Express backend
│   ├── src/
│       ├── models/
│       │   ├── Customer.js
│       ├── routes/
│       │   ├── customerRoutes.js
│       ├── server.js
│   ├── seed.js               # Seed script
│   └── ...
├── .gitignore
├── README.md
└── package.json


