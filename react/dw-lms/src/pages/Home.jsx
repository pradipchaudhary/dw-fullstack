// src/pages/Home.js

import axios from "axios";
import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";

const Home = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        await axios.get("http://localhost:9000/api/user").then((res) => {
            console.log(res.data.data);
            setUsers(res.data.data);
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
                <UserTable users={users} />
            </section>
        </>
    );
};

export default Home;
