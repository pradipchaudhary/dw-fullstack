import { Schema } from "mongoose";

let userSchema = Schema({
    name: {
        type: String,
        required: [true, "name field is required "],
    },
    email: {
        type: String,
        required: [true, "email field is required "],
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: [true, "phoneNumber field is required "],
    },
    password: {
        type: String,
        required: [true, "password field is required "],
    },
    gender: {
        type: String,
        required: [true, "gender field is required "],
    },
    imgUrl: {
        type: String,
        required: [true, "gender field is required "],
    },
});

userSchema.virtual("id").get(function () {
    return this._id;
});

// Ensure virtual fields are serialized in JSON output and exclude _id
userSchema.set("toJSON", {
    virtuals: true,
    transform: function (doc, ret, options) {
        delete ret._id;
        return ret;
    },
});
export default userSchema;
