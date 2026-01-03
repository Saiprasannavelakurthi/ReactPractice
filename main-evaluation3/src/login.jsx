import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(email, password);
    if (!ok) return;

    if (email === "admin@gmail.com") navigate("/admin/dashboard");
    else navigate("/customers/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Role</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admin</td>
            <td>admin@gmail.com</td>
            <td>admin1234</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>customer@gmail.com</td>
            <td>customer1234</td>
          </tr>
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
