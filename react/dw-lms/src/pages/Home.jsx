import Layout from "./Layout";

const Home = () => {
    return (
        <Layout>
            <section className="hero">
                <div className="container">
                    <h1>Welcome to Our Website</h1>
                    <p>
                        Discover amazing content and stay updated with our
                        latest news.
                    </p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>
            <section className="intro">
                <div className="container">
                    <h2>About Us</h2>
                    <p>
                        We are dedicated to providing the best services and
                        content for our users.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
