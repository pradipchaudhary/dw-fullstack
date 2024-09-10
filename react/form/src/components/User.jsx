import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
    const [users, setUsers] = useState([]);
    const getData = async () => {
        const response = await axios.get("http://localhost:9000/api/user");
        // console.log(response);
        setUsers(response.data.data);
    };
    useEffect(() => {
        console.log("page loading...");
        getData();
    }, []);
    return (
        <div>
            {users.map((value) => {
                return (
                    <div
                        key={value.id}
                        style={{
                            border: "1px solid red",
                            margin: "10px",
                            padding: "10px",
                        }}
                    >
                        <p>Username : {value.name}</p>
                        <p>Email : {value.email}</p>
                        <p>Phone : {value.phoneNumber}</p>
                        <p>Gender : {value.gender}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default User;
