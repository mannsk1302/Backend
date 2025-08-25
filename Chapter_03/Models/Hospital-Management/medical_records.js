import mongoose from "mongoose";

const medical_reportSchema = new mongoose.Schema({
    reportId: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pateint",
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    report: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

export const medicalReport = mongoose.model("Report", medical_reportSchema);