import { useEffect, useState } from "react";
import UserForm from "../Component/UserForm";
import UserList from "../Component/UserList";
import Swal from "sweetalert2";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../api/userApi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });
  
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await updateUser(editId, formData);

        Swal.fire({
          icon: "success",
          title: "User Updated",
          text: "User updated successfully!",
          timer: 1500,
          showConfirmButton: false
        });

        setEditId(null);
      } else {
        await createUser(formData);

        Swal.fire({
          icon: "success",
          title: "User Created",
          text: "User added successfully!",
          timer: 1500,
          showConfirmButton: false
        });
      }

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
      });

      fetchUsers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!"
      });
    }
  };

  const handleEdit = (user) => {
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email
    });
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      await deleteUser(id);

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "User deleted successfully!",
        timer: 1200,
        showConfirmButton: false
      });

      fetchUsers();
    }
  };

  return (
    <div className="container mt-4">
      <UserForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isEdit={!!editId}
      />

      <UserList
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Users;
