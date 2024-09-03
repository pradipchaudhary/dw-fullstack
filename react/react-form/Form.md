# simple user registration form

Here's a simple user registration form with common fields that you can use in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Registration Form</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f7f7f7;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .registration-form {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                width: 400px;
            }
            .registration-form h2 {
                margin-bottom: 20px;
                font-size: 24px;
                text-align: center;
            }
            .form-group {
                margin-bottom: 15px;
            }
            .form-group label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
            }
            .form-group input,
            .form-group select {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .form-group input[type="radio"] {
                width: auto;
            }
            .form-group .radio-label {
                margin-right: 10px;
            }
            .form-group button {
                width: 100%;
                padding: 10px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
            }
            .form-group button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <form class="registration-form" action="/submit" method="POST">
            <h2>User Registration</h2>

            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
            </div>

            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
            </div>

            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                />
            </div>

            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
            </div>

            <div class="form-group">
                <label for="gender">Gender</label>
                <label class="radio-label"
                    ><input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        required
                    />
                    Male</label
                >
                <label class="radio-label"
                    ><input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        required
                    />
                    Female</label
                >
                <label class="radio-label"
                    ><input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        required
                    />
                    Other</label
                >
            </div>

            <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" required />
            </div>

            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" name="address" />
            </div>

            <div class="form-group">
                <label for="city">City</label>
                <input type="text" id="city" name="city" />
            </div>

            <div class="form-group">
                <label for="state">State</label>
                <input type="text" id="state" name="state" />
            </div>

            <div class="form-group">
                <label for="zip">Zip Code</label>
                <input type="text" id="zip" name="zip" />
            </div>

            <div class="form-group">
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="">Select Country</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="india">India</option>
                    <!-- Add more options as needed -->
                </select>
            </div>

            <div class="form-group">
                <label for="isMarried">Marital Status</label>
                <select id="isMarried" name="isMarried">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                </select>
            </div>

            <div class="form-group">
                <button type="submit">Register</button>
            </div>
        </form>
    </body>
</html>
```

### Key Fields Included:

-   **First Name, Last Name**
-   **Email Address**
-   **Password and Confirm Password**
-   **Phone Number**
-   **Gender**
-   **Date of Birth**
-   **Address, City, State, Zip Code**
-   **Country**
-   **Marital Status** (including the `isMarried` field)

This form is basic and can be customized further based on your specific needs.
