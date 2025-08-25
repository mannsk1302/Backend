import mongoose from "mongoose";

const pateintSchema = new mongoose.Schema({}, {timestamps: true});

export const pateint = mongoose.model("Pateint", pateintSchema);