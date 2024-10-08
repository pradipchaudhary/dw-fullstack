const Button = ({ onClick }) => {
    console.log(onClick);
    return <button onClick={onClick}>Click Me!</button>;
};

export default Button;
