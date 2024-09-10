// src/components/RegisterForm.js
import { useState } from "react";
import "./RegisterForm.css"; // Import the CSS file for styling
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        roll: "Admin", // Preset the role field
    });

    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic front-end validation
        if (
            !formData.fullname ||
            !formData.email ||
            !formData.password ||
            !formData.dob ||
            !formData.gender
        ) {
            toast.error("Please fill in all required fields");
            return;
        }

        setLoading(true); // Set loading to true during submission

        try {
            const res = await axios.post(
                "http://localhost:9000/api/user/register",
                formData
            );
            console.log(res.data);

            // Handle success response
            if (res.data.success) {
                toast.success(res.data.message);
                // Reset form after successful submission
                setFormData({
                    fullname: "",
                    email: "",
                    password: "",
                    dob: "",
                    gender: "",
                    roll: "Admin",
                });
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            if (error.response) {
                // Server-side error
                toast.error(error.response.data.message || "An error occurred");
            } else {
                // Client-side or network error
                toast.error(error.message);
            }
        } finally {
            setLoading(false); // Always reset loading state
        }
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <ToastContainer />

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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="new-password"
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
                            required
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
                            required
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
                            required
                        />
                        Other
                    </label>
                </div>
            </div>

            <button type="submit" className="form-submit" disabled={loading}>
                {loading ? "Submitting..." : "Register"}
            </button>
        </form>
    );
};

export default RegisterForm;
