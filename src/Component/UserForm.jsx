import { userFormConfig } from "../config/userFormConfig";

const UserForm = ({ formData, setFormData, onSubmit, isEdit }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={onSubmit} className="card p-3 mb-4">
      <h5 className="text-center fw-bold">{isEdit ? "Update User" : "Add User"}</h5>

      {userFormConfig.map((field) => (
        <div className="mb-2" key={field.name}>
          <label className="form-label">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
            pattern={field.pattern}
            className="form-control"
          />
        </div>
      ))}

      <button type="submit" className="btn btn-primary mt-2">
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;
