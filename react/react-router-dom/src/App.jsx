import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";

const Home = () => {
    return (
        <div>
            <h1>Home Page </h1>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <h1>About Page here...</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quos!
            </p>
        </div>
    );
};
const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home Page</Link>
                <Link to="/about">About </Link>
            </nav>
            <Routes>
                <Route to="/" element={<Home />} />
                <Route to="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
