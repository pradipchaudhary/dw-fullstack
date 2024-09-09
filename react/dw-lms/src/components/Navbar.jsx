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
                    <a href="/">Home</a>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <a href="/about">About</a>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
