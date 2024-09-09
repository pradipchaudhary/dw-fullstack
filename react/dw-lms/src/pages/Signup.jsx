import RegisterForm from "../components/RegisterForm";

const Signup = () => {
    return (
        <section>
            <div className="container">
                <h1 className="page-title">Sign Up </h1>
                <p>
                    Create an account to track your progress, showcase your
                    skill-set and be a part of the community.
                </p>
                <RegisterForm />
            </div>
        </section>
    );
};

export default Signup;
