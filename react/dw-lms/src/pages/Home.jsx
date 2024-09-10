// src/pages/Home.js

import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
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
                    <h2>Users</h2>
                    {users.map((user) => {
                        return (
                            <div className="user-item" key={user.id}>
                                <h4>{user.name}</h4>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;
