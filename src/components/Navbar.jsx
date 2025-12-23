import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
  Avatar
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const menuOpen = Boolean(anchorEl);

  /* Premium pill style */
  const pillStyle = {
    display: "flex",
    alignItems: "center",
    gap: 0.6,
    px: 2.2,
    py: 0.9,
    borderRadius: "999px",
    cursor: "pointer",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    fontWeight: 500,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 30px rgba(79,70,229,0.35)"
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background:
            "linear-gradient(135deg, rgba(79,70,229,0.95), rgba(124,58,237,0.95))",
          backdropFilter: "blur(14px)"
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1300,
            mx: "auto",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          {/* LOGO */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
            onClick={() => navigate(user ? "/home" : "/login")}
          >
            <SchoolIcon sx={{ color: "#fff" }} />
            <Typography fontWeight="bold" color="#fff">
              MINI LMS
            </Typography>
          </Box>

          {/* ================= DESKTOP ================= */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {user && (
              <>
                <NavLink to="/home" style={{ textDecoration: "none" }}>
                  <Box sx={pillStyle}><HomeIcon fontSize="small" /> Home</Box>
                </NavLink>

                <NavLink to="/about" style={{ textDecoration: "none" }}>
                  <Box sx={pillStyle}><InfoIcon fontSize="small" /> About</Box>
                </NavLink>

                {user.role === "admin" && (
                  <NavLink to="/admin" style={{ textDecoration: "none" }}>
                    <Box sx={pillStyle}>
                      <AdminPanelSettingsIcon fontSize="small" /> Admin
                    </Box>
                  </NavLink>
                )}
              </>
            )}

            {!user ? (
              <>
                <Button
                  startIcon={<LoginIcon />}
                  variant="outlined"
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>

                <Button
                  startIcon={<PersonAddIcon />}
                  variant="contained"
                  sx={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
                  onClick={() => navigate("/register")}
                >
                  Signup
                </Button>
              </>
            ) : (
              <>
                {/* USERNAME (DESKTOP) */}
                <Box sx={pillStyle} onClick={(e) => setAnchorEl(e.currentTarget)}>
                  Hi {user.username}
                </Box>

                <Menu
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      setAnchorEl(null);
                    }}
                  >
                    <AccountCircleIcon sx={{ mr: 1 }} />
                    Profile
                  </MenuItem>

                  <Divider />

                  <MenuItem
                    onClick={() => {
                      logout();
                      setAnchorEl(null);
                    }}
                    sx={{ color: "error.main" }}
                  >
                    <LogoutIcon sx={{ mr: 1 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>

          {/* ================= MOBILE ICON ================= */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 260,
            height: "100%",
            background: "linear-gradient(180deg,#4f46e5,#7c3aed)",
            color: "#fff"
          }}
        >
          {/* USER INFO */}
          {user && (
            <Box
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
                background: "rgba(255,255,255,0.15)"
              }}
              onClick={() => {
                navigate("/profile");
                setOpen(false);
              }}
            >
              <Avatar sx={{ bgcolor: "#fff", color: "#4f46e5" }}>
                {user.username[0].toUpperCase()}
              </Avatar>
              <Box>
                <Typography fontWeight={600}>
                  {user.username}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  View Profile
                </Typography>
              </Box>
            </Box>
          )}

          <List>
            {user && (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => { navigate("/home"); setOpen(false); }}>
                    <HomeIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => { navigate("/about"); setOpen(false); }}>
                    <InfoIcon sx={{ mr: 1 }} />
                    <ListItemText primary="About" />
                  </ListItemButton>
                </ListItem>

                {/* 🔥 MOBILE LOGOUT (FIXED) */}
                <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.3)" }} />

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    sx={{ color: "#ffdada" }}
                  >
                    <LogoutIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </>
            )}

            {!user && (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/login")}>
                    <LoginIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/register")}>
                    <PersonAddIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Signup" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
