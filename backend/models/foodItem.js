import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
});


const foodItem = mongoose.model('FoodItem', foodItemSchema);
export default foodItem;
