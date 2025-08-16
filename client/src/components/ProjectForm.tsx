/** @format */

import { useState, useEffect } from "react";
import { createProject, updateProject, getProject } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

const ProjectForm = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams(); // If editing
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    projectLink: "",
    isCompleted: false,
    status: "",
  });

  useEffect(() => {
    const fetchProject = async () => {
      if (isEditing) {
        const res = await getProject(id!, token!);
        const proj = res.data;
        setForm({
          ...proj,
          startDate: proj.startDate?.slice(0, 10),
          endDate: proj.endDate?.slice(0, 10),
        });
      }
    };
    fetchProject();
  }, [id]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isEditing) await updateProject(id!, form, token!);
    else await createProject(form, token!);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">{isEditing ? "Edit" : "New"} Project</h2>
      {[
        "title",
        "description",
        "startDate",
        "endDate",
        "projectLink",
        "status",
      ].map((field) => (
        <input
          key={field}
          className="border p-2 mb-2 w-full"
          type={field.includes("Date") ? "date" : "text"}
          name={field}
          placeholder={field}
          value={(form as any)[field]}
          onChange={handleChange}
        />
      ))}
      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          name="isCompleted"
          checked={form.isCompleted}
          onChange={handleChange}
        />
        Is Completed?
      </label>
      <button className="bg-blue-600 text-white px-4 py-2 w-full" type="submit">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ProjectForm;
