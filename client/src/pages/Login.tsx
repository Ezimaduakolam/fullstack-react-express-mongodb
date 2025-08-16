/** @format */

import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await login(form);
    setToken(res.data.token);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
      {["email", "password"].map((field) => (
        <input
          key={field}
          className="border p-2 mb-2 w-full"
          type={field === "password" ? "password" : "text"}
          name={field}
          placeholder={field}
          value={(form as any)[field]}
          onChange={handleChange}
        />
      ))}
      <button
        className="bg-green-500 text-white px-4 py-2 w-full"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
