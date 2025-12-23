import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user } = useAuth();

  // 🔹 Not logged in → Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔹 Logged in but not admin → Home
  if (user.role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  // 🔹 Admin access granted
  return children;
}
