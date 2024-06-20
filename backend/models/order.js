import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
    total: Number,
    createdAt: { type: Date, default: Date.now },
});

const order = mongoose.model('Order', orderSchema);
export default order;
