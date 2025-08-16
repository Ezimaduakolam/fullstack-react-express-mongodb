/** @format */

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8276/api" });

export const signup = (data: any) => API.post("/signup", data);
export const login = (data: any) => API.post("/login", data);

export const getUsers = (token: string) =>
  API.get("/users", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getUser = (id: string, token: string) =>
  API.get(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateUser = (id: string, data: any, token: string) =>
  API.put(`/users/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteUser = (id: string, token: string) =>
  API.delete(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createProject = (data: any, token: string) =>
  API.post("/projects", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getProjects = (token: string) =>
  API.get("/projects", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getProject = (id: string, token: string) =>
  API.get(`/projects/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateProject = (id: string, data: any, token: string) =>
  API.put(`/projects/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteProject = (id: string, token: string) =>
  API.delete(`/projects/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
