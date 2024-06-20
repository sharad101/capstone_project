import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import foodItem from './models/foodItem.js';
import order from './models/order.js';
//import foodItems from './routes/FoodItems.js';
//import orders from './routes/Orders.js';


const app = express();

const PORT = process.env.PORT || 3000;

// env variables && connect to MongoDB
dotenv.config();
mongoose.connect(process.env.ATLAS_URI);


// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/food-items', foodItem);
app.use('/api/orders', order);

// Global ERROR Middleware
app.use((err, req, res, next) => {
    res.status(500).send('Something went WRONG!!!');
  });

// Start the server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
