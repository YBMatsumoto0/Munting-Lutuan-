import React, { useState } from "react";
import { loginUser } from "../api/auth";
import "../styles/custom.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginUser({ username, password });
       localStorage.setItem("token", data.token); 
    localStorage.setItem("role", data.user.role); 
    // redirect based on role
    if (data.user.role === "admin") {
      window.location.href = "/admin-dashboard";
    } else {
      window.location.href = "/shop"; // 
    }
    } catch (err) {
      alert(err.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="loginForm" className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">
          <i className="fas fa-user"></i> Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">
          <i className="fas fa-lock"></i> Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : <><i className="fas fa-sign-in-alt"></i> Login</>}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
