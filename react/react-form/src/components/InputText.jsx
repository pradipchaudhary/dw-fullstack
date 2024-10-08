import { useState } from "react";

const InputText = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Submit handler

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("On submitHandler ...!");
        console.log("FirstName: ", firstName);
        console.log("LastName: ", lastName);
        console.log("Email Address: ", email);
        console.log("Password: ", password);
    };
    return (
        <div>
            <form onSubmit={submitHandler} className="mt-4">
                <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-slate-700 py-2"
                >
                    First Name
                </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    className="mt-1 block w-full bg-white border border-slate-300 rounded-md px-3 py-2"
                />
                <label
                    htmlFor="lastname"
                    className="block py-2 text-sm font-medium text-slate-700"
                >
                    Last Name
                </label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    className="mt-1 block w-full bg-white border border-slate-300 rounded-md py-2 px-3"
                />
                <label
                    htmlFor="email"
                    className="block py-2 text-sm font-medium text-slate-700"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="block mt-1 w-full bg-white border border-slate-300 rounded-md py-2 px-3"
                />
                <label
                    htmlFor="email"
                    className="block py-2 text-sm font-medium text-slate-700"
                >
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    className="block mt-1 w-full bg-white border border-slate-300 rounded-md py-2 px-3"
                />
                <button
                    className="bg-sky-500 text-white py-2 px-4 mt-4 rounded-md"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default InputText;
