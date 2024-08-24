import { useState } from "react";

const LearnUseState = () => {
    // use State
    const [name, setName] = useState("Pradip");
    const [age, setAge] = useState(30);

    const updateName = () => {
        return setName("Pradip Chaudhary");
    };
    const ageHandler = () => {
        return setAge(31);
    };

    return (
        <div>
            <p>Hello, my name is ${name}.</p>
            <p>my age are : ${age}.</p>
            <button onClick={updateName}>Change name</button>
            <button onClick={ageHandler}>Change age</button>
        </div>
    );
};

export default LearnUseState;
