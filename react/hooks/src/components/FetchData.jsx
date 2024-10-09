import { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return <div>{data ? data : <p>Loading...</p>}</div>;
};

export default FetchData;
