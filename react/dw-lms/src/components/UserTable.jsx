import "./UserTable.css"; // Import the CSS file for styling

const UserTable = ({ users }) => {
    return (
        <div className="container">
            <h2>Users</h2>
            {users.length === 0 ? (
                <p className="no-users-message">No users found.</p>
            ) : (
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.fullname}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserTable;
