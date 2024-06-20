import express from "express";
import FoodItem from '../models/foodItem';

const router = express.Router();

router.get('/', async (req, res) => {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
});

router.post('/', async (req, res) => {
    const newItem = new FoodItem(req.body);
    await newItem.save();
    res.json(newItem);
});
export default router;
