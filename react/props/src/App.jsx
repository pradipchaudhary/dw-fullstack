import Button from "./components/Button";
import User from "./components/User";

function App() {
    const username = "Pradip Chaudhary";
    const age = 30;

    const handleClick = () => {
        alert("Button clicked!");
    };
    return (
        <>
            <User user={username} age={age} />
            <Button onClick={handleClick} />
        </>
    );
}

export default App;
