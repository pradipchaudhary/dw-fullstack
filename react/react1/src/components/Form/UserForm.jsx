import { useState } from "react";

const UserForm = () => {
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isMarried, setIsMarried] = useState(false);
    const [country, setCountry] = useState("Choose country");
    const [gender, setGender] = useState("male");

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(username, email, address, password, isMarried);
        console.log("Username: ", username);
        console.log("Email: ", email);
        console.log("Address : ", address);
        console.log("Password : ", password);
        console.log("IsMarried: ", isMarried);
        console.log("Country :", country);
        console.log("Gender:  ", gender);
    };

    const genderHandler = (e) => {
        setGender(e.target.value);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    User Form
                </h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-900 font-semibold mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your address"
                        />
                    </div>
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
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
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
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="isMarried"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Are you married?
                        </label>
                        <input
                            type="checkbox"
                            id="isMarried"
                            name="isMarried"
                            checked={isMarried}
                            onChange={(e) => setIsMarried(e.target.checked)}
                            className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="country"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select your country</option>
                            <option value="USA">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="Nepal">Nepal</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <p className="text-sm font-medium text-gray-700">
                            Gender
                        </p>
                        <div className="mt-2 space-y-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === "male"}
                                    onChange={genderHandler}
                                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-gray-700">Male</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={gender === "female"}
                                    onChange={genderHandler}
                                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-gray-700">
                                    Female
                                </span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={gender === "other"}
                                    onChange={genderHandler}
                                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-gray-700">
                                    Other
                                </span>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
