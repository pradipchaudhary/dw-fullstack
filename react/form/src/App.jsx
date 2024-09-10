import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./components/Register";
import User from "./components/User";

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <section id="home">
                    <h2>Welcome to My Website</h2>
                    <p>This is a simple React application.</p>
                </section>
                <section id="contact">
                    <h2>Contact Us</h2>
                    {/* <User /> */}
                    <Register />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
