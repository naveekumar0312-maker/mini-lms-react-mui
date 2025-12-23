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

  /* 💎 DIAMOND PILL */
  const pillStyle = {
    display: "flex",
    alignItems: "center",
    gap: 0.6,
    px: 2.4,
    py: 1,
    borderRadius: "999px",
    cursor: "pointer",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.28)",
    color: "#fff",
    fontWeight: 600,
    letterSpacing: 0.3,
    transition: "all .35s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 18px 45px rgba(124,58,237,.55)"
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
            "linear-gradient(135deg, rgba(2,6,23,.96), rgba(79,70,229,.92), rgba(124,58,237,.92))",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,.12)"
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1320,
            mx: "auto",
            width: "100%",
            py: 1,
            justifyContent: "space-between"
          }}
        >
          {/* LOGO */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              cursor: "pointer"
            }}
            onClick={() => navigate(user ? "/home" : "/login")}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg,#4f46e5,#22c55e)",
                boxShadow: "0 0 22px rgba(79,70,229,.6)"
              }}
            >
              <SchoolIcon sx={{ color: "#fff" }} />
            </Box>

            <Typography
              fontWeight={900}
              sx={{
                letterSpacing: 1,
                background:
                  "linear-gradient(90deg,#a5b4fc,#22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              MINI LMS
            </Typography>
          </Box>

          {/* ================= DESKTOP ================= */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {user && (
              <>
                <NavLink to="/home" style={{ textDecoration: "none" }}>
                  <Box sx={pillStyle}>
                    <HomeIcon fontSize="small" /> Home
                  </Box>
                </NavLink>

                <NavLink to="/about" style={{ textDecoration: "none" }}>
                  <Box sx={pillStyle}>
                    <InfoIcon fontSize="small" /> About
                  </Box>
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
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.35)",
                    borderRadius: "999px",
                    px: 3
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>

                <Button
                  startIcon={<PersonAddIcon />}
                  sx={{
                    borderRadius: "999px",
                    px: 3,
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg,#22c55e,#16a34a)",
                    boxShadow:
                      "0 14px 40px rgba(34,197,94,.65)"
                  }}
                  onClick={() => navigate("/register")}
                >
                  Signup
                </Button>
              </>
            ) : (
              <>
                {/* USER MENU */}
                <Box
                  sx={pillStyle}
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  Hi {user.username}
                </Box>

                <Menu
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={() => setAnchorEl(null)}
                  PaperProps={{
                    sx: {
                      borderRadius: 4,
                      mt: 1,
                      background:
                        "linear-gradient(180deg,#020617,#1e1b4b)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,.15)"
                    }
                  }}
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

                  <Divider sx={{ borderColor: "rgba(255,255,255,.2)" }} />

                  <MenuItem
                    onClick={() => {
                      logout();
                      setAnchorEl(null);
                    }}
                    sx={{ color: "#fca5a5" }}
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
            width: 280,
            height: "100%",
            background:
              "linear-gradient(180deg,#020617,#4f46e5,#7c3aed)",
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
                background: "rgba(255,255,255,.12)",
                cursor: "pointer"
              }}
              onClick={() => {
                navigate("/profile");
                setOpen(false);
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#fff",
                  color: "#4f46e5",
                  fontWeight: 700
                }}
              >
                {user.username[0].toUpperCase()}
              </Avatar>
              <Box>
                <Typography fontWeight={700}>
                  {user.username}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ opacity: 0.85 }}
                >
                  View Profile
                </Typography>
              </Box>
            </Box>
          )}

          <List>
            {user && (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate("/home");
                      setOpen(false);
                    }}
                  >
                    <HomeIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate("/about");
                      setOpen(false);
                    }}
                  >
                    <InfoIcon sx={{ mr: 1 }} />
                    <ListItemText primary="About" />
                  </ListItemButton>
                </ListItem>

                <Divider
                  sx={{
                    my: 1,
                    borderColor: "rgba(255,255,255,.3)"
                  }}
                />

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    sx={{ color: "#fecaca" }}
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
