import mongoose from "mongoose";
// username, email, password, role, createdAt
const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true],
    },
    email: {
        type: String,
        require: [true],
    },
    password: {
        type: String,
        require: [true],
    },
});

export default userSchema;
