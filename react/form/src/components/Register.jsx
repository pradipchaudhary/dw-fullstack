import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");

    const data = {
        username,
        email,
        password,
        dob,
        gender,
        role,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data: ");
        console.log(data);

        try {
            const response = await axios.post(
                "http://localhost:9000/api/user/register",
                data
            );
            console.log("Login successful:", response.data);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Register</h2>
            <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                    <label
                        htmlFor="fullname"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                    <label
                        htmlFor="dob"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                    />
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <span className="block text-gray-700 font-semibold mb-2">
                        Gender
                    </span>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                            className="mr-2"
                        />
                        <label htmlFor="male" className="text-gray-700">
                            Male
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                            className="mr-2"
                        />
                        <label htmlFor="female" className="text-gray-700">
                            Female
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            checked={gender === "other"}
                            onChange={(e) => setGender(e.target.value)}
                            className="mr-2"
                        />
                        <label htmlFor="other" className="text-gray-700">
                            Other
                        </label>
                    </div>
                </div>

                {/* Role */}
                <div className="mb-4">
                    <label
                        htmlFor="role"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                    >
                        <option value="">Select your role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
