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
                Dolorum, quos! Delectus minima in beatae aspernatur.
                Consectetur, dolor iusto excepturi dolores repudiandae enim
                architecto autem nisi quos cupiditate, ad tempora aut minus
                quasi vel distinctio harum modi nihil delectus consequuntur!
                Laboriosam nam temporibus qui eius doloremque? Amet saepe
                provident cupiditate dolorum reiciendis, consequuntur adipisci
                voluptatem praesentium nam soluta maxime hic, exercitationem
                quos consectetur? Sit, fuga! Provident error, officia nisi nemo
                deleniti alias dolores non mollitia expedita facere, minima cum
                aspernatur. Quo!
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
