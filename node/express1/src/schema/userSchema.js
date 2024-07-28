import mongoose from "mongoose";
// username, email, password, role, createdAt
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required!"],
        lowercase: true, // convert to lowercase
        trim: true, // remove start end white space
        minLength: 2, // min length
        maxLength: 20, // max length
    },
    password: {
        type: String,
        required: [true, "Name field is required!"],
        trim: true,
        validate: (value) => {
            const regex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (regex.test(value)) {
            }
            {
                throw new Error("Enter valide password");
            }
        },
    },

    // Phone Number must be exact 10 character it must start 98,98
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
        maxLength: 10,
        validate: (value) => {
            if (value.length !== 10) {
                throw new Error("hone number mus be exact 10 character");
            }
            if (value.startsWith(97) || value.startsWith(98)) {
            } else {
                throw new Error("number must be start with 97 or 98");
            }
        },
    },
    roll: {
        type: Number,
        required: true,
        trim: true,
    },
    isMarried: {
        type: Boolean,
        default: "male",
    },
    spouseName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email field is required!"],
        unique: true,
        trim: true,
        validate: (value) => {
            const regex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (regex.test(value)) {
            } else {
                throw new Error("Invalide Email address !");
            }
        },
    },
    gender: {
        type: String,
        required: [true],
    },
    dob: {
        type: Date,
        required: true,
    },
    location: {
        country: {
            type: String,
            required: true,
        },
        exactLocation: {
            type: String,
            required: true,
        },
    },
    favTeacher: [
        {
            type: String,
            required: [true, "FavTeacher field is required!"],
        },
    ],
    favSubject: [
        {
            bookName: {
                type: String,
                required: [true, "BookName field is required!"],
            },
            bookAuthor: {
                type: String,
                required: [true, "BookAuthor field is required!"],
            },
        },
    ],
});

export default userSchema;
