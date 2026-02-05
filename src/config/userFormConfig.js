export const userFormConfig = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    pattern: "^[0-9]{10}$"
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true
  }
];
