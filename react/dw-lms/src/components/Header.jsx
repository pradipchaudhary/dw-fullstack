import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <Link to="/" className="brand-logo">
                    <img src={logo} alt="Logo" style={{ width: "35px" }} />
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
