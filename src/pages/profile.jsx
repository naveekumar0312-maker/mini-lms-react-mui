import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Avatar,
  Divider,
  IconButton,
  Alert,
  Stack
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import LockIcon from "@mui/icons-material/Lock";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);

  const profileKey = `profile_${user.username}`;
  const storedProfile =
    JSON.parse(localStorage.getItem(profileKey)) || {};

  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [profile, setProfile] = useState({
    username: storedProfile.username || user.username,
    name: storedProfile.name || "",
    age: storedProfile.age || "",
    email: storedProfile.email || "",
    image: storedProfile.image || null
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: ""
  });

  /* ================= SAVE PROFILE ================= */
  useEffect(() => {
    localStorage.setItem(profileKey, JSON.stringify(profile));
  }, [profile, profileKey]);

  /* ================= IMAGE ================= */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  /* ================= SAVE PROFILE ================= */
  const handleSaveProfile = () => {
    setError("");
    if (profile.username !== user.username) {
      const updatedUser = { ...user, username: profile.username };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
    setEdit(false);
    setMessage("✨ Profile updated successfully");
  };

  /* ================= PASSWORD ================= */
   
  const handleChangePassword = () => {
  setMessage("");
  setError("");

  const savedUser =
    user.role === "admin"
      ? JSON.parse(localStorage.getItem("adminUser"))
      : JSON.parse(localStorage.getItem("registeredUser"));

  if (passwords.current !== savedUser.password) {
    setError("❌ Current password incorrect");
    return;
  }

  if (passwords.newPass.length < 6) {
    setError("❌ Password must be at least 6 characters");
    return;
  }

  if (passwords.newPass !== passwords.confirm) {
    setError("❌ Passwords do not match");
    return;
  }

  const updatedUser = {
    ...savedUser,
    password: passwords.newPass
  };

  if (user.role === "admin") {
    localStorage.setItem("adminUser", JSON.stringify(updatedUser));
  } else {
    localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
  }

  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  setUser(updatedUser);

  setPasswords({ current: "", newPass: "", confirm: "" });
  setMessage("🔐 Password updated successfully. Please login again.");
};


  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 12 }}>
      {/* ================= HEADER ================= */}
      <Paper
        sx={{
          p: 5,
          borderRadius: 5,
          background:
            "linear-gradient(135deg,#6366f1,#9333ea)",
          color: "#fff",
          mb: 5
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          My Profile
        </Typography>
        <Typography sx={{ opacity: 0.9 }}>
          Logged in as <b>{user.username}</b>
        </Typography>
      </Paper>

      

      {message && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {message}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* ================= PROFILE CARD ================= */}
      <Paper
        sx={{
          p: 5,
          borderRadius: 5,
          backdropFilter: "blur(10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
      >
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={4} textAlign="center">
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Avatar
                src={profile.image}
                sx={{
                  width: 150,
                  height: 150,
                  fontSize: 48,
                  bgcolor: "#6366f1",
                  boxShadow: "0 10px 30px rgba(0,0,0,.25)"
                }}
              >
                {!profile.image &&
                  profile.username.charAt(0).toUpperCase()}
              </Avatar>

              <IconButton
                component="label"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  bgcolor: "#6366f1",
                  color: "#fff",
                  "&:hover": { bgcolor: "#4f46e5" }
                }}
              >
                <PhotoCameraIcon />
                <input hidden type="file" onChange={handleImageUpload} />
              </IconButton>
            </Box>
          </Grid>

          <Grid xs={12} md={8}>
            <Stack spacing={3}>
              <TextField
                label="Username"
                value={profile.username}
                disabled={!edit}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />

              <TextField
                label="Full Name"
                value={profile.name}
                disabled={!edit}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />

              <TextField
                label="Age"
                type="number"
                value={profile.age}
                disabled={!edit}
                onChange={(e) =>
                  setProfile({ ...profile, age: e.target.value })
                }
              />

              <TextField
                label="Email"
                value={profile.email}
                disabled={!edit}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />

              {!edit ? (
                <Button
                  startIcon={<EditIcon />}
                  variant="contained"
                  size="large"
                  onClick={() => setEdit(true)}
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  startIcon={<SaveIcon />}
                  variant="contained"
                  color="success"
                  size="large"
                  onClick={handleSaveProfile}
                >
                  Save Changes
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* ================= PASSWORD ================= */}
      <Paper
        sx={{
          mt: 7,
          p: 5,
          borderRadius: 5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          <LockIcon sx={{ mr: 1 }} />
          Change Password
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <TextField
              fullWidth
              label="Current Password"
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
            />
          </Grid>

          <Grid xs={12} md={4}>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              value={passwords.newPass}
              onChange={(e) =>
                setPasswords({ ...passwords, newPass: e.target.value })
              }
            />
          </Grid>

          <Grid xs={12} md={4}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
            />
          </Grid>
        </Grid>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={handleChangePassword}
          >
            Update Password
          </Button>

          <Button
            startIcon={<RestartAltIcon />}
            variant="outlined"
            size="large"
            onClick={() =>
              setPasswords({ current: "", newPass: "", confirm: "" })
            }
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
