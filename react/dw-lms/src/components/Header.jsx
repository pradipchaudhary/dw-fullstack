import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";
import Logo from "../assets/logo.png";
const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <Link to="/" className="brand-logo">
                    <img src={Logo} alt="Logo" style={{ width: "35px" }} />
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
