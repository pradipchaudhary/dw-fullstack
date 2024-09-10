// src/components/RegisterForm.js
import { useState } from "react";
import "./RegisterForm.css"; // Import the CSS file for styling
import axios from "axios";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        gender: "",
    });
    console.log("beforem form data: ", formData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, roll: "Admin" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log("Form Data Submitted:", formData);
        try {
            const res = await axios({
                url: "http://localhost:9000/api/user/register",
                method: "POST",
                data: formData,
            });
            console.log(res.data);
            console.log(res.data.message);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="form-input"
                    value={formData.fullname}
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
