/** @format */

import { useEffect, useState } from "react";
import { getUser, updateUser, deleteUser } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { token, setToken } = useAuth();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const tokenData: any = JSON.parse(atob(token!.split(".")[1]));
      const res = await getUser(tokenData.id, token!);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateUser(user._id, user, token!);
    alert("Profile updated");
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your profile?")) {
      await deleteUser(user._id, token!);
      setToken(null);
      navigate("/login");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">My Profile</h2>
      <input
        className="border p-2 mb-2 w-full"
        name="name"
        value={user.name || ""}
        onChange={handleChange}
      />
      <input
        className="border p-2 mb-2 w-full"
        name="email"
        value={user.email || ""}
        onChange={handleChange}
      />
      <button
        className="bg-yellow-500 text-white px-4 py-2 w-full mb-2"
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 w-full"
        onClick={handleDelete}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Profile;
