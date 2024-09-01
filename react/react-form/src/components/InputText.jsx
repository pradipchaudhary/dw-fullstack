import { useState } from "react";

const InputText = () => {
    const [username, setUsername] = useState("");
    console.log(username);

    // Submit handler

    const submitHandler = (e) => {
        console.log("Submit handler...");
        e.preventDefault();
        console.log("On submitHandler ...!");
        console.log("username: ", username);
    };
    return (
        <div>
            <form onSubmit={submitHandler} className="mt-4">
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-slate-700 py-2"
                >
                    Username
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    className="mt-1 block w-full bg-white border border-slate-300 rounded-md px-3 py-2"
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
