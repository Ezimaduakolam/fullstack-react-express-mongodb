/** @format */

import { useState } from "react";
import { signup } from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signup(form);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Signup</h2>
      {["name", "email", "password"].map((field) => (
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
      <button className="bg-blue-500 text-white px-4 py-2 w-full" type="submit">
        Signup
      </button>
    </form>
  );
};

export default Signup;
