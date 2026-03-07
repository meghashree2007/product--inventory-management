Product Inventory Management API

Project Description

This is a backend API for managing product inventory. It allows users to add, update, delete, and view products. The API is built using Node.js and Express, and the data is stored in MongoDB.

Technologies Used

Node.js

Express.js

MongoDB

JWT Authentication

dotenv

Installation

Clone the repository git clone https://github.com/your-username/your-repository-name.git

Navigate to project folder cd your-repository-name

Install dependencies npm install

Create a .env file and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Run the server npm start

API Endpoints

Auth

POST /api/auth/register – Register a new user
POST /api/auth/login – Login user

Products

GET /api/products – Get all products
POST /api/products – Add new product
PUT /api/products/:id – Update product
DELETE /api/products/:id – Delete product

Folder Structure

server/ │ ├── models
├── routes
├── controllers
├── middleware
└── server.js

Author

Megha Shree
