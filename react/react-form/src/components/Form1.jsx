import { useState } from "react";

export const Form1 = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    // const [isCheck, setIsChecked] = useState([]);
    const [country, setCountry] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submit handler...");
        console.log(username, email, password, gender, country);
    };
    return (
        <div>
            <h1 className="text-3xl font-semibold mt-3">React Form One </h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-slate-300 block py-1 px-2 rounded-sm"
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="border block border-slate-300 py-1 px-2 rounded-sm"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block border border-slate-300 py-1 px-2 rounded-sm"
                />
                <label htmlFor="gender" className="block">
                    Gender
                </label>
                <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                />
                {" Male "}
                <input
                    type="radio"
                    value="female"
                    checked={gender == "female"}
                    onChange={(e) => setGender(e.target.value)}
                />
                {" Female "}
                <input
                    type="radio"
                    value="other"
                    checked={gender == "other"}
                    onChange={(e) => setGender(e.target.value)}
                />
                {" Other "}
                <br />
                <label htmlFor="course" className="block font-bold">
                    {" Course "}
                </label>
                <input type="checkbox" name="course" value="course1" />
                {" Course One "}
                <input type="checkbox" name="course" value="course2" />
                {" Course Two "}
                <input type="checkbox" name="course" value="course3" />
                {" Course Three "}
                <br />

                {/* Select option  */}
                <label
                    htmlFor="country"
                    className=" text-slate-900 font-semibold"
                >
                    Country
                </label>
                <select
                    name="country"
                    id=""
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="nepal">Nepal</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="uk">UK</option>
                </select>

                <button
                    className="block py-1 px-2 bg-slate-300 mt-3"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
