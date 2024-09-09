// src/components/Layout.js
import PropTypes from "prop-types"; // Import PropTypes
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

// Define PropTypes to validate children
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Validates that children is passed and is of type 'node'
};

export default Layout;
