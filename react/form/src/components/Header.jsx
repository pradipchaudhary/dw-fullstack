import "./Header.css"; // Optional for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo192.png" alt="Logo" />
                <h1>My Website</h1>
            </div>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
