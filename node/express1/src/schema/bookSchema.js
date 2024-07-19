import mongoose from "mongoose";

// title, author, description
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: [true],
    },
    author: {
        type: String,
        require: [true],
    },
    description: {
        type: String,
        require: [true],
    },
});

// export default
export default bookSchema;
