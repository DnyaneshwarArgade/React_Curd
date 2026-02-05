import { HiPencilAlt, HiTrash } from "react-icons/hi";

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div className="card shadow-sm mb-3">

            <div className="table-responsive">
                <table className="table table-hover table-bordered mb-0">
                    <thead className="table-secondary">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th style={{ width: "120px" }}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center text-muted">
                                    No users found
                                </td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-outline-primary btn-sm me-2"
                                            title="Edit"
                                            onClick={() => onEdit(user)}
                                        >
                                            <HiPencilAlt size={18} />
                                        </button>

                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            title="Delete"
                                            onClick={() => onDelete(user.id)}
                                        >
                                            <HiTrash size={18} />
                                        </button>

                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
