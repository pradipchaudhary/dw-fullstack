// src/components/RegisterForm.js
import { useState } from "react";
import "./RegisterForm.css"; // Import the CSS file for styling

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Data Submitted:", formData);
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-input"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="form-input"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Gender</label>
                <div className="form-radio-group">
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === "other"}
                            onChange={handleChange}
                        />
                        Other
                    </label>
                </div>
            </div>

            <button type="submit" className="form-submit">
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
