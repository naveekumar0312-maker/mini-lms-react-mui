import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import coursesData from "./data/coursesData";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import MainLayout from "./Layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/profile";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AddCourse from "./pages/AddCourse";
import EditCourse from "./pages/EditCourse";

export default function App() {
  useEffect(() => {
    if (!localStorage.getItem("courses")) {
      localStorage.setItem(
        "courses",
        JSON.stringify(coursesData)
      );
    }
  }, []);

  const isLoggedIn = localStorage.getItem("currentUser");

  return (
    <Routes>
      {/* 🔥 ROOT */}
      <Route
        path="/"
        element={
          isLoggedIn
            ? <Navigate to="/home" replace />
            : <Navigate to="/login" replace />
        }
      />

      {/* 🔓 AUTH PAGES (NO LAYOUT) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🔐 APP LAYOUT */}
      <Route element={<MainLayout />}>

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />

        {/* 🔥 ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/add-course"
          element={
            <AdminRoute>
              <AddCourse />
            </AdminRoute>
          }
        />

        <Route
          path="/edit-course/:id"
          element={
            <AdminRoute>
              <EditCourse />
            </AdminRoute>
          }
        />
      </Route>

      {/* ❌ 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
