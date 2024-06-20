import express from "express";
import Order from '../models/order';

const router = express.Router();

router.post('/', async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json(newOrder);
});

export default router;