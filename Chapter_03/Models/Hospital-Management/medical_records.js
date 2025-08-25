import mongoose from "mongoose";

const medical_reportSchema = new mongoose.Schema({}, {timestamps: true});

export const medicalReport = mongoose.model("Report", medical_reportSchema);