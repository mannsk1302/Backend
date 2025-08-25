import mongoose from "mongoose";

const pateintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    }
}, {timestamps: true});

export const pateint = mongoose.model('Pateint', pateintSchema);