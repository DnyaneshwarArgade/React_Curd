const STORAGE_KEY = "users";

// get all users
export const getUsers = () => {
  const users = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(users) || [];
};

// create user
export const createUser = (data) => {
  const users = getUsers();
  users.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

// update user
export const updateUser = (id, data) => {
  const users = getUsers().map((user) =>
    user.id === id ? { ...data, id } : user
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

// delete user
export const deleteUser = (id) => {
  const users = getUsers().filter((user) => user.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};
