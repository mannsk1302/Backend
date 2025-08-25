import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    productImage: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true});

export const product = mongoose.model("Product", productSchema);