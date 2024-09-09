import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

// PropTypes validation
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
