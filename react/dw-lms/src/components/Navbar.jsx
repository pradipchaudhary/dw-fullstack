import { Link } from "react-router-dom";
import "./NavBar.css"; // Import external CSS

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
