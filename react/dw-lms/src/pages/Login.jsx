import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <section>
            <div className="container">
                <h1 className="page-title">Sigin</h1>
                <p>Welcome back! Let&apos;s take you to your account.</p>

                <LoginForm />
                <div className="signup-text">
                    Don&apos;t have an account? <a href="/signup">Sign up</a>
                </div>
            </div>
        </section>
    );
};

export default Login;
