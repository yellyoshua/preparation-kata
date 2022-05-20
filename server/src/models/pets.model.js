import mongoose from "mongoose"

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["dog", "cat"],
        required: true,
    },
    description: {
        type: String,
    },
    age: {
        type: Number,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    color: {
        type: String,
        required: true,
    }
}, { timestamps: true, collection: "pets" });

export default mongoose.model("pets", petSchema);

