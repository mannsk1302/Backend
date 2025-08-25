import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    zipcode: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    specializedIn: [
        {
            type: String
        }
    ]
}, {timestamps: true});

export const hospital = mongoose.model("Hospital", hospitalSchema);