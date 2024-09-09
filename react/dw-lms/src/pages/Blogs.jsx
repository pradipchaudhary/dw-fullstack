import { Link } from "react-router-dom";
import Layout from "./Layout";

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "How to Learn React",
            description:
                "React is a powerful JavaScript library for building user interfaces...",
            link: "/post/1",
        },
        {
            id: 2,
            title: "Understanding Redux",
            description:
                "Redux is a state management tool that works seamlessly with React...",
            link: "/post/2",
        },
        {
            id: 3,
            title: "Mastering JavaScript ES6",
            description:
                "JavaScript ES6 introduces many useful features like arrow functions, classes...",
            link: "/post/3",
        },
    ];
    return (
        <Layout>
            <section className="blog-lists">
                <h1>Blog</h1>
                {blogPosts.map((blog) => {
                    <article key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <Link to={blog.link}>Read More</Link>
                    </article>;
                })}
            </section>
        </Layout>
    );
};

export default Blogs;
