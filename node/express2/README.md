# Hasing

Hashing is a process of converting a given input (such as a password) into a fixed-size string of characters, which is typically a hexadecimal number. The process is deterministic, meaning that the same input will always produce the same output, but it is designed to be a one-way function—once data has been hashed, it cannot be easily converted back to its original form.

In Node.js, hashing is commonly used for securing passwords. Here's a more detailed explanation and example of how to hash passwords using the `bcrypt` library.

### Why Hash Passwords?

1. **Security**: Storing plain-text passwords in the database is insecure. If the database is compromised, attackers would have access to all user passwords.
2. **Irreversibility**: Hashing algorithms are designed to be irreversible, making it difficult for attackers to retrieve the original password.
3. **Salting**: Adding a unique salt to each password before hashing ensures that even if two users have the same password, their hashed passwords will be different.

### How to Hash Passwords in Node.js Using `bcrypt`

`bcrypt` is a popular library for hashing passwords in Node.js. It provides a simple API for generating salts, hashing passwords, and verifying password hashes.

### Step-by-Step Example

1. **Install `bcrypt`**:

    - Install the `bcrypt` library using npm.

    ```bash
    npm install bcrypt
    ```

2. **Hash a Password**:

    - Use `bcrypt` to hash a password before storing it in the database.

3. **Compare Passwords**:
    - Compare a plain-text password with a hashed password to verify user login.

### Example Code

#### Hashing a Password

```javascript
const bcrypt = require("bcrypt");

async function hashPassword(password) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error;
    }
}

(async () => {
    const plainPassword = "mySecretPassword";
    const hashedPassword = await hashPassword(plainPassword);
    console.log("Hashed Password:", hashedPassword);
})();
```

#### Comparing Passwords

```javascript
const bcrypt = require("bcrypt");

async function comparePassword(plainPassword, hashedPassword) {
    try {
        // Compare the plain password with the hashed password
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error("Error comparing password:", error);
        throw error;
    }
}

(async () => {
    const plainPassword = "mySecretPassword";
    const hashedPassword =
        "$2b$10$KIX3X1MFhgQeH1U/s8TYV.uQy2lDWwHbaR0O8t6p/IlgBI5CbdZOG"; // Example hashed password
    const isMatch = await comparePassword(plainPassword, hashedPassword);
    console.log("Password Match:", isMatch); // Should print 'Password Match: true' if the plain password matches the hashed password
})();
```

### Detailed Explanation

1. **Generating a Salt**:

    - `bcrypt.genSalt(10)`: Generates a salt with a cost factor of 10. The cost factor determines how computationally expensive the hash function will be (higher is more secure but slower).

2. **Hashing the Password**:

    - `bcrypt.hash(password, salt)`: Hashes the password with the generated salt. The result is a hashed password that includes the salt.

3. **Comparing Passwords**:
    - `bcrypt.compare(plainPassword, hashedPassword)`: Compares a plain-text password with a hashed password. Returns `true` if they match, `false` otherwise.

### Benefits of Using `bcrypt`

-   **Adaptive Hashing**: The cost factor can be increased over time to keep up with increasing computational power.
-   **Built-in Salting**: Automatically handles the generation and use of salts, making it easy to securely hash passwords.
-   **Widely Supported**: `bcrypt` is a well-tested library that is widely used in the industry, ensuring reliability and security.

By following these steps, you can securely hash and verify passwords in your Node.js applications, significantly enhancing the security of your user authentication system.

# JWT

JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

### Why Use JWT?

1. **Stateless Authentication**: JWTs are self-contained, meaning they store all necessary information for authentication within the token itself, allowing for stateless authentication.
2. **Scalability**: Since the server does not need to store session information, JWTs are more scalable for distributed systems.
3. **Security**: JWTs can be signed and optionally encrypted, ensuring that the claims cannot be tampered with or read by unauthorized parties.

### Structure of JWT

A JWT consists of three parts separated by dots (`.`):

1. **Header**: Contains metadata about the token, typically the type of token (JWT) and the hashing algorithm used (e.g., HMAC SHA256).
2. **Payload**: Contains the claims. Claims are statements about an entity (typically, the user) and additional data.
3. **Signature**: Used to verify the authenticity of the token and ensure that the payload has not been tampered with.

Example JWT:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### How to Use JWT in Node.js

1. **Install Dependencies**: You need the `jsonwebtoken` package to work with JWTs in Node.js.

    ```bash
    npm install jsonwebtoken
    ```

2. **Create and Sign a JWT**:

    - Sign a JWT with a secret key when a user logs in or signs up.

3. **Verify a JWT**:
    - Verify the JWT on subsequent requests to ensure the token is valid and the user is authenticated.

### Example Code

#### Creating and Signing a JWT

Here's how you can create and sign a JWT:

```javascript
const jwt = require("jsonwebtoken");

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
```

#### Verifying a JWT

Here's how you can verify a JWT:

```javascript
const jwt = require("jsonwebtoken");

const secretKey = "your-secret-key";

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log("Decoded JWT:", decoded);
        return decoded;
    } catch (err) {
        console.error("Invalid token:", err.message);
        return null;
    }
}

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const decoded = verifyToken(token);
```

### Using JWT in Express Middleware

You can use JWTs to protect routes in an Express application. Here's an example of how to create middleware for authenticating JWTs:

```javascript
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "your-secret-key";

// Middleware to protect routes
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
}

// Public route
app.get("/public", (req, res) => {
    res.send("This is a public route");
});

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
    res.send("This is a protected route");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

### Detailed Explanation

1. **Creating a JWT**:

    - `jwt.sign(payload, secretKey, options)`: Creates a JWT by encoding the payload using the secret key and options such as the expiration time.

2. **Verifying a JWT**:

    - `jwt.verify(token, secretKey, callback)`: Verifies the token using the secret key. If the token is valid, it decodes the payload; otherwise, it throws an error.

3. **Express Middleware**:
    - `authenticateToken`: Middleware function that extracts the token from the Authorization header, verifies it, and attaches the decoded payload to `req.user` before passing control to the next middleware or route handler.

By using JWTs in your Node.js applications, you can implement secure, scalable, and stateless authentication mechanisms.
