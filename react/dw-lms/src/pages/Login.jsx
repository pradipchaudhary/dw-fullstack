const Login = () => {
    return (
        <section>
            <div className="container">
                <h1 className="page-title">Sigin</h1>
                <p>Welcome back! Let's take you to your account.</p>

                <form className="form">
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="form-field"
                        placeholder="Email Address"
                    />
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="form-field"
                        placeholder="Password"
                    />
                    <p className="forgot-password">
                        <a href="/forgot-password">Reset your password?</a>
                    </p>
                    <button type="submit" className="submit-button">
                        Continue
                    </button>
                </form>
                <div className="signup-text">
                    Don't have an account? <a href="/signup">Sign up</a>
                </div>
            </div>
        </section>
    );
};

export default Login;
