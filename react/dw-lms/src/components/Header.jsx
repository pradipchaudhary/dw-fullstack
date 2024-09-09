import logo from "../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <a href="/" className="brand-logo">
                    <img src={logo} alt="Logo" style={{ width: "35px" }} />
                </a>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
