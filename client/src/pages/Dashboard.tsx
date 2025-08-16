/** @format */

import { useEffect, useState } from "react";
import { getUsers, getProjects } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await getUsers(token!);
      const projRes = await getProjects(token!);
      setUsers(userRes.data);
      setProjects(projRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">All Users</h2>
      <ul className="mb-6">
        {users.map((user: any) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <h2 className="text-xl mb-4">All Projects</h2>
      <ul>
        {projects.map((project: any) => (
          <li key={project._id}>
            {project.title} - {project.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
