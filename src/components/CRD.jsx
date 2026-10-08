import { useState } from "react";

function Crd() {
  const [users, setUsers] = useState([
    { id: 1, name: "Adhal", email: "adhal@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" }, ]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editId, setEditId] = useState(null);

  
    const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };
  const editUser = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const updateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === editId
          ? { ...user, name: name, email: email }
          : user
      )
    );
    setEditId(null);
    setName("");
    setEmail("");
  };

     const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>CRUD Application</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {editId === null ? (
        <button onClick={addUser}>Add User</button>
      ) : (
        <button onClick={updateUser}>Update User</button>
      )}

      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} - {user.email}
          </p>

          <button onClick={() => editUser(user)}>
            Edit
          </button>

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Crd
