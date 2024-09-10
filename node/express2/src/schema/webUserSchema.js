

import { Schema } from "mongoose";

let webUserSchema = Schema({
  name: {
    type: String,
    required:[true,"name field is required "]
  },
  email: {
    type: String,
    required:[true,"email field is required "],
    unique:true
  },

  password: {
    type: String,
    required:[true,"password field is required "]
  },

  dob:{
    type: Date,
    required:[true,"name field is required "]
  },

  gender:{
    type: String,
    required:[true,"dob field is required "]
  },

  roles:{
    type: String,
    // required:[true,"roles field is required "]
  },

  isVerifiedEmail:{
    type: Boolean,
    required:[true,"isVerfiedEmail field is required "]
  },
},
{timestamps:true}
);

export default webUserSchema