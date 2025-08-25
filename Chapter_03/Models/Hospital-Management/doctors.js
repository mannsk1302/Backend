import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    qualification: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    worksIn: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
}, {timestamps: true});

export const doctor = mongoose.model("Doctor", doctorSchema);