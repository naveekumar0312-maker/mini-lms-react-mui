import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser"))
  );

  // 🔥 DEFAULT ADMIN
  const adminUser = {
    username: "admin",
    password: "admin123",
    role: "admin"
  };

  if (!localStorage.getItem("adminUser")) {
    localStorage.setItem("adminUser", JSON.stringify(adminUser));
  }

  /* ================= REGISTER ================= */
  const register = ({ username, password }) => {
    const newUser = {
      username,
      password,
      role: "user"
    };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    alert("Account created successfully");
    navigate("/login");
  };

  /* ================= LOGIN ================= */
  const login = (username, password) => {
    const admin = JSON.parse(localStorage.getItem("adminUser"));
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    // ADMIN LOGIN
    if (admin && admin.username === username && admin.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(admin));
      setUser(admin);
      return true;
    }

    // USER LOGIN
    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
      localStorage.setItem("currentUser", JSON.stringify(savedUser));
      setUser(savedUser);
      return true;
    }

    return false;
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
