const users = [
  {
    id: 1,
    name: "Adhal",
    email: "adhal@gmail.com",
    role: "Developer",
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com",
    role: "Designer",
  },
  {
    id: 3,
    name: "Anu",
    email: "anu@gmail.com",
    role: "Tester",
  },
];

function UserTable({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


function UserCards({ users }) {
  return (
    <div className="cards">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ))}
    </div>
  );
}

function Modle() {
  return (
    <div>
      <h1>User Details</h1>

      <h2>Table Format</h2>
      <UserTable users={users} />

      <h2>Card Format</h2>
      <UserCards users={users} />
    </div>
  );
}

export default Modle;
