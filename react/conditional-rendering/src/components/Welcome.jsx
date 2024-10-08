function Welcome() {
    const isLoggedIn = false;
    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome...</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Please Login...</h1>
            </div>
        );
    }
}

export default Welcome;
