const User = ({ user, age }) => {
    return (
        <div>
            {user ? <p>Username: {user}</p> : <p>No username</p>}
            <p>Age: {age}</p>
        </div>
    );
};

export default User;
