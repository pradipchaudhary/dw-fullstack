//

import jwt from "jsonwebtoken";

// const info = {
//     id: "123",
// };
// const secretKey = "hwoo";

// const expiryInfo = {
//     expiresIn: "365d",
// };

// const token = jwt.sign(info, secretKey, expiryInfo);

// console.log(token);

const secretKey = "your-secret-key";

function generateToken(user) {
    const payload = {
        userId: user.id,
        name: user.name,
    };

    const options = {
        expiresIn: "1h", // Token expires in 1 hour
    };

    const token = jwt.sign(payload, secretKey, options);
    return token;
}

const user = { id: "1234567890", name: "John Doe" };
const token = generateToken(user);
console.log("JWT:", token);
