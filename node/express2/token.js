// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzJlcnR5dSIsImlhdCI6MTcyMjkxMDUwNCwiZXhwIjoxNzU0NDQ2NTA0fQ.2MwLVx1sbPILd0-6SoHzP_eq_FUNJ5qrJVPqXI98ywY
import jwt from "jsonwebtoken";
import { secretKey } from "./constant.js";

const info = {
  id: "1232ertyu",
};

const expireDate = {
  expiresIn: "365d",
};

// let token = jwt.sign(info, secretKey, expireDate);
// console.log(token);
try {
  let v = jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzJlcnR5dSIsImlhdCI6MTcyMjkxMDUwNCwiZXhwIjoxNzU0NDQ2NTA0fQ.2MwLVx1sbPILd0-6SoHzP_eq_FUNJ5qrJVPqXI98ywY",
    secretKey
  );
  console.log(v);
  /* 
  to verify token
      token  must be taken given secretKey
      token must not be expired
  */
} catch (error) {
  console.log(error.message);
}
