import { useState } from "react";

const UserForm = () => {
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(username, password, email, address);
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    User Form
                </h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-semibold mb-2"
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
                            onChange={(e) => setAddress(e.target.address)}
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
