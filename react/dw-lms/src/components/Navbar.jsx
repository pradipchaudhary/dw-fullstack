import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "center",
                    listStyleType: "none",
                }}
            >
                <li style={{ margin: "0 10px" }}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/blogs">Blog</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
