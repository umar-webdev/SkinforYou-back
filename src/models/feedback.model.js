import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        index: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    concern: {
        type: String,
        required: true,
        min: 3,
    },
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);
