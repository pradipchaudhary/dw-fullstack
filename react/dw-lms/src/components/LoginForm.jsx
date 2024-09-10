import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css"; // Import custom CSS

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting
        try {
            const res = await axios({
                url: "http://localhost:9000/api/user/login",
                method: "POST",
                data: formData,
            });
            console.log(res.data);
            toast.success("Login successful!");
        } catch (error) {
            console.error(error.message);
            toast.error("Login failed. Please try again.");
        }
        setLoading(false); // Set loading to false after request completes
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <ToastContainer />
            <label htmlFor="email" className="sr-only">
                Email address
            </label>
            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-field"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
            />
            <label htmlFor="password" className="sr-only">
                Password
            </label>
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="form-field"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <p className="forgot-password">
                <a href="/forgot-password">Reset your password?</a>
            </p>
            <button
                type="submit"
                className={`submit-button ${loading ? "disabled" : ""}`}
                disabled={loading}
            >
                {loading ? "Submitting..." : "Continue"}
            </button>
        </form>
    );
};

export default LoginForm;
